import React, { useCallback, useEffect, useRef, useState } from "react";


const LessonPage = () => {

  return (
    <GeneExpressionGame />
  );
};


export default LessonPage;


/*
 * ============================================================
 * GAME DATA
 * ============================================================
 *
 * This is intentionally simplified DNA for the game.
 *
 *                 PROMOTER    GENE X
 *                     ↓           ↓
 * ...CGATCGTACG TATAAA ATGGGCCTA AAGTGA...
 *                  78     86       106
 *
 * Promoter: bases 79–86
 * Gene X:   bases 87–107
 */

const DNA = [
  ..."GCTAACGTACGTTAGCTAGCTAGGCTAACGATCGATCGTAGCTAGCTA".split(""),
  ..."CGTACGATCGATCGGATCCGATCGATGCTAGCTAGGCTAACGTAGCTA".split(""),
  ..."CGATCGTACGTACGTTATACGATCGTACGTAGCTAGCTAACGATCG".split(""),
  ..."TACGTAGCTAGCTAGCGATCGATCGTAGCTAACGATCGTAGCTAGC".split(""),
  ..."GATCGTAGCATCGATCGTAGCTAACGATCGTAGCTAGCATCGTAC".split(""),
  ..."GCTAGCTAGCATCGATCGTAGCTAACGATCGTAGCTAGCATCGTA".split(""),
];

/*
 * The actual target coordinates used by the game.
 */
const PROMOTER_START = 2;
const PROMOTER_END = 5;

const GENE_X_START = 6;
const GENE_X_END = 15;

const WINDOW_SIZE = 24;


/*
 * ============================================================
 * GAME STAGES
 * ============================================================
 */

const STAGES = {
  PROMOTER: "promoter",
  POLYMERASE: "polymerase",
  TRANSCRIBE: "transcribe",
  COMPLETE: "complete",
};


/*
 * ============================================================
 * MAIN COMPONENT
 * ============================================================
 */

export function GeneExpressionGame() {
  const [stage, setStage] = useState(STAGES.PROMOTER);

  const [position, setPosition] = useState(0);

  const [selectionStart, setSelectionStart] = useState(null);
  const [selectionEnd, setSelectionEnd] = useState(null);

  const [feedback, setFeedback] = useState(null);

  /*
   * Controls the RNA polymerase animation.
   */
  const [polymeraseIndex, setPolymeraseIndex] = useState(null);
  const [polymeraseLeft, setPolymeraseLeft] = useState(null);
  const [polymeraseArrived, setPolymeraseArrived] = useState(false);

  const dnaViewerRef = useRef(null);
  const baseRefs = useRef({});

  /*
   * Controls transcription animation.
   */
  const [transcriptionProgress, setTranscriptionProgress] =
    useState(0);

  const touchStartX = useRef(null);

  const maxPosition = Math.max(
    0,
    DNA.length - WINDOW_SIZE
  );


  /*
   * ==========================================================
   * NAVIGATION
   * ==========================================================
   */

  const move = (amount) => {
    /*
     * Don't allow navigation during the molecular animation.
     */
    if (
      stage === STAGES.POLYMERASE ||
      stage === STAGES.TRANSCRIBE
    ) {
      return;
    }

    setPosition((current) =>
      Math.max(
        0,
        Math.min(maxPosition, current + amount)
      )
    );
  };


  /*
   * Keyboard controls
   */

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        move(-1);
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        move(1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [stage, maxPosition]);


  /*
   * ==========================================================
   * TOUCH CONTROLS
   * ==========================================================
   */

  const handleTouchStart = (event) => {
    touchStartX.current =
      event.touches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) {
      return;
    }

    const endX =
      event.changedTouches[0].clientX;

    const distance =
      endX - touchStartX.current;

    if (Math.abs(distance) > 35) {
      move(distance < 0 ? 3 : -3);
    }

    touchStartX.current = null;
  };


  /*
   * ==========================================================
   * DNA SELECTION
   * ==========================================================
   */

  const clearSelection = () => {
    setSelectionStart(null);
    setSelectionEnd(null);
    setFeedback(null);
  };

  const selectBase = (index) => {
    /*
     * Selection is only available during the
     * Gene and Promoter stages.
     */
    if (
      stage !== STAGES.PROMOTER
    ) {
      return;
    }

    setFeedback(null);

    /*
     * First tap = start.
     */
    if (selectionStart === null) {
      setSelectionStart(index);
      return;
    }

    /*
     * Tapping before the start moves the start.
     */
    if (index < selectionStart) {
      setSelectionStart(index);
      setSelectionEnd(null);
      return;
    }

    /*
     * Second tap = end.
     */
    setSelectionEnd(index);
  };


  /*
   * ==========================================================
   * CHECK ANSWER
   * ==========================================================
   */

  const selectionContains = (
    targetStart,
    targetEnd
  ) => {
    console.log("VIT", targetEnd, targetStart, selectionStart, selectionEnd);
    if (
      selectionStart === null ||
      selectionEnd === null
    ) {
      return false;
    }

    return (
      selectionStart <= targetStart &&
      selectionEnd >= targetEnd
    );
  };


  const checkAnswer = () => {
    if (
      selectionStart === null ||
      selectionEnd === null
    ) {
      setFeedback({
        type: "warning",
        text: "Select a region of DNA first.",
      });

      return;
    }



    /*
     * --------------------------------------------------------
     * STAGE 2
     * FIND PROMOTER
     * --------------------------------------------------------
     */

    if (stage === STAGES.PROMOTER) {
      const correct = selectionContains(
        PROMOTER_START,
        PROMOTER_END
      );

      if (!correct) {
        setFeedback({
          type: "incorrect",
          text:
            "That's not the promoter. Look just upstream of Gene X.",
        });

        return;
      }

      setFeedback({
        type: "success",
        text:
          "Correct! You found the promoter.",
      });

      /*
       * Move to polymerase stage.
       */
      setTimeout(() => {
        setStage(STAGES.POLYMERASE);
        clearSelection();

      }, 1000);
    }
  };


  const getBaseCenter = (index) => {
    const base = baseRefs.current[index];
    const viewer = dnaViewerRef.current;

    if (!base || !viewer) {
      return null;
    }

    const baseRect = base.getBoundingClientRect();
    const viewerRect = viewer.getBoundingClientRect();

    return (
      baseRect.left -
      viewerRect.left +
      baseRect.width / 2
    );
  };

  useEffect(() => {
    if (stage !== STAGES.POLYMERASE) {
      return;
    }

    setPolymeraseIndex(PROMOTER_START);
    setPolymeraseArrived(false);

    // Start to the left of the DNA.
    setPolymeraseLeft(-60);

    /*
     * Wait until the DNA buttons have rendered,
     * then measure the exact target base.
     */
    const frame = requestAnimationFrame(() => {
      const target = getBaseCenter(PROMOTER_END + 1);

      if (target !== null) {
        setPolymeraseLeft(target);
      }
    });

    /*
     * CSS takes 1 second to reach the target.
     */
    const timer = setTimeout(() => {
      setPolymeraseArrived(true);

      setFeedback({
        type: "success",
        text: "RNA polymerase has bound to the promoter.",
      });
    }, 1100);

    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(timer);
    };
  }, [stage]);


  /*
   * ==========================================================
   * START TRANSCRIPTION
   * ==========================================================
   */

  const startTranscription = () => {
    if (stage !== STAGES.POLYMERASE) {
      return;
    }

    setStage(STAGES.TRANSCRIBE);
    setTranscriptionProgress(0);


  };


  /*
   * ==========================================================
   * VISIBLE DNA
   * ==========================================================
   */

  const visibleDNA = DNA.slice(
    position,
    position + WINDOW_SIZE
  );


  /*
   * ==========================================================
   * STAGE PROGRESS
   * ==========================================================
   */

  const stageNumber =
    stage === STAGES.PROMOTER
      ? 2
      : stage === STAGES.POLYMERASE
        ? 3
        : stage === STAGES.TRANSCRIBE
          ? 4
          : 5;

  const progress =
    (stageNumber / 5) * 100;

  const advanceTranscription = useCallback(() => {
    setPosition((prev) => {
      if (prev < GENE_X_END - GENE_X_START) {
        return prev + 1;
      }
      return prev;
    });
  }, []);

  useEffect(() => {
    if (stage === STAGES.TRANSCRIBE && position >= GENE_X_END - GENE_X_START) {
      setStage(STAGES.COMPLETE);
    }
  }, [position, stage]);

  /*
   * ==========================================================
   * COMPLETE SCREEN
   * ==========================================================
   */

  // if (stage === STAGES.COMPLETE) {
  //   return (
  //     <CompleteScreen
  //       onRestart={() => {
  //         setStage(STAGES.PROMOTER);
  //         setPosition(0);
  //         setPolymeraseIndex(null);
  //         setPolymeraseLeft(null);
  //         setPolymeraseArrived(false);
  //         setTranscriptionProgress(0);
  //         clearSelection();
  //       }}
  //     />
  //   );
  // }


  /*
   * ==========================================================
   * MAIN UI
   * ==========================================================
   */

  return (
    <div className="min-h-screen bg-slate-950 px-4 py-6 text-white sm:px-8 sm:py-10">

      <div className="mx-auto max-w-6xl space-y-6">


        {/* ==================================================
            HEADER
        ================================================== */}

        <header className="flex items-center justify-between">

          <div>
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-purple-400">
              Gene Expression
            </div>

            <div className="mt-1 text-sm text-slate-500">
              Mission 01
            </div>
          </div>

          <div className="text-sm text-slate-500">
            Step {stageNumber} of 5
          </div>

        </header>


        {/* ==================================================
            PROGRESS
        ================================================== */}

        <div className="h-1.5 overflow-hidden rounded-full bg-slate-800">

          <div
            className="h-full rounded-full bg-purple-500 transition-all duration-500"
            style={{
              width: `${progress}%`,
            }}
          />

        </div>


        {/* ==================================================
            OBJECTIVE
        ================================================== */}

        <Objective stage={stage} />


        {/* ==================================================
            DNA VIEWER
        ================================================== */}

        <section className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl">

          <div className="flex items-center justify-between border-b border-slate-800 px-5 py-4">

            <div>

              <div className="font-semibold">
                DNA Sequence
              </div>

              <div className="mt-0.5 text-xs text-slate-500">
                Bases {position + 1}–
                {position + WINDOW_SIZE}
              </div>

            </div>

            <div className="hidden items-center gap-2 text-xs text-slate-500 sm:flex">

              <kbd className="rounded bg-slate-800 px-2 py-1">
                ←
              </kbd>

              <kbd className="rounded bg-slate-800 px-2 py-1">
                →
              </kbd>

              <span>
                Explore
              </span>

            </div>

          </div>


          {/* DNA */}

          <div
            className="touch-pan-y select-none overflow-hidden px-3 py-12 sm:px-8"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >

            <div ref={dnaViewerRef} className="relative">

              <div className="mb-5 flex justify-between text-[10px] uppercase tracking-widest text-slate-600">
                <span>
                  Upstream
                </span>

                <span>
                  Downstream →
                </span>
              </div>


              {/* DNA backbone */}

              <div className="absolute left-0 right-0 top-1/2 h-1 -translate-y-1/2 rounded-full bg-slate-700" />


              {/* Polymerase */}

              <Polymerase
                left={polymeraseLeft}
                arrived={polymeraseArrived}
                transcribing={stage === STAGES.TRANSCRIBE}
              />


              {/* DNA bases */}

              <div className="relative flex justify-start gap-1">

                {visibleDNA.map(
                  (base, visibleIndex) => {

                    const index =
                      position +
                      visibleIndex;

                    const selected =
                      selectionStart !== null &&
                      selectionEnd !== null &&
                      index >= selectionStart &&
                      index <= selectionEnd;

                    const firstSelected =
                      index === selectionStart;

                    const lastSelected =
                      index === selectionEnd;

                    const isPromoter =
                      index >= PROMOTER_START &&
                      index <= PROMOTER_END;

                    /*
                     * During transcription,
                     * progressively reveal the DNA
                     * being "read".
                     */
                    const isBeingTranscribed =
                      stage === STAGES.TRANSCRIBE &&
                      index >= GENE_X_START &&
                      index <=
                      GENE_X_END &&
                      index <=
                      GENE_X_START +
                      Math.floor(
                        transcriptionProgress *
                        (
                          GENE_X_END -
                          GENE_X_START
                        )
                      );


                    return (
                      <button
                        key={index}
                        ref={(element) => {
                          baseRefs.current[index] = element;
                        }}
                        onClick={() =>
                          selectBase(index)
                        }
                        className={`
                          relative z-10
                          flex h-12 w-9 shrink-0
                          items-center justify-center
                          rounded-lg
                          border
                          font-mono text-sm font-bold
                          transition-all duration-150
                          sm:h-14 sm:w-11 sm:text-base
                          ${isBeingTranscribed
                            ? "border-purple-400 bg-purple-500 text-white shadow-lg shadow-purple-900/50"
                            : selected
                              ? "scale-105 border-purple-400 bg-purple-600 text-white shadow-lg shadow-purple-950"
                              : isPromoter && (stage === STAGES.POLYMERASE)
                                ? "border-purple-700 bg-blue-800 text-blue-200 hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-700"
                                : isPromoter && (stage === STAGES.PROMOTER)
                                  ? "border-slate-500 bg-slate-800 text-slate-200 hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-700"
                                  : "border-slate-700 bg-slate-800 text-slate-200 hover:-translate-y-1 hover:border-slate-500 hover:bg-slate-700"
                          }
                        `}
                      >

                        <Base base={base} />


                        {firstSelected && (
                          <span className="absolute -top-7 whitespace-nowrap text-[9px] font-semibold uppercase tracking-wider text-purple-400">
                            Start
                          </span>
                        )}

                        {lastSelected && (
                          <span className="absolute -bottom-7 whitespace-nowrap text-[9px] font-semibold uppercase tracking-wider text-purple-400">
                            End
                          </span>
                        )}


                        {!selected && (
                          <span className="absolute -bottom-6 text-[8px] font-normal text-slate-600">
                            {index + 1}
                          </span>
                        )}

                      </button>
                    );
                  }
                )}

              </div>

            </div>

          </div>


          {/* Navigation */}

          <div className="flex items-center justify-center gap-5 border-t border-slate-800 p-5">

            <button
              onClick={() => move(-3)}
              disabled={
                position === 0
              }
              className="
                flex h-12 w-16
                items-center justify-center
                rounded-xl
                bg-slate-800
                text-2xl
                transition
                hover:bg-slate-700
                active:scale-95
                disabled:cursor-not-allowed
                disabled:opacity-30
              "
            >
              ←
            </button>


            <div className="min-w-28 text-center">

              <div className="text-[10px] uppercase tracking-wider text-slate-600">
                Position
              </div>

              <div className="mt-1 font-mono text-sm text-slate-300">
                {position + 1}–
                {position + WINDOW_SIZE}
              </div>

            </div>


            <button
              onClick={() => move(3)}
              disabled={
                position === maxPosition
              }
              className="
                flex h-12 w-16
                items-center justify-center
                rounded-xl
                bg-slate-800
                text-2xl
                transition
                hover:bg-slate-700
                active:scale-95
                disabled:cursor-not-allowed
                disabled:opacity-30
              "
            >
              →
            </button>

          </div>

        </section>


        {/* ==================================================
            STAGE-SPECIFIC ACTION AREA
        ================================================== */}

        {(stage === STAGES.PROMOTER) && (

          <SelectionPanel
            stage={stage}
            selectionStart={selectionStart}
            selectionEnd={selectionEnd}
            onCheck={checkAnswer}
            onReset={clearSelection}
            feedback={feedback}
          />

        )}


        {/* ==================================================
            POLYMERASE ACTION
        ================================================== */}

        {stage === STAGES.POLYMERASE && (
          <PolymerasePanel
            progress={polymeraseLeft}
            feedback={feedback}
            onStart={startTranscription}
          />
        )}


        {/* ==================================================
            TRANSCRIPTION PANEL
        ================================================== */}

        {stage === STAGES.TRANSCRIBE && (
          <TranscriptionPanel
            progress={transcriptionProgress}
            advanceTranscription={advanceTranscription}
          />
        )}

        {stage === STAGES.COMPLETE && (
          <CompleteScreen
            onRestart={() => {
              setStage(STAGES.PROMOTER);
              setPosition(0);
              setPolymeraseIndex(null);
              setPolymeraseLeft(null);
              setPolymeraseArrived(false);
              setTranscriptionProgress(0);
              clearSelection();
              setFeedback(null);
              
            }}
          />
        )}

        {/* Mobile hint */}

        {(stage === STAGES.PROMOTER) && (
          <div className="text-center text-xs text-slate-600 sm:hidden">
            Swipe left or right to explore the DNA
          </div>
        )}

      </div>
    </div>
  );
}


/*
 * ============================================================
 * OBJECTIVE
 * ============================================================
 */

function Objective({ stage }) {
  if (stage === STAGES.PROMOTER) {
    return (
      <ObjectiveCard
        color="blue"
        icon="🔎"
        number="Objective 2"
        title="Find the promoter"
        description="
          Gene X is located. Now identify the promoter
          immediately upstream of the gene.
        "
      />
    );
  }

  if (stage === STAGES.POLYMERASE) {
    return (
      <ObjectiveCard
        color="green"
        icon="🟣"
        number="Objective 3"
        title="Recruit RNA polymerase"
        description="
          The promoter has been identified. Watch RNA
          polymerase bind to the promoter.
        "
      />
    );
  }

  return (
    <ObjectiveCard
      color="purple"
      icon="✍️"
      number="Objective 4"
      title="Initiate transcription"
      description="
        RNA polymerase is bound. Start transcription and
        watch the RNA strand emerge.
      "
    />
  );
}


/*
 * ============================================================
 * OBJECTIVE CARD
 * ============================================================
 */

function ObjectiveCard({
  color,
  icon,
  number,
  title,
  description,
}) {
  const colors = {
    purple:
      "border-purple-900/50 bg-purple-950/20 text-purple-400",

    blue:
      "border-blue-900/50 bg-blue-950/20 text-blue-400",

    green:
      "border-green-900/50 bg-green-950/20 text-green-400",
  };

  return (
    <section
      className={`rounded-2xl border p-5 sm:p-6 ${colors[color]}`}
    >
      <div className="flex gap-4">

        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/5 text-2xl">
          {icon}
        </div>

        <div>

          <div className="text-xs font-bold uppercase tracking-wider">
            {number}
          </div>

          <h1 className="mt-1 text-xl font-bold text-white sm:text-2xl">
            {title}
          </h1>

          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-400">
            {description}
          </p>

        </div>
      </div>
    </section>
  );
}


/*
 * ============================================================
 * RNA POLYMERASE
 * ============================================================
 *
 * This visually travels toward the promoter.
 */

function Polymerase({
  left,
  arrived,
  transcribing = false,
}) {
  if (left === null) {
    return null;
  }

  return (
    <div
      className="
        pointer-events-none
        absolute
        -top-12
        z-30
        transition-[left]
        duration-1000
        ease-out
      "
      style={{
        left: `${left}px`,
        transform: "translateX(-50%)",
      }}
    >
      <div className="flex flex-col items-center">

        <div
          className={`
            flex h-16 w-16
            items-center justify-center
            rounded-2xl
            border
            font-bold
            shadow-xl
            transition-all duration-300

            ${transcribing
              ? "border-purple-300 bg-purple-600 shadow-purple-900/50"
              : arrived
                ? "border-green-300 bg-green-600 shadow-green-900/50"
                : "border-yellow-300 bg-yellow-600 shadow-yellow-900/50"
            }
          `}
        >
          <span className="text-xs">
            RNA POL
          </span>
        </div>

        <div className="h-5 w-0.5 bg-slate-400" />

        <div className="h-2 w-2 rounded-full bg-slate-300" />

      </div>
    </div>
  );
}

function Base({ base }) {
  const colors = {
    A: "bg-green-900 text-green-100",
    T: "bg-red-900 text-red-100",
    C: "bg-blue-900 text-blue-100",
    G: "bg-yellow-900 text-yellow-100",
  };

  return (
    <span
      className={`
        flex h-full w-full
        items-center justify-center
        rounded-lg
        font-mono font-bold
        ${colors[base] || "bg-slate-700 text-slate-200"}
      `}
    >
      {base}
    </span>
  );
}

/*
 * ============================================================
 * POLYMERASE PANEL
 * ============================================================
 */

function PolymerasePanel({
  progress,
  feedback,
  onStart,
}) {
  const arrived = progress >= 1;

  return (
    <section className="rounded-2xl border border-green-900/50 bg-slate-900 p-5 sm:p-6">

      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

        <div>

          <div className="text-xs font-bold uppercase tracking-wider text-green-400">
            RNA Polymerase
          </div>

          <h2 className="mt-1 text-lg font-bold">
            {arrived
              ? "RNA polymerase is bound"
              : "RNA polymerase is approaching"}
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            {arrived
              ? "The transcription machinery is positioned at the promoter."
              : "The promoter provides a binding site for the transcription machinery."}
          </p>

        </div>


        <button
          onClick={onStart}
          disabled={!arrived}
          className="
            rounded-xl
            px-6 py-3
            font-semibold
            transition
            active:scale-95
            disabled:cursor-not-allowed
            disabled:bg-slate-800
            disabled:text-slate-600
            enabled:bg-purple-600
            enabled:hover:bg-purple-500
          "
        >
          Initiate transcription
        </button>

      </div>


      {feedback && (
        <div className="mt-5 rounded-xl border border-green-900 bg-green-950/40 p-4 text-sm text-green-300">
          ✓ {feedback.text}
        </div>
      )}

    </section>
  );
}


/*
 * ============================================================
 * TRANSCRIPTION PANEL
 * ============================================================
 */

function TranscriptionPanel({
  progress,
  advanceTranscription,
}) {

  const [visibleRNA, setVisibleRNA] = useState("");

  // listen to key strokes to simulate transcription for U A C G
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "u" || event.key === "U") {
        setVisibleRNA((prev) => prev + "U");
        advanceTranscription();
      }
      if (event.key === "a" || event.key === "A") {
        setVisibleRNA((prev) => prev + "A");
        advanceTranscription();
      }
      if (event.key === "c" || event.key === "C") {
        setVisibleRNA((prev) => prev + "C");
        advanceTranscription();
      }
      if (event.key === "g" || event.key === "G") {
        setVisibleRNA((prev) => prev + "G");
        advanceTranscription();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, []);


  return (
    <section className="rounded-2xl border border-purple-900/50 bg-slate-900 p-5 sm:p-6">

      <div className="text-xs font-bold uppercase tracking-wider text-purple-400">
        Transcription
      </div>

      <h2 className="mt-1 text-lg font-bold">
        RNA is being synthesized
      </h2>

      <p className="mt-2 text-sm text-slate-500">
        RNA polymerase moves along the gene and builds
        an RNA strand from the DNA template.
      </p>


      {/* RNA visualization */}

      <div className="mt-6 rounded-xl bg-slate-950 p-5">

        <div className="mb-3 text-xs uppercase tracking-wider text-slate-600">
          Emerging RNA
        </div>

        <div className="flex min-h-12 items-center gap-1 font-mono text-lg">

          {
            visibleRNA
              .split("")
              .map((base, index) => (
                <span
                  key={index}
                  className="
                  flex h-9 w-8
                  items-center justify-center
                  rounded-lg
                  bg-purple-600
                  text-sm font-bold
                  animate-pulse
                "
                >
                  {base}
                </span>
              ))}

          {visibleRNA === "" && (
            <span className="text-sm text-slate-700">
              ...
            </span>
          )}

        </div>

      </div>


      {/* Progress */}

      <div className="mt-5">

        <div className="mb-2 flex justify-between text-xs text-slate-600">
          <span>
            Transcription
          </span>

          <span>
            {Math.round(progress * 100)}%
          </span>
        </div>

        <div className="h-2 overflow-hidden rounded-full bg-slate-800">

          <div
            className="h-full rounded-full bg-purple-500 transition-all"
            style={{
              width: `${progress * 100}%`,
            }}
          />

        </div>

      </div>

    </section>
  );
}


/*
 * ============================================================
 * SELECTION PANEL
 * ============================================================
 */

function SelectionPanel({
  stage,
  selectionStart,
  selectionEnd,
  onCheck,
  onReset,
  feedback,
}) {
  const hasSelection =
    selectionStart !== null &&
    selectionEnd !== null;

  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-5 sm:p-6">

      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

        <div>

          <div className="text-xs uppercase tracking-wider text-slate-600">
            Selected region
          </div>

          <div className="mt-2 flex items-center gap-3 font-mono">

            <span className="rounded-lg bg-slate-950 px-3 py-2 text-sm">
              {selectionStart !== null
                ? `Base ${selectionStart + 1}`
                : "Start"}
            </span>

            <span className="text-slate-600">
              →
            </span>

            <span className="rounded-lg bg-slate-950 px-3 py-2 text-sm">
              {selectionEnd !== null
                ? `Base ${selectionEnd + 1}`
                : "End"}
            </span>

          </div>

        </div>


        <div className="flex gap-3">

          <button
            onClick={onReset}
            className="
              rounded-xl
              px-4 py-3
              text-sm font-medium
              text-slate-400
              transition
              hover:bg-slate-800
              hover:text-white
            "
          >
            Reset
          </button>


          <button
            onClick={onCheck}
            disabled={!hasSelection}
            className="
              rounded-xl
              bg-purple-600
              px-5 py-3
              text-sm font-semibold
              transition
              hover:bg-purple-500
              active:scale-95
              disabled:cursor-not-allowed
              disabled:bg-slate-800
              disabled:text-slate-600
            "
          >
            Identify Promoter
          </button>

        </div>

      </div>


      {feedback && (
        <div
          className={`
            mt-5 rounded-xl border p-4 text-sm

            ${feedback.type === "success"
              ? "border-green-900 bg-green-950/40 text-green-300"
              : feedback.type === "incorrect"
                ? "border-amber-900 bg-amber-950/40 text-amber-300"
                : "border-slate-700 bg-slate-950 text-slate-400"
            }
          `}
        >
          <div className="flex items-start gap-3">

            <span>
              {feedback.type === "success"
                ? "✓"
                : feedback.type === "incorrect"
                  ? "↻"
                  : "i"}
            </span>

            <span>
              {feedback.text}
            </span>

          </div>
        </div>
      )}

    </section>
  );
}


/*
 * ============================================================
 * COMPLETE SCREEN
 * ============================================================
 */

function CompleteScreen({
  onRestart,
}) {
  return (
    <div className="min-h-screen bg-slate-950 px-4 py-10 text-white">

      <div className="mx-auto flex min-h-[80vh] max-w-3xl items-center justify-center">

        <div className="w-full rounded-3xl border border-green-900/50 bg-slate-900 p-8 text-center shadow-2xl sm:p-12">

          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-500/10 text-4xl ring-1 ring-green-500/30">
            🧬
          </div>


          <div className="mt-6 text-xs font-bold uppercase tracking-[0.25em] text-green-400">
            Mission Complete
          </div>


          <h1 className="mt-3 text-3xl font-bold sm:text-4xl">
            Gene X has been transcribed
          </h1>


          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-slate-400">
            You located Gene X, identified its promoter,
            recruited RNA polymerase, and initiated
            transcription.
          </p>


          {/* Molecular flow */}

          <div className="mx-auto mt-10 max-w-2xl">

            <div className="grid gap-3 sm:grid-cols-4">

              <FlowStep
                icon="🎯"
                label="Gene X"
              />

              <FlowStep
                icon="🔎"
                label="Promoter"
              />

              <FlowStep
                icon="🟣"
                label="RNA polymerase"
              />

              <FlowStep
                icon="🧬"
                label="mRNA"
              />

            </div>

          </div>


          {/* Key takeaway */}

          <div className="mt-10 rounded-2xl bg-slate-950 p-5 text-left">

            <div className="text-xs font-bold uppercase tracking-wider text-slate-600">
              Key idea
            </div>

            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              The promoter is a DNA region that helps
              position the transcription machinery so
              transcription can begin at the gene.
            </p>

          </div>


          <div className="mt-8">

            <button
              onClick={onRestart}
              className="
                rounded-xl
                bg-slate-800
                px-6 py-3
                font-semibold
                transition
                hover:bg-slate-700
              "
            >
              Play Again
            </button>

          </div>

        </div>
      </div>

    </div>
  );
}


/*
 * ============================================================
 * FLOW STEP
 * ============================================================
 */

function FlowStep({
  icon,
  label,
}) {
  return (
    <div className="rounded-xl bg-slate-950 p-4">

      <div className="text-2xl">
        {icon}
      </div>

      <div className="mt-2 text-xs font-semibold text-slate-400">
        {label}
      </div>

    </div>
  );
}
