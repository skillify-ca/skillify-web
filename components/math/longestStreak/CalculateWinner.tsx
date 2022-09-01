import React, { useEffect, useState } from "react";
import { STAGE } from "../../../pages/games";
import {
  calculateWinner,
  gameState,
  handlePlayGame,
  setStage,
  showEndGameImage,
} from "../../../pages/studentPortal/labs/multiplication/game";
import { Button } from "../../ui/Button";
import MultiplicationBlock from "./MultiplicationBlock";

export enum BlockState {
  PLAYER_ONE_SELECTED,
  PLAYER_TWO_SELECTED,
  NOT_SELECTED,
}

export interface CalculateWinnerProps {
  text: string;
  onClick: () => void;
  blockState: BlockState;
}

export const CalculateWinner: React.FC<CalculateWinnerProps> = ({
  text,
  onClick,
  ...props
}) => {
  return (
    <div className="flex-row justify-center">
      <div className="flex justify-center animate-bounce space-y-6 py-4 bg-gradient-to-b bg-charmander hover:bg-pikachu-500 text-white px-3 font-bold text-xl border-b-4 rounded-lg active:border-b-2 cursor-pointer`">
        {calculateWinner(gameState)}
      </div>
      <div className="flex justify-center"> {showEndGameImage(gameState)}</div>
      <p className="py-8 flex justify-center">
        Take heart. Practice makes perfect. Begin again!
      </p>
      <div className="flex justify-center">
        <Button label={"Play Again"} onClick={handlePlayGame} />
      </div>
    </div>
  );
};
export default CalculateWinner;
