import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Winner from "../../../../components/math/longestStreak/Winner";
import MultiplicationBlock from "../../../../components/math/longestStreak/MultiplicationBlock";
import Rules from "../../../../components/math/longestStreak/Rules";
import {
  setPlayerName,
  reset,
  setLevel,
} from "../../../../redux/longestStreakSlice";

import { Button } from "../../../../components/ui/Button";
import {
  handlePlayerSelect,
  initializeGame,
  longestStreakSelector,
  setStage,
  STAGE,
} from "../../../../redux/longestStreakSlice";
import {
  calculatePlayerScore,
  calculateWinner,
  checkNumberNotSelected,
  showWinner,
} from "../../../api/longestStreak";
import { useMutation, useQuery } from "@apollo/client";
import {
  FetchGameLevelResponse,
  FETCH_GAME_LEVEL,
} from "../../../../graphql/longestStreak/fetchGameLevel";
import { useAuth } from "../../../../lib/authContext";
import { UPSERT_GAME_LEVEL } from "../../../../graphql/longestStreak/upsertGameLevel";
import { showEndGameImage } from "../../../api/showEndGameImage";
import { DOWNGRADE_GAME_LEVEL } from "../../../../graphql/longestStreak/downGradeGameLevel";
import { UPDATE_GAME_LEVEL } from "../../../../graphql/longestStreak/updateGameLevel";

export type BlockComponentGalleryProps = {
  user: any;
};

export default function BlockComponentGallery() {
  const dispatch = useDispatch();
  const {
    stage,
    blocks: gameState,
    playerName,
    level,
  } = useSelector(longestStreakSelector);

  function showEndGameMessage() {
    let optionOne = playerName ? true : "Player 1" + ", you have Conquered!";
    let optionTwo =
      "Sorry, " + playerName
        ? true
        : "Player 1" + " " + "This round goes to Computer the Great...";
    let optionThree = "This mission has resulted in a Draw!";
    let optionsArray = [optionOne, optionTwo, optionThree];
    return optionsArray;
  }

  function handleSelect(index) {
    dispatch(handlePlayerSelect(index));
  }

  const { user } = useAuth();
  const [upsertGameLevel] = useMutation(UPSERT_GAME_LEVEL);
  const [updateGameLevel] = useMutation(UPDATE_GAME_LEVEL);
  const [downGradeGameLevel] = useMutation(DOWNGRADE_GAME_LEVEL);

  const { data } = useQuery<FetchGameLevelResponse>(FETCH_GAME_LEVEL, {
    variables: {
      userId: user.uid,
    },
    onCompleted: (data: FetchGameLevelResponse) => {
      if (data.longestStreakUserData[0] !== undefined) {
        dispatch(initializeGame(data.longestStreakUserData[0].currentLevel));
      } else {
        upsertGameLevel({
          variables: {
            userId: user.uid,
          },
        });
      }
    },
  });

  function handlePlayGame() {
    dispatch(setStage(STAGE.PLAY_GAME));
  }

  function handleNoSaveGame() {
    dispatch(reset(data.longestStreakUserData[0].currentLevel));
  }
  function handleResetGame() {
    if (calculateWinner(gameState, showWinner) === true) {
      updateGameLevel({
        variables: {
          userId: user.uid,
        },
        refetchQueries: [{ query: FETCH_GAME_LEVEL }],
        onCompleted: () => {
          alert("Your skill ratings have been saved successfully.");
        },
      });
    } else {
      downGradeGameLevel({
        variables: {
          userId: user.uid,
        },
        refetchQueries: [{ query: FETCH_GAME_LEVEL }],
        onCompleted: () => {
          alert("Your skill ratings have been saved successfully.");
        },
      });
    }
    try {
      setTimeout(() => {
        document.location.reload();
      }, 3000);
    } catch {
      dispatch(setStage(STAGE.PLAY_GAME));
      dispatch(reset(data.longestStreakUserData[0].currentLevel));
      dispatch(initializeGame(data.longestStreakUserData[0].currentLevel));
    }
  }

  function handleCalculateWinner() {
    dispatch(setStage(STAGE.CALCULATE_WINNER));
    dispatch(setPlayerName(playerName));
  }

  return (
    <div>
      {stage === STAGE.SET_RULES ? (
        <Rules text={""} onClick={handlePlayGame} />
      ) : stage === STAGE.PLAY_GAME ? (
        <div className="grid grid-cols-6 grid-rows-7">
          <div className="pb-4 text-xl font-black col-start-1 col-end-6 flex justify-evenly w-[45rem]">
            {playerName ? true : "Player 1"}, Your quest is to battle the
            computer. Let's see how you do!
          </div>
          <div className="pb-8 col-start-1 col-end-7 flex justify-evenly w-[45rem]">
            <Button
              backgroundColor="purple"
              label={"Reset Game"}
              onClick={() => handleResetGame()}
            />
            <Button
              backgroundColor="purple"
              label={"Show Winner"}
              onClick={handleCalculateWinner}
            />
            <Button
              backgroundColor="purple"
              label={"Show Rules"}
              onClick={() => dispatch(setStage(STAGE.SET_RULES))}
            />
          </div>
          <div className="flex flex-row">
            {gameState.slice(0, 9).map((item, index) => (
              <MultiplicationBlock
                text={item.text}
                onClick={() => handleSelect(index)}
                blockState={item.state}
              />
            ))}
          </div>
          <div className="grid grid-cols-9 col-span-6 w-[45rem]">
            <div className="flex flex-col">
              {gameState
                .slice(29, 40)
                .map((item, index) => (
                  <MultiplicationBlock
                    text={item.text}
                    onClick={() => handleSelect(index + 29)}
                    blockState={item.state}
                  />
                ))
                .reverse()}
            </div>
            <div className="col-span-7 bg-gradient-to-r from-purple-300 ...">
              <div className="flex flex-col row-auto ">
                <ul className="flex justify-center p-5 text-xl">
                  Number of Open Blocks: {"  "}
                  <span className="font-bold">
                    {checkNumberNotSelected(gameState)}
                  </span>
                </ul>
                <ul className="flex justify-center p-5 text-xl">
                  My Game Level is....
                  <span className="font-bold">
                    {" "}
                    {data.longestStreakUserData[0].currentLevel}
                  </span>
                </ul>
                <h1 className="flex justify-between p-5 text-xl">
                  <ul>
                    {playerName ? true : "Player 1"} Score:{" "}
                    <span className="font-bold">
                      {calculatePlayerScore(gameState, 1)}
                    </span>
                  </ul>
                  <ul>
                    Computer Score:{" "}
                    <span className="font-bold">
                      {calculatePlayerScore(gameState, 2)}
                    </span>
                  </ul>
                </h1>

                <label className="flex justify-center py-8 text-xl ">
                  Please enter your name for battle, Player 1.{" "}
                </label>
                <input
                  id="input"
                  type="string"
                  placeholder="Player 1"
                  value={playerName}
                  onChange={(e) => dispatch(setPlayerName(e.target.value))}
                  className="text-2xl font-bold text-center border-2 border-gray-300 place-self-center w-30"
                ></input>
              </div>
            </div>
            <div className="flex flex-col">
              {gameState.slice(9, 20).map((item, index) => (
                <MultiplicationBlock
                  text={item.text}
                  onClick={() => handleSelect(index + 9)}
                  blockState={item.state}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-row">
            {gameState
              .slice(20, 29)
              .map((item, index) => (
                <MultiplicationBlock
                  text={item.text}
                  onClick={() => handleSelect(index + 20)}
                  blockState={item.state}
                />
              ))
              .reverse()}
          </div>
        </div>
      ) : stage === STAGE.CALCULATE_WINNER ? (
        <Winner
          text={""}
          onClick={handleResetGame}
          winner={calculateWinner(gameState, showEndGameMessage)}
          image={calculateWinner(gameState, showEndGameImage)}
          user={user}
          showWinner={calculateWinner(gameState, showWinner)}
          level={level}
          onClickNoSave={handleNoSaveGame}
        />
      ) : null}
    </div>
  );
}
