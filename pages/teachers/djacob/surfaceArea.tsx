import React, { useState } from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import Navbar from "../../../components/ui/Navbar";
import SA_Q1 from "../../../components/math/surfaceArea/SA_Q1";
import SA_Q2 from "../../../components/math/surfaceArea/SA_Q2";
import SA_Q3 from "../../../components/math/surfaceArea/SA_Q3";
import SA_Q4 from "../../../components/math/surfaceArea/SA_Q4";
import SA_Q5 from "../../../components/math/surfaceArea/SA_Q5";
import SA_Q6 from "../../../components/math/surfaceArea/SA_Q6";
import SA_Q7 from "../../../components/math/surfaceArea/SA_Q7";
import { Button } from "../../../components/ui/Button";
import { LineData } from "../../../components/ui/FreeDrawing";
import { GuessData } from "../../api/guessData";
import { measureTime } from "../../api/time";

enum Stage {
  START,
  QUIZ,
  END,
}

export default function djacob(props) {
  const questionData = [
    "A net for the rectangular prism is shown on the grid. On the net, label each face of the prism. Each square on the grid represents 1cm^2.",
    "Write a multiplication question for the area of each face for the rectangular prisms in question 1, image also provided from question 1. Then find the surface area of the prism",
    "A net for the triangular prism is shown on the grid. On the net, label each face of the prism. Each square on the grid represents 1cm^2.",
    "Write a multiplication question for the area of each face for the triangular prisms in question 3, image also provided from question 3. Then find the surface area of the prism",
    "Explain how the net of a prism helps you find the surface area of a prism",
    "Click on the squares on the grid to create a net for the cube",
    "Sketch a net for the prism, find the surface area",
  ];

  const [stage, setStage] = useState(Stage.START);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [groupName, setGroupName] = useState<string>();
  const [studentName, setStudentName] = useState<string>();
  const [guesses, setGuess] = useState<GuessData[]>([]);
  const [score, setScore] = useState<Number>();
  const [isVisible, setIsVisible] = useState<Boolean>();
  const [guessHistory, setGuessHistory] = useState<Map<String, GuessData>>(
    new Map()
  );
  const [guessHistoryMultiple, setGuessHistoryMultiple] = useState<
    Map<String, GuessData[]>
  >(new Map());
  const [guessCounter, setGuessCounter] = useState(1);
  const [wrongAnswerCheck, setWrongAnswerCheck] = useState<Boolean>(true);
  const [shouldAnimate, setShouldAnimate] = useState<Boolean>(true);
  const [questionCounter, setQuestionCounter] = useState(1);
  const [startTime, setStartTime] = useState<number>();
  const [endTime, setEndTime] = useState<number>();
  const [totalTimeMin, setTotalTimeMin] = useState<number>();
  const [totalTimeSec, setTotalTimeSec] = useState<String>();

  //Q1 states
  const [guessStringAQ1, setGuessStringAQ1] = useState<string>("");
  const [guessStringBQ1, setGuessStringBQ1] = useState<string>("");
  const [guessStringCQ1, setGuessStringCQ1] = useState<string>("");
  const [guessStringDQ1, setGuessStringDQ1] = useState<string>("");
  const [guessStringEQ1, setGuessStringEQ1] = useState<string>("");
  const [guessStringFQ1, setGuessStringFQ1] = useState<string>("");

  //Q2 Part A useStates
  const [partAguessStringAQ2, setpartAguessStringAQ2] = useState<string>("");
  const [partAguessStringBQ2, setpartAguessStringBQ2] = useState<string>("");
  const [partAguessStringCQ2, setpartAguessStringCQ2] = useState<string>("");
  const [partAguessStringDQ2, setpartAguessStringDQ2] = useState<string>("");
  const [partAguessStringEQ2, setpartAguessStringEQ2] = useState<string>("");
  const [partAguessStringFQ2, setpartAguessStringFQ2] = useState<string>("");
  const [partAguessStringSAQ2, setpartAguessStringSAQ2] = useState<string>("");

  //Q2 Part B useStates
  const [partBguessStringAQ2, setpartBguessStringAQ2] = useState<string>("");
  const [partBguessStringBQ2, setpartBguessStringBQ2] = useState<string>("");
  const [partBguessStringCQ2, setpartBguessStringCQ2] = useState<string>("");
  const [partBguessStringDQ2, setpartBguessStringDQ2] = useState<string>("");
  const [partBguessStringEQ2, setpartBguessStringEQ2] = useState<string>("");
  const [partBguessStringFQ2, setpartBguessStringFQ2] = useState<string>("");
  const [partBguessStringSAQ2, setpartBguessStringSAQ2] = useState<string>("");

  //Q3 useStates
  const [guessStringAQ3, setGuessStringAQ3] = useState<string>("");
  const [guessStringBQ3, setGuessStringBQ3] = useState<string>("");
  const [guessStringCQ3, setGuessStringCQ3] = useState<string>("");
  const [guessStringDQ3, setGuessStringDQ3] = useState<string>("");
  const [guessStringEQ3, setGuessStringEQ3] = useState<string>("");

  //Q4 Part A useStates
  const [partAguessStringAQ4, setpartAguessStringAQ4] = useState<string>("");
  const [partAguessStringBQ4, setpartAguessStringBQ4] = useState<string>("");
  const [partAguessStringCQ4, setpartAguessStringCQ4] = useState<string>("");
  const [partAguessStringDQ4, setpartAguessStringDQ4] = useState<string>("");
  const [partAguessStringEQ4, setpartAguessStringEQ4] = useState<string>("");
  const [partAguessStringSAQ4, setpartAguessStringSAQ4] = useState<string>("");

  //Q4 Part B useStates
  const [partBguessStringAQ4, setpartBguessStringAQ4] = useState<string>("");
  const [partBguessStringBQ4, setpartBguessStringBQ4] = useState<string>("");
  const [partBguessStringCQ4, setpartBguessStringCQ4] = useState<string>("");
  const [partBguessStringDQ4, setpartBguessStringDQ4] = useState<string>("");
  const [partBguessStringEQ4, setpartBguessStringEQ4] = useState<string>("");
  const [partBguessStringSAQ4, setpartBguessStringSAQ4] = useState<string>("");

  //Q5 useStates
  const [guessStringQ5, setGuessStringQ5] = useState<string>("");

  //Q6 useStates
  const [positions, setPositions] = useState<boolean[][]>([
    [false, false, false, false],
    [false, false, false, false],
    [false, false, false, false],
    [false, false, false, false],
  ]);

  const [partBguessStringQ6, setpartBguessStringQ6] = useState<string>("");
  const [partCguessStringQ6, setpartCguessStringQ6] = useState<string>("");

  const setupPosition = (xposition: number, yposition: number) => {
    setPositions((prev) => {
      const next = [...prev];
      next[xposition][yposition] = !next[xposition][yposition];
      return next;
    });
  };

  //Q7 useStates
  const [guessStringRectPrismQ7, setGuessStringRectPrismQ7] =
    useState<string>("");
  const [guessStringCubeQ7, setGuessStringCubeQ7] = useState<string>("");
  const [guessStringTriPrismQ7, setGuessStringTriPrismQ7] =
    useState<string>("");
  const EMPTY_ARRAY_OF_ARRAYS = [[], [], []];
  const [historyStepForQuestionsQ7, setHistoryStepForQuestionsQ7] = useState<
    number[]
  >([0, 0, 0]);
  const [linesForQuestionsQ7, setLinesForQuestionsQ7] = React.useState<
    LineData[][]
  >(EMPTY_ARRAY_OF_ARRAYS);

  const onStartQuiz = () => {
    var sTime = new Date().getTime();
    setStartTime(sTime);
    setStage(Stage.QUIZ);
  };

  const onStudentNameChange = (currentStudentName: string) => {
    const SN = currentStudentName;
    setStudentName(SN);
  };

  const backToPrevious = () => {
    if (currentQuestionIndex == 0) {
      setStage(Stage.START);
    } else {
      setCurrentQuestionIndex(Math.max(0, currentQuestionIndex - 1));
    }
  };
  //Future thing: Use this function to add the guessData from each question page into the guessDataArray
  const nextQuestion = (guess: GuessData) => {
    guesses[currentQuestionIndex] = guess;
    setWrongAnswerCheck(true);
    setQuestionCounter(questionCounter + 1);
    setGuessCounter(1);
    //another method to count the amounts of trues / total question length
    var eTime = new Date().getTime();
    setEndTime(eTime);
    setCurrentQuestionIndex(
      Math.min(questionData.length - 1, currentQuestionIndex + 1)
    );
    if (currentQuestionIndex == questionData.length - 1) {
      setScore(
        Math.round(
          (guesses.filter((guess) => guess.isCorrect == true).length /
            (questionData.length - 1)) *
            100
        )
      );
      var value = measureTime(startTime, eTime);
      setTotalTimeMin(value.minutes);
      setTotalTimeSec(value.secondsString);
      setStage(Stage.END);
      //Your group {groupName} have scored {score} percent!
    }
  };

  const isWrong = (check: Boolean, guess: GuessData) => {
    console.log(guess);
    guessHistory.set("Question" + questionCounter + "." + guessCounter, guess);
    console.log(guessHistory);
    setGuessCounter(guessCounter + 1);
    setWrongAnswerCheck(check);
    setShouldAnimate(true);
  };

  // End of Quiz: YOU MADE IT OUT! Head back to main session to collect your prize!

  const questionComponent = () => {
    switch (currentQuestionIndex) {
      case 0:
        return (
          <SA_Q1
            displayQuestion={questionData[0]}
            imagePath="/images/surfaceArea/SA_Q1_image.png"
            nextQuestion={nextQuestion}
            guessStringA={guessStringAQ1}
            setGuessStringA={setGuessStringAQ1}
            guessStringB={guessStringBQ1}
            setGuessStringB={setGuessStringBQ1}
            guessStringC={guessStringCQ1}
            setGuessStringC={setGuessStringCQ1}
            guessStringD={guessStringDQ1}
            setGuessStringD={setGuessStringDQ1}
            guessStringE={guessStringEQ1}
            setGuessStringE={setGuessStringEQ1}
            guessStringF={guessStringFQ1}
            setGuessStringF={setGuessStringFQ1}
          />
        );
      case 1:
        return (
          <SA_Q2
            displayQuestion={questionData[1]}
            imagePath="/images/surfaceArea/SA_Q1_image.png"
            nextQuestion={nextQuestion}
            partAguessStringA={partAguessStringAQ2}
            setpartAGuessStringA={setpartAguessStringAQ2}
            partAguessStringB={partAguessStringBQ2}
            setpartAGuessStringB={setpartAguessStringBQ2}
            partAguessStringC={partAguessStringCQ2}
            setpartAGuessStringC={setpartAguessStringCQ2}
            partAguessStringD={partAguessStringDQ2}
            setpartAGuessStringD={setpartAguessStringDQ2}
            partAguessStringE={partAguessStringEQ2}
            setpartAGuessStringE={setpartAguessStringEQ2}
            partAguessStringF={partAguessStringFQ2}
            setpartAGuessStringF={setpartAguessStringFQ2}
            partAguessStringSA={partAguessStringSAQ2}
            setpartAGuessStringSA={setpartAguessStringSAQ2}
            partBguessStringA={partBguessStringAQ2}
            setpartBGuessStringA={setpartBguessStringAQ2}
            partBguessStringB={partBguessStringBQ2}
            setpartBGuessStringB={setpartBguessStringBQ2}
            partBguessStringC={partBguessStringCQ2}
            setpartBGuessStringC={setpartBguessStringCQ2}
            partBguessStringD={partBguessStringDQ2}
            setpartBGuessStringD={setpartBguessStringDQ2}
            partBguessStringE={partBguessStringEQ2}
            setpartBGuessStringE={setpartBguessStringEQ2}
            partBguessStringF={partBguessStringFQ2}
            setpartBGuessStringF={setpartBguessStringFQ2}
            partBguessStringSA={partBguessStringSAQ2}
            setpartBGuessStringSA={setpartBguessStringSAQ2}
          />
        );
      case 2:
        return (
          <SA_Q3
            displayQuestion={questionData[2]}
            imagePath="/images/surfaceArea/SA_Q2_image.png"
            nextQuestion={nextQuestion}
            guessStringA={guessStringAQ3}
            setGuessStringA={setGuessStringAQ3}
            guessStringB={guessStringBQ3}
            setGuessStringB={setGuessStringBQ3}
            guessStringC={guessStringCQ3}
            setGuessStringC={setGuessStringCQ3}
            guessStringD={guessStringDQ3}
            setGuessStringD={setGuessStringDQ3}
            guessStringE={guessStringEQ3}
            setGuessStringE={setGuessStringEQ3}
          />
        );
      case 3:
        return (
          <SA_Q4
            displayQuestion={questionData[3]}
            imagePath="/images/surfaceArea/SA_Q2_image.png"
            nextQuestion={nextQuestion}
            partAguessStringA={partAguessStringAQ4}
            setpartAGuessStringA={setpartAguessStringAQ4}
            partAguessStringB={partAguessStringBQ4}
            setpartAGuessStringB={setpartAguessStringBQ4}
            partAguessStringC={partAguessStringCQ4}
            setpartAGuessStringC={setpartAguessStringCQ4}
            partAguessStringD={partAguessStringDQ4}
            setpartAGuessStringD={setpartAguessStringDQ4}
            partAguessStringE={partAguessStringEQ4}
            setpartAGuessStringE={setpartAguessStringEQ4}
            partAguessStringSA={partAguessStringSAQ4}
            setpartAGuessStringSA={setpartAguessStringSAQ4}
            partBguessStringA={partBguessStringAQ4}
            setpartBGuessStringA={setpartBguessStringAQ4}
            partBguessStringB={partBguessStringBQ4}
            setpartBGuessStringB={setpartBguessStringBQ4}
            partBguessStringC={partBguessStringCQ4}
            setpartBGuessStringC={setpartBguessStringCQ4}
            partBguessStringD={partBguessStringDQ4}
            setpartBGuessStringD={setpartBguessStringDQ4}
            partBguessStringE={partBguessStringEQ4}
            setpartBGuessStringE={setpartBguessStringEQ4}
            partBguessStringSA={partBguessStringSAQ4}
            setpartBGuessStringSA={setpartBguessStringSAQ4}
          />
        );
      case 4:
        return (
          <SA_Q5
            displayQuestion={questionData[4]}
            nextQuestion={nextQuestion}
            guessString={guessStringQ5}
            setGuessString={setGuessStringQ5}
          />
        );
      case 5:
        return (
          <SA_Q6
            displayQuestion={questionData[5]}
            nextQuestion={nextQuestion}
            positions={positions}
            setPositions={setPositions}
            partBguessString={partBguessStringQ6}
            setpartBGuessString={setpartBguessStringQ6}
            partCguessString={partCguessStringQ6}
            setpartCGuessString={setpartCguessStringQ6}
            setupPosition={setupPosition}
          />
        );
      case 6:
        return (
          <SA_Q7
            displayQuestion={questionData[6]}
            imagePath="/images/surfaceArea/SA_Q7_image.png"
            nextQuestion={nextQuestion}
            guessStringRectPrism={guessStringRectPrismQ7}
            setGuessStringRectPrism={setGuessStringRectPrismQ7}
            guessStringCube={guessStringCubeQ7}
            setGuessStringCube={setGuessStringCubeQ7}
            guessStringTriPrism={guessStringTriPrismQ7}
            setGuessStringTriPrism={setGuessStringTriPrismQ7}
            linesForQuestions={linesForQuestionsQ7}
            setLinesForQuestions={setLinesForQuestionsQ7}
            historyStepForQuestions={historyStepForQuestionsQ7}
            setHistoryStepForQuestions={setHistoryStepForQuestionsQ7}
          />
        );
    }
  };

  return (
    <div className="flex flex-col overflow-auto bg-scroll bg-blue-50">
      <style jsx>{`
        .fade-enter {
          opacity: 0;
          transform: translateX(100%);
        }
        .fade-exit {
          opacity: 1;
          transform: translateX(0%);
        }
        .fade-enter-active {
          opacity: 1;
          transform: translateX(0%);
        }
        .fade-exit-active {
          opacity: 0;
          transform: translateX(-100%);
        }
        .fade-enter-active,
        .fade-exit-active {
          transition: opacity 500ms, transform 500ms;
        }
      `}</style>
      <Navbar />
      <div id="Form">
        <div className="flex flex-col gap-8">
          <p className="text-2xl text-center bg-blue-400">
            Surface Area Assignment
          </p>
          <SwitchTransition mode={"out-in"}>
            <CSSTransition
              key={stage + currentQuestionIndex}
              addEndListener={(node, done) => {
                node.addEventListener("transitionend", done, false);
              }}
              classNames="fade"
            >
              <div>
                {stage == Stage.START && (
                  <div className="flex flex-col items-center gap-8 p-4 col">
                    <div id="Description" className="text-center">
                      <p className="text-base">
                        Welcome to the Surface Area Assignment! Please fill out
                        your name in the name field below and begin!
                      </p>
                    </div>
                    <div id="StudentNameLayout">
                      <div className="flex flex-row gap-3">
                        <label>Student Names</label>
                        <input
                          className="p-4 text-lg"
                          placeholder="(seperate by ,)"
                          value={studentName}
                          onChange={(e) => onStudentNameChange(e.target.value)}
                        />
                      </div>
                    </div>
                    <Button
                      label="Start"
                      backgroundColor="blue"
                      textColor="white"
                      onClick={onStartQuiz}
                    />
                  </div>
                )}
                {stage == Stage.QUIZ && (
                  <div id="QuizForm" className="flex flex-col gap-8 p-4">
                    <div id="FormBody" className="flex flex-col gap-8">
                      {!wrongAnswerCheck && (
                        <p
                          className={
                            shouldAnimate
                              ? "animate-fadeIn delay-1000 text-center text-red-600"
                              : "visibility: hidden"
                          }
                          onAnimationEnd={(e) => setShouldAnimate(false)}
                        >
                          Wrong Answer
                        </p>
                      )}
                      {questionComponent()}
                    </div>
                    <div id="FormEnd" className="flex flex-col items-center">
                      <Button
                        label="Back"
                        backgroundColor="blue"
                        textColor="white"
                        onClick={backToPrevious}
                      />
                    </div>
                  </div>
                )}
                {stage == Stage.END && (
                  <div id="Result" className="flex flex-col gap-8 p-4">
                    <div id="FormBody" className="flex flex-col gap-8">
                      <p className="text-2xl text-center">
                        Congratulations! Your group {groupName} have made it out
                        within {totalTimeMin} : {totalTimeSec} !
                      </p>
                    </div>
                    <div id="FormEnd" className="flex flex-col items-center">
                      <div id="ButtonLayout" className="flex flex-row gap-8">
                        <Button
                          label="Continue"
                          backgroundColor="blue"
                          textColor="white"
                        />
                        <Button
                          label="Retry"
                          backgroundColor="blue"
                          textColor="white"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
    </div>
  );
}
