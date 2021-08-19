import React, { useEffect, useState } from "react";
import { GuessData } from "../../pages/api/guessData";
import { Button } from "../ui/Button";

export interface VerticalDigitstoNumProp {
  numArr: Array<number>;
  answer: string;
  submitGuess: (guess: GuessData) => void;
}
export const VerticalDigitstoNum: React.FC<VerticalDigitstoNumProp> = ({
  numArr,
  answer,
  submitGuess,
  ...props
}) => {
  const digitsArr = ["Thousands", "hundreds", "tens", "ones"];
  const [guess, setGuess] = useState("");
  let items = [];
  const len = numArr.length;
  function onSubmit() {
    submitGuess({ guess: guess, isCorrect: guess == answer });
  }

  function getItems() {
    for (let i = digitsArr.length - len; i < digitsArr.length; ++i) {
      items.push(
        <div className="flex flex-row items-center space-x-4">
          <b> {numArr[i - 1]}</b>&nbsp;
          {digitsArr[i]} {i < digitsArr.length - 1 ? "+" : "="}&nbsp;
        </div>
      );
    }
    return items;
  }

  return (
    <div className=" flex flex-col items-center space-y-8">
      <p className="text-center">
        What is the corresponding number in standard form?{" "}
      </p>
      <div className="flex flex-row space-x-4 items-center">
        <div className="flex flex-row items-center text-md">{getItems()}</div>
        <input
          className="border py-0.5 px-0.5 text-grey-darkest p-4 w-16"
          type="number"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
        ></input>
      </div>
      <Button
        onClick={onSubmit}
        label="Submit"
        textColor="white"
        backgroundColor="red"
      ></Button>
    </div>
  );
};
