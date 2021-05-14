import React from "react";
import { MCOption } from "../../pages/api/question";
import { Button } from "./Button";
import { AdditionProperty } from "./MultipleChoiceTypes";

export interface MultipleChoiceWordProp {
  displayQuestion?: string;
  question?: MCOption;
  submitGuess: (e) => void;
}

export function randomize(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}

let ans;
let displayAns;
export const MultipleChoiceWord: React.FC<MultipleChoiceWordProp> = ({
  displayQuestion,
  question,
  submitGuess,
  ...props
}) => {
  const parse = () => {
    const qlen = question.text.length;
    let i = 0;
    while (i < qlen) {
      if (question[i] == "(") {
        ans = AdditionProperty.ASSOCIATIVE;
        break;
      } else {
        ++i;
      }
    }

    const part = question.text.split(" ");
    return {
      first: part[0],
      third: part[3],
    };
  };
  switch (parse().third) {
    case "0":
      ans = AdditionProperty.IDENTITY;
      break;
    default:
      ans = AdditionProperty.IDENTITY;
      break;
  }
  const MCValue = randomize(0, 3);
  switch (MCValue) {
    case 0:
      displayAns = AdditionProperty.ASSOCIATIVE;
      break;
    case 1:
      displayAns = AdditionProperty.COMMUTATIVE;
      break;
    case 2:
      displayAns = AdditionProperty.IDENTITY;
      break;
  }
  return (
    <div className="flex flex-col items-center space-y-16">
      <h1 className="text-4l underline font-bold"> {displayQuestion} </h1>
      <p className="text-2xl">{question.text}</p>
      <div className="flex flex-row  item-center space-x-4 ">
        <Button
          label="Associative"
          backgroundColor="red"
          onClick={submitGuess}
        ></Button>
        <Button
          label="Commutative"
          backgroundColor="blue"
          onClick={submitGuess}
        ></Button>
        <Button
          label="Identity"
          backgroundColor="yellow"
          onClick={submitGuess}
        ></Button>
      </div>
    </div>
  );
};
