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
      submitGuess(e);
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
    setGuess("");
    submitGuess({ guess: guess, isCorrect: guess === question.answer });
    (document.getElementById("guess") as HTMLInputElement).value = "";
  };

  const num1 = parseInt(parse().first);
  let width;

  if (num1 >= 10) {
    width = 8;
  } else {
    width = 6;
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
    <div>
      <div className="ml-4 flex flex-row">
        <span className="flex flex-col-reverse text-lg">
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
