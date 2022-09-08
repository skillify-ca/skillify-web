import React, { useEffect, useState } from "react";

export enum BlockState {
  PLAYER_ONE_SELECTED,
  PLAYER_TWO_SELECTED,
  NOT_SELECTED,
}

export interface MultiplicationBlockProps {
  text: string;
  onClick: () => void;
  blockState: BlockState;
}

export const MultiplicationBlock: React.FC<MultiplicationBlockProps> = ({
  text,
  onClick,
  blockState,
  ...props
}) => {
  return (
    <div className="cursor-pointer">
      <div
        className={`w-20 h-20 flex justify-center items-center border-2 text-green-50 float-left
        ${
          blockState === BlockState.PLAYER_ONE_SELECTED
            ? "bg-red-400"
            : blockState === BlockState.PLAYER_TWO_SELECTED
            ? "bg-blue-400"
            : "bg-green-400"
        }
        `}
        onClick={onClick}
      >
        <p>{text}</p>
      </div>
    </div>
  );
};
export default MultiplicationBlock;
