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
    return <img src="/images/playerOneWinner.png" />;
  } else if (playerTwoArray > playerOneArray) {
    return <img src="/images/playerTwoWinner.png" />;
  } else if (playerOneArray === playerTwoArray) {
    return <img src="/images/drawWinner.png" />;
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
        <div className="space-y-4 flex flex-col items-center justify-center text-murkrow">
          <h1 className="font-bold text-2xl flex justify-center">
            Welcome to the Multiplication Block Game!
          </h1>
          <ol className="justify-center">
            <span className="font-black">Your Quest?</span> Magically turn the
            longest line of squares into the Player 1 or Player 2 color.{" "}
          </ol>
          <div className="space-y-4 py-4 bg-gradient-to-b bg-charmander hover:bg-pikachu-500 text-white px-3 font-bold border-b-4 rounded-lg active:border-b-2 cursor-pointer`">
            <ol className="justify-start">
              1. {""} {""}Embark on this math mission by clicking on two
              squares: a <span className="text-xl">multiplication problem</span>{" "}
              and its <span className="text-xl">product.</span> The squares will
              magically change to a different color for each player.
            </ol>
            <ol className="justify-start">
              2. {""}
              {""}Switch players and colors by clicking the{" "}
              <span className="text-xl">"Next Player"</span>
              button.
            </ol>
            <ol className="justify-start">
              3. {""}
              {""}When all squares have been magically colored in, click
              <span className="text-xl">"Calculate Winner"</span> to see who
              conquered the board on this mission!
            </ol>
          </div>
          <p>Learning how to multiply can be fun! Click "Play Game" below!</p>
          <Button label={"Play Game"} onClick={handlePlayGame} />
        </div>
      ) : stage === STAGE.PLAY_GAME ? (
        <div className="grid grid-cols-6 grid-rows-7">
          <div className="pb-4 font-black col-start-1 col-end-6 flex justify-evenly w-[45rem]">
            Current Player: {isPlayerOneActive ? "Player 1" : "Player 2"}
          </div>
          <div className="pb-8 col-start-1 col-end-7 flex justify-evenly w-[45rem]">
            <Button label={"Next Player"} onClick={() => handlePlayer()} />
            <Button label={"Reset Game"} onClick={() => handleReset()} />
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
              {gameState.slice(9, 20).map((item, index) => (
                <MultiplicationBlock
                  text={item.text}
                  onClick={() => handleSelect(index)}
                  blockState={item.state}
                />
              ))}
            </div>
            <div className="col-span-7 bg-blue-800">Image</div>
            <div className="flex flex-col">
              {gameState.slice(20, 31).map((item, index) => (
                <MultiplicationBlock
                  text={item.text}
                  onClick={() => handleSelect(index)}
                  blockState={item.state}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-row">
            {gameState.slice(31, 41).map((item, index) => (
              <MultiplicationBlock
                text={item.text}
                onClick={() => handleSelect(index)}
                blockState={item.state}
              />
            ))}
          </div>
        </div>
      ) : stage === STAGE.CALCULATE_WINNER ? (
        <div className="flex-row justify-center">
          <div className="flex justify-center animate-bounce space-y-6 py-4 bg-gradient-to-b bg-charmander hover:bg-pikachu-500 text-white px-3 font-bold text-xl border-b-4 rounded-lg active:border-b-2 cursor-pointer`">
            {calculateWinner(gameState)}
          </div>
          <div className="flex justify-center">
            {" "}
            {showEndGameImage(gameState)}
          </div>
          <p className="py-8 flex justify-center">
            Take heart. Practice makes perfect. Begin again!
          </p>
          <div className="flex justify-center">
            <Button label={"Play Again"} onClick={handlePlayGame} />
          </div>
        </div>
      ) : null}
    </div>
  );
}
