import { PhoneMultiFactorGenerator } from "firebase/auth";
import { shuffle } from "lodash";
import { BlockState } from "../../components/math/longestStreak/MultiplicationBlock";
import { GameLevel } from "../../redux/longestStreakSlice";
import { getRndInteger } from "./random";
import { showEndGameImage } from "./showEndGameImage";

export type GameBlockState = {
  text: string;
  value: number;
  isProduct: boolean;
  state: BlockState;
};

export type GameLevelData = {
  min: number,
  max: number,
};

export const gameLevelsMetaData: Record<GameLevel, GameLevelData> = {
    1: {
      min: 0,
      max: 3,
    },
    2: {
      min: 0,
      max: 6,
    },
    3: {
      min: 0,
      max: 9,
    },
    4: {
      min: 0, 
      max: 12,
    }, 
    5: {
      min: 0, 
      max: 15,
    }
  }

  export function shuffleGameArray (array) {
    let shuffledArray = shuffle(array)
    return shuffledArray;
  }

export function initializeGameState(currentLevel:GameLevel): GameBlockState[] {
  let dummyArray: GameBlockState[] = [];
  for (let i = 0; i <= 19; i++) {
      let x = getRndInteger(gameLevelsMetaData[currentLevel].min, gameLevelsMetaData[currentLevel].max);
      let y = getRndInteger(gameLevelsMetaData[currentLevel].min, gameLevelsMetaData[currentLevel].max);
      let product: number = x * y;
      let productString: string = x + "x" + y;
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
  if (array[0].state === x && array[array.length-1].state === x) {
    maxlength +=1
  }
  return maxlength;
}


/*this calculateWinner function calculates the winner of the game with the basic logic that checks for the longest subArray.  
it can receive an input of three functions: 
the showWinner function, which will tell if levels should be incremented or not
showEndGameMessage, which will determine which message should be displayed on the winner page
or showEndGameImage, which displays a message depending on if the game is win/lose/draw*/

export function calculateWinner(array: GameBlockState[], functionName: () => void) {
  let playerOneArray = longestSubarray(array, BlockState.PLAYER_ONE_SELECTED);
  let playerTwoArray = longestSubarray(array, BlockState.PLAYER_TWO_SELECTED);
  let outcome = functionName()
  if (playerOneArray > playerTwoArray) {
    return outcome[0];
  } else if (playerTwoArray > playerOneArray) {
    return outcome[1]
  } else if (playerOneArray === playerTwoArray) {
    return outcome[2];
  }
}




export function showWinner() {
  let optionOne = true;
  let optionTwo = false;
  let optionThree = false;
  let optionsArray = [optionOne, optionTwo, optionThree];
  return optionsArray;
}

export function calculatePlayerScore(array: GameBlockState[], player) {
  if (player===1) {
    let playerOneArray = longestSubarray(
      array,
      BlockState.PLAYER_ONE_SELECTED && BlockState.HIGHLIGHTED
    );
    return playerOneArray;
  } else {
    let playerTwoArray = longestSubarray(array, BlockState.PLAYER_TWO_SELECTED);
    return playerTwoArray;
  }
  
}

export function checkNumberNotSelected(array: GameBlockState[]) {
  const ns = array.filter((block) => {
    return block.state === BlockState.NOT_SELECTED;
  });
  let notSelectedNumber = ns.length;
  return notSelectedNumber;
}
