import React, { FC, useEffect, useState } from "react";
import { calculateWinner } from "../../../pages/studentPortal/labs/multiplication-connect/Index";

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

  useEffect(() => {
    setBlock(blockData);
    console.log("GBB useEffect()");
  }, [blockData]);

  const blockClick = (block: GameBoardBlock) => {
    if (!block.isSelected) {
      block.isSelected = true;
      // setBlock((prev) => ({ ...prev, isSelected: true }));
    } else {
      console.log("Block already selected!");
    }
    return { ...block };
  };

  //fixme: remove before commit to main
  // console.log("block data:", block);

  /* todo: 
      - toggle this state on block to determine the colour to display on board
      - merge this into kp-twoPlayerSupport & get button working there before merge into kp-multiplicationConnect
      
      Options to determine winner:
        3. add an isPlayerOne variable to GameBoardBlock & evaluate accordingly in calculateWinner() — to make sure 4 blocks in a row are pressed by the same player
  */
  const [isPlayerOne, setIsPlayerOne] = useState(true);

  return (
    <div
      onClick={() => {
        setBlock(blockClick(block));
        calculateWinner(gridData);
      }}
      className={`flex justify-center items-center h-full w-full cursor-pointer rounded-full    
            ${
              !block.isSelected
                ? "hover:bg-[#F20000]/40 hover:animate-pulse"
                : "bg-[#F20000]/60"
            }`}
    >
      <p>{block.gridNumber}</p>
    </div>
  );
};

export default GameBoardBlock;
