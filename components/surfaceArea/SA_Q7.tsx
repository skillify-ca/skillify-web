import dynamic from "next/dynamic";
import React, { useState } from "react";
import { GuessData } from "../../pages/api/guessData";
import { Button } from "../ui/Button";
import { LineData } from "../ui/FreeDrawing";

const FreeDrawing = dynamic(() => import("../ui/FreeDrawing"), {
  ssr: false,
});

//Future component, name: TypeAnswerQuestion
const Q7 = (displayQuestion, nextQuestion, isWrong) => {
  const [guessString, setGuessString] = useState<string>("");
  const EMPTY_ARRAY_OF_ARRAYS = [[], [], []];
  const [historyStepForQuestions, setHistoryStepForQuestions] = useState<
    number[]
  >([0, 0, 0]);
  const [linesForQuestions, setLinesForQuestions] = React.useState<
    LineData[][]
  >(EMPTY_ARRAY_OF_ARRAYS);

  const onGuessChanged = (currentGuess: string) => {
    const newGuess = currentGuess;
    setGuessString(newGuess);
  };

  const onSubmit = () => {
    const guess: GuessData = {
      guess: guessString,
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
                      src="/images/surfaceArea/SA_Q7_image.png"
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
                    <label>Answer</label>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-12 col-span-12 rounded-xl font-bold justify-between bg-white p-4">
                <p className="col-span-12 text-center">b)</p>
                <div className="col-span-12">
                  <div className="items-center">
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
                        setLines={setLinesForCurrentQuestion}
                        historyStep={historyStepForQuestions[1]}
                        setHistoryStep={setHistoryForCurrentQuestion}
                        disabled={false}
                      />
                    )}
                    <label>Answer</label>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-12 col-span-12 rounded-xl font-bold justify-between bg-white p-4">
                <p className="col-span-12 text-center">c)</p>
                <div className="col-span-12">
                  <div className="items-center">
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
                        setLines={setLinesForCurrentQuestion}
                        historyStep={historyStepForQuestions[2]}
                        setHistoryStep={setHistoryForCurrentQuestion}
                        disabled={false}
                      />
                    )}
                    <label>Answer</label>
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
