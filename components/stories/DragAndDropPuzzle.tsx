import React, { ReactNode, useCallback, useState } from "react";
import { BoardSquare } from "../ticTacToe/BoardSquare";
import { ItemTypes } from "../ticTacToe/ItemTypes";
import { NumberTile } from "../ticTacToe/NumberTile";
import { BoxState } from "../ticTacToe/TicTacToeBoard";

export interface DragAndDropPuzzleProps {
  question: string;
}

type QuestionData = {
  parts: string[];
};
type PuzzleData = {
  questions: QuestionData[];
};

const DragAndDropPuzzle = ({ question }: DragAndDropPuzzleProps) => {
  const puzzleData: PuzzleData = {
    questions: [
      { parts: ["8 x 4 = ", "[3]", "2"] },
      { parts: ["[5],", " x 8 = 4", "[0]"] },
      { parts: ["8 x 6 = ", "[4]", "8"] },
      { parts: ["[8]", " x 8 = 64"] },
      { parts: ["8 x ", "[9]", " = 7", "[2]"] },
      { parts: ["2 x 8 = ", "[1]", "6"] },
      { parts: ["[7]", " x 8 = 5", "[6]"] },
    ],
  };

  const [droppedTiles, setDroppedTiles] = useState([null]);

  const [boxes] = useState<BoxState[]>(
    "1,2,3,4,5,6,7,8,9".split(",").map((it) => {
      const boxState: BoxState = {
        name: it.toString(),
        value: Number.parseInt(it),
        type: ItemTypes.NUMBER_TILE,
      };
      return boxState;
    })
  );

  const parseQuestionData = (question: QuestionData) => {
    return (
      <div className="flex items-center">
        {question.parts.map((it) => parsePart(it))}
      </div>
    );
  };

  const parsePart = (part: string) => {
    if (part.startsWith("[")) {
      return (
        <BoardSquare
          accept={[ItemTypes.NUMBER_TILE]}
          lastDroppedItem={droppedTiles[0]}
          onDrop={(item) => handleDrop(0, item)}
        />
      );
    } else {
      return <p className="text-5xl whitespace-pre">{part}</p>;
    }
  };

  function isDropped(numberTile: string) {
    return droppedTiles.includes(Number.parseInt(numberTile));
  }
  const handleDrop = useCallback((index: number, item: { name: string }) => {
    console.log("index", index, "item", item);
    setDroppedTiles((prev) => {
      const newDroppedTiles = [...prev];
      newDroppedTiles[index] = Number.parseInt(item.name);
      return newDroppedTiles;
    });
  }, []);

  return (
    <div
      className={`
        flex flex-col justify-center space-y-16 
        items-center p-8 bg-white shadow-md 
        rounded-xl max-w-screen-lg`}
    >
      <div className="grid grid-cols-2 gap-8">

      {puzzleData.questions.map((it) => parseQuestionData(it))}
      </div>

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
export default DragAndDropPuzzle;

/*
Example puzzle:
8 x 4 = [3]2
[5] x 8 = 4[0]
8 x 6 = [4]8
[8] x 8 = 64

8 x [9] = 7[2] 
2 x 8 = [1]6
[7] x 8 = 5[6]
*/
