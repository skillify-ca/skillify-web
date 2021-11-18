import { isBoolean } from "lodash";
import React, { useState } from "react";
import { GuessData } from "../../pages/api/guessData";
import { Button } from "../ui/Button";

type Q1Props = {
  displayQuestion: string;
  imagePath: string;
  nextQuestion: (guess: GuessData) => void;
  guessString: string;
  setGuessString: (guessString: string) => void;
};

//Future component, name: TypeAnswerQuestion
const Q1 = ({
  displayQuestion,
  imagePath,
  nextQuestion,
  guessString,
  setGuessString,
}: Q1Props) => {
  const onGuessChangedA = (currentGuess: string) => {
    const newGuess = currentGuess;
    setGuessString(newGuess);
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
        <p className="text-2xl text-center">{displayQuestion}</p>
        <div id="quizImage">
          <img className="animate-fadeIn" src={imagePath}></img>
        </div>
        <input
          type="file"
          accept="image/*"
          value={guessString}
          onChange={(e) => onGuessChangedA(e.target.value)}
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
