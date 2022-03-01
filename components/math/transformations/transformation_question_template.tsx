import { isBoolean } from "lodash";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { GuessData } from "../../../pages/api/guessData";
import { Button } from "../../ui/Button";
import { LineData } from "../../ui/FreeDrawing";

const FreeDrawing = dynamic(() => import("../../ui/FreeDrawing"), {
  ssr: false,
});

type Q1Props = {
  displayQuestion: string;
  imagePath: string;
  nextQuestion: (guess: GuessData) => void;
  guessString: string;
  setGuessString: (guessString: string) => void;
  linesForQuestions: LineData[][];
  setLinesForQuestions: (linesForQuestions: LineData[][]) => void;
  historyStepForQuestions: number[];
  setHistoryStepForQuestions: (historyStepForQuestions: number[]) => void;
};

//Future component, name: TypeAnswerQuestion
const Q1 = ({
  displayQuestion,
  imagePath,
  nextQuestion,
  guessString,
  setGuessString,
  linesForQuestions,
  setLinesForQuestions,
  historyStepForQuestions,
  setHistoryStepForQuestions,
}: Q1Props) => {
  const onGuessChangedA = (currentGuess: string) => {
    const newGuess = currentGuess;
    setGuessString(newGuess);
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

  const onSubmit = () => {
    console.log(guessString);
    const guess: GuessData = {
      guess: guessString,
      isCorrect: true,
    };

    nextQuestion(guess);
  };

  return (
    <React.Fragment>
      <div className="flex flex-col gap-8 items-center">
        <style jsx>{`
          p {
            white-space: pre-line;
          }
        `}</style>
        <p className="text-2xl text-center">{displayQuestion}</p>
        <div id="quizImage">
          <img className="animate-fadeIn" src={imagePath}></img>
        </div>
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
        <input type="file" accept="image/*" />
        <div className="flex flex-col items-center">
          <Button
            label="Submit"
            backgroundColor="blue"
            textColor="white"
            onClick={onSubmit}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Q1;
