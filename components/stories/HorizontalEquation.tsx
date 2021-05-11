import React, { useState } from "react";
import { Button } from "./Button";
import { Input } from "./Input";

export interface HorizontalEquationProp {
  question?: string;
  submitGuess: (number) => void;
}

/**
 * Primary UI component for user interaction
 */
export const HorizontalEquation: React.FC<HorizontalEquationProp> = ({
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
    submitGuess(Number.parseInt(guess));
    setGuess("");
  };
  const parse = () => {
    const parts = question.split(" ");
    if (parts[1] == "/") {
      parts[1] = " ÷ ";
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
        {parse().operation}
        {parse().second}
      </p>
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
  );
};
