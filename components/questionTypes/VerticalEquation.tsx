import React, { useState } from "react";
import { GuessData } from "../../pages/api/guessData";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";

export interface VerticalEquationProp {
  text: string;
  answer: string;
  operator: string;
  submitGuess?: (guess: GuessData) => void;
}

/**
 * Primary UI component for user interaction
 */
export const VerticalEquation: React.FC<VerticalEquationProp> = ({
  answer,
  text,
  operator,
  submitGuess,
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
    submitGuess({ guess: guess, isCorrect: guess === answer });
  };
  const parse = () => {
    const parts = text.split(" ");
    return {
      first: parts[0],
      second: parts[2],
    };
  };
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col items-end border-b-8 border-blue-900 text-8xl flex-end">
        <p className="align-right">{parse().first}</p>
        <div className="flex">
          <p>{operator}</p>
          <p>{parse().second}</p>
        </div>
      </div>
      <Input
        value={guess}
        setValue={setGuess}
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
