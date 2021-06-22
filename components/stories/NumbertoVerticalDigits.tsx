import React, { useEffect, useState } from "react";
import { GuessData } from "../../pages/api/guessData";
import { Button } from "./Button";

export interface NumbertoVerticalDigitsProp {
  num: number;
  answer: Array<number>;
  submitGuess: (guess: GuessData) => void;
}

export const NumbertoVerticalDigits: React.FC<NumbertoVerticalDigitsProp> = ({
  num,
  answer,
  submitGuess,
  ...props
}) => {
  const [guess1, setGuess1] = useState("");
  const [guess2, setGuess2] = useState("");
  const [guess3, setGuess3] = useState("");
  const [guess4, setGuess4] = useState("");
  const [guess5, setGuess5] = useState("");
  let guessArr = [
    parseInt(guess1),
    parseInt(guess2),
    parseInt(guess3),
    parseInt(guess4),
    parseInt(guess5),
  ];
  function onSubmit() {
    submitGuess({
      guess: guessArr,
      isCorrect: guessArr == answer,
    });
  }

  return (
    <div className="flex flex-col items-center space-y-8">
      <h1 className="text-4m font-semibold text-center">
        Enter the Corresponding Digits
      </h1>
      <h2 className="underline text-4xl">{num}</h2>
      <div className="flex flex-row space-x-8">
        <div className="flex flex-col items-center space-y-8">
          <div className="flex flex-row space-x-8">
            <input
              className="border py-0.5 px-0.5 text-grey-darkest p-8 w-20"
              type="number"
              value={guess1}
              onChange={(e) => setGuess1(e.target.value)}
            ></input>{" "}
            <h1>ten thousands</h1>
          </div>
          <div className="flex flex-row space-x-8">
            <input
              className="border py-0.5 px-0.5 text-grey-darkest p-8 w-20"
              type="number"
              value={guess2}
              onChange={(e) => setGuess2(e.target.value)}
            ></input>{" "}
            <h1>thousands</h1>
          </div>
          <div className="flex flex-row space-x-8">
            <input
              className="border py-0.5 px-0.5 text-grey-darkest p-8 w-20"
              type="number"
              value={guess3}
              onChange={(e) => setGuess3(e.target.value)}
            ></input>{" "}
            <h1>hundreds </h1>
          </div>
        </div>
        <div className="flex flex-col items-center space-y-8">
          <div className="flex flex-row space-x-8">
            <input
              className="border py-0.5 px-0.5 text-grey-darkest p-8 w-20"
              type="number"
              value={guess4}
              onChange={(e) => setGuess4(e.target.value)}
            ></input>{" "}
            <h1>tens</h1>
          </div>
          <div className="flex flex-row space-x-8">
            <input
              className="border py-0.5 px-0.5 text-grey-darkest p-8 w-20"
              type="number"
              value={guess5}
              onChange={(e) => setGuess5(e.target.value)}
            ></input>{" "}
            <h1> ones </h1>
          </div>
        </div>
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
