import React from "react";
import { MCOption } from "../../pages/api/question";
import { Button } from "./Button";

export interface MultipleChoiceSentenceProp {
  displayQuestion?: string;
  option1: MCOption;
  option2: MCOption;
  option3: MCOption;
  option4: MCOption;
  submitGuess: (e) => void;
}

export function randomize(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export const MultipleChoiceSentence: React.FC<MultipleChoiceSentenceProp> = ({
  displayQuestion,
  option1,
  option2,
  option3,
  option4,
  submitGuess,
  ...props
}) => {
  return (
    <div className="flex flex-col items-center space-y-8">
      <h1 className="text-4m font-semibold text-center"> {displayQuestion} </h1>
      <Button
        label={option1.text}
        backgroundColor="red"
        onClick={submitGuess}
      ></Button>
      <Button
        label={option2.text}
        backgroundColor="blue"
        onClick={submitGuess}
      ></Button>
      <Button
        label={option3.text}
        backgroundColor="yellow"
        onClick={submitGuess}
      ></Button>
      <Button
        label={option4.text}
        backgroundColor="green"
        onClick={submitGuess}
      ></Button>
    </div>
  );
};
