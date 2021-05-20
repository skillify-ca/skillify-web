import React, { useState } from "react";
import { GuessData } from "../../pages/api/guessData";
import { Question } from "../../pages/api/question";
import { Button } from "./Button";
import { EqualGroupsInput } from "./EqualGroupsInput";
import { Input } from "./Input";

export interface MultiplicationEqualGroupsProp {
  question: Question;
  submitGuess: (guess: GuessData) => void;
}
/**
 * Primary UI component for user interaction
 */
export const MultiplicationEqualGroups: React.FC<MultiplicationEqualGroupsProp> = ({
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
  let groups = Array.from(Array(Number.parseInt(parse().first)).keys());
  let itemsInGroup = Array.from(Array(Number.parseInt(parse().second)).keys());
  console.log(parse().first);
  console.log(parse().second);
  return (
    <div>
      <div className="flex flex-row gap-1 justify-center items-center">
        {groups.map((it) => (
          <div className="flex flew-row flex-wrap items-center justify-center gap-1 bg-blue-300 w-20 h-20 border-gray-50 border-1 hover:gap-1 hover:bg-green-400 hover:scale-125 transform">
            {itemsInGroup.map((it) => (
              <div className="flex bg-purple-600 h-1/4 w-1/4 border-black"></div>
            ))}
          </div>
        ))}
      </div>
      <div className="flex flex-row gap-2 justify-center mt-4 text-lg">
        There are
        <EqualGroupsInput
          guess={guess}
          setGuess={setGuess}
          handleKeypress={handleKeypress}
        />
        groups of
        <EqualGroupsInput
          guess={guess}
          setGuess={setGuess}
          handleKeypress={handleKeypress}
        />
      </div>
    </div>
  );
};
