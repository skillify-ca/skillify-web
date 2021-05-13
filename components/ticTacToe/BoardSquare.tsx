import React from "react";
import { useDrop } from "react-dnd";
import { NumberTile } from "./NumberTile";
import { ItemTypes } from "./ItemTypes";

const style: React.CSSProperties = {
  height: "6rem",
  width: "6rem",
  marginBottom: "1.5rem",
  color: "white",
  padding: "1rem",
  textAlign: "center",
  fontSize: "1rem",
  lineHeight: "normal",
  float: "left",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export interface BoardSquareProps {
  accept: string[];
  lastDroppedItem?: any;
  onDrop: (item: any) => void;
}

export const BoardSquare: React.FC<BoardSquareProps> = ({
  accept,
  lastDroppedItem,
  onDrop,
}) => {
  const [{ isOver, canDrop }, drop] = useDrop({
    accept,
    drop: onDrop,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  const isActive = isOver && canDrop;
  let backgroundColor = "#222";
  if (isActive) {
    backgroundColor = "darkgreen";
  } else if (canDrop) {
    backgroundColor = "darkkhaki";
  }

  return (
    <div ref={drop} className="w-24 h-24 bg-blue-200 border-blue-800 border-2 flex justify-center items-center">
      {isActive ? "Release to drop" : ``}

      {lastDroppedItem && (
        <NumberTile
          name={lastDroppedItem}
          value={Number.parseInt(lastDroppedItem)}
          type={ItemTypes.NUMBER_TILE}
          isDropped={true}
          key={1}
        />
      )}
    </div>
  );
};
