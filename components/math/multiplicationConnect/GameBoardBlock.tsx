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

  const blockClick = (block: GameBoardBlock, gridData: GameBoardBlock[]) => {
    if (!block.isSelected) {
      block.isSelected = true;
      /*fixme: don't modify state directly, it should be read-only
          look more into useState (watch tutorials) and refactor this. */
      // setBlock((prevState) => ({ ...prevState, isSelected: true }));
      /* setObject((prevState) => ({
              ...prevState,
              secondKey: 'value',
            }));
            */
      calculateWinner(gridData);
    } else {
      // block.isSelected = false;
      console.log("This block is already selected!");
    }
    console.log("block data:", block);
    return { ...block };
  };

  useEffect(() => {
    setBlock(blockData);
  }, [blockData]);

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
        blockClick(blockData);
        // console.log(blockData.selectedBy);
      }}
      className={`flex justify-center items-center h-full w-full cursor-pointer rounded-full shadow-[0_0_60px_10px_rgba(0,0,0,0.3)]
          ${
            // Selected block colours
            blockData.selectedBy === selectedBy.PlayerOne
              ? "bg-[#F20000]/75"
              : blockData.selectedBy === selectedBy.PlayerTwo
              ? "bg-[#FFDB00]/75"
              : ""
          }
          ${
            // Unselected hover animations
            isPlayerOne
              ? blockData.selectedBy === selectedBy.Unselected
                ? "hover:bg-[#F20000]/75 hover:animate-pulse"
                : ""
              : blockData.selectedBy === selectedBy.Unselected
              ? "hover:bg-[#FFD500]/75 hover:animate-pulse"
              : ""
          }`}
    >
      <p>{blockData.gridNumber}</p>
    </div>
  );
};

export default GameBoardBlock;
