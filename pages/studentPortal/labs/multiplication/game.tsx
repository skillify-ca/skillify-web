import React, { useState } from "react";
import MultiplicationBlock, {
  BlockState,
} from "../../../../components/math/MultiplicationBlock";
import { Button } from "../../../../components/ui/Button";

export default function BlockComponentGallery() {
  const [player, setPlayer] = useState(false);

  function handlePlayer() {
    setPlayer(!player);
  }

  const initialGameState = [
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

  const [gameState, setGameState] = useState(initialGameState);

  function handleSelect(index) {
    console.log("BLOCK WAS CLICKED: index ", index);
    console.log(gameState[index].text);

    let gameState2 = [...gameState];
    if (player === true) {
      gameState2[index].state = BlockState.PLAYER_ONE_SELECTED;
    } else if (player === false) {
      gameState2[index].state = BlockState.PLAYER_TWO_SELECTED;
    }
    if (gameState2[index].state === BlockState.PLAYER_ONE_SELECTED) {
      winner.push(1);
    } else {
      winner.push(0);
    }
    setGameState(gameState2);
  }

  function handleReset() {
    setGameState(initialGameState);
  }

  return (
    <div>
      <p>Current Player: {player ? "Player 1" : "Player 2"}</p>
      <Button label={"Next Player"} onClick={() => handlePlayer()} />
      <Button label={"Reset Game"} onClick={() => handleReset()} />
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

let winner = [];
function longestSubarray(array, x) {
  let maxlength = 0,
    sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] == x) {
      sum++;
    } else {
      sum = 0;
    }
  }
  maxlength = Math.max(maxlength, sum);

  return maxlength;
}
let playerOneArray = longestSubarray(winner, 1);
let playerTwoArray = longestSubarray(winner, 0);
if (playerOneArray > playerTwoArray) {
  console.log("Player One is the Winner");
} else if (playerOneArray < playerTwoArray) {
  console.log("Player Two is the winner");
} else {
  console.log("Draw");
}
