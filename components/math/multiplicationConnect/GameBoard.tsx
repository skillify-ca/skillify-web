import React, { useState } from 'react'
import GameBoardBlock from './GameBoardBlock';


const GameBoard = ({grid}) => {
  return (
    <div className="px-28 pb-8">
      <h2 className="text-xl pb-4">GameBoard</h2>
      <div className="grid grid-cols-5 border-t-2 border-l-2 border-t-[#149ECA] border-l-[#149ECA] text-white text-2xl">
        {grid.map((i) => (
          <div
            className="border-r-2 border-b-2 h-28 border-b-[#149ECA] border-r-[#149ECA] bg-blue-900"
            key={i.id}
          >
            <GameBoardBlock blockData={i} onClick={() => onClick(i)} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameBoard;