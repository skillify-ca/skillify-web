import React, { useCallback, useState } from "react";
import { BoardSquare } from "./BoardSquare";
import { ItemTypes } from "./ItemTypes";
import { NumberTile } from "./NumberTile";
import update from "immutability-helper";

export type BoxState = {
  name: string;
  value: number;
  type: string;
};

export const TicTacToeBoard = (props) => {
  function isDropped(boxName: string) {
    const cells: number[] = props.G.cells;
    return cells.includes(Number.parseInt(boxName))
  }
  const gameNumbers = "1,2,3,4,5,6,7,8,9";
  const [boxes] = useState<BoxState[]>(
    gameNumbers.split(",").map((it) => {
      const boxState: BoxState = {
        name: it.toString(),
        value: Number.parseInt(it),
        type: ItemTypes.NUMBER_TILE,
      };
      return boxState;
    })
  );

  let winner = null;
  if (props.ctx.gameover) {
    winner =
      props.ctx.gameover.winner !== undefined ? (
        <div id="winner">Winner: {props.ctx.gameover.winner}</div>
      ) : (
        <div id="winner">Draw!</div>
      );
  }

  const handleDrop = useCallback((index: number, item: { name: string }) => {
    console.log("index", index, "item", item);
    props.moves.placeCell(index, Number.parseInt(item.name));
  }, []);

  return (
    <div>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4 w-96 justify-center">
          {props.G.cells.slice(0, 3).map((cell, index) => {
            return (
              <BoardSquare
                accept={[ItemTypes.NUMBER_TILE]}
                lastDroppedItem={cell}
                onDrop={(item) => handleDrop(index, item)}
                key={index}
              />
            );
          })}
        </div>
        <div className="flex gap-4 w-96 justify-center">
          {props.G.cells.slice(3, 6).map((cell, index) => {
            return (
              <BoardSquare
                accept={[ItemTypes.NUMBER_TILE]}
                lastDroppedItem={cell}
                onDrop={(item) => handleDrop(index + 3, item)}
                key={index + 3}
              />
            );
          })}
        </div>
        <div className="flex gap-4 w-96 justify-center">
          {props.G.cells.slice(6, 9).map((cell, index) => {
            return (
              <BoardSquare
                accept={[ItemTypes.NUMBER_TILE]}
                lastDroppedItem={cell}
                onDrop={(item) => handleDrop(index + 6, item)}
                key={index + 6}
              />
            );
          })}
        </div>
      </div>
      {winner}
      <div className="flex gap-4 flex-wrap w-96 sm:px-0 px-8 justify-center">
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

export default TicTacToeBoard;
