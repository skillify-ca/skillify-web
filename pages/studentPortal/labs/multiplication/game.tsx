import { shuffle } from "lodash";
import React, { useState } from "react";
import Winner from "../../../../components/math/longestStreak/Winner";
import MultiplicationBlock, {
  BlockState,
} from "../../../../components/math/longestStreak/MultiplicationBlock";
import Rules from "../../../../components/math/longestStreak/Rules";

import { Button } from "../../../../components/ui/Button";
import { getRndInteger } from "../../../api/random";

let initialGameState: GameBlockState[] = [];
export enum STAGE {
  SET_RULES,
  PLAY_GAME,
  CALCULATE_WINNER,
}

export type GameBlockState = {
  text: string;
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

export function calculateWinner(array: GameBlockState[]) {
  let playerOneArray = longestSubarray(array, BlockState.PLAYER_ONE_SELECTED);
  console.log("P1", playerOneArray);
  let playerTwoArray = longestSubarray(array, BlockState.PLAYER_TWO_SELECTED);
  console.log("P2", playerTwoArray);
  if (playerOneArray > playerTwoArray) {
    return "Player One, you have Conquered!";
  } else if (playerTwoArray > playerOneArray) {
    return "Player Two, you have Conquered!";
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
    return <img src="/images/math1/longestStreatk/playerOneWinner.png" />;
  } else if (playerTwoArray > playerOneArray) {
    return <img src="/images/math1/longestStreak/playerTwoWinner.png" />;
  } else if (playerOneArray === playerTwoArray) {
    return <img src="/images/math1/longestStreak/drawWinner.png" />;
  }
}

export default function BlockComponentGallery() {
  const [stage, setStage] = useState(STAGE.SET_RULES);
  const [gameState, setGameState] =
    useState<GameBlockState[]>(initialGameState);
  const [isPlayerOneActive, setPlayerOneActive] = useState(false);
  function handlePlayer() {
    setPlayerOneActive(!isPlayerOneActive);
  }
  function randomNumberProductList(array) {
    let dummyArray = [];
    for (let i = 0; i <= 20; i++) {
      let x = getRndInteger(1, 9);
      let y = getRndInteger(1, 9);
      let z = x * y;
      let product = x + " x " + y;

      let initiateBlockState = {};

      initiateBlockState = {
        text: z.toString(),
        state: BlockState.NOT_SELECTED,
      };
      dummyArray.push(initiateBlockState);

      initiateBlockState = {
        text: product.toString(),
        state: BlockState.NOT_SELECTED,
      };
      dummyArray.push(initiateBlockState);
    }
    initialGameState = dummyArray;
    //shuffle list
    initialGameState = shuffle(initialGameState);

    //set opening game state (unclicked and green)
    setGameState(initialGameState);
  }

  function handleSelect(index) {
    console.log("BLOCK WAS CLICKED: index ", index);
    console.log(gameState[index].text);

    let gameState2 = [...gameState];
    if (isPlayerOneActive === true) {
      gameState2[index].state = BlockState.PLAYER_ONE_SELECTED;
    } else if (isPlayerOneActive === false) {
      gameState2[index].state = BlockState.PLAYER_TWO_SELECTED;
    }

    setGameState(gameState2);
  }

  function handlePlayGame() {
    setStage(STAGE.PLAY_GAME);
    randomNumberProductList(initialGameState);
  }

  function handleCalculateWinner() {
    setStage(STAGE.CALCULATE_WINNER);
  }

  return (
    <div>
      {stage === STAGE.SET_RULES ? (
        <Rules text={""} onClick={handlePlayGame} />
      ) : stage === STAGE.PLAY_GAME ? (
        <div className="grid grid-cols-6 grid-rows-7">
          <div className="pb-4 font-black col-start-1 col-end-6 flex justify-evenly w-[45rem]">
            Current Player: {isPlayerOneActive ? "Player 1" : "Player 2"}
          </div>
          <div className="pb-8 col-start-1 col-end-7 flex justify-evenly w-[45rem]">
            <Button label={"Next Player"} onClick={() => handlePlayer()} />
            <Button label={"Reset Game"} onClick={() => handlePlayGame()} />
            <Button label={"Show Winner"} onClick={handleCalculateWinner} />
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
            <div className="col-span-7 bg-blue-800">Image</div>
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
          onClick={handlePlayGame}
          winner={calculateWinner(gameState)}
          image={showEndGameImage(gameState)}
        />
      ) : null}
    </div>
  );
}
