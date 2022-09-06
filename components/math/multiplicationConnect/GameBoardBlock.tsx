import React, {useState} from 'react'
import { calculateWinner } from '../../../pages/studentPortal/labs/multiplication-connect/Index';


const blockClick = (block, grid) => {
    (block.isSelected===false) ? (block.isSelected=true, calculateWinner(block, grid)) : block.isSelected=false;
    return {...block};
}

const GameBoardBlock = ({ blockData, gridData }) => {
  const [block, setBlock] = useState(blockData);

  return (
    <div
      onClick={()=>setBlock(blockClick(block, gridData))}
      className={`flex justify-center items-center h-full w-full cursor-pointer rounded-full    
            ${block.isSelected===false ? "hover:bg-[#F20000]/40 hover:animate-pulse" : "bg-[#F20000]/60"}`}
    >
      <p>{block.gridNumber}</p>
    </div>
  );
};

export default GameBoardBlock