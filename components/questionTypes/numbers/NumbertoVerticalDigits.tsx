import React, { useState } from "react";
import { GuessData } from "../../../pages/api/guessData";
import { Skill } from "../../../pages/api/skill";
import { Button } from "../../ui/Button";

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

    setGuess1("");
    setGuess1("");
    setGuess3("");
    setGuess4("");
  }

  return (
    <div className="flex flex-col items-center space-y-8">
      <h2 className="text-xl">
        {" "}
        Write <b className="text-2xl">{num} </b>in expanded form{" "}
      </h2>
      <div className="flex flex-row">
        <div className="flex flex-row">
          <input
            className="border py-0.5 px-0.5 text-grey-darkest p-8 w-12"
            type="number"
            value={guess3}
            onChange={(e) => setGuess3(e.target.value)}
          ></input>{" "}
          <h1>&nbsp;hundreds +&nbsp; </h1>
        </div>

        <div className="flex flex-row">
          <input
            className="border py-0.5 px-0.5 text-grey-darkest p-8 w-12"
            type="number"
            value={guess4}
            onChange={(e) => setGuess4(e.target.value)}
          ></input>{" "}
          <h1>&nbsp;tens +&nbsp;</h1>
        </div>
        <div className="flex flex-row">
          <input
            className="border py-0.5 px-0.5 text-grey-darkest p-8 w-12"
            type="number"
            value={guess5}
            onChange={(e) => setGuess5(e.target.value)}
          ></input>{" "}
          <h1> &nbsp;ones&nbsp; </h1>
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
