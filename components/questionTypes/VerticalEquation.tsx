import React, { useState } from "react";
import { GuessData } from "../../pages/api/guessData";
import { Question } from "../../pages/api/question";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";

export interface VerticalEquationProp {
  question: Question;
  submitGuess?: (guess: GuessData) => void;
  isReadOnly?: boolean;
}

/**
 * Primary UI component for user interaction
 */
export const VerticalEquation: React.FC<VerticalEquationProp> = ({
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
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col items-end border-b-8 border-blue-900 text-8xl flex-end">
        <p className="align-right">{parse().first}</p>
        <div className="flex">
          <p>{question.operator}</p>
          <p>{parse().second}</p>
        </div>
      </div>
      {!isReadOnly && (
        <Input
          value={guess}
          setValue={setGuess}
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
