import React, { useState } from "react";
import { GuessData } from "../../pages/api/guessData";
import { Question } from "../../pages/api/question";
import NumberLiteral from "../dots/NumberLiteral";
import TenFrame from "../dots/tenFrame";
import { Input } from "../ui/Input";

export interface VisualAdditionProp {
  submitGuess: (guess: GuessData) => void;
  question: Question;
}

export const VisualAddition: React.FC<VisualAdditionProp> = ({
  submitGuess,
  question,
  ...props
}) => {
  const parse = (question) => {
    const parts = question.text && question.text.split(" ");
    return {
      first: parts && parts[0],
      second: parts && parts[2],
    };
  };

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
  return (
    <div className="flex flex-col gap-8 items-center">
      <div className="flex flex-row items-center gap-4">
        <div className="flex flex-col items-center gap-4">
          <TenFrame num={parseInt(parse(question).first)} />
          <NumberLiteral num={parseInt(parse(question).first)} />
        </div>
        <p className="text-5xl font-bold">+</p>
        <div className="flex flex-col items-center gap-4">
          <TenFrame num={parseInt(parse(question).second)} />
          <NumberLiteral num={parseInt(parse(question).second)} />
        </div>
      </div>
      <Input
        guess={guess}
        setGuess={setGuess}
        handleKeypress={handleKeypress}
      />
    </div>
  );
};
