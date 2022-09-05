import React, {useState} from 'react'


const onBlockClick = (block) => {
    (block.isSelected===false) ? block.isSelected=true: block.isSelected=false;
    console.log(block);
}

const GameBoardBlock = ({ blockData, onClick }) => {
  const [block, setBlock] = useState(blockData);

  return (
    <div
      className="flex justify-center items-center h-full w-full cursor-pointer rounded-full hover:bg-[#F20000]/40 transition-all"
      onClick={()=>onBlockClick(block)}
    >
      <p>{block.gridNumber}</p>
    </div>
  );
};

export default GameBoardBlock