import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Winner from "../../../../components/math/longestStreak/Winner";
import MultiplicationBlock from "../../../../components/math/longestStreak/MultiplicationBlock";
import Rules from "../../../../components/math/longestStreak/Rules";
import { Button } from "../../../../components/ui/Button";
import {
  handlePlayerSelect,
  initializeGame,
  longestStreakSelector,
  reset,
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

import { useAuth } from "../../../../lib/authContext";

import { DOWNGRADE_GAME_LEVEL } from "../../../../graphql/longestStreak/downGradeGameLevel";
import {
  FetchGameLevelResponse,
  FETCH_GAME_LEVEL,
} from "../../../../graphql/longestStreak/fetchGameLevel";
import { RESET_GAME_LEVEL } from "../../../../graphql/longestStreak/resetGameLevel";
import { UPDATE_GAME_LEVEL } from "../../../../graphql/longestStreak/updateGameLevel";
import { UPSERT_GAME_LEVEL } from "../../../../graphql/longestStreak/upsertGameLevel";
import { showEndGameImage } from "../../../api/showEndGameImage";
import UserTableStats from "../../../../components/math/longestStreak/userTableStats";
export type BlockComponentGalleryProps = {
  user: any;
};

export default function BlockComponentGallery() {
  const dispatch = useDispatch();
  const { stage, blocks: gameState } = useSelector(longestStreakSelector);

  function showEndGameMessage() {
    let optionOne = user.Displayname
      ? true
      : "Player 1" + ", you have Conquered!";
    let optionTwo = "This round goes to Computer the Great...";
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
  const [resetGameLevel] = useMutation(RESET_GAME_LEVEL);

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

  function handleResetGameLevel() {
    resetGameLevel({
      variables: {
        userId: user.uid,
      },
      refetchQueries: [
        {
          query: FETCH_GAME_LEVEL,
          variables: {
            userId: user.uid,
          },
        },
      ],
    });
    dispatch(setStage(STAGE.PLAY_GAME));
    dispatch(initializeGame(data.longestStreakUserData[0].currentLevel));
  }

  function handlePlayGame() {
    dispatch(setStage(STAGE.PLAY_GAME));
  }

  function handleResetGame() {
    dispatch(setStage(STAGE.PLAY_GAME));
    dispatch(reset(data.longestStreakUserData[0].currentLevel));
    dispatch(initializeGame(data.longestStreakUserData[0].currentLevel));
  }

  function handlePlayAgain() {
    if (calculateWinner(gameState, showWinner) === true) {
      updateGameLevel({
        variables: {
          userId: user.uid,
        },
        refetchQueries: [
          {
            query: FETCH_GAME_LEVEL,
            variables: {
              userId: user.uid,
            },
          },
        ],
      });
    } else {
      downGradeGameLevel({
        variables: {
          userId: user.uid,
        },
        refetchQueries: [
          {
            query: FETCH_GAME_LEVEL,
            variables: {
              userId: user.uid,
            },
          },
        ],
      });
    }
    dispatch(setStage(STAGE.PLAY_GAME));
  }

  function handleCalculateWinner() {
    dispatch(setStage(STAGE.CALCULATE_WINNER));
  }

  function handleShowStats() {
    dispatch(setStage(STAGE.SHOW_STATS));
  }

  return (
    <div>
      {JSON.stringify(data)}
      {stage === STAGE.SET_RULES ? (
        <Rules text={""} onClick={handlePlayGame} />
      ) : stage === STAGE.PLAY_GAME ? (
        <div className="ml-1 md:mx-10">
          <div className="grid md:grid-cols-6 md:grid-rows-7">
            <div className=" text-center md:pb-4 pb-2 text-md md:text-xl font-bold md:col-start-1  md:col-end-6 flex justify-evenly w-[22rem] md:w-[45rem]">
              Welcome, {user.displayName}. Your quest is to battle the computer.
              Let's see how you do!
            </div>
            <div className="flex flex-rows ml-1.5 md:ml-0 md:pb-8 pb-2  col-start-1 col-end-7 content-between md:justify-evenly md:w-[45rem] w-[22rem]">
              <Button
                backgroundColor="purple"
                label={"Reset"}
                onClick={() => handleResetGame()}
              />
              <Button
                backgroundColor="purple"
                label={"Winner"}
                onClick={handleCalculateWinner}
              />
              <Button
                backgroundColor="purple"
                label={"Stats"}
                onClick={handleShowStats}
              />
              <Button
                backgroundColor="purple"
                label={"Rules"}
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
            <div className="grid grid-cols-9 col-span-6 w-[22.5rem] md:w-[45rem]">
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
                <div className="flex flex-col row-7 ">
                  <ul className="flex justify-center p-2 text-sm md:p-5 md:text-xl">
                    Number of Open Blocks: {"  "}
                    <span className="font-bold">
                      {checkNumberNotSelected(gameState)}
                    </span>
                  </ul>
                  <ul className="flex justify-center p-1 text-sm md:p-5 md:text-xl">
                    My Game Level is....
                    {data && (
                      <span className="font-bold">
                        {" "}
                        {data.longestStreakUserData[0].currentLevel}
                      </span>
                    )}
                  </ul>

                  <h1 className="flex justify-between p-1 text-xs md:p-5 md:text-xl">
                    <ul className="px-3 text-center">
                      {user.Displayname ? true : "Player 1"} Score:{" "}
                      <span className="font-bold text-center">
                        {calculatePlayerScore(gameState, 1)}
                      </span>
                    </ul>
                    <ul className="px-3 text-center">
                      Computer Score:{" "}
                      <span className="font-bold text-center ">
                        {calculatePlayerScore(gameState, 2)}
                      </span>
                    </ul>
                  </h1>
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
        </div>
      ) : stage === STAGE.CALCULATE_WINNER ? (
        <Winner
          text={""}
          onClick={handlePlayAgain}
          onRestartClick={handleResetGameLevel}
          onSameLevelClick={handleResetGame}
          winner={calculateWinner(gameState, showEndGameMessage)}
          image={calculateWinner(gameState, showEndGameImage)}
          user={user}
        />
      ) : stage === STAGE.SHOW_STATS ? (
        <UserTableStats onClick={handlePlayGame} />
      ) : null}
    </div>
  );
}
