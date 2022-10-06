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
import { WinType } from "../../../api/labs/games/multiplication-connect/gameLogic";
import { useAuth } from "../../../../lib/authContext";
import { useMutation, useQuery } from "@apollo/client";
import {
  FetchUserMCDataRes,
  FETCH_USER_MC_DATA,
  UserMCData,
} from "../../../../graphql/multiplication-connect/fetchUserData";
import { UPDATE_USER_WIN_MCDATA } from "../../../../graphql/multiplication-connect/updateUserWin";
import { CREATE_USER_MC_DATA } from "../../../../graphql/multiplication-connect/createUserData";
import { UPDATE_USER_LOSS_MCDATA } from "../../../../graphql/multiplication-connect/updateUserLoss";
import { UPDATE_USER_GAMES_PLAYED_MCDATA } from "../../../../graphql/multiplication-connect/updateUserGamesPlayed";

const Index: FC = () => {
  const [normalMode, setIsNormalMode] = useState(true);
  const { grid, isPlayerOne, stage, newGame, hasWinner } = useSelector(
    multiplicationConnectSelector
  );
  const dispatch = useDispatch();

  const { user } = useAuth();
  const [userData, setUserData] = useState<UserMCData>();
  const { error, data } = useQuery<FetchUserMCDataRes>(FETCH_USER_MC_DATA, {
    variables: {
      id: user.uid,
    },
  });
  const [createUser] = useMutation(CREATE_USER_MC_DATA);
  const [updateUserGamesPlayed] = useMutation(UPDATE_USER_GAMES_PLAYED_MCDATA);

  useEffect(() => {
    if (data) {
      const result = !!data.multiplicationConnectData.length;
      if (result) {
        // for a returning user
        setUserData(data.multiplicationConnectData[0]);
      } else {
        // for a new user
        createUser({
          variables: {
            id: user.uid,
          },
          refetchQueries: [
            { query: FETCH_USER_MC_DATA, variables: { id: user.uid } },
          ],
        });
      }
    }
  }, [data]);

  useEffect(() => {
    dispatch(reloadGrid(grid));
    !isPlayerOne && dispatch(togglePlayer(isPlayerOne));
    updateUserGamesPlayed({
      variables: {
        id: user.uid,
      },
      refetchQueries: [
        { query: FETCH_USER_MC_DATA, variables: { id: user.uid } },
      ],
    });
  }, [newGame]);

  const handleDispatch = () => {
    if (stage === Stage.GAME_WIN && hasWinner)
      dispatch(setStage(Stage.GAME_OVER));
    else {
      !hasWinner
        ? dispatch(setStage(Stage.GAME_PLAY))
        : dispatch(setStage(Stage.GAME_WIN));
    }
  };

  return (
    <main>
      {stage === Stage.WELCOME && (
        <Modal type="fullscreen-welcome" closeModal={() => handleDispatch()}>
          <p>Welcome to Multiplication Connect Four!</p>
        </Modal>
      )}
      {stage === Stage.GAME_RULES && (
        <Modal type="rules" closeModal={() => handleDispatch()}>
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
      {stage === Stage.GAME_WIN && (
        <Modal type="game-alert" closeModal={() => handleDispatch()}>
          <h2 className="text-3xl font-bold text-center dark:text-white text-black-500">
            {hasWinner === WinType.PlayerOne
              ? "Player One Win 🔴"
              : "Player Two Win 🟡"}
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Congratulations. Store your progress and save your stats for next
            time!
          </p>
        </Modal>
      )}
      {stage === Stage.GAME_OVER && (
        <Modal type="game-over-prompt">
          {/* 1fr 2fr */}
          <div className="grid grid-cols-[1fr_2fr]">
            <span className="text-5xl sm:text-6xl place-self-center">🔄</span>
            <h2 className="text-xl font-bold sm:text-3xl place-self-center">
              Please Restart Game
            </h2>
          </div>
        </Modal>
      )}

      <div className="flex flex-col justify-center max-w-3xl gap-4 mx-auto">
        <div className="flex flex-col items-center gap-3">
          <h3 className="text-2xl">Welcome, {user.displayName}!</h3>
          <div className="flex flex-wrap gap-2">
            <h3 className="inline-block font-semibold">Game Data: </h3>
            <p className="inline-block">
              Wins: {userData && userData.win}, Losses:{" "}
              {userData && userData.loss}, Games played:{" "}
              {userData && userData.games_played}, Games finished:{" "}
              {userData && userData.games_finished}
            </p>
          </div>
        </div>
        <hr></hr>

        <h1 className="mx-10 mb-3 text-2xl font-bold text-center sm:text-3xl drop-shadow-lg shadow-black-500">
          Multiplication Connect Four 🔴🟡
        </h1>

        <PlayerAndDice normalMode={normalMode} />

        <div className="flex items-stretch pb-2 justify-evenly">
          <div
            className={`flex items-stretch ${
              stage === Stage.GAME_OVER && "z-20"
            }`}
          >
            <Settings />
          </div>
          <button
            type="button"
            className={`sm:text-base text-xs font-mono font-bold text-gray-600 bg-white border border-gray-300 focus:outline-none 
                 focus:ring-1 focus:ring-gray-200 rounded-lg px-5 py-2.5 dark:hover:border-gray-600 dark:focus:ring-gray-700
                 dark:text-gray-300 dark:bg-gray-900 dark:border-gray-700 dark:hover:text-gray-200 dark:hover:bg-gray-800 
                 hover:text-gray-700 hover:bg-gray-50 ${
                   stage === Stage.WELCOME && "z-20 animate-bounce"
                 }`}
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
              <span className="absolute inset-0 w-6 h-6 transition bg-white border border-red-600 rounded-full peer-checked:translate-x-8 peer-checked:border-lime-600 peer-checked:hover:border-gray-400 dark:bg-gray-900 hover:bg-gray-50 peer-checked:hover:bg-gray-50 hover:border-gray-400 dark:hover:bg-gray-800 dark:peer-checked:hover:bg-gray-800 dark:hover:border-gray-600 dark:peer-checked:hover:border-gray-600"></span>
            </label>
            <p className="font-mono text-sm text-gray-600 dark:text-gray-300">
              normal
            </p>
          </div>
        </div>

        <div className="px-[8%] pb-10">
          <GameBoard />
        </div>
      </div>
    </main>
  );
};

export default Index;
