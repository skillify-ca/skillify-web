import React, { useState } from "react";
import { GuessData } from "../../../pages/api/guessData";
import { Button } from "../../ui/Button";

export interface WordtoHorizontalDigitsProp {
  numString: string;
  answer: Array<number>;
  submitGuess: (guess: GuessData) => void;
}

export const WordtoHorizontalDigits: React.FC<WordtoHorizontalDigitsProp> = ({
  numString,
  answer,
  submitGuess,
  ...props
}) => {
  let guessString;
  let answerLen = answer.length;

  let answerString = "";
  const digitsArr = ["thousands", "hundreds", "tens", "ones"];
  const [guess1, setGuess1] = useState("");
  const [guess2, setGuess2] = useState("");
  const [guess3, setGuess3] = useState("");
  const [guess4, setGuess4] = useState("");
  let guessValArr = [guess1, guess2, guess3, guess4];
  const inputVals = ["input1", "input2", "input3", "input4"];

  guessString = guess2 + "," + guess3 + "," + guess4 + "," + guess1;

  for (let i = 0; i < answerLen; ++i) {
    answerString += answer[i].toString() + ",";
  }

  function guessSetter(guessVal) {
    if (guessVal == 0) {
      return (e) => setGuess1(e.target.value);
    } else if (guessVal == 1) {
      return (e) => setGuess2(e.target.value);
    } else if (guessVal == 2) {
      return (e) => setGuess3(e.target.value);
    } else if (guessVal == 3) {
      return (e) => setGuess4(e.target.value);
    }
  }
  let items = [];
  answerLen = answer.length;
  function getItems() {
    for (let i = digitsArr.length - answerLen; i < digitsArr.length; ++i) {
      items.push(
        <div className="flex flex-row mb-4">
          {
            <input
              className="border py-0.5 px-0.5 text-grey-darkest p-8 w-12 "
              id={inputVals[i]}
              type="number"
              value={guessValArr[i]}
              onChange={guessSetter(i)}
            ></input>
          }
          <h1>&nbsp;{digitsArr[i]}</h1>
          {digitsArr[i] != "ones" && <span>&nbsp;+&nbsp;</span>}
        </div>
      );
    }
    return items;
  }

  function onSubmit() {
    submitGuess({
      guess: guessString,
      isCorrect: guessString == answerString,
    });
  }

  return (
    <div className="space-y-4 flex flex-col items-center">
      <h1 className="text-center mb-4">
        Write <b className="text-lg "> {numString} </b> in expanded form
      </h1>
      <div className="flex flex-row flex-wrap justify-center">{getItems()}</div>
      <Button
        onClick={onSubmit}
        label="Submit"
        textColor="white"
        backgroundColor="red"
      ></Button>
    </div>
  );
};
