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
  console.log(question.image);
  return (
    <div className="flex flex-col gap-2">
      <div className="text-8xl flex flex-col flex-end items-end border-b-8 border-green-900">
        <img src={question.image} width="200px" height="170px" />
      </div>
      <div className="text-3xl text-green-500 flex-col text-center">
        {parse().first} X {parse().second}
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
  );
};
