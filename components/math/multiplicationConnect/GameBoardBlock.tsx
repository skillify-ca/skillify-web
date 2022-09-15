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
  console.log("Block", blockData);

  return (
    <div
      onClick={() => {
        blockClick(blockData);
      }}
      className={`flex justify-center items-center h-full w-full cursor-pointer rounded-full    
            ${
              // If playerOne to set hover animation
              /* isPlayerOne
                ? blockData.selectedBy === selectedBy.Unselected
                  ? "hover:bg-[#F20000]/40 hover:animate-pulse"
                  : ""
                : "" */

              // Set existing blocks based on selectedBy
              blockData.selectedBy == selectedBy.PlayerOne
                ? console.log("Player one selected block")
                : ""

              /* isPlayerOne
                ? !blockData.isSelected
                  ? "hover:bg-[#F20000]/40 hover:animate-pulse"
                  : "bg-[#F20000]/60"
                : !blockData.isSelected
                ? "hover:bg-[#FFDB00]/40 hover:animate-pulse"
                : "bg-[#FFDB00]/60" */

              /*  !blockData.isSelected
                ? "hover:bg-[#F20000]/40 hover:animate-pulse"
                : "bg-[#F20000]/60" */
            }`}
    >
      <p>{blockData.gridNumber}</p>
    </div>
  );
};

export default GameBoardBlock;
