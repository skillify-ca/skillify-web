import React, { FC, useState } from "react";
import { GuessData } from "../../../pages/api/guessData";
import AlienBoardBlock from "./AlienBoardBlock";

interface AlienBoardProps {
  grid: any;
  newGame: Number;
  submitGuess: (guess: GuessData) => void;
  blockClick(block: AlienBoardBlock): void;
  isPlayerOne: boolean;
}

const AlienBoard: FC<AlienBoardProps> = ({
  grid,
  blockClick,
  isPlayerOne,
  submitGuess,
}) => {
  return (
    <div className="px-12 pb-8">
      <div className="grid grid-cols-7 grid-rows-7 border-t-2 border-l-2  text-white text-2xl">
        {grid.map((blockData) => (
          <div
            key={blockData.id}
            className={`border-r-2 border-b-2 md:h-8 sm:h-16 h-12
                ${
                  blockData.id === 0
                    ? "rounded-tl-[4px]"
                    : blockData.id === 7
                    ? "rounded-tr-[4px]"
                    : blockData.id === 35
                    ? "rounded-bl-[4px]"
                    : blockData.id === 41
                    ? "rounded-br-[4px]"
                    : ""
                }`}
          >
            <AlienBoardBlock
              blockData={blockData}
              isPlayerOne={isPlayerOne}
              newGame={0}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlienBoard;
