import React, { useState, useCallback } from "react";
import { NativeTypes } from "react-dnd-html5-backend";
import { BoardSquare } from "./BoardSquare";
import { NumberTile } from "./NumberTile";
import { ItemTypes } from "./ItemTypes";
import update from "immutability-helper";

interface BoardSquareState {
  accepts: string[];
  lastDroppedItem: any;
}

interface BoxState {
  name: string;
  value: number;
  type: string;
}

export interface BoardSquareSpec {
  accepts: string[];
  lastDroppedItem: any;
}
export interface BoxSpec {
  name: string;
  type: string;
}
export interface ContainerState {
  droppedBoxNames: string[];
  boardsquares: BoardSquareSpec[];
  boxes: BoxSpec[];
}

export const Container: React.FC = () => {
  const [boardSquares, setBoardSquares] = useState<BoardSquareState[]>([
    { accepts: [ItemTypes.NUMBER_TILE], lastDroppedItem: null },
    { accepts: [ItemTypes.NUMBER_TILE], lastDroppedItem: null },
    { accepts: [ItemTypes.NUMBER_TILE], lastDroppedItem: null },
    { accepts: [ItemTypes.NUMBER_TILE], lastDroppedItem: null },
    { accepts: [ItemTypes.NUMBER_TILE], lastDroppedItem: null },
    { accepts: [ItemTypes.NUMBER_TILE], lastDroppedItem: null },
    { accepts: [ItemTypes.NUMBER_TILE], lastDroppedItem: null },
    { accepts: [ItemTypes.NUMBER_TILE], lastDroppedItem: null },
    { accepts: [ItemTypes.NUMBER_TILE], lastDroppedItem: null },
  ]);

  const [boxes] = useState<BoxState[]>([
    { name: "1", value: 1, type: ItemTypes.NUMBER_TILE },
    { name: "2", value: 2, type: ItemTypes.NUMBER_TILE },
    { name: "3", value: 3, type: ItemTypes.NUMBER_TILE },
    { name: "4", value: 4, type: ItemTypes.NUMBER_TILE },
    { name: "5", value: 5, type: ItemTypes.NUMBER_TILE },
    { name: "6", value: 6, type: ItemTypes.NUMBER_TILE },
    { name: "7", value: 7, type: ItemTypes.NUMBER_TILE },
    { name: "8", value: 8, type: ItemTypes.NUMBER_TILE },
    { name: "9", value: 9, type: ItemTypes.NUMBER_TILE },
  ]);

  const [droppedBoxNames, setDroppedBoxNames] = useState<string[]>([]);

  function isDropped(boxName: string) {
    return droppedBoxNames.indexOf(boxName) > -1;
  }

  const handleDrop = useCallback(
    (index: number, item: { name: string, value: number }) => {
      const { name } = item;
      setDroppedBoxNames(
        update(droppedBoxNames, name ? { $push: [name] } : { $push: [] })
      );
      setBoardSquares(
        update(boardSquares, {
          [index]: {
            lastDroppedItem: {
              $set: name,
            },
          },
        })
      );
    },
    [droppedBoxNames, boardSquares]
  );

  return (
    <div>
      <div style={{ overflow: "hidden", clear: "both" }}>
        {boardSquares.map(({ accepts, lastDroppedItem }, index) => (
          <BoardSquare
            accept={accepts}
            lastDroppedItem={lastDroppedItem}
            onDrop={(item) => handleDrop(index, item)}
            key={index}
          />
        ))}
      </div>

      <div style={{ overflow: "hidden", clear: "both" }}>
        {boxes
          .filter(({ name }) => !isDropped(name))
          .map(({ name, value, type }, index) => (
            <NumberTile
              name={name}
              value={value}
              type={type}
              isDropped={isDropped(name)}
              key={index}
            />
          ))}
      </div>
    </div>
  );
};
