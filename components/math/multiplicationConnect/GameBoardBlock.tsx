import React, { FC, useState } from "react";
import { calculateWinner } from "../../../pages/studentPortal/labs/multiplication-connect/Index";

const blockClick = (block, grid) => {
  if (!block.isSelected) {
    block.isSelected = true;
    calculateWinner(grid);
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
