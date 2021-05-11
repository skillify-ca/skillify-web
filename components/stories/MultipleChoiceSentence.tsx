import React from "react";
import { Button } from "./Button";
import { AdditionProperty } from "./MultipleChoiceTypes";

export interface MultipleChoiceSentenceProp {
  displayQuestion?: string;
  option1: { question: string; type: AdditionProperty };
  option2: { question: string; type: AdditionProperty };
  option3: { question: string; type: AdditionProperty };
  option4: { question: string; type: AdditionProperty };
  answer: AdditionProperty;
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
  const parse = () => {
    const arr = [option1, option2, option3, option4];
    for (const o of arr) {
      const qlen = o.question.length;
      let i = 0;
      while (i < qlen) {
        if (o.question[i] == "(") {
          o.type = AdditionProperty.ASSOCIATIVE;
          break;
        } else {
          ++i;
        }
      }
      if (o.type == null) {
        const part = o.question.split(" ");
        return {
          first: part[0],
          third: part[3],
        };
      }
      switch (parse().third) {
        case "0":
          o.type = AdditionProperty.IDENTITY;
          break;
        default:
          o.type = AdditionProperty.COMMUTATIVE;

          break;
      }
    }
  };
  return (
    <div className="flex flex-col items-center space-y-16">
      <h1 className="text-4xl"> {displayQuestion} </h1>
      <Button
        label={option1.question}
        backgroundColor="red"
        onClick={submitGuess}
      ></Button>
      <Button
        label={option2.question}
        backgroundColor="blue"
        onClick={submitGuess}
      ></Button>
      <Button
        label={option3.question}
        backgroundColor="yellow"
        onClick={submitGuess}
      ></Button>
      <Button
        label={option4.question}
        backgroundColor="green"
        onClick={submitGuess}
      ></Button>
    </div>
  );
};
