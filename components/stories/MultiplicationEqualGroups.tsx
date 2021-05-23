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

/* Multiplication by equal groups UI with 2 inputs */

export const MultiplicationEqualGroups: React.FC<MultiplicationEqualGroupsProp> = ({
  question,
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
  const onSubmit = () => {
    setGuess("");
    const parts = question.text.split(" ");
    submitGuess({
      guess: guess + "," + guess2,
      isCorrect:
        guess === parts[0] &&
        guess2 === parts[2] &&
        (Number.parseInt(guess) * Number.parseInt(guess2)).toString() ===
          question.answer,
    });
  };
  const parse = () => {
    const parts = question.text.split(" ");
    return {
      first: parts[0],
      second: parts[2],
    };
  };
  let groups = Array.from(Array(Number.parseInt(parse().first)).keys());
  let itemsInGroup = Array.from(Array(Number.parseInt(parse().second)).keys());
  return (
    <div className="flex flex-col justify-around items-center w-full h-full">
      <div className="flex flex-row w-full flex-wrap gap-1 justify-around items-center">
        {groups.map((it) => (
          <div className="flex flew-row flex-wrap items-center justify-center gap-1 bg-blue-300 w-24 h-24 p-4 rounded-full">
            {itemsInGroup.map((it) => (
              <div className="flex bg-purple-600 h-1/4 w-1/4 border-black rounded-3xl hover:gap-1 hover:bg-purple-400 hover:scale-125 transform"></div>
            ))}
          </div>
        ))}
      </div>

      <div className="flex flex-row flex-wrap gap-2 justify-center">
        There are
        <EqualGroupsInput
          guess={guess}
          setGuess={setGuess}
          handleKeypress={handleKeypress}
        />
        groups of
        <EqualGroupsInput
          guess={guess2}
          setGuess={setGuess2}
          handleKeypress={handleKeypress}
        />
      </div>
      <div className="text-sm mt-4">
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
