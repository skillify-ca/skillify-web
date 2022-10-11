import React, { FC, useEffect, useState } from "react";
import { calculateWinner } from "../../../pages/studentPortal/labs/multiplication-connect/Index";
import { GuessData } from "../../../pages/api/guessData";
import {
  getRndInteger,
  getRndTenthsDecimal,
  getRndHundredthsDecimal,
  getRandomItemFromArray,
} from "../../../pages/api/random";
import { id } from "date-fns/locale";
import { type } from "os";
import input from "postcss/lib/input";
import { current } from "@reduxjs/toolkit";

enum SelectedBy {
  Unselected = "UNSELECTED",
  PlayerOne = "PLAYERONE",
  PlayerTwo = "PLAYERTWO",
}

function numberGenerator() {
  const problem = getRandomItemFromArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  return problem;
}

interface BlockProps {
  index: number;
  currentRoll: number;
  blockNumber: number;
  newGame: number;
  // submitGuess: (guess: GuessData) => string;
  answer: string;
}
export const BlockComponent: FC<BlockProps> = ({
  index,
  currentRoll,
  blockNumber,
  newGame,
  // submitGuess,
  answer,
}) => {
  const [randNumb, setRandNumb] = useState(0);
  const [randNumb2, setRandNumb2] = useState(0);
  const [blockColor, setBlockColor] = useState("");
  const [blockAnswered, setBlockAnswered] = useState(false);
  const [blockCorrect, setBlockCorrect] = useState(false);
  const [dieRoll, setDieRoll] = useState("");
  const [guess, setGuess] = useState("");
  const [blockDisable, setBlockDisable] = useState(true);
  const [multproblem, setMultProblem] = useState("");
  const [indexNumber, setIndexNumber] = useState(0);
  const [disableInput, setDisableInput] = useState(true);
  const problem = randNumb.toString() + " x " + randNumb2.toString();
  const product = (randNumb * randNumb2).toString();

  const onSubmit = (guess: string) => {
    if (guess === product) {
      setBlockAnswered(true);
      setBlockCorrect(true);
      setBlockColor("bg-green-500 border-2");
    } else {
      setBlockAnswered(true);
      setBlockCorrect(false);
      setBlockColor("bg-red-500 border-2");
    }
    // submitGuess({
    //   guess: guess.toString(),
    //   isCorrect: guess === product,
    // });
    setGuess("");
  };
  useEffect(() => {
    setDisableInput(blockNumber != index);
  });
  // useEffect(() => {
  //   !{ disableInput }
  //     ? setBlockColor("bg-yellow-250 border2")
  //     : setBlockColor("border 2");
  // });
  useEffect(() => {
    setRandNumb(numberGenerator());
    setRandNumb2(numberGenerator());
  }, [newGame]);

  // useEffect(() => {
  //   setDieRoll(currentRoll);
  // }, []);
  console.log({ disableInput });

  return (
    <div className={blockColor}>
      <p>{/* {blockNumber} {indexNumber} */}</p>
      <input
        id="input"
        type="number"
        value={guess}
        className="text-sm text-white place-content-center bg-inherit w-12 placeholder:text-inherit text-center"
        onChange={(e) => setGuess(e.target.value)}
        // placeholder={currentRoll}
        placeholder={problem}
        // dynamic logic to disable unwanted row
        disabled={disableInput}
      ></input>
      <button
        hidden={disableInput}
        type="submit"
        className="text-xs"
        onClick={() => onSubmit(guess)}
      >
        ▢
      </button>
    </div>
  );
};

export default BlockComponent;
