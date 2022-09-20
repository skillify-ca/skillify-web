import React, { FC, useEffect, useState } from "react";
import {
  calculateWinner,
  SelectedBy,
} from "../../../pages/studentPortal/labs/multiplication-connect/Index";

interface GameBoardBlock {
  id: number;
  gridNumber: number;
  selectedBy: SelectedBy;
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
  return (
    <div
      onClick={() => {
        blockClick(blockData);
      }}
      className={`flex justify-center items-center h-full w-full cursor-pointer rounded-full shadow-[0_0_40px_10px_rgba(0,0,0,0.3)]
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
      <p>{blockData.gridNumber}</p>
    </div>
  );
};

export default GameBoardBlock;
