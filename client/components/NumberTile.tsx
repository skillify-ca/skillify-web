import React from "react";
import { useDrag } from "react-dnd";

const style: React.CSSProperties = {
  cursor: "move",
  float: "left",
};

export interface NumberTileProps {
  name: number;
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
      <div className="bg-purple-400 w-24 h-24 m-4 flex items-center justify-center">
        {name}
      </div>
    </div>
  );
};
