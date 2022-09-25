import React, { FC, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  multiplicationConnectSelector,
  reloadGrid,
  setStage,
  Stage,
  togglePlayer,
} from "../../../../redux/multiplicationConnectSlice";
import DiceSection from "../../../../components/math/multiplicationConnect/DiceSection";
import GameBoard from "../../../../components/math/multiplicationConnect/GameBoard";
import PlayerSection from "../../../../components/math/multiplicationConnect/PlayerSection";
import { calculateWinner } from "../../../api/labs/games/multiplication-connect/gameLogic";
import Modal from "../../../../components/math/multiplicationConnect/Modal";
import { Button } from "../../../../components/ui/Button";

const Index: FC = () => {
  const [newGame, setNewGame] = useState(0);
  const { grid, isPlayerOne, stage } = useSelector(
    multiplicationConnectSelector
  );
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(`newGame: ${newGame}`);
    dispatch(reloadGrid(grid));
    !isPlayerOne ? dispatch(togglePlayer(isPlayerOne)) : "";
  }, [newGame]);

  return (
    /* todo: dispatch & set the stage state
      stage === WELCOME on page load (fading welcome message overlay on GAME_PLAY stage)
      setStage === GAME_PLAY -- when either user clicks and dismisses entry animation OR animations are over
          - need to make className hidden on userClick
    */
    <main className="">
      {stage === Stage.WELCOME && (
        <Modal
          type="fullscreen"
          closeModal={() => dispatch(setStage(Stage.GAME_PLAY))}
        >
          <p>Welcome to Multiplication Connect Four!</p>
        </Modal>
        // Build as a normal modal first then style
        // Need to pass something to Modal here that changes the Stage
      )}

      <div className="flex flex-col justify-center max-w-5xl gap-4 mx-auto">
        <h1 className="mx-10 mb-3 text-3xl font-bold text-center drop-shadow-lg shadow-black-500">
          Multiplication Connect Four 🔴🟡
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
            onClick={() => dispatch(setStage(Stage.GAME_RULES))}
          >
            📝 Game Rules
          </button>

          {stage === Stage.GAME_RULES && (
            <Modal
              type="centered"
              closeModal={() => dispatch(setStage(Stage.GAME_PLAY))}
            >
              <section>
                <h2 className="text-4xl font-bold">Game Rules</h2>
                <ol className="pt-8 space-y-2 list-decimal">
                  <li>Roll two dice.</li>
                  <li>Add the numbers together, and multiply by 2.</li>
                  <li>Select this number within a block in the game.</li>
                  <li>Repeat for the next player.</li>
                  <li>
                    Play until a player connect 4 squares in a row (vertically,
                    horizontally, or diagonally) to win the game.
                  </li>
                </ol>
              </section>
            </Modal>
          )}
        </div>
        <GameBoard />
      </div>
    </main>
  );
};

export default Index;
