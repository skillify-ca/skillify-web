import React, { useState } from "react";
import { GuessData } from "../../pages/api/guessData";
import { Button } from "../ui/Button";

type Q5Props = {
  displayQuestion: string;
  nextQuestion: (guess: GuessData) => void;
};

//Future component, name: TypeAnswerQuestion
const Q5 = ({ displayQuestion, nextQuestion }: Q5Props) => {
  const [guessString, setGuessString] = useState<string>("");

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

  return (
    <React.Fragment>
      <div className="flex flex-col gap-8 items-center">
        <p className="text-2xl text-center">{displayQuestion}</p>
        <div className="text-center">
          <label>Final Answer</label>
        </div>
        <div className="text-center">
          <textarea
            rows={4}
            cols={50}
            value={guessString}
            className=""
            onChange={(e) => onGuessChanged(e.target.value)}
          >
            {" "}
          </textarea>
        </div>
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

export default Q5;
