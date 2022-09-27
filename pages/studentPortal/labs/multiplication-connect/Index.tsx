import React, { FC, useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  multiplicationConnectSelector,
  reloadGrid,
  setStage,
  Stage,
  togglePlayer,
  setNewGame,
} from "../../../../redux/multiplicationConnectSlice";
import PlayerAndDice from "../../../../components/math/multiplicationConnect/PlayerAndDice";
import GameBoard from "../../../../components/math/multiplicationConnect/GameBoard";
import Modal from "../../../../components/math/multiplicationConnect/Modal";
import Settings from "../../../../components/math/multiplicationConnect/Settings";

const Index: FC = () => {
  const [normalMode, setIsNormalMode] = useState(true);
  const { grid, isPlayerOne, stage, newGame } = useSelector(
    multiplicationConnectSelector
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(reloadGrid(grid));
    !isPlayerOne ? dispatch(togglePlayer(isPlayerOne)) : "";
  }, [newGame]);

  // console.log(normalMode ? "normal" : "lazy");

  return (
    <main>
      {stage === Stage.WELCOME && (
        <Modal
          type="fullscreen"
          closeModal={() => dispatch(setStage(Stage.GAME_PLAY))}
        >
          <p>Welcome to Multiplication Connect Four!</p>
        </Modal>
      )}

      <div className="flex flex-col justify-center max-w-5xl gap-4 mx-auto">
        <h1 className="mx-10 mb-3 text-3xl font-bold text-center drop-shadow-lg shadow-black-500">
          Multiplication Connect Four 🔴🟡
        </h1>
        <PlayerAndDice normalMode={normalMode} />

        <div className="flex items-stretch pt-5 pb-3 justify-evenly">
          {/* Game settings: 
              - build play solo/two player
              - toggle dark mode (figure out how to toggle in TW)
              - view stats (link to gQL and Hasura) */}
          {/* Build line toggle for lazy/normal mode that toggles output of the dice roll */}
          {/* Add the outlined diceRoll animation */}
          {/* update button color/fonts for dark mode — copy dropdown styling */}
          <Settings />
          <button
            type="button"
            className={`z-20 font-mono font-bold text-gray-600 bg-white border border-gray-300 focus:outline-none 
                hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 rounded-lg px-5 py-2.5 
                dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 dark:bg-gray-900 dark:border-gray-800 dark:text-gray-300
                ${stage === Stage.WELCOME && "animate-bounce"}`}
            onClick={() => dispatch(setStage(Stage.GAME_RULES))}
          >
            📝 Rules
          </button>
          <div className="flex items-center self-center gap-2">
            <p className="font-mono text-sm text-gray-600 dark:text-gray-300">
              lazy
            </p>
            <label
              htmlFor="AcceptConditions"
              className="relative h-6 cursor-pointer w-14"
            >
              <input
                type="checkbox"
                checked={normalMode}
                onChange={() => setIsNormalMode(!normalMode)}
                id="AcceptConditions"
                className="sr-only peer"
              />
              <span className="absolute inset-0 h-1.5 my-auto bg-red-500 rounded-full transition peer-checked:bg-lime-500"></span>
              <span className="absolute inset-0 w-6 h-6 transition bg-white border border-red-600 rounded-full peer-checked:translate-x-8 peer-checked:border-lime-600 dark:bg-gray-900"></span>
            </label>
            <p className="font-mono text-sm text-gray-600 dark:text-gray-300">
              normal
            </p>
          </div>
          {stage === Stage.GAME_RULES && (
            <Modal
              type="centered"
              closeModal={() => dispatch(setStage(Stage.GAME_PLAY))}
            >
              <h2 className="text-4xl font-bold">Game Rules</h2>
              <ol className="space-y-2 list-decimal">
                <li>Roll two dice.</li>
                <li>Add the numbers together, and multiply by 2.</li>
                <li>Select this number within a block in the game.</li>
                <li>Repeat for the next player.</li>
                <li>
                  Play until a player connects 4 squares in a row (vertically,
                  horizontally, or diagonally) to win the game.
                </li>
              </ol>
            </Modal>
          )}
        </div>

        <div className="px-20 pb-10">
          <GameBoard />
        </div>
      </div>
    </main>
  );
};

export default Index;
