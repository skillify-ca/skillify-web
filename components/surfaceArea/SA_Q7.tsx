import dynamic from "next/dynamic";
import React, { useState } from "react";
import { GuessData } from "../../pages/api/guessData";
import { Button } from "../ui/Button";
import { LineData } from "../ui/FreeDrawing";

const FreeDrawing = dynamic(() => import("../ui/FreeDrawing"), {
  ssr: false,
});

type Q7Props = {
  displayQuestion: string;
  imagePath: string;
  nextQuestion: (guess: GuessData) => void;
  guessStringRectPrism: string;
  setGuessStringRectPrism: (guessString: string) => void;
  guessStringCube: string;
  setGuessStringCube: (guessString: string) => void;
  guessStringTriPrism: string;
  setGuessStringTriPrism: (guessString: string) => void;
  linesForQuestions: LineData[][];
  setLinesForQuestions: (linesForQuestions: LineData[][]) => void;
  historyStepForQuestions: number[];
  setHistoryStepForQuestions: (historyStepForQuestions: number[]) => void;
};

//Future component, name: TypeAnswerQuestion
const Q7 = ({
  displayQuestion,
  imagePath,
  nextQuestion,
  guessStringRectPrism,
  setGuessStringRectPrism,
  guessStringCube,
  setGuessStringCube,
  guessStringTriPrism,
  setGuessStringTriPrism,
  linesForQuestions,
  setLinesForQuestions,
  historyStepForQuestions,
  setHistoryStepForQuestions,
}: Q7Props) => {
  const onGuessChangedRectPrism = (currentGuess: string) => {
    const newGuess = currentGuess;
    setGuessStringRectPrism(newGuess);
  };

  const onGuessChangedCube = (currentGuess: string) => {
    const newGuess = currentGuess;
    setGuessStringCube(newGuess);
  };

  const onGuessChangedTriPrism = (currentGuess: string) => {
    const newGuess = currentGuess;
    setGuessStringTriPrism(newGuess);
  };

  const onSubmit = () => {
    const guessStringLocal =
      guessStringRectPrism + "," + guessStringCube + "," + guessStringTriPrism;
    const guess: GuessData = {
      guess: guessStringLocal,
      isCorrect: true,
    };
    //Pass this guessData object into nextQuestion
    nextQuestion(guess);
  };

  const setLinesForCurrentQuestion = (lines: LineData[]) => {
    const newLines = linesForQuestions.map((l, index) => {
      if (index === 0) {
        return lines;
      } else {
        return l;
      }
    });
    setLinesForQuestions(newLines);
  };

  const setLinesForCurrentQuestion2 = (lines: LineData[]) => {
    const newLines = linesForQuestions.map((l, index) => {
      if (index === 1) {
        return lines;
      } else {
        return l;
      }
    });
    setLinesForQuestions(newLines);
  };

  const setLinesForCurrentQuestion3 = (lines: LineData[]) => {
    const newLines = linesForQuestions.map((l, index) => {
      if (index === 2) {
        return lines;
      } else {
        return l;
      }
    });
    setLinesForQuestions(newLines);
  };

  const setHistoryForCurrentQuestion = (historyStep: number) => {
    const newHistory = historyStepForQuestions.map((h, index) => {
      if (index === 0) {
        return historyStep;
      } else {
        return h;
      }
    });
    setHistoryStepForQuestions(newHistory);
  };

  const setHistoryForCurrentQuestion2 = (historyStep: number) => {
    const newHistory = historyStepForQuestions.map((h, index) => {
      if (index === 1) {
        return historyStep;
      } else {
        return h;
      }
    });
    setHistoryStepForQuestions(newHistory);
  };

  const setHistoryForCurrentQuestion3 = (historyStep: number) => {
    const newHistory = historyStepForQuestions.map((h, index) => {
      if (index === 2) {
        return historyStep;
      } else {
        return h;
      }
    });
    setHistoryStepForQuestions(newHistory);
  };
  return (
    <React.Fragment>
      <div className="flex flex-col gap-8 items-center">
        <p className="text-2xl text-center">{displayQuestion}</p>
        <div className="grid md:grid-cols-12 grid-cols-1">
          <div className="md:col-span-12 rounded-xl">
            <div className="grid grid-cols-12 rounded-xl font-bold items-center justify-between bg-yellow-600 p-4 gap-4">
              <div className="grid grid-cols-12 col-span-12 rounded-xl font-bold bg-white p-4">
                <p className="col-span-12 text-center">a)</p>
                <div className="col-span-12">
                  <div className="col-span-12 items-center">
                    <img
                      className="animate-fadeIn"
                      src={imagePath}
                      width="1000"
                      height="400"
                    ></img>
                    {linesForQuestions[0] && (
                      <FreeDrawing
                        saveImage={() => {}}
                        lines={linesForQuestions[0]}
                        setLines={setLinesForCurrentQuestion}
                        historyStep={historyStepForQuestions[0]}
                        setHistoryStep={setHistoryForCurrentQuestion}
                        disabled={false}
                      />
                    )}
                    <div className="col-span-12">
                      <div className="flex gap-4 justify-between items-center">
                        <label>
                          Find the surface area of the prism image above
                        </label>
                        <input
                          className="p-4 text-lg w-8/12 sm:w-full border-2 border-yellow-900"
                          placeholder=""
                          value={guessStringRectPrism}
                          onChange={(e) =>
                            onGuessChangedRectPrism(e.target.value)
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-12 col-span-12 rounded-xl font-bold bg-white p-4">
                <p className="col-span-12 text-center">b)</p>
                <div className="col-span-12">
                  <div className="col-span-12 items-center">
                    <img
                      className="animate-fadeIn"
                      src="/images/surfaceArea/SA_Q7_image_b.png"
                      width="1000"
                      height="400"
                    ></img>
                    {linesForQuestions[1] && (
                      <FreeDrawing
                        saveImage={() => {}}
                        lines={linesForQuestions[1]}
                        setLines={setLinesForCurrentQuestion2}
                        historyStep={historyStepForQuestions[1]}
                        setHistoryStep={setHistoryForCurrentQuestion2}
                        disabled={false}
                      />
                    )}
                    <div className="col-span-12">
                      <div className="flex gap-4 justify-between items-center">
                        <label>
                          Find the surface area of the prism image above
                        </label>
                        <input
                          className="p-4 text-lg w-8/12 sm:w-full border-2 border-yellow-900"
                          placeholder=""
                          value={guessStringCube}
                          onChange={(e) => onGuessChangedCube(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-12 col-span-12 rounded-xl font-bold bg-white p-4">
                <p className="col-span-12 text-center">c)</p>
                <div className="col-span-12">
                  <div className="col-span-12 items-center">
                    <img
                      className="animate-fadeIn"
                      src="/images/surfaceArea/SA_Q7_image_c.png"
                      width="1000"
                      height="400"
                    ></img>
                    {linesForQuestions[2] && (
                      <FreeDrawing
                        saveImage={() => {}}
                        lines={linesForQuestions[2]}
                        setLines={setLinesForCurrentQuestion3}
                        historyStep={historyStepForQuestions[2]}
                        setHistoryStep={setHistoryForCurrentQuestion3}
                        disabled={false}
                      />
                    )}
                    <div className="col-span-12">
                      <div className="flex gap-4 justify-between items-center">
                        <label>
                          Find the surface area of the prism image above
                        </label>
                        <input
                          className="p-4 text-lg w-8/12 sm:w-full border-2 border-yellow-900"
                          placeholder=""
                          value={guessStringTriPrism}
                          onChange={(e) =>
                            onGuessChangedTriPrism(e.target.value)
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-4 flex-col items-center">
        <Button
          label="Submit"
          backgroundColor="blue"
          textColor="white"
          onClick={onSubmit}
        />
      </div>
    </React.Fragment>
  );
};

export default Q7;
