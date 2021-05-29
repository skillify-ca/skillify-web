import React, { useState } from "react";
import { GuessData } from "../../pages/api/guessData";
import { Question } from "../../pages/api/question";
import { Button } from "./Button";
import { Input } from "./Input";
import { LongDivisionInput } from "./LongDivisionInput";

export interface LongDivisionProp {
  question: Question;
  submitGuess: (guess: GuessData) => void;
  isRemainder?: "noRemainder" | "remainder";
}

/**
 * Primary UI component for user interaction
 */
export const LongDivision: React.FC<LongDivisionProp> = ({
  question,
  isRemainder = "noRemainder",
  submitGuess,
  ...props
}) => {
  const [guess, setGuess] = useState("");
  const [guess2, setGuess2] = useState("");

  const handleKeypress = (e) => {
    //it triggers by pressing the enter key
    if (e.charCode === 13) {
      onSubmit();
    }
  };

  const parse = () => {
    const parts = question.text && question.text.split(" ");
    return {
      first: parts && parts[0],
      second: parts && parts[2],
    };
  };

  const onSubmit = () => {
    submitGuess({ guess: guess, isCorrect: guess === question.answer });
    (document.getElementById("guess") as HTMLInputElement).value = "";
    setGuess("");
  };

  const num1 = parseInt(parse().first);
  let width;

  if (num1 >= 100) {
    width = 28;
  } else if (num1 >= 10) {
    width = 24;
  } else {
    width = 16;
  }

  let remainderComponent;
  switch (isRemainder) {
    case "noRemainder":
      " ";
      break;
    case "remainder":
      remainderComponent = (
        <div>
          R&nbsp;
          <LongDivisionInput
            id="guess2"
            guess={guess2}
            setGuess={setGuess2}
            handleKeypress={handleKeypress}
            width={width}
          />
        </div>
      );
      break;
  }

  return (
    <div className="flex flex-col items-center justify-between h-full">
      <div />
      <div className="flex flex-row">
        <span className="flex flex-col-reverse text-7xl">
          {parse().second}&nbsp;
        </span>
        <div className="flex flex-col">
          <div className="flex flex-row gap-2">
            <LongDivisionInput
              id="guess"
              guess={guess}
              setGuess={setGuess}
              handleKeypress={handleKeypress}
              width={width}
            />
            {remainderComponent}
          </div>
          <span className="border-t-2 border-l-2 border-black text-7xl">
            {parse().first}
          </span>
        </div>
      </div>
      <div className="mt-8">
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
