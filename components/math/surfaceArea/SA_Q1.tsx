import { isBoolean } from "lodash";
import React, { useState } from "react";
import { GuessData } from "../../../pages/api/guessData";
import { Button } from "../../ui/Button";
import MutliLineInput from "./MultiTextInput";

type Q1Props = {
  displayQuestion: string;
  imagePath: string;
  nextQuestion: (guess: GuessData) => void;
  guessStringA: string;
  setGuessStringA: (guessString: string) => void;
  guessStringB: string;
  setGuessStringB: (guessString: string) => void;
  guessStringC: string;
  setGuessStringC: (guessString: string) => void;
  guessStringD: string;
  setGuessStringD: (guessString: string) => void;
  guessStringE: string;
  setGuessStringE: (guessString: string) => void;
  guessStringF: string;
  setGuessStringF: (guessString: string) => void;
};

//Future component, name: TypeAnswerQuestion
const Q1 = ({
  displayQuestion,
  imagePath,
  nextQuestion,
  guessStringA,
  setGuessStringA,
  guessStringB,
  setGuessStringB,
  guessStringC,
  setGuessStringC,
  guessStringD,
  setGuessStringD,
  guessStringE,
  setGuessStringE,
  guessStringF,
  setGuessStringF,
}: Q1Props) => {
  const answerA = "top";
  const answerB = "front";
  const answerC = "bottom";
  const answerD = "back";
  const answerE = "left side";
  const answerF = "right side";

  const onGuessChangedA = (currentGuess: string) => {
    const newGuess = currentGuess;
    setGuessStringA(newGuess);
  };

  const onGuessChangedB = (currentGuess: string) => {
    const newGuess = currentGuess;
    setGuessStringB(newGuess);
  };

  const onGuessChangedC = (currentGuess: string) => {
    const newGuess = currentGuess;
    setGuessStringC(newGuess);
  };

  const onGuessChangedD = (currentGuess: string) => {
    const newGuess = currentGuess;
    setGuessStringD(newGuess);
  };

  const onGuessChangedE = (currentGuess: string) => {
    const newGuess = currentGuess;
    setGuessStringE(newGuess);
  };

  const onGuessChangedF = (currentGuess: string) => {
    const newGuess = currentGuess;
    setGuessStringF(newGuess);
  };

  const onSubmit = () => {
    const guessString = `${guessStringA} , ${guessStringB} , ${guessStringC}, ${guessStringD}, ${guessStringE}, ${guessStringF}`;
    const answerString = `${answerA} , ${answerB} , ${answerC}, ${answerD}, ${answerE}, ${answerF}`;
    const guess: GuessData = {
      guess: guessString,
      isCorrect: guessString == answerString,
    };

    nextQuestion(guess);
  };

  return (
    <React.Fragment>
      <div className="flex flex-col gap-8 items-center">
        <p className="text-2xl text-center">{displayQuestion}</p>
        <div id="quizImage">
          <img className="animate-fadeIn" src={imagePath}></img>
        </div>
        <MutliLineInput
          guessStringA={guessStringA}
          guessStringB={guessStringB}
          guessStringC={guessStringC}
          guessStringD={guessStringD}
          guessStringE={guessStringE}
          guessStringF={guessStringF}
          onGuessChangedA={onGuessChangedA}
          onGuessChangedB={onGuessChangedB}
          onGuessChangedC={onGuessChangedC}
          onGuessChangedD={onGuessChangedD}
          onGuessChangedE={onGuessChangedE}
          onGuessChangedF={onGuessChangedF}
        />
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
