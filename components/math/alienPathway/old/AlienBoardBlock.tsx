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

enum SelectedBy {
  Unselected = "UNSELECTED",
  PlayerOne = "PLAYERONE",
  PlayerTwo = "PLAYERTWO",
}

interface AlienBoardBlockProps {
  blockData: any;
  newGame: number;
  submitGuess: (guess: GuessData) => void;
  answer: string;
  isPlayerOne: boolean;
}

function numberGenerator() {
  const problem = getRandomItemFromArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  return problem;
}

interface BlockComponent {
  id: number;
  newGame: number;
  submitGuess: (guess: GuessData) => void;
  answer: string;
  gridNumber: number;
  selectedBy: SelectedBy;
}

const BlockComponent: FC<AlienBoardBlockProps> = ({
  blockData,
  newGame,
  submitGuess,
  answer,
  isPlayerOne,
}) => {
  let [randNumb, setRandNumb] = useState(0);
  let [randNumb2, setRandNumb2] = useState(0);
  const [guess, setGuess] = useState("");
  const problem = randNumb.toString() + " x " + randNumb2.toString();
  const product = (randNumb * randNumb2).toString();
  const onSubmit = (guess: string) => {
    submitGuess({
      guess: guess.toString(),
      isCorrect: guess === product,
    }),
      setGuess("");
  };
  useEffect(() => {
    setRandNumb((prev) => numberGenerator());
    setRandNumb2((prev) => numberGenerator());
  }, [newGame]);
  useEffect(() => {
    (document.getElementById("input") as HTMLInputElement).value = "";
  }, []);

  return (
    <div className="flex justify-center items-center h-full w-full cursor-pointer rounded-full">
      {blockData.id % 7 === 6 ? (
        true
      ) : (
        <div className="flex flex-row">
          <input
            id="input"
            type="number"
            className="text-sm text-white place-content-center bg-inherit w-12 placeholder:text-inherit text-center"
            onchange={(e) => setGuess(e.target.value)}
            placeholder={problem}
          ></input>
          <button
            type="submit"
            className="text-xs"
            onClick={() => onSubmit(guess)}
          >
            ▉
          </button>
        </div>
      )}
    </div>
  );
};

export default AlienBoardBlock;
