import { shuffle } from "lodash";
import { BlockState } from "../../components/math/longestStreak/MultiplicationBlock";
import { GameLevel } from "../../redux/longestStreakSlice";
import { getRndInteger } from "./random";

export type GameBlockState = {
  text: string;
  value: number;
  isProduct: boolean;
  state: BlockState;
};

export type GameLevelData = {
  min: number,
  max: number,
}
export const gameLevelsMetaData: Record<GameLevel, GameLevelData> = {
    1: {
      min: 1,
      max: 10
    },
    2: {
      min: 10,
      max: 20,
    },
    3: {
      min: 20,
      max: 30,
    },
    4: {
      min: 30, 
      max: 40,
    }, 
    5: {
      min: 40, 
      max: 50,
    }
  }

  export function shuffleGameArray (array) {
    let shuffledArray = shuffle(array)
    return shuffledArray;
  }

export function initializeGameState(currentLevel:GameLevel): GameBlockState[] {
  let dummyArray: GameBlockState[] = [];
  console.log("CL: " + currentLevel)
  for (let i = 0; i <= 19; i++) {
      let x = getRndInteger(gameLevelsMetaData[currentLevel].min, gameLevelsMetaData[currentLevel].max);
      let y = getRndInteger(gameLevelsMetaData[currentLevel].min, gameLevelsMetaData[currentLevel].max);
      let product: number = x * y;
      let productString: string = x + " x " + y;
      let initiateBlockState: GameBlockState = {
        text: product.toString(),
        value: product,
        isProduct: true,
        state: BlockState.NOT_SELECTED,
      };
      dummyArray.push(initiateBlockState);

      initiateBlockState = {
        text: productString,
        value: product,
        isProduct: false,
        state: BlockState.NOT_SELECTED,
      };
      dummyArray.push(initiateBlockState);
    } 

  let shuffledDummyArray = shuffleGameArray(dummyArray)

  return shuffledDummyArray;
}

export function longestSubarray(array: GameBlockState[], x: BlockState) {
  let maxlength = 0;
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i].state === x) {
      sum++;
    } else {
      maxlength = Math.max(maxlength, sum);
      sum = 0;
    }
  }
  maxlength = Math.max(maxlength, sum);
  sum = 0;
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
