import React, { FC, useState, useEffect } from "react";
import DiceSection from "../../../../components/math/multiplicationConnect/DiceSection";
import GameBoard from "../../../../components/math/multiplicationConnect/GameBoard";
import GameBoardBlock from "../../../../components/math/multiplicationConnect/GameBoardBlock";
import PlayerSection from "../../../../components/math/multiplicationConnect/PlayerSection";
import { Button } from "../../../../components/ui/Button";
import { getRandomItemFromArray } from "../../../api/random";

export const calculateWinner = (grid: GameBoardBlock[]) => {
  // Algorithm ran on block click to determine win

  let rows = [
    grid.filter((i) => i.id >= 0 && i.id < 5),
    grid.filter((i) => i.id >= 5 && i.id < 10),
    grid.filter((i) => i.id >= 10 && i.id < 15),
    grid.filter((i) => i.id >= 15 && i.id < 20),
    grid.filter((i) => i.id >= 20 && i.id < 25),
    grid.filter((i) => i.id >= 25 && i.id < 30),
    grid.filter((i) => i.id >= 30 && i.id < 35),
  ];

  for (let i = 0; i < rows.length; i++) {
    // rows.length == board height == 7
    // rows[i].length == board width == 5

    for (let index = 0; index < rows[i].length - 3; index++) {
      // Horizontal check
      rows[i][index].isSelected &&
      rows[i][index + 1].isSelected &&
      rows[i][index + 2].isSelected &&
      rows[i][index + 3].isSelected
        ? console.log("(horizontal) Four in a row!")
        : "";
    }

    if (i < rows.length - 3) {
      // Vertical check
      for (let index = 0; index < rows[i].length; index++) {
        rows[i][index].isSelected &&
        rows[i + 1][index].isSelected &&
        rows[i + 2][index].isSelected &&
        rows[i + 3][index].isSelected
          ? console.log("(vertical) Four in a row!")
          : "";
      }
    }

    if (i >= 3) {
      // Ascending diagonal check
      for (let index = 0; index < rows[i].length - 3; index++) {
        rows[i][index].isSelected &&
        rows[i - 1][index + 1].isSelected &&
        rows[i - 2][index + 2].isSelected &&
        rows[i - 3][index + 3].isSelected
          ? console.log("(ascending diagonal) Four in a row!")
          : "";
      }

      // Descending diagonal check
      for (let index = 3; index < rows[i].length; index++) {
        rows[i][index].isSelected &&
        rows[i - 1][index - 1].isSelected &&
        rows[i - 2][index - 2].isSelected &&
        rows[i - 3][index - 3].isSelected
          ? console.log("(descending diagonal) Four in a row!")
          : "";
      }
    }
  }
};

// not working
export const resetGame = (newGameState: boolean) => {
  console.log("Reset function ran");
  return (newGameState = true);
};

/* todo: send as a prop to DiceSection?
      OR call the function in DiceSection and return a button that updates state 
*/
export const resetButton = () => {};

const Index: FC = () => {
  const [grid, setGrid] = useState<GameBoardBlock[]>([]);
  const [newGame, setNewGame] = useState(false);

  // initialize grid on page load
  // todo: create a boolean newGame state that triggers the rerender of this hook
  useEffect(() => {
    let arr = [];
    let initialGrid = [];
    for (let i = 4; i < 25; i++) i % 2 === 0 ? arr.push(i) : "";
    for (let i = 0; i < 35; i++) {
      let gridNumber = getRandomItemFromArray(arr);
      initialGrid.push({
        id: i,
        gridNumber: gridNumber,
        isSelected: false,
      });
    }
    console.log("Create Grid function ran"); //fixme: remove these comments before merge into main
    setNewGame(false);
    setGrid(initialGrid);
  }, [newGame]);

  return (
    <div className="flex flex-col justify-center max-w-5xl gap-4 mx-auto">
      <h1 className="mx-10 mb-3 text-4xl font-bold text-center drop-shadow-lg shadow-black">
        Welcome to Multiplication Connect Four 🔴🟡
      </h1>
      <PlayerSection />
      <DiceSection />
      <div className="flex py-4 justify-evenly">
        <Button label="📝 Game Rules" backgroundColor="purple" />
        <button
          className="h-12 px-4 py-2 font-semibold border-b-4 border-purple-900 rounded-lg cursor-pointer bg-black-500 hover:bg-purple-400"
          onClick={() => {}}
        >
          📝 Game Rules
        </button>
        <Button label="🔄 New Game" backgroundColor="blue" onClick={() => {}} />
      </div>
      <GameBoard grid={grid} />
    </div>
  );
};

export default Index;
