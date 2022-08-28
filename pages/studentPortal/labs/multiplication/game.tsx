import React, { useState } from "react";
import MultiplicationBlock, {
  BlockState,
} from "../../../../components/math/MultiplicationBlock";
import { Button } from "../../../../components/ui/Button";

export enum STAGE {
  SET_RULES,
  PLAY_GAME,
  CALCULATE_WINNER,
}

export default function BlockComponentGallery() {
  const [stage, setStage] = useState(STAGE.SET_RULES);
  const [isPlayerOneActive, setPlayerOneActive] = useState(false);

  function handlePlayer() {
    setPlayerOneActive(!isPlayerOneActive);
  }

  const initialGameState = [
    {
      text: "72",
      state: BlockState.NOT_SELECTED,
      winner: -1,
    },
    {
      text: "8x9",
      state: BlockState.NOT_SELECTED,
      winner: -1,
    },
    {
      text: "8",
      state: BlockState.NOT_SELECTED,
      winner: -1,
    },
    {
      text: "8x1",
      state: BlockState.NOT_SELECTED,
      winner: -1,
    },
    {
      text: "16",
      state: BlockState.NOT_SELECTED,
      winner: -1,
    },
    {
      text: "2x8",
      state: BlockState.NOT_SELECTED,
      winner: -1,
    },
  ];

  const [gameState, setGameState] = useState(initialGameState);

  function handleSelect(index) {
    console.log("BLOCK WAS CLICKED: index ", index);
    console.log(gameState[index].text);

    let gameState2 = [...gameState];
    if (isPlayerOneActive === true) {
      gameState2[index].state = BlockState.PLAYER_ONE_SELECTED;
      gameState2[index].winner = 1;
    } else if (isPlayerOneActive === false) {
      gameState2[index].state = BlockState.PLAYER_TWO_SELECTED;
      gameState2[index].winner = 2;
    }

    setGameState(gameState2);
  }

  function handleReset() {
    setGameState(initialGameState);
  }
  function longestSubarray(array, x) {
    let maxlength = 0;
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      let sum = 0;
      if (array[i].winner == x) {
        sum++;
      } else {
        let sum = 0;
      }
    }
    maxlength = Math.max(maxlength, sum);

    return maxlength;
  }

  function calculateWinner() {
    let playerOneArray = longestSubarray(gameState, 1);
    console.log(playerOneArray);
    let playerTwoArray = longestSubarray(gameState, 2);
    console.log(playerTwoArray);

    if (playerOneArray > playerTwoArray) {
      console.log("Play One is the winner");
    } else if (playerTwoArray > playerOneArray) {
      console.log("Player Two is the winner");
    } else if (playerOneArray === playerTwoArray) {
      console.log("Draw");
    }
  }

  return (
    <div>
      <p>Current Player: {isPlayerOneActive ? "Player 1" : "Player 2"}</p>
      <Button label={"Next Player"} onClick={() => handlePlayer()} />
      <Button label={"Reset Game"} onClick={() => handleReset()} />
      <Button label={"Show Winner"} onClick={() => calculateWinner()} />
      <h1 className="flex justify-center">Multiplication Game</h1>
      {gameState.map((item, index) => (
        <MultiplicationBlock
          text={item.text}
          onClick={() => handleSelect(index)}
          blockState={item.state}
        />
      ))}
    </div>
  );
}
