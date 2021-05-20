import React, { useState } from "react";
import { GuessData } from "../../pages/api/guessData";
import { Question } from "../../pages/api/question";
import { Button } from "./Button";
import { Input } from "./Input";

export interface MultiplicationArrayProp {
  question: Question;
  submitGuess: (guess: GuessData) => void;
}

/**
 * Primary UI component for user interaction
 */
export const MultiplicationArray: React.FC<MultiplicationArrayProp> = ({
  question,
  submitGuess,
  ...props
}) => {
  const [guess, setGuess] = useState("");
  const handleKeypress = (e) => {
    //it triggers by pressing the enter key
    if (e.charCode === 13) {
      onSubmit();
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
  //let horizontal = new Array;
  let horizontal = Array.from(Array(Number.parseInt(parse().first)).keys());
  let columns = Array.from(Array(Number.parseInt(parse().second)).keys());
  console.log(parse().first);
  console.log(parse().second);
  return (
    <div>
      <div className="flex flex-col gap-1">
        {horizontal.map((it) => (
          <div className="flex flew-row gap-1 justify-items-center">
            {columns.map((it) => (
              <div className="bg-green-700 w-8 h-8 border-gray-50 border-1 hover:gap-1 hover:bg-green-400 hover:scale-125 transform"></div>
            ))}
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-2">
        <div className="text-8xl flex flex-col flex-end items-end border-b-8 border-green-900"></div>
        <div className="text-3xl text-green-500 flex-col text-center">
          {parse().first} x {parse().second}
        </div>
        <Input
          guess={guess}
          setGuess={setGuess}
          handleKeypress={handleKeypress}
        />
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
