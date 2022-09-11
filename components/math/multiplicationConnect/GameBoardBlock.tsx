import React, { FC, useState } from "react";
import { calculateWinner } from "../../../pages/studentPortal/labs/multiplication-connect/Index";

const blockClick = (block: GameBoardBlock, gridData: GameBoardBlock[]) => {
  if (!block.isSelected) {
    block.isSelected = true;
    calculateWinner(gridData);
  } else {
    block.isSelected = false;
  }
  return { ...block };
};

interface GameBoardBlock {
  id: number;
  gridNumber: number;
  isSelected: boolean;
}

interface GameBoardBlockProps {
  blockData: GameBoardBlock;
  gridData: GameBoardBlock[];
}

const GameBoardBlock: FC<GameBoardBlockProps> = ({ blockData, gridData }) => {
  const [block, setBlock] = useState(blockData);
  /* todo: 
      - toggle this state on block to determine the colour to display on board
      
      Options to determine winner:
        1. add block to an array in GameBoardBlock passed to calculateWinner() onClick
        2. add block to array passed to GameBoardBlock as prop from index (don't see the value in this)
        3. add an isPlayerOne variable to GameBoardBlock & evaluate accordingly in calculateWinner() — to make sure 4 blocks in a row are pressed by the same player
  */
  const [isPlayerOne, setIsPlayerOne] = useState(true);

  return (
    <div
      onClick={() => setBlock(blockClick(block, gridData))}
      className={`flex justify-center items-center h-full w-full cursor-pointer rounded-full    
            ${
              block.isSelected === false
                ? "hover:bg-[#F20000]/40 hover:animate-pulse"
                : "bg-[#F20000]/60"
            }`}
    >
      <p>{block.gridNumber}</p>
    </div>
  );
};

export default GameBoardBlock;
