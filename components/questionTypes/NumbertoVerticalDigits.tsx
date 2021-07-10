import React, { useEffect, useState } from "react";
import { GuessData } from "../../pages/api/guessData";
import { Skill } from "../../pages/api/skill";
import { Button } from "../ui/Button";

export interface NumbertoVerticalDigitsProp {
  num: string;
  skill: Skill;
  answer: Array<number>;
  submitGuess: (guess: GuessData) => void;
}

export const NumbertoVerticalDigits: React.FC<NumbertoVerticalDigitsProp> = ({
  num,
  skill,
  answer,
  submitGuess,
  ...props
}) => {
  // will use later when more grades are added
  const [guess1, setGuess1] = useState("");
  const [guess2, setGuess2] = useState("");
  const [guess3, setGuess3] = useState("");
  const [guess4, setGuess4] = useState("");
  const [guess5, setGuess5] = useState("");

  function answertoStringCalc(answer: number[]): string {
    let ansStr = "";
    for (let i = 0; i < answer.length; ++i) {
      ansStr += answer[i].toString() + ",";
    }
    return ansStr;
  }
  function onSubmit() {
    let guessStr = guess3 + "," + guess4 + "," + guess5 + ",";
    submitGuess({
      guess: guessStr,
      isCorrect: guessStr == answertoStringCalc(answer),
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
          <div className={` flex-row space-x-8 hidden`}>
            <input
              className="border py-0.5 px-0.5 text-grey-darkest p-8 w-20"
              type="number"
              value={guess1}
              onChange={(e) => setGuess1(e.target.value)}
            ></input>{" "}
            <h1>ten thousands</h1>
          </div>
          <div className=" flex-row space-x-8 hidden">
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
