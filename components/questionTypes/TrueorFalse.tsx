import React, { useEffect, useState } from "react";
import { GuessData } from "../../pages/api/guessData";
import { Question } from "../../pages/api/question";
import { Button } from "../ui/Button";

export interface TrueorFalseProp {
  question: Question;
  submitGuess: (guess: GuessData) => void;
  answer: string;
}

export const TrueorFalse: React.FC<TrueorFalseProp> = ({
  question,
  submitGuess,
  answer,
  ...props
}) => {
  const onSubmit = (guess: boolean) => {
    submitGuess({
      guess: guess.toString(),
      isCorrect: guess.toString() == answer.toString(),
    });
  };

  return (
    <div className="flex flex-col items-center space-y-16">
      <p className="text-4xl">{question.text}</p>
      <div className="flex flex-row  item-center space-x-4 ">
        <Button
          label="True"
          backgroundColor="green"
          onClick={(_) => onSubmit(true)}
        />
        <Button
          label="False"
          backgroundColor="red"
          onClick={(_) => onSubmit(false)}
        />
      </div>
    </div>
  );
};
