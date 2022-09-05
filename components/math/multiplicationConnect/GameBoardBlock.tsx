import React from 'react'

const GameBoardBlock = ({block, onClick}) => {
  return (
    <div
      className="flex justify-center items-center h-full w-full cursor-pointer rounded-full hover:bg-[#F20000]/50 transition-all"
      onClick={onClick}
    >
      <p>{block.gridNumber}</p>
    </div>
  );
}

export default GameBoardBlock