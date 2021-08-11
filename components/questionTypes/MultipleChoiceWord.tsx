import React, { ReactNode } from "react";
import { MCOption } from "../../pages/api/question";
import { Button } from "../ui/Button";

export interface MultipleChoiceWordProp {
  options: MCOption[];
  answer: string;
  submitGuess: (e) => void;
  children: ReactNode;
}

export function randomize(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export const MultipleChoiceWord: React.FC<MultipleChoiceWordProp> = ({
  options,
  answer,
  submitGuess,
  children,
}) => {
  const onSubmit = (guess: string) => {
    submitGuess({
      guess,
      isCorrect: guess == answer,
    });
  };

  return (
    <div className="flex flex-col items-center space-y-16">
      {children}
      <div className="flex flex-row  item-center space-x-4 ">
        <Button
          label={options[0].text}
          backgroundColor="red"
          onClick={() => onSubmit(options[0].id)}
        ></Button>
        {options[1] && (
          <Button
            label={options[1].text}
            backgroundColor="blue"
            onClick={() => onSubmit(options[1].id)}
          ></Button>
        )}
        {options[2] && (
          <Button
            label={options[2].text}
            backgroundColor="yellow"
            onClick={() => onSubmit(options[2].id)}
          ></Button>
        )}
      </div>
    </div>
  );
};
