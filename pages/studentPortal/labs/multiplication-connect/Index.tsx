import React, { FC, useState, useEffect } from "react";
import DiceSection from "../../../../components/math/multiplicationConnect/DiceSection";
import GameBoard from "../../../../components/math/multiplicationConnect/GameBoard";
import GameBoardBlock from "../../../../components/math/multiplicationConnect/GameBoardBlock";
import PlayerSection from "../../../../components/math/multiplicationConnect/PlayerSection";
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

const Index: FC = () => {
  const [grid, setGrid] = useState([]);
  const [newGame, setNewGame] = useState(0);

  // initialize grid on page load
  const createGrid = () => {
    let arr = [];
    let newGrid = [];
    for (let i = 4; i < 25; i++) i % 2 === 0 ? arr.push(i) : "";
    for (let i = 0; i < 35; i++) {
      let gridNumber = getRandomItemFromArray(arr);
      newGrid.push({
        id: i,
        gridNumber: gridNumber,
        isSelected: false,
      });
    }

    return newGrid;
  };

  // useEffect not triggering re-render of GameBoard even though grid State is being updated
  // grid state may need to included in dependency array but this results in infinite loop of renders
  useEffect(() => {
    console.log(`newGame: ${newGame}`);
    setGrid(createGrid);
  }, [newGame]);

  return (
    <div className="flex flex-col justify-center max-w-5xl gap-4 mx-auto">
      <h1 className="mx-10 mb-3 text-4xl font-bold text-center drop-shadow-lg shadow-black">
        Welcome to Multiplication Connect Four 🔴🟡
      </h1>
      <PlayerSection />
      <DiceSection />
      <div className="flex pt-5 pb-3 justify-evenly">
        <button
          type="button"
          className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          onClick={() => setNewGame(newGame + 1)}
        >
          🔄 New Game
        </button>
        <button
          type="button"
          className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          onClick={() => {}}
        >
          📝 Game Rules
        </button>
        <div>newGame state is currently: {newGame}</div>
      </div>
      <GameBoard grid={grid} />
    </div>
  );
};

export default Index;
