import React from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "./ItemTypes";

const style: React.CSSProperties = {
  cursor: "move",
  float: "left",
};

export interface NumberTileProps {
  name: string;
  value: number;
  type: string;
  isDropped: boolean;
}

export const NumberTile: React.FC<NumberTileProps> = ({ name, value, type, isDropped }) => {
  const [{ opacity }, drag] = useDrag({
    item: { name, type },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.4 : 1,
    }),
  });

  return (
    <div ref={drag} style={{ ...style, opacity }}>
      <div className="bg-purple-400 w-16 h-16 flex items-center justify-center text-5xl">
        {value}
      </div>
    </div>
  );
};
