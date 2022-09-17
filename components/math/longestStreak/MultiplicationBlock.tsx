import React, { useEffect, useState } from "react";

export enum BlockState {
  PLAYER_ONE_SELECTED,
  PLAYER_TWO_SELECTED,
  NOT_SELECTED,
  HIGHLIGHTED,
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
            ? "bg-[#16acea]"
            : blockState === BlockState.PLAYER_TWO_SELECTED
            ? "bg-[#4203c9]"
            : blockState === BlockState.HIGHLIGHTED
            ? "bg-blue-400 border-[#F4FFFDFF] border-width-5fr drop-shadow-2xl"
            : "bg-purple-500"
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
