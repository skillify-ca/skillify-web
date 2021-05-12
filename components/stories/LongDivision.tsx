import React, { useState } from "react";
import { GuessData } from "../../pages/api/guessData";
import { Question } from "../../pages/api/question";
import { Button } from "./Button";

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

  const handleKeypress = (e) => {
    //it triggers by pressing the enter key
    if (e.charCode === 13) {
      submitGuess(e);
    }
  };

  const onSubmit = () => {
    setGuess("");
    submitGuess({ guess: guess, isCorrect: guess === question.answer });
  };
  const parse = () => {
    const parts = question.text.split(" ");
    return {
      first: parts[0],
      second: parts[2],
    };
  };

  const num1 = parseInt(parse().first);
  let width;

  if (num1 >= 1000) {
    width = 12;
  } else if (num1 >= 100) {
    width = 8;
  } else if (num1 >= 10) {
    width = 6;
  } else {
    width = 4;
  }

  return (
    <div>
      <div className="ml-4 flex flex-row">
        <span className="flex flex-col-reverse text-lg">
          {parse().second}&nbsp;
        </span>
        <div className="flex flex-col">
          <input
            type="text"
            className={`text-left border rounded-md shadow-md focus:outline-none focus:ring-indigo-500 text-md lg:text-md w-${width}`}
            placeholder=" "
          ></input>
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
