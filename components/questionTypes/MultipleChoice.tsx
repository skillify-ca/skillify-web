import React from "react";
import { MCOption } from "../../pages/api/question";
import { Button } from "../ui/Button";

export interface MultipleChoiceProp {
  displayQuestion?: string;
  option1: MCOption;
  option2: MCOption;
  option3: MCOption;
  answer: string;
  submitGuess: (e) => void;
}

export const MultipleChoice: React.FC<MultipleChoiceProp> = ({
  displayQuestion,
  option1,
  option2,
  option3,
  answer,
  submitGuess,
}) => {
  const onSubmit = (guess: string) => {
    submitGuess({
      guess,
      isCorrect: guess == answer,
    });
  };
  return (
    <div className="flex flex-col items-center space-y-8">
      <h1 className="text-4xl text-center"> {displayQuestion} </h1>
      <div className="flex flex-col space-y-4">
        <Button
          label={option1.text}
          backgroundColor="red"
          onClick={() => onSubmit(option1.text)}
        ></Button>
        <Button
          label={option2.text}
          backgroundColor="blue"
          onClick={() => onSubmit(option2.text)}
        ></Button>
        <Button
          label={option3.text}
          backgroundColor="yellow"
          onClick={() => onSubmit(option3.text)}
        ></Button>
      </div>
    </div>
  );
};
