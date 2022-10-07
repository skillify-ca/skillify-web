import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  calculateWinner,
  SelectedBy,
  WinType,
} from "../../../pages/api/labs/games/multiplication-connect/gameLogic";
import {
  blockClick,
  checkWin,
  computerBlockClick,
  diceButtonClick,
  multiplicationConnectSelector,
  Stage,
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
  const { isPlayerOne, diceButtonRef, stage, hasWinner } = useSelector(
    multiplicationConnectSelector
  );
  const dispatch = useDispatch();

  const handleBlockClick = () => {
    // blockClick, togglePlayer, checkWin only when Stage.GAME_PLAY
    if (stage === Stage.GAME_PLAY) {
      if (isPlayerOne) {
        dispatch(blockClick(blockData));
        dispatch(checkWin(blockData)); // **why does this work without sending grid state?
        dispatch(togglePlayer(isPlayerOne));
      } else {
        dispatch(diceButtonClick(diceButtonRef));
        setTimeout(() => dispatch(computerBlockClick(blockData)), 500);
        console.log("block click for computer done");
        dispatch(checkWin(blockData)); // **why does this work without sending grid state?
        dispatch(togglePlayer(isPlayerOne));
      }
    }
    // if (stage === Stage.GAME_PLAY) {
    //   dispatch(checkWin(blockData)); // **why does this work without sending grid state?
    //   dispatch(togglePlayer(isPlayerOne));
    // }
  };

  return (
    <div
      onClick={handleBlockClick}
      className={`flex justify-center items-center h-full w-full rounded-full shadow-[0_0_40px_10px_rgba(0,0,0,0.3)] ${
        stage === Stage.GAME_PLAY && "cursor-pointer"
      }
          ${
            stage !== Stage.GAME_OVER &&
            // Selected block colours
            (blockData.selectedBy === SelectedBy.PlayerOne
              ? `bg-[#F20000]/80 ${stage === Stage.GAME_WIN && "contrast-75"}`
              : blockData.selectedBy === SelectedBy.PlayerTwo &&
                `bg-[#FFDB00]/90 ${stage === Stage.GAME_WIN && "contrast-75"}`)
          }
          ${
            // Unselected hover animation
            stage === Stage.GAME_PLAY &&
            (isPlayerOne
              ? blockData.selectedBy === SelectedBy.Unselected
                ? "hover:bg-[#F20000]/70 hover:animate-pulse"
                : ""
              : blockData.selectedBy === SelectedBy.Unselected &&
                "hover:bg-[#FFD500]/80 hover:animate-pulse")
          }
          ${
            // Game win styling
            stage === Stage.GAME_WIN &&
            blockData.selectedBy === SelectedBy.Winner &&
            (hasWinner === WinType.PlayerOne
              ? "bg-gradient-to-r from-[#F20000]/90 to-fuchsia-900 scale-125 contrast-150"
              : "bg-gradient-to-br from-[#FFDB00]/90 to-amber-900 scale-125 brightness-150")
          }`}
    >
      <p>{blockData.gridNumber}</p>
    </div>
  );
};

export default GameBoardBlock;
