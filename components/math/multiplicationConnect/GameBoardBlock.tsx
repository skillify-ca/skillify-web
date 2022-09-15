import React, { FC, useEffect, useState } from "react";
import { calculateWinner } from "../../../pages/studentPortal/labs/multiplication-connect/Index";

enum selectedBy {
  Unselected = "UNSELECTED",
  PlayerOne = "PLAYERONE",
  PlayerTwo = "PLAYERTWO",
}

interface GameBoardBlock {
  id: number;
  gridNumber: number;
  selectedBy: selectedBy;
}

interface GameBoardBlockProps {
  blockData: GameBoardBlock;
  blockClick(block: GameBoardBlock): void;
  isPlayerOne: boolean;
}

const GameBoardBlock: FC<GameBoardBlockProps> = ({
  blockData,
  blockClick,
  isPlayerOne,
}) => {
  // console.log("Block", blockData);

  return (
    <div
      onClick={() => {
        blockClick(blockData);
        // console.log(blockData.selectedBy);
      }}
      className={`flex justify-center items-center h-full w-full cursor-pointer rounded-full shadow-[0_0_40px_10px_rgba(0,0,0,0.3)]
          ${
            // Selected block colours
            blockData.selectedBy === selectedBy.PlayerOne
              ? "bg-[#F20000]/80"
              : blockData.selectedBy === selectedBy.PlayerTwo
              ? "bg-[#FFDB00]/90"
              : ""
          }
          ${
            // Unselected hover animations
            isPlayerOne
              ? blockData.selectedBy === selectedBy.Unselected
                ? "hover:bg-[#F20000]/70 hover:animate-pulse"
                : ""
              : blockData.selectedBy === selectedBy.Unselected
              ? "hover:bg-[#FFD500]/80 hover:animate-pulse"
              : ""
          }`}
    >
      <p>{blockData.gridNumber}</p>
    </div>
  );
};

export default GameBoardBlock;
