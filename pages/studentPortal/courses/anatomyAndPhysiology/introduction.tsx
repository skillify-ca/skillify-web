import { useEffect, useRef, useState } from "react";
import ProgressBar from "../../../../components/ui/ProgressBar";

const anatomyLevels = [
  { name: "Chemical", description: "Atoms and molecules" },
  { name: "Cellular", description: "Groups of atoms and molecules" },
  { name: "Tissue", description: "Groups of cells" },
  { name: "Organ", description: "Groups of tissues" },
  { name: "System", description: "Groups of organs" },
  { name: "Organism", description: "Groups of systems" },
]

const livingCharacteristics = [
  { name: "Metabolism", description: "The process of breaking down chemicals inside the body and building them back up" },
  { name: "Responsiveness", description: "Being able to detect and respond to changes in the internal or external environment" },
  { name: "Movement", description: "Motion happening at any level of anatomy - from the entire bdoy down to individual cells, tissues, and organs" },
  { name: "Growth", description: "Individual cells getting bigger and/or the number of cells getting larger." },
  { name: "Differentiation", description: "Cells being able to transform from an unspecialized cell (blank slate) to a specialized cell that has a purpose." },
  { name: "Reproduction", description: "The formation of new cells for tissue growth/repair or the formation of a new individual" }
]

const extraCellularFluids = [
  { name: "blood plasma", location: "blood vessels" },
  { name: "lymph", location: "lymphatic vessels" },
  { name: "spinal fluid", location: "spinal cord" },
  { name: "synovial fluid", location: "joints" },
  { name: "aqueous humor", location: "front of the eye" },
  { name: "vitreous body", location: "back of the eye" },
]

const LessonPage = () => {

  const [selectedAnatomyLevel, setSelectedAnatomyLevel] = useState<string>()
  const [selectedLivingCharacteristic, setLivingCharacteristic] = useState<string>()

  // Matching game state
  const [selectedFluid, setSelectedFluid] = useState<string | null>(null)
  const [matches, setMatches] = useState<Record<string, string>>({})
  const [showResults, setShowResults] = useState(false)


  function onAnatomyLevelClicked(level: string) {
    if (level === selectedAnatomyLevel) {
      setSelectedAnatomyLevel(undefined)
    } else {
      setSelectedAnatomyLevel(level)
    }
  }

  function getAnatomyLevelDescription(level) {
    return anatomyLevels.find(it => it.name === level)?.description
  }

  function onLivingCharacteristicClicked(characteristic: string) {
    if (characteristic === selectedLivingCharacteristic) {
      setLivingCharacteristic(undefined)
    } else {
      setLivingCharacteristic(characteristic)
    }
  }

  function getLivingCharactertisticDescription(characteristic) {
    return livingCharacteristics.find(it => it.name === characteristic)?.description
  }

  // Matching game functions
  function handleFluidClick(fluidName: string) {
    if (showResults) return
    if (matches[fluidName]) return // Already matched

    if (selectedFluid === fluidName) {
      setSelectedFluid(null)
    } else {
      setSelectedFluid(fluidName)
    }
  }

  function handleLocationClick(location: string) {
    if (showResults) return
    if (!selectedFluid) return
    if (Object.values(matches).includes(location)) return // Location already taken

    // Check if match is correct
    const fluid = extraCellularFluids.find(f => f.name === selectedFluid)
    if (fluid && fluid.location === location) {
      setMatches({ ...matches, [selectedFluid]: location })
      setSelectedFluid(null)
    } else {
      // Wrong match - flash red feedback
      const locationElement = document.getElementById(`location-${location}`)
      if (locationElement) {
        locationElement.classList.add('bg-red-300')
        setTimeout(() => {
          locationElement.classList.remove('bg-red-300')
        }, 500)
      }
      // Also flash the selected fluid
      const fluidElement = document.getElementById(`fluid-${selectedFluid}`)
      if (fluidElement) {
        fluidElement.classList.add('bg-red-300')
        setTimeout(() => {
          fluidElement.classList.remove('bg-red-300')
        }, 500)
      }
      setSelectedFluid(null)
    }
  }

  function resetGame() {
    setSelectedFluid(null)
    setMatches({})
    setShowResults(false)
  }

  function checkAnswers() {
    setShowResults(true)
  }

  const isGameComplete = Object.keys(matches).length === extraCellularFluids.length


  return (
    <div className="grid max-w-5xl grid-cols-1 gap-8 p-4 pb-16 mx-auto md:p-8 lg:p-12">
      <ProgressBar completed={100} exitLink="/studentPortal/courses/anatomyAndPhysiology" />

      <h1>Introduction to Anatomy and Physiology</h1>
      <p>Anatomy is the science of the different structures in the body and the relationships between them. Physiology is the science of functions in the body.</p>
      <p>There are six levels of studying the body in anatomy. There are 11 systems of the human body.</p>

      <h3 className="text-xl font-bold">Six levels of anatomy</h3>
      <div className="flex gap-4">
        {anatomyLevels.map(level => <div className="cursor-pointer" onClick={() => onAnatomyLevelClicked(level.name)}><Card>{level.name}</Card></div>)}
      </div>
      <p>
        <span className="font-bold">Description:</span> {getAnatomyLevelDescription(selectedAnatomyLevel)}
      </p>

      <h3 className="text-xl font-bold">Characteristics of a Living Human</h3>
      <div className="flex gap-4">
        {livingCharacteristics.map(characteristic => <div className="cursor-pointer" onClick={() => onLivingCharacteristicClicked(characteristic.name)}><Card>{characteristic.name}</Card></div>)}
      </div>
      <p>
        <span className="font-bold">Description:</span> {getLivingCharactertisticDescription(selectedLivingCharacteristic)}
      </p>

      <h3 className="text-xl font-bold">Homeostasis</h3>
      <p>Homeostasis includes many different body proccesses to maintain a stable internal environment. Each structure in the body contributes to keeping the body's internal environment within normal limits.</p>


      <h4 className="font-bold">Homestasis Process 1: Maintaining the volume and composition of bodily fluids</h4>
      <p>
        There is fluid inside our cells and fluid outside surrounding our cells. The fluid that surrounds the outside of our cells is called extra-cellular fluid (ECF). The ECF is different depending on where it is in the body. Match each type of ECF to where you might find it in the body.
      </p>

      {/* Matching Game Section */}
      <div className="mt-4 p-6 bg-gray-50 rounded-lg border-2 border-gray-200">
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-lg font-bold">Matching Game: ECF Locations</h4>
          <div className="space-x-2">
            <button
              onClick={resetGame}
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
            >
              Reset
            </button>
            {!isGameComplete && !showResults && (
              <button
                onClick={checkAnswers}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
              >
                Check Answers
              </button>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Fluids Column */}
          <div>
            <h5 className="font-semibold mb-2">ECF Types</h5>
            <div className="space-y-2">
              {extraCellularFluids.map(fluid => {
                const isMatched = matches[fluid.name]
                const isSelected = selectedFluid === fluid.name

                return (
                  <div
                    key={fluid.name}
                    id={`fluid-${fluid.name}`}
                    onClick={() => handleFluidClick(fluid.name)}
                    className={`
                      p-3 rounded cursor-pointer transition-all border-2
                      ${isMatched
                        ? 'bg-green-200 border-green-500 opacity-60 cursor-not-allowed'
                        : isSelected
                          ? 'bg-blue-400 border-blue-600 shadow-lg transform scale-105'
                          : 'bg-white border-gray-300 hover:bg-blue-50 hover:border-blue-400'
                      }
                      ${showResults && isMatched ? 'border-green-500' : ''}
                      ${showResults && !isMatched ? 'border-red-400 bg-red-50' : ''}
                    `}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium capitalize">{fluid.name}</span>
                      {isMatched && (
                        <span className="text-sm text-green-700">✓ Matched!</span>
                      )}
                      {showResults && !isMatched && (
                        <span className="text-sm text-red-600">✗ Not matched</span>
                      )}
                    </div>
                    {isMatched && (
                      <div className="text-sm text-gray-600 mt-1">
                        → {matches[fluid.name]}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
            {selectedFluid && !showResults && (
              <p className="mt-2 text-sm text-blue-600">Selected: {selectedFluid} - Click a location below to match it</p>
            )}
          </div>

          {/* Locations Column */}
          <div>
            <h5 className="font-semibold mb-2">Locations</h5>
            <div className="space-y-2">
              {extraCellularFluids.map(fluid => {
                const isTaken = Object.values(matches).includes(fluid.location)
                const isMatchedTo = Object.keys(matches).find(key => matches[key] === fluid.location)

                return (
                  <div
                    key={fluid.location}
                    id={`location-${fluid.location}`}
                    onClick={() => handleLocationClick(fluid.location)}
                    className={`
                      p-3 rounded cursor-pointer transition-all border-2
                      ${isTaken
                        ? 'bg-gray-200 border-gray-400 opacity-60 cursor-not-allowed'
                        : 'bg-white border-gray-300 hover:bg-purple-50 hover:border-purple-400'
                      }
                      ${showResults && isTaken ? 'border-green-500' : ''}
                    `}
                  >
                    <div className="flex justify-between items-center">
                      <span>{fluid.location}</span>
                      {isTaken && (
                        <span className="text-sm text-green-700">
                          ✓ {isMatchedTo}
                        </span>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Results / Progress */}
        <div className="mt-6 pt-4 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <div>
              <span className="font-medium">Progress: </span>
              <span>{Object.keys(matches).length} / {extraCellularFluids.length} matched</span>
            </div>
            {isGameComplete && !showResults && (
              <div className="text-green-600 font-bold text-lg">
                🎉 All matched! Click "Check Answers" to verify.
              </div>
            )}
            {showResults && (
              <div className={`font-bold text-lg ${isGameComplete ? 'text-green-600' : 'text-orange-600'}`}>
                {isGameComplete
                  ? '✅ Perfect! All matches are correct!'
                  : `⚠️ ${extraCellularFluids.length - Object.keys(matches).length} matches remaining`}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* interactive image */}
      <ImageRectangles src="/courses/anatomyAndPhysiology/introduction/extracellular-fluid.png" rectangles={[
        {
          height: 40,
          width: 120,
          x: 110,
          y: 40,
          id: "1"
        }
      ]} alt="ECF" />
    </div>
  );
};

function Card({ children }) {
  return <div className="bg-blue-300 p-4 rounded shadow">{children}</div>
}


type Rectangle = {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
};

type ImageRectanglesProps = {
  src: string;
  rectangles: Rectangle[];
  alt?: string;
};

function ImageRectangles({
  src,
  rectangles,
  alt = "",
}: ImageRectanglesProps) {
  const imgRef = useRef<HTMLImageElement>(null);

  const [visibleRects, setVisibleRects] = useState(rectangles);
  const [scale, setScale] = useState({ x: 1, y: 1 });

  useEffect(() => {
    setVisibleRects(rectangles);
  }, [rectangles]);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    const updateScale = () => {
      setScale({
        x: img.clientWidth / img.naturalWidth,
        y: img.clientHeight / img.naturalHeight,
      });
    };

    updateScale();

    const observer = new ResizeObserver(updateScale);
    observer.observe(img);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      style={{
        position: "relative",
        display: "inline-block",
      }}
    >
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        style={{
          display: "block",
          maxWidth: "100%",
          height: "auto",
        }}
      />

      {visibleRects.map((rect) => (
        <div
          key={rect.id}
          onClick={() =>
            setVisibleRects((prev) =>
              prev.filter((r) => r.id !== rect.id)
            )
          }
          style={{
            position: "absolute",
            left: rect.x * scale.x,
            top: rect.y * scale.y,
            width: rect.width * scale.x,
            height: rect.height * scale.y,
            background: "white",
            border: "2px gray solid",
            cursor: "pointer",
            userSelect: "none",
          }}
        />
      ))}
    </div>
  );
}

export default LessonPage;
