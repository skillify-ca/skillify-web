import React, { useState } from "react";
import { GuessData } from "../../pages/api/guessData";
import { Question } from "../../pages/api/question";
import { Button } from "./Button";
import { Input } from "./Input";
import { LongDivisionInput } from "./LongDivisionInput";

export interface LongDivisionProp {
  question: Question;
  submitGuess: (guess: GuessData) => void;
}

/**
 * Primary UI component for user interaction
 */
export const LongDivision: React.FC<LongDivisionProp> = ({
  question,
  submitGuess,
  ...props
}) => {
  const [guess, setGuess] = useState("");
  const [guess2, setGuess2] = useState("");

  const handleKeypress = (e) => {
    //it triggers by pressing the enter key
    if (e.charCode === 13) {
      submitGuess(e);
    }
  };

  const onSubmit = () => {
    setGuess("");
    submitGuess({ guess: guess, isCorrect: guess === question.answer });
    (document.getElementById("guess") as HTMLInputElement).value = "";
  };

  const parse = () => {
    const parts = question.text && question.text.split(" ");
    return {
      first: parts && parts[0],
      second: parts && parts[2],
    };
  };

  const displayRemainder = () => {
    return (
      <>
        R
        <LongDivisionInput
          id="remainder"
          guess={guess2}
          setGuess={setGuess2}
          handleKeypress={handleKeypress}
          width={width}
        />
      </>
    );
  };

  const num1 = parseInt(parse().first);
  let width;

  if (num1 >= 10) {
    width = 8;
  } else {
    width = 6;
  }

  let remainder = 0;
  return (
    <div>
      <div className="ml-4 flex flex-row">
        <span className="flex flex-col-reverse text-lg">
          {parse().second}&nbsp;
        </span>
        <div className="flex flex-col">
          <div className="flex flex-row gap-2">
            <LongDivisionInput
              id="quotient"
              guess={guess}
              setGuess={setGuess}
              handleKeypress={handleKeypress}
              width={width}
            />
            {remainder > 0 ? displayRemainder() : ""}
          </div>
          <span className="border-t-2 border-l-2 border-black text-lg">
            {parse().first}
          </span>
        </div>
      </div>
      <div className="mt-4">
        <Button
          onClick={onSubmit}
          label="Submit"
          backgroundColor="blue"
          textColor="white"
        />
      </div>
    </div>
  );
};
