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

export function getRangeValues(level: GameLevel) {
  if (level === GameLevel.BEGINNER) {
    let a = 1
    let b = 10
    console.log(a, b)
    return [a, b];
} else if (level === GameLevel.BEGINNER_ADVANCED) {
    let a = 10
    let b = 20
    return [a, b];
  } else if (level === GameLevel.INTERMEDIATE) {
    let a = 20
    let b = 30
    return [a, b];
  } else if (level === GameLevel.INTERMEDIATE_ADVANCED) {
    let a = 30
    let b = 40
    return [a, b];
  } else if (level === GameLevel.EXPERT) {
    let a = 40
    let b = 50
    return [a, b];
  };
}

export function initializeGameState(): GameBlockState[] {
  let dummyArray: GameBlockState[] = [];
  for (let i = 0; i <= 19; i++) {
      let getRangeValuesArray = getRangeValues(GameLevel.BEGINNER)
      console.log("First range num: " + getRangeValuesArray[0])
      console.log("second range num: " + getRangeValuesArray[1])
      let x = getRndInteger(getRangeValuesArray[0], getRangeValuesArray[1]);
      let y = getRndInteger(getRangeValuesArray[0], getRangeValuesArray[1]);
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

  dummyArray = shuffle(dummyArray);

  return dummyArray;
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
