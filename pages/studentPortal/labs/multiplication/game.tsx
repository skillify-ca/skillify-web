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

export function calculateWinner(array: GameBlockState[]) {
  let playerOneArray = longestSubarray(array, BlockState.PLAYER_ONE_SELECTED);

  let playerTwoArray = longestSubarray(array, BlockState.PLAYER_TWO_SELECTED);

  if (playerOneArray > playerTwoArray) {
    return "Play One is the winner";
  } else if (playerTwoArray > playerOneArray) {
    return "Player Two is the winner";
  } else if (playerOneArray === playerTwoArray) {
    return "Draw";
  }
}

function longestSubarray(array, x) {
  let maxlength = 0;
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    let sum = 0;
    if (array[i].state == x) {
      sum++;
    } else {
      sum = 0;
    }
  }
  maxlength = Math.max(maxlength, sum);

  return maxlength;
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
        <div>
          <p>Current Player: {isPlayerOneActive ? "Player 1" : "Player 2"}</p>
          <Button label={"Next Player"} onClick={() => handlePlayer()} />
          <Button label={"Reset Game"} onClick={() => handleReset()} />
          <Button label={"Show Winner"} onClick={handleCalculateWinner} />
          <h1 className="flex justify-center">Multiplication Game</h1>
          {gameState.map((item, index) => (
            <MultiplicationBlock
              text={item.text}
              onClick={() => handleSelect(index)}
              blockState={item.state}
            />
          ))}
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
