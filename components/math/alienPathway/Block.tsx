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

function numberGenerator() {
  const problem = getRandomItemFromArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  return problem;
}

interface BlockProps {
  index: number;
  rollDisplay: string;
  currentRoll: number;
  blockNumber: number;
  newGame: number;
  answer: string;
}
export const BlockComponent: FC<BlockProps> = ({
  index,
  currentRoll,
  blockNumber,
  newGame,
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

    setGuess("");
  };
  useEffect(() => {
    // if (blockCorrect) {
    //   index = index + 1;
    // }
    setDisableInput(blockNumber != index);
  });
  useEffect(() => {
    if (blockNumber === index && !blockCorrect) {
      setBlockColor("bg-yellow-500 border-2");
    }
  });
  useEffect(() => {
    setRandNumb(numberGenerator());
    setRandNumb2(numberGenerator());
  }, [newGame]);

  console.log({ disableInput });

  return (
    <div className={blockColor}>
      <input
        id="input"
        type="number"
        value={guess}
        className="text-sm text-white place-content-center bg-inherit w-12 placeholder:text-inherit text-center"
        onChange={(e) => setGuess(e.target.value)}
        placeholder={problem}
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
