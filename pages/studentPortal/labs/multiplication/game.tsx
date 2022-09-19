import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Winner from "../../../../components/math/longestStreak/Winner";
import MultiplicationBlock, {
  BlockState,
} from "../../../../components/math/longestStreak/MultiplicationBlock";
import Rules from "../../../../components/math/longestStreak/Rules";
import { setPlayerName, reset } from "../../../../redux/longestStreakSlice";

import { Button } from "../../../../components/ui/Button";
import {
  handlePlayerSelect,
  initializeGame,
  longestStreakSelector,
  setStage,
  STAGE,
} from "../../../../redux/longestStreakSlice";
import Firework from "../../../../components/math/longestStreak/Firework";
export type GameBlockState = {
  text: string;
  value: number;
  isProduct: boolean;
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

export function calculateWinner(array: GameBlockState[], playerName: string) {
  let playerOneArray = longestSubarray(
    array,
    BlockState.PLAYER_ONE_SELECTED && BlockState.HIGHLIGHTED
  );
  console.log("P1", playerOneArray);
  let playerTwoArray = longestSubarray(array, BlockState.PLAYER_TWO_SELECTED);
  console.log("P2", playerTwoArray);
  if (playerOneArray > playerTwoArray) {
    return playerName + ", you have Conquered!";
  } else if (playerTwoArray > playerOneArray) {
    return (
      "Sorry, " + playerName + " " + "This round goes to Computer the Great..."
    );
  } else if (playerOneArray === playerTwoArray) {
    return "This mission has resulted in a Draw!";
  }
}

export function calculatePlayerOneScore(array: GameBlockState[]) {
  let playerOneArray = longestSubarray(
    array,
    BlockState.PLAYER_ONE_SELECTED && BlockState.HIGHLIGHTED
  );
  return playerOneArray;
}

export function calculatePlayerTwoScore(array: GameBlockState[]) {
  let playerTwoArray = longestSubarray(array, BlockState.PLAYER_TWO_SELECTED);
  return playerTwoArray;
}

export function checkNumberNotSelected(array: GameBlockState[]) {
  const ns = array.filter((block) => {
    return block.state === BlockState.NOT_SELECTED;
  });
  let notSelectedNumber = ns.length;
  return notSelectedNumber;
}

export function showEndGameImage(array: GameBlockState[]) {
  let playerOneArray = longestSubarray(array, BlockState.PLAYER_ONE_SELECTED);
  console.log("P1", playerOneArray);
  let playerTwoArray = longestSubarray(array, BlockState.PLAYER_TWO_SELECTED);
  console.log("P2", playerTwoArray);
  if (playerOneArray > playerTwoArray) {
    return <Firework />;
  } else if (playerTwoArray > playerOneArray) {
    return <img src="/images/math1/longestStreak/playerTwoWinner.jpg" />;
  } else if (playerOneArray === playerTwoArray) {
    return <img src="/images/math1/longestStreak/drawWinner.png" />;
  }
}

export default function BlockComponentGallery() {
  const dispatch = useDispatch();
  const {
    stage,
    blocks: gameState,
    playerName,
  } = useSelector(longestStreakSelector);

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
    dispatch(setPlayerName(playerName));
  }

  return (
    <div>
      {stage === STAGE.SET_RULES ? (
        <Rules text={""} onClick={handlePlayGame} />
      ) : stage === STAGE.PLAY_GAME ? (
        <div className="grid grid-cols-6 grid-rows-7">
          <div className="pb-4 text-xl font-black col-start-1 col-end-6 flex justify-evenly w-[45rem]">
            {playerName}, your quest is to battle the computer. Let's see how
            you do!
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
                <ul className="flex justify-center text-xl p-5">
                  Number of Open Blocks: {"  "}
                  <span className="font-bold">
                    {checkNumberNotSelected(gameState)}
                  </span>
                </ul>
                <h1 className="flex justify-between p-5 text-xl">
                  <ul>
                    {playerName} Score:{" "}
                    <span className="font-bold">
                      {calculatePlayerOneScore(gameState)}
                    </span>
                  </ul>
                  <ul>
                    Computer Score:{" "}
                    <span className="font-bold">
                      {calculatePlayerTwoScore(gameState)}
                    </span>
                  </ul>
                </h1>

                <label className="flex justify-center py-8 text-xl ">
                  Please enter your name for battle, Player 1.{" "}
                </label>
                <input
                  id="input"
                  type="string"
                  value={playerName}
                  onChange={(e) => dispatch(setPlayerName(e.target.value))}
                  className="font-bold text-center text-2xl border-2 border-gray-300 place-self-center w-30"
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
          winner={calculateWinner(gameState, playerName)}
          image={showEndGameImage(gameState)}
        />
      ) : null}
    </div>
  );
}
