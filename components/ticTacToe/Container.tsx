import React, { useState, useCallback } from "react";
import { NativeTypes } from "react-dnd-html5-backend";
import { BoardSquare } from "./BoardSquare";
import { NumberTile } from "./NumberTile";
import { ItemTypes } from "./ItemTypes";
import update from "immutability-helper";
import { Button } from "../stories/Button";

interface BoardSquareState {
  accepts: string[];
  lastDroppedItem: number;
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
  value: number;
  type: string;
}
export interface ContainerState {
  droppedBoxNames: string[];
  boardsquares: BoardSquareSpec[];
  boxes: BoxSpec[];
}

export const Container = ({
  onExitClick,
  onGameOver,
  target,
  gameNumbers,
  playerOne,
  playerTwo,
}) => {
  const TARGET = target;
  const INITIAL_GAME_DATA = [
    { accepts: [ItemTypes.NUMBER_TILE], lastDroppedItem: null },
    { accepts: [ItemTypes.NUMBER_TILE], lastDroppedItem: null },
    { accepts: [ItemTypes.NUMBER_TILE], lastDroppedItem: null },
    { accepts: [ItemTypes.NUMBER_TILE], lastDroppedItem: null },
    { accepts: [ItemTypes.NUMBER_TILE], lastDroppedItem: null },
    { accepts: [ItemTypes.NUMBER_TILE], lastDroppedItem: null },
    { accepts: [ItemTypes.NUMBER_TILE], lastDroppedItem: null },
    { accepts: [ItemTypes.NUMBER_TILE], lastDroppedItem: null },
    { accepts: [ItemTypes.NUMBER_TILE], lastDroppedItem: null },
  ];
  const [boardSquares, setBoardSquares] = useState<BoardSquareState[]>(
    INITIAL_GAME_DATA
  );

  const [boxes] = useState<BoxState[]>(
    gameNumbers.split(",").map((it) => {
      return {
        name: it.toString(),
        value: it,
        type: ItemTypes.NUMBER_TILE,
      };
    })
  );

  const [droppedBoxNames, setDroppedBoxNames] = useState<string[]>([]);

  const [isPlayerOne, setIsPlayerOne] = useState<boolean>(true);

  function isDropped(boxName: string) {
    return droppedBoxNames.indexOf(boxName) > -1;
  }

  function totalSum() {
    return boxes
      .filter(({ name }) => isDropped(name))
      .map((it) => it.value)
      .reduce((a, b) => a + b, 0);
  }

  function calculateGameOver(boardSquares: BoardSquareState[]) {
    const row1 = [boardSquares[0], boardSquares[1], boardSquares[2]];
    const row2 = [boardSquares[3], boardSquares[4], boardSquares[5]];
    const row3 = [boardSquares[6], boardSquares[7], boardSquares[8]];
    if (isRowValid(row1) || isRowValid(row2) || isRowValid(row3)) {
      return true;
    }

    const col1 = [boardSquares[0], boardSquares[3], boardSquares[6]];
    const col2 = [boardSquares[1], boardSquares[4], boardSquares[7]];
    const col3 = [boardSquares[2], boardSquares[5], boardSquares[8]];
    if (isRowValid(col1) || isRowValid(col2) || isRowValid(col3)) {
      return true;
    }

    const diag1 = [boardSquares[0], boardSquares[4], boardSquares[8]];
    const diag2 = [boardSquares[2], boardSquares[4], boardSquares[6]];
    if (isRowValid(diag1) || isRowValid(diag2)) {
      return true;
    }
    return false;
  }

  function isRowValid(row: BoardSquareState[]) {
    if (row.map((it) => it.lastDroppedItem).includes(null)) {
      return false;
    }

    const sum = row.map((it) => it.lastDroppedItem).reduce((a, b) => a + b, 0);
    console.log("SUM : " + sum);
    return sum == TARGET;
  }

  const handleDrop = useCallback(
    (index: number, item: { name: string }) => {
      const { name } = item;

      // Only handle the drop if the piece and the board square are unused
      if (
        droppedBoxNames.includes(name) ||
        droppedBoxNames.includes(name.toString())
      ) {
        return;
      }

      if (
        !droppedBoxNames.includes(name) &&
        boardSquares[index].lastDroppedItem == null
      ) {
        setDroppedBoxNames(
          update(droppedBoxNames, name ? { $push: [name] } : { $push: [] })
        );

        const newBoardSquares = update(boardSquares, {
          [index]: {
            lastDroppedItem: {
              $set: Number.parseInt(name),
            },
          },
        });
        setBoardSquares(newBoardSquares);

        const isGameOver = calculateGameOver(newBoardSquares);

        if (isGameOver) {
          if (isPlayerOne) {
            onGameOver(playerOne);
          } else {
            onGameOver(playerTwo);
          }
        } else {
          // if game is not over then next player's turn
          setIsPlayerOne(!isPlayerOne);
        }
      }
    },
    [droppedBoxNames, boardSquares, isPlayerOne]
  );

  const onResetClicked = () => {
    setBoardSquares(INITIAL_GAME_DATA);
    setDroppedBoxNames([]);
  };

  return (
    <div className="bg-white p-8 gap-8 flex sm:flex-row flex-col items-center">
      <div className="flex flex-col">
        <h1 className="text-lg text-center mb-8">
          Current Player: {isPlayerOne ? playerOne : playerTwo}
        </h1>
		<h1 className="text-lg text-center mb-8">
          Target Sum: {target}
        </h1>

        <div className="flex flex-row space-x-4">
          <Button
            textColor="white"
            backgroundColor="blue"
            label="Exit"
            onClick={onExitClick}
          />
          <Button
            backgroundColor="green"
            textColor="white"
            label="Reset"
            onClick={onResetClicked}
          />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4 w-96 justify-center">
          {boardSquares
            .slice(0, 3)
            .map(({ accepts, lastDroppedItem }, index) => {
              console.log("accepts", accepts);
              console.log("lastDroppedItem", lastDroppedItem);
              console.log("index", index);
              return (
                <BoardSquare
                  accept={accepts}
                  lastDroppedItem={lastDroppedItem}
                  onDrop={(item) => handleDrop(index, item)}
                  key={index}
                />
              );
            })}
        </div>
        <div className="flex gap-4 w-96 justify-center">
          {boardSquares
            .slice(3, 6)
            .map(({ accepts, lastDroppedItem }, index) => {
              console.log("accepts", accepts);
              console.log("lastDroppedItem", lastDroppedItem);
              console.log("index", index + 3);
              return (
                <BoardSquare
                  accept={accepts}
                  lastDroppedItem={lastDroppedItem}
                  onDrop={(item) => handleDrop(index + 3, item)}
                  key={index + 3}
                />
              );
            })}
        </div>
        <div className="flex gap-4 w-96 justify-center">
          {boardSquares
            .slice(6, 9)
            .map(({ accepts, lastDroppedItem }, index) => {
              console.log("accepts", accepts);
              console.log("lastDroppedItem", lastDroppedItem);
              console.log("index", index + 6);
              return (
                <BoardSquare
                  accept={accepts}
                  lastDroppedItem={lastDroppedItem}
                  onDrop={(item) => handleDrop(index + 6, item)}
                  key={index + 6}
                />
              );
            })}
        </div>
      </div>
      <div className="flex gap-4 flex-wrap w-96 px-8 justify-center">
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
