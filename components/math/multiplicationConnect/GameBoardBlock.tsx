import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SelectedBy } from "../../../pages/api/labs/games/multiplication-connect/gameLogic";
import {
  blockClick,
  multiplicationConnectSelector,
  togglePlayer,
} from "../../../redux/multiplicationConnectSlice";

interface GameBoardBlock {
  id: number;
  gridNumber: number;
  selectedBy: SelectedBy;
}

interface GameBoardBlockProps {
  blockData: GameBoardBlock;
}

const GameBoardBlock: FC<GameBoardBlockProps> = ({ blockData }) => {
  const { isPlayerOne } = useSelector(multiplicationConnectSelector);
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => {
        dispatch(blockClick(blockData));
        dispatch(togglePlayer(isPlayerOne));
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
            // Unselected hover animation
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
