import React, { FC, useEffect, useState } from "react";
import { calculateWinner } from "../../../pages/studentPortal/labs/multiplication-connect/Index";
import {
  getRndInteger,
  getRndTenthsDecimal,
  getRndHundredthsDecimal,
  getRandomItemFromArray,
} from "../../../pages/api/random";

enum SelectedBy {
  Unselected = "UNSELECTED",
  PlayerOne = "PLAYERONE",
  PlayerTwo = "PLAYERTWO",
}

interface AlienBoardBlock {
  id: number;
  newGame: number;
  gridNumber: number;
  selectedBy: SelectedBy;
}

interface AlienBoardBlockProps {
  blockData: AlienBoardBlock;
  newGame: number;
  blockClick(block: AlienBoardBlock): void;
  isPlayerOne: boolean;
}

function numberGenerator() {
  const problem = getRandomItemFromArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  return problem;
}

const AlienBoardBlock: FC<AlienBoardBlockProps> = ({
  blockData,
  newGame,
  blockClick,
  isPlayerOne,
}) => {
  let [randNumb, setRandNumb] = useState(0);
  let [randNumb2, setRandNumb2] = useState(0);
  useEffect(() => {
    setRandNumb((prev) => numberGenerator());
    setRandNumb2((prev) => numberGenerator());
  }, [newGame]);

  const product = randNumb * randNumb2;
  return (
    <div
      onClick={() => {
        blockClick(blockData);
      }}
      className={`flex justify-center items-center h-full w-full cursor-pointer rounded-full]
          ${
            // Selected block colours
            blockData.selectedBy === SelectedBy.PlayerOne
              ? "bg-[#F20000]/80"
              : blockData.selectedBy === SelectedBy.PlayerTwo
              ? "bg-[#FFDB00]/90"
              : ""
          }
          ${
            // Unselected hover animations
            isPlayerOne
              ? blockData.selectedBy === SelectedBy.Unselected
                ? "hover:bg-[#F20000]/70 hover:animate-pulse"
                : ""
              : blockData.selectedBy === SelectedBy.Unselected
              ? "hover:bg-[#FFD500]/80 hover:animate-pulse"
              : ""
          }`}
    >
      {blockData.id % 7 === 6 ? (
        true
      ) : (
        <p>
          {randNumb} x {randNumb2}
        </p>
      )}
    </div>
  );
};

export default AlienBoardBlock;
