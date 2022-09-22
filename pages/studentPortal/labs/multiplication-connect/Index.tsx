import React, { FC, useState, useEffect } from "react";
import DiceSection from "../../../../components/math/multiplicationConnect/DiceSection";
import GameBoard from "../../../../components/math/multiplicationConnect/GameBoard";
import GameBoardBlock from "../../../../components/math/multiplicationConnect/GameBoardBlock";
import PlayerSection from "../../../../components/math/multiplicationConnect/PlayerSection";
import {
  SelectedBy,
  calculateWinner,
  createGrid,
} from "../../../api/labs/games/multiplication-connect/gameLogic";

const Index: FC = () => {
  const [grid, setGrid] = useState([]);
  const [newGame, setNewGame] = useState(0);
  const [isPlayerOne, setIsPlayerOne] = useState(true);

  useEffect(() => {
    console.log(`newGame: ${newGame}`);
    setGrid(createGrid);
    setIsPlayerOne(true);
  }, [newGame]);

  const blockClick = (block: GameBoardBlock) => {
    let newGrid = Array.from(grid);
    isPlayerOne
      ? (newGrid[newGrid.indexOf(block)].selectedBy = SelectedBy.PlayerOne)
      : (newGrid[newGrid.indexOf(block)].selectedBy = SelectedBy.PlayerTwo);

    setGrid(newGrid);
    calculateWinner(grid, isPlayerOne);
    isPlayerOne ? setIsPlayerOne(false) : setIsPlayerOne(true);
  };

  return (
    <div className="flex flex-col justify-center max-w-5xl gap-4 mx-auto">
      <h1 className="mx-10 mb-3 text-4xl font-bold text-center drop-shadow-lg shadow-black-500">
        Welcome to Multiplication Connect Four 🔴🟡
      </h1>
      <PlayerSection />
      <DiceSection />
      <div className="flex pt-5 pb-3 justify-evenly">
        <button
          type="button"
          className="font-mono font-bold text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 rounded-lg px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          onClick={() => setNewGame((prev) => prev + 1)}
        >
          🔄 New Game
        </button>
        <button
          type="button"
          className="font-mono font-bold text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 rounded-lg px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          onClick={() => {}}
        >
          📝 Game Rules
        </button>
      </div>
      <GameBoard
        grid={grid}
        blockClick={blockClick}
        isPlayerOne={isPlayerOne}
      />
    </div>
  );
};

export default Index;
