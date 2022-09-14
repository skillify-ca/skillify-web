import { FieldNode } from "graphql";
import React, { FC, useState } from "react";
import GameBoardBlock from "./GameBoardBlock";

interface GameBoardProps {
  grid: GameBoardBlock[];
  blockClick(block: GameBoardBlock): void;
}

const GameBoard: FC<GameBoardProps> = ({ grid, blockClick }) => {
  return (
    <div className="px-20">
      <h2 className="pb-4 text-xl">GameBoard</h2>
      <div className="grid grid-cols-5 border-t-2 border-l-2 rounded-2xl border-t-[#149ECA] border-l-[#149ECA] text-white text-2xl">
        {grid.map((blockData) => (
          <div
            key={blockData.id}
            className={`border-r-2 border-b-2 md:h-32 sm:h-24 h-20 border-b-[#149ECA] border-r-[#149ECA] bg-blue-900
                ${
                  blockData.id === 0
                    ? "rounded-tl-2xl"
                    : blockData.id === 4
                    ? "rounded-tr-2xl"
                    : blockData.id === 30
                    ? "rounded-bl-2xl"
                    : blockData.id === 34
                    ? "rounded-br-2xl"
                    : ""
                }`}
          >
            <GameBoardBlock
              blockData={blockData}
              gridData={grid}
              blockClick={blockClick}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameBoard;
