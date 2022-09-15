import React, { FC, useEffect, useState } from "react";
import { calculateWinner } from "../../../pages/studentPortal/labs/multiplication-connect/Index";

<<<<<<< Updated upstream
interface GameBoardBlock {
  id: number;
  gridNumber: number;
  isSelected: boolean;
=======
enum SelectedBy {
  Unselected = "UNSELECTED",
  PlayerOne = "PLAYERONE",
  PlayerTwo = "PLAYERTWO",
}

interface GameBoardBlock {
  id: number;
  gridNumber: number;
  selectedBy: SelectedBy;
>>>>>>> Stashed changes
}

interface GameBoardBlockProps {
  blockData: GameBoardBlock;
  gridData: GameBoardBlock[];
}

const GameBoardBlock: FC<GameBoardBlockProps> = ({ blockData, gridData }) => {
  const [block, setBlock] = useState(blockData);

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
<<<<<<< Updated upstream
      onClick={() => setBlock(blockClick(block, gridData))}
      className={`flex justify-center items-center h-full w-full cursor-pointer rounded-full    
            ${
              block.isSelected === false
                ? "hover:bg-[#F20000]/40 hover:animate-pulse"
                : "bg-[#F20000]/60"
            }`}
=======
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
>>>>>>> Stashed changes
    >
      <p>{block.gridNumber}</p>
    </div>
  );
};

export default GameBoardBlock;
