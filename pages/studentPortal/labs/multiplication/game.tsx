import { shuffle } from "lodash";
import React, { useState } from "react";
import CalculateWinner from "../../../../components/math/longestStreak/CalculateWinner";
import MultiplicationBlock, {
  BlockState,
} from "../../../../components/math/longestStreak/MultiplicationBlock";
import SetRules from "../../../../components/math/longestStreak/SetRules";
import { Button } from "../../../../components/ui/Button";
import { getRndInteger } from "../../../api/random";

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

export const [stage, setStage] = useState(STAGE.SET_RULES);
export const [isPlayerOneActive, setPlayerOneActive] = useState(false);



export function handlePlayer() {
  setPlayerOneActive(!isPlayerOneActive);
}



export default function BlockComponentGallery() {

  const initialGameState: GameBlockState[] = [
    {
      text: "",
      state: BlockState.NOT_SELECTED,
    },
    {
      text: "",
      state: BlockState.NOT_SELECTED,
    },
    {
      text: "",
      state: BlockState.NOT_SELECTED,
    },
    {
      text: "",
      state: BlockState.NOT_SELECTED,
    },
    {
      text: "",
      state: BlockState.NOT_SELECTED,
    },
    {
      text: "",
      state: BlockState.NOT_SELECTED,
    },
    {
      text: "",
      state: BlockState.NOT_SELECTED,
    },
    {
      text: "",
      state: BlockState.NOT_SELECTED,
    },
    {
      text: "",
      state: BlockState.NOT_SELECTED,
    },
    {
      text: "",
      state: BlockState.NOT_SELECTED,
    },
    {
      text: "",
      state: BlockState.NOT_SELECTED,
    },
    {
      text: "",
      state: BlockState.NOT_SELECTED,
    },
    {
      text: "",
      state: BlockState.NOT_SELECTED,
    },
    {
      text: "",
      state: BlockState.NOT_SELECTED,
    },
    {
      text: "",
      state: BlockState.NOT_SELECTED,
    },
    {
      text: "",
      state: BlockState.NOT_SELECTED,
    },
    {
      text: "",
      state: BlockState.NOT_SELECTED,
    },
    {
      text: "",
      state: BlockState.NOT_SELECTED,
    },
    {
      text: "",
      state: BlockState.NOT_SELECTED,
    },
    {
      text: "",
      state: BlockState.NOT_SELECTED,
    },
    {
      text: "",
      state: BlockState.NOT_SELECTED,
    },
    {
      text: "",
      state: BlockState.NOT_SELECTED,
    },
    {
      text: "",
      state: BlockState.NOT_SELECTED,
    },
    {
      text: "",
      state: BlockState.NOT_SELECTED,
    },
    {
      text: "",
      state: BlockState.NOT_SELECTED,
    },
    {
      text: "",
      state: BlockState.NOT_SELECTED,
    },
    {
      text: "",
      state: BlockState.NOT_SELECTED,
    },
    {
      text: "",
      state: BlockState.NOT_SELECTED,
    },
    {
      text: "",
      state: BlockState.NOT_SELECTED,
    },
    {
      text: "",
      state: BlockState.NOT_SELECTED,
    },
    {
      text: "",
      state: BlockState.NOT_SELECTED,
    },
    {
      text: "",
      state: BlockState.NOT_SELECTED,
    },
    {
      text: "",
      state: BlockState.NOT_SELECTED,
    },
    {
      text: "",
      state: BlockState.NOT_SELECTED,
    },
    {
      text: "",
      state: BlockState.NOT_SELECTED,
    },
    {
      text: "",
      state: BlockState.NOT_SELECTED,
    },
    {
      text: "",
      state: BlockState.NOT_SELECTED,
    },
    {
      text: "",
      state: BlockState.NOT_SELECTED,
    },
    {
      text: "",
      state: BlockState.NOT_SELECTED,
    },
    {
      text: "",
      state: BlockState.NOT_SELECTED,
    },
  ];
  
  function randomNumberProductList(
    min,
    max,
  ) {
    let x = getRndInteger(1, 9);
    let y = getRndInteger(1, 9);
    let z = x * y
    let product = `x " x " y`
    let randomList=[]
    for (let i=0; i<=20; i++) {
      randomList.push(z.toString())
    }
    for (let i=0; i<=20; i++) {
      randomList.push(product)
    }
    //shuffle list
    let shuffledList=shuffle(randomList)
  
    //map array to the gameState.text
    let answer = [shuffledList].reduce((gameState.text, v) => ({ gameState.text, [v]: v}), {})
    return answer  
    
  }
  
  
  export function handleReset() {
    setGameState(initialGameState);
  }
  
  export const [gameState, setGameState] =
    useState<GameBlockState[]>(initialGameState);
  
  export function handleSelect(index) {
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
  
  export function handlePlayGame() {
    setStage(STAGE.PLAY_GAME);
  }
  
  export function handleCalculateWinner() {
    setStage(STAGE.CALCULATE_WINNER);
  }

  return (
    <div>
      {stage === STAGE.SET_RULES ? (
        <SetRules text={""} onClick={handlePlayGame} />
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
                  onClick={() => handleSelect(index + 9)}
                  blockState={item.state}
                />
              ))}
            </div>
            <div className="col-span-7 bg-blue-800">Image</div>
            <div className="flex flex-col">
              {gameState.slice(20, 31).map((item, index) => (
                <MultiplicationBlock
                  text={item.text}
                  onClick={() => handleSelect(index + 20)}
                  blockState={item.state}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-row">
            {gameState.slice(31, 41).map((item, index) => (
              <MultiplicationBlock
                text={item.text}
                onClick={() => handleSelect(index + 31)}
                blockState={item.state}
              />
            ))}
          </div>
        </div>
      ) : stage === STAGE.CALCULATE_WINNER ? (
        <CalculateWinner text={""} onClick={handlePlayGame} />
      ) : null}
    </div>
  );
}
function initialGameState(initialGameState: any) {
  throw new Error("Function not implemented.");
}

