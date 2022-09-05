import React, {useState} from 'react'


const blockClick = (block) => {
    (block.isSelected===false) ? block.isSelected=true : block.isSelected=false;
    console.log(block);
    return {...block};
}

const GameBoardBlock = ({ blockData, onClick }) => {
  const [block, setBlock] = useState(blockData);

  return (
    <div
      onClick={()=>setBlock(blockClick(block))}
      className={`flex justify-center items-center h-full w-full cursor-pointer rounded-full duration-300 
            ${block.isSelected===false ? "hover:bg-[#F20000]/40 hover:animate-pulse" : "bg-[#F20000]/40"}`}
    >
      <p>{block.gridNumber}</p>
    </div>
  );
};

export default GameBoardBlock