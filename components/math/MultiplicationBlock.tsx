import React, { useEffect, useState } from "react";

export interface MultiplicationBlockProps {
  text: string;
  selected: boolean;
  onClick: boolean;
  player: boolean;
}

export const MultiplicationBlock: React.FC<MultiplicationBlockProps> = ({
  text,
  onClick,
  player,
  ...props
}) => {
  const [selected, setSelected] = useState(false);

  const handleSelected = () => {
    setSelected(!selected);
  };

  return (
    <div>
      <ul
        className={`w-20 h-20 flex justify-center items-center border-2 text-green-50 float-left
        ${!selected ? "bg-green-400" : "bg-red-400"} `}
        onClick={handleSelected}
      >
        <p>{text}</p>
      </ul>
    </div>
  );
};
export default MultiplicationBlock;
