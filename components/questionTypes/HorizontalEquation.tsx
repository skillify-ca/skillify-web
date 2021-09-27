import React, { useState } from "react";
import { GuessData } from "../../pages/api/guessData";
import { Question } from "../../pages/api/question";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";

export interface HorizontalEquationProp {
  question: Question;
  submitGuess: (guess: GuessData) => void;
  isReadOnly?: boolean;
}

/**
 * Primary UI component for user interaction
 */
export const HorizontalEquation: React.FC<HorizontalEquationProp> = ({
  question,
  submitGuess,
  isReadOnly = false,
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
    submitGuess({
      guess: guess,
      isCorrect: guess === question.answer,
    });
    setGuess("");
  };
  const parse = () => {
    const parts = question.text.split(" ");
    if (parts[1] == "/") {
      parts[1] = "÷";
    }
    return {
      first: parts[0],
      operation: parts[1],
      second: parts[2],
    };
  };
  return (
    <div className="flex flex-col gap-4 justify-between h-full">
      <p className="text-6xl w-full flex-grow flex justify-center items-center">
        {parse().first}
        {" " + parse().operation + " "}
        {parse().second}
      </p>
      {!isReadOnly && (
        <Input
          guess={guess}
          setGuess={setGuess}
          handleKeypress={handleKeypress}
        />
      )}
      {!isReadOnly && (
        <Button
          onClick={onSubmit}
          label="Submit"
          backgroundColor="blue"
          textColor="white"
        />
      )}
    </div>
  );
};
