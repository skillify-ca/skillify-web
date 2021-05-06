import React from "react";
import { Button } from "./Button";
export interface TrueorFalseProp {
  question?: string;
}

export function randomize(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var ans;
var DisplayAns;
export const TrueorFalse: React.FC<TrueorFalseProp> = ({
  question,
  ...props
}) => {
  const parse = () => {
    const part = question.split(" ");
    return {
      first: part[0],
      operator: part[1],
      second: part[2],
    };
  };
  var num1 = parseInt(parse().first);
  var num2 = parseInt(parse().second);
  switch (parse().operator) {
    case "+":
      ans = num1 + num2;
      break;
    case "-":
      ans = num1 - num2;
      break;
    case "*":
      ans = num1 * num2;
      break;
    case "/":
      ans = num1 / num2;
      break;
  }
  const TruthValue = randomize(0, 2);
  switch (TruthValue) {
    case 0:
      DisplayAns = ans + randomize(Math.floor(-ans / 10), Math.floor(ans / 10));
      break;
    case 1:
      DisplayAns = ans;
      break;
  }
  console.log(question);
  return (
    <div className="flex flex-col items-center">
      <p className="text-3xl text-center">
        {question}  {DisplayAns}
      </p>
      <div className="flex flex-row  item-center space-x-10">
        <Button label="True"></Button>
        <Button label="False"></Button>
      </div>
    </div>
  );
};
