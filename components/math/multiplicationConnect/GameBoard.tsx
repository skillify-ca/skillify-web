import React, { FC } from "react";
import { useSelector } from "react-redux";
import { multiplicationConnectSelector } from "../../../redux/multiplicationConnectSlice";
import GameBoardBlock from "./GameBoardBlock";

const GameBoard: FC = () => {
  const { grid } = useSelector(multiplicationConnectSelector);

  return (
    <div className="grid grid-cols-5 border-t-2 border-l-2 rounded-2xl border-t-[#149ECA] border-l-[#149ECA] text-white text-2xl">
      {grid.map((blockData) => (
        <div
          key={blockData.id}
          className={`border-r-2 border-b-2 aspect-square border-b-[#149ECA] border-r-[#149ECA] bg-gradient-to-br from-blue-800 to-indigo-900
                ${
                  // Round corners of GameBoard
                  blockData.id === 0
                    ? "rounded-tl-[14px]"
                    : blockData.id === 4
                    ? "rounded-tr-[14px]"
                    : blockData.id === 30
                    ? "rounded-bl-[14px]"
                    : blockData.id === 34 && "rounded-br-[14px]"
                }`}
        >
          <GameBoardBlock blockData={blockData} />
        </div>
      ))}
    </div>
  );
};

export default GameBoard;
