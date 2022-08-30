import React, { useState } from "react";
import MultiplicationBlock, {
  BlockState,
} from "../../../../components/math/MultiplicationBlock";
import StatementRow from "../../../../components/math/stories/StatementRow";
import { Button } from "../../../../components/ui/Button";

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
    return "Play One is the winner";
  } else if (playerTwoArray > playerOneArray) {
    return "Player Two is the winner";
  } else if (playerOneArray === playerTwoArray) {
    return "Draw";
  }
}

export function distributeBlocks(array: GameBlockState[]) {
  for (let block = 0; block < array.length; block++) {
    return <div>array[i]</div>;
  }
}

export default function BlockComponentGallery() {
  const [stage, setStage] = useState(STAGE.SET_RULES);
  const [isPlayerOneActive, setPlayerOneActive] = useState(false);

  function handlePlayer() {
    setPlayerOneActive(!isPlayerOneActive);
  }

  const initialGameState: GameBlockState[] = [
    {
      text: "72",
      state: BlockState.NOT_SELECTED,
    },
    {
      text: "8x9",
      state: BlockState.NOT_SELECTED,
    },
    {
      text: "8",
      state: BlockState.NOT_SELECTED,
    },
    {
      text: "8x1",
      state: BlockState.NOT_SELECTED,
    },
    {
      text: "16",
      state: BlockState.NOT_SELECTED,
    },
    {
      text: "2x8",
      state: BlockState.NOT_SELECTED,
    },
    {
      text: "72",
      state: BlockState.NOT_SELECTED,
    },
    {
      text: "8x9",
      state: BlockState.NOT_SELECTED,
    },
    {
      text: "8",
      state: BlockState.NOT_SELECTED,
    },
    {
      text: "8x1",
      state: BlockState.NOT_SELECTED,
    },
    {
      text: "16",
      state: BlockState.NOT_SELECTED,
    },
    {
      text: "2x8",
      state: BlockState.NOT_SELECTED,
    },
  ];

  const [gameState, setGameState] =
    useState<GameBlockState[]>(initialGameState);

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

  function handleReset() {
    setGameState(initialGameState);
  }

  function handlePlayGame() {
    setStage(STAGE.PLAY_GAME);
  }

  function handleCalculateWinner() {
    setStage(STAGE.CALCULATE_WINNER);
  }

  return (
    <div>
      {stage === STAGE.SET_RULES ? (
        <div className="flex flex-col items-center justify-center text-murkrow">
          <p>This is where the rules component goes.</p>
          <Button label={"Play Game"} onClick={handlePlayGame} />
        </div>
      ) : stage === STAGE.PLAY_GAME ? (
        <div className="grid grid-cols-6 grid-rows-7">
          <div className="col-start-1 col-end-4 ...justify-center">
            Multiplication Game
          </div>
          <div className="col-end-7 col-span-3 ...justify-center">
            Current Player: {isPlayerOneActive ? "Player 1" : "Player 2"}
          </div>
          <div className="col-start-1 col-end-7 row-start-...justify-center">
            <Button label={"Next Player"} onClick={() => handlePlayer()} />
            <Button label={"Reset Game"} onClick={() => handleReset()} />
            <Button label={"Show Winner"} onClick={handleCalculateWinner} />
          </div>
          <div className="col-start-1 col-end-4 ... row-start-3 row-end-7 place-content-between">
            {gameState.map((item, index) => (
              <MultiplicationBlock
                text={item.text}
                onClick={() => handleSelect(index)}
                blockState={item.state}
              />
            ))}
          </div>
        </div>
      ) : stage === STAGE.CALCULATE_WINNER ? (
        <div className="flex justify-center">
          <div className="flex flex-row justify-between "></div>
          <Button
            label={"Show Winner"}
            onClick={() => calculateWinner(gameState)}
          />
        </div>
      ) : null}
    </div>
  );
}
