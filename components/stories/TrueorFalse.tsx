import React from "react";
import { Button } from "./Button";
export interface TrueorFalseProp {
  question?: string;
}

export function randomize(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}

let ans;
let displayAns;
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
  const  num1 = parseInt(parse().first);
  const  num2 = parseInt(parse().second);
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
  const truthValue = randomize(0, 2);
  switch (truthValue) {
    case 0:
      displayAns = ans + randomize(Math.floor(-ans / 10), (Math.floor(ans / 10) + 1));
      break;
    case 1:
      displayAns = ans;
      break;
  }
  return (
    <div className="flex flex-col items-center space-y-16">
      <p className="text-3xl text-center font-normal">
        {question}  {displayAns}
      </p>
      <div className="flex flex-row  item-center space-x-4 ">
        <Button label="True" backgroundColor="green"></Button>
        <Button label="False" backgroundColor="red"></Button>
      </div>
    </div>
  );
};
