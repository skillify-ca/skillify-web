import { shuffle } from "lodash";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Winner from "../../../../components/math/longestStreak/Winner";
import MultiplicationBlock, {
  BlockState,
} from "../../../../components/math/longestStreak/MultiplicationBlock";
import Rules from "../../../../components/math/longestStreak/Rules";
import { reset, showOnReviewSlice } from "../../../../redux/longestStreakSlice";

import { Button } from "../../../../components/ui/Button";
import {
  handlePlayerSelect,
  initializeGame,
  longestStreakSelector,
  setStage,
  STAGE,
} from "../../../../redux/longestStreakSlice";

export type GameBlockState = {
  text: string;
  value: number;
  isProduct?: number;
  state: BlockState;
};

export function longestSubarray(array: GameBlockState[], x: BlockState) {
  let maxlength = 0;
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i].state === x) {
      sum++;
    } else {
      maxlength = Math.max(maxlength, sum);
      sum = 0;
      console.log("maxLength", maxlength, "currentSum", sum);
    }
  }
  maxlength = Math.max(maxlength, sum);
  sum = 0;
  console.log("maxLength", maxlength, "currentSum", sum);
  return maxlength;
}

export function calculateWinner(
  array: GameBlockState[],
  playerOne = "Player One",
  playerTwo = "Player Two"
) {
  let playerOneArray = longestSubarray(array, BlockState.PLAYER_ONE_SELECTED);
  console.log("P1", playerOneArray);
  let playerTwoArray = longestSubarray(array, BlockState.PLAYER_TWO_SELECTED);
  console.log("P2", playerTwoArray);
  if (playerOneArray > playerTwoArray) {
    return playerOne + ", you have Conquered!";
  } else if (playerTwoArray > playerOneArray) {
    return playerTwo + ", you have Conquered!";
  } else if (playerOneArray === playerTwoArray) {
    return "This mission has resulted in a Draw!";
  }
}

export function showEndGameImage(array: GameBlockState[]) {
  let playerOneArray = longestSubarray(array, BlockState.PLAYER_ONE_SELECTED);
  console.log("P1", playerOneArray);
  let playerTwoArray = longestSubarray(array, BlockState.PLAYER_TWO_SELECTED);
  console.log("P2", playerTwoArray);
  if (playerOneArray > playerTwoArray) {
    return <img src="/images/math1/longestStreak/playerOneWinner.png" />;
  } else if (playerTwoArray > playerOneArray) {
    return <img src="/images/math1/longestStreak/playerTwoWinner.png" />;
  } else if (playerOneArray === playerTwoArray) {
    return <img src="/images/math1/longestStreak/drawWinner.png" />;
  }
}

export default function BlockComponentGallery() {
  const dispatch = useDispatch();
  const { stage, blocks: gameState } = useSelector(longestStreakSelector);
  const [playerOneName, setPlayerOneName] = useState("Player 1");

  function handleSelect(index) {
    console.log("BLOCK WAS CLICKED: index ", index);
    console.log(gameState[index].text);

    dispatch(handlePlayerSelect(index));
  }

  function handlePlayGame() {
    dispatch(setStage(STAGE.PLAY_GAME));
  }

  function handleResetGame() {
    dispatch(setStage(STAGE.PLAY_GAME));
    dispatch(reset(0));
    dispatch(initializeGame(0));
  }
  function handleCalculateWinner() {
    dispatch(setStage(STAGE.CALCULATE_WINNER));
  }

  return (
    <div>
      {stage === STAGE.SET_RULES ? (
        <Rules text={""} onClick={handlePlayGame} />
      ) : stage === STAGE.PLAY_GAME ? (
        <div className="grid grid-cols-6 grid-rows-7">
          <div className="pb-4 font-black col-start-1 col-end-6 flex justify-evenly w-[45rem]">
            {playerOneName}, your quest is to battle the computer. Let's see how
            you do!
          </div>
          <div className="pb-8 col-start-1 col-end-7 flex justify-evenly w-[45rem]">
            <Button label={"Reset Game"} onClick={() => handleResetGame()} />
            <Button label={"Show Winner"} onClick={handleCalculateWinner} />
            <Button
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
                .slice(30, 41)
                .map((item, index) => (
                  <MultiplicationBlock
                    text={item.text}
                    onClick={() => handleSelect(index + 30)}
                    blockState={item.state}
                  />
                ))
                .reverse()}
            </div>
            <div className="col-span-7 bg-rattata">
              <div className="flex flex-col row-auto ">
                <label className="flex justify-center py-8 text-xl ">
                  Please enter your name for battle, Player One.{" "}
                </label>
                <input
                  id="input"
                  type="string"
                  value={playerOneName}
                  onChange={(e) => setPlayerOneName(e.target.value)}
                  className="font-bold text-center border-2 border-gray-300 place-self-center w-30"
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
          winner={calculateWinner(gameState)}
          image={showEndGameImage(gameState)}
        />
      ) : null}
    </div>
  );
}
