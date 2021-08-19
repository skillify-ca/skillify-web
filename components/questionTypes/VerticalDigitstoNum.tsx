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
        <div className="flex flex-row space-x-4 items-center">
          <h1 className="font-semibold">{numArr[i - 1]}</h1>
          <h1>{digitsArr[i]}</h1>
        </div>
      );
    }
    return items;
  }

  return (
    <div className=" flex flex-col items-center space-y-8">
      <h1>Enter the Corresponding Number</h1>
      <div className="flex flex-row space-x-4 items-center">
        <div className="flex flex-col items-center space-y-8">{getItems()}</div>
        <input
          className="border py-0.5 px-0.5 text-grey-darkest p-8 w-20"
          type="number"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
        ></input>

        <Button
          onClick={onSubmit}
          label="Submit"
          textColor="white"
          backgroundColor="red"
        ></Button>
      </div>
    </div>
  );
};
