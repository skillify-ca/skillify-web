import React, { ReactNode, useCallback, useState } from "react";
import { GuessData } from "../../pages/api/guessData";
import { BoardSquare } from "../ticTacToe/BoardSquare";
import { ItemTypes } from "../ticTacToe/ItemTypes";
import { NumberTile } from "../ticTacToe/NumberTile";
import { BoxState } from "../ticTacToe/TicTacToeBoard";
import { Button } from "./Button";

export interface DragAndDropPuzzleProps {
  onSubmit: (guess: GuessData) => void;
}

type TileData = {
  type: string;
  index: number;
};
type QuestionPart = {
  text?: string;
  tileData?: TileData;
};
type QuestionData = {
  parts: QuestionPart[];
};
type PuzzleData = {
  answer: string;
  questions: QuestionData[];
};

const DragAndDropPuzzle = ({ onSubmit }: DragAndDropPuzzleProps) => {
  const puzzleData: PuzzleData = {
    answer: "3,5,0,4,8,9,2,1,7,6",
    questions: [
      {
        parts: [
          { text: "8 x 4 = " },
          { tileData: { type: "tile", index: 0 } },
          { text: "2" },
        ],
      },
      {
        parts: [
          { tileData: { type: "tile", index: 1 } },
          { text: " x 8 = 4" },
          { tileData: { type: "tile", index: 2 } },
        ],
      },
      {
        parts: [
          { text: "8 x 6 = " },
          { tileData: { type: "tile", index: 3 } },
          { text: "8" },
        ],
      },
      {
        parts: [
          { tileData: { type: "tile", index: 4 } },
          { text: " x 8 = 64" },
        ],
      },
      {
        parts: [
          { text: "8 x " },
          { tileData: { type: "tile", index: 5 } },
          { text: " = 7" },
          { tileData: { type: "tile", index: 6 } },
        ],
      },
      {
        parts: [
          { text: "2 x 8 = " },
          { tileData: { type: "tile", index: 7 } },
          { text: "6" },
        ],
      },
      {
        parts: [
          { tileData: { type: "tile", index: 8 } },
          { text: " x 8 = 5" },
          { tileData: { type: "tile", index: 9 } },
        ],
      },
    ],
  };

  const [droppedTiles, setDroppedTiles] = useState<number[]>([]);

  const [boxes] = useState<BoxState[]>(
    "0,1,2,3,4,5,6,7,8,9".split(",").map((it) => {
      const boxState: BoxState = {
        name: it.toString(),
        value: Number.parseInt(it),
        type: ItemTypes.NUMBER_TILE,
      };
      return boxState;
    })
  );

  const parseQuestionData = (question: QuestionData, index: number) => {
    return (
      <div className="flex items-center" key={index}>
        {question.parts.map((it) => parsePart(it))}
      </div>
    );
  };

  const parsePart = (part: QuestionPart) => {
    if (part.tileData) {
      return (
        <BoardSquare
          accept={[ItemTypes.NUMBER_TILE]}
          lastDroppedItem={droppedTiles[part.tileData.index]}
          onDrop={(item) => handleDrop(part.tileData.index, item)}
        />
      );
    } else {
      return <p className="text-5xl whitespace-pre">{part.text}</p>;
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

  const shouldEnableSubmitButton = () => {
    return boxes.filter((it) => isDropped(it.name)).length === boxes.length;
  };
  const shouldEnableResetButton = () => {
    return boxes.filter((it) => isDropped(it.name)).length > 0;
  };
  const onResetClicked = () => {
    setDroppedTiles([]);
  };
  const gradeGuess = () => {
    return droppedTiles.map(it => it.toString()).join(",") === puzzleData.answer
  }
  const onSubmitClicked = () => {
    const guessData: GuessData = {
      isCorrect: gradeGuess(),
      guess: droppedTiles.map(it => it.toString()).join(",")
    };

    onSubmit(guessData);
  };

  return (
    <div
      className={`
        flex flex-col justify-center space-y-16 
        items-center p-8 bg-white shadow-md 
        rounded-xl max-w-screen-lg`}
    >
      <div className="grid grid-cols-2 gap-8">
        {puzzleData.questions.map((it, index) => parseQuestionData(it, index))}
      </div>

      <div className="flex justify-between gap-16">
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
        <div className="flex flex-col justify-between">
          <Button
            disabled={!shouldEnableSubmitButton()}
            label="Submit"
            backgroundColor="blue"
            textColor="white"
            onClick={onSubmitClicked}
          />
          <Button
            disabled={!shouldEnableResetButton()}
            label="Reset"
            backgroundColor="green"
            textColor="white"
            onClick={onResetClicked}
          />
        </div>
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
