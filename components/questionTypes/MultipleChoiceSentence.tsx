import React from "react";
import { MCOption } from "../../pages/api/question";
import { Button } from "../ui/Button";

export interface MultipleChoiceSentenceProp {
  displayQuestion?: string;
  image?: string[];
  properties?: string;
  option1: MCOption;
  option2: MCOption;
  option3: MCOption;
  option4: MCOption;
  answer: string;
  submitGuess?: (e) => void;
}

export function randomize(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export const MultipleChoiceSentence: React.FC<MultipleChoiceSentenceProp> = ({
  displayQuestion,
  image,
  properties,
  option1,
  option2,
  option3,
  option4,
  answer,
  submitGuess,
}) => {
  const onSubmit = (guess: string) => {
    submitGuess({
      guess,
      isCorrect: guess == answer,
    });
  };
  console.log("Properties", properties);
  return (
    <div className="flex flex-col items-center">
      <h1 className="font-semibold text-center text-4m"> {displayQuestion} </h1>
      <div className={`${properties}`}>
        {image &&
          image.map((img) => <img className="h-64 sm:h-64" src={img} />)}
      </div>
      <div className="flex flex-row space-x-4">
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
        </div>
        <div className="flex flex-col space-y-4">
          <Button
            label={option3.text}
            backgroundColor="yellow"
            onClick={() => onSubmit(option3.text)}
          ></Button>
          <Button
            label={option4.text}
            backgroundColor="green"
            onClick={() => onSubmit(option4.text)}
          ></Button>
        </div>
      </div>
    </div>
  );
};
