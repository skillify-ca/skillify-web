import React, { useEffect, useState } from "react";
import { GuessData } from "../../pages/api/guessData";
import { Button } from "./Button";

export interface VerticalDigitstoNumProp {
  numArr: Array<number>;
  answer: number;
  submitGuess: (guess: GuessData) => void;
}
export const VerticalDigitstoNum: React.FC<VerticalDigitstoNumProp> = ({
  numArr,
  answer,
  submitGuess,
  ...props
}) => {
  const [guess, setGuess] = useState("");
  let items = [];
  const len = numArr.length;
  function onSubmit() {
    submitGuess({ guess: guess, isCorrect: guess == answer.toString() });
  }
  for (let i = 0; i < len; ++i) {
    if (i == 0) {
      items.push(
        <div className="flex flex-row space-x-4 items-center">
          <h1 className="font-semibold">{numArr[i]}</h1>
          <h1>ten thousands</h1>
        </div>
      );
    } else if (i == 1) {
      items.push(
        <div className="flex flex-row space-x-4 items-center">
          <h1 className="font-semibold">{numArr[i]}</h1>
          <h1> thousands</h1>
        </div>
      );
    } else if (i == 2) {
      items.push(
        <div className="flex flex-row space-x-4 items-center">
          <h1 className="font-semibold">{numArr[i]}</h1>
          <h1> hundreds</h1>
        </div>
      );
    } else if (i == 3) {
      items.push(
        <div className="flex flex-row space-x-4 items-center">
          <h1 className="font-semibold">{numArr[i]}</h1>
          <h1> tens</h1>
        </div>
      );
    } else if (i == 4) {
      items.push(
        <div className="flex flex-row space-x-4 items-center">
          <h1 className="font-semibold">{numArr[i]}</h1>
          <h1> ones</h1>
        </div>
      );
    }
  }
  return (
    <div className=" flex flex-col items-center space-y-8">
      <h1>Enter the Corresponding Number</h1>
      <div className="flex flex-row space-x-4 items-center">
        <div className="flex flex-col items-center space-y-8">{items}</div>
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
