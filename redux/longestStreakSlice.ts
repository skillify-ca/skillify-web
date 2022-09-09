import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { RootState } from "./rootReducer";
import { BlockState } from "../components/math/longestStreak/MultiplicationBlock";
import { GameBlockState } from "../pages/studentPortal/labs/multiplication/game";
import { getRandomItemFromArray, getRndInteger } from "../pages/api/random";
import { shuffle } from "lodash";
import { useRef } from "react";

export interface LongestStreakState {
  stage: STAGE;
  blocks: GameBlockState[];
  handlePlayerSelect: number;
  isPlayerSelecting: boolean;
}

export enum STAGE {
  SET_RULES,
  PLAY_GAME,
  CALCULATE_WINNER,
}

function initializeGameState(): GameBlockState[] {
  let dummyArray: GameBlockState[] = [];
  for (let i = 0; i <= 20; i++) {
    let x = getRndInteger(1, 9);
    let y = getRndInteger(1, 9);
    let product: number = x * y;
    let productString: string = x + " x " + y;

    let initiateBlockState: GameBlockState = {
      text: product.toString(),
      value: product,
      state: BlockState.NOT_SELECTED,
    };
    dummyArray.push(initiateBlockState);

    initiateBlockState = {
      text: productString,
      value: product,
      state: BlockState.NOT_SELECTED,
    };
    dummyArray.push(initiateBlockState);
  }

  //shuffle list
  dummyArray = shuffle(dummyArray);
  return dummyArray;
}
const initialState: LongestStreakState = {
  stage: STAGE.SET_RULES,
  blocks: initializeGameState(),
  handlePlayerSelect: 0,
  isPlayerSelecting: false,
};

function storeSelectedBlock() {
  const block = useRef("state.blocks[index].value");  
  return null
};

export const longestStreakSlice: Slice = createSlice({
  name: "longestStreak",
  initialState,
  reducers: {
    setStage: (state: LongestStreakState, action: PayloadAction<STAGE>) => {
      const stageOfGame = action.payload as STAGE;

      state.stage = stageOfGame;
    },

    setBlocks: (
      state: LongestStreakState,
      action: PayloadAction<GameBlockState[]>
    ) => {
      const selectedBlock = action.payload as GameBlockState[];
      state.blocks = selectedBlock;
    },
    initializeGame: (state: LongestStreakState, action: PayloadAction) => {
      state.blocks = initializeGameState();
    },

  
    isPlayerSelecting: (state, action: PayloadAction<boolean>) => {
      if (action.type === "longestStreak/isPlayerSelecting") {
        state.isPlayerSelecting = action.payload;
      }
      // if (action.type === "longestStreak/isPlayerSelecting") {
      //   state.isPlayerSelecting = action.payload;
      //   for (let clickState=0; clickState<=2; clickState++) {
      //     if (clickState===1) {
      //       state.isPlayerSelecting === false;
      //     } else if (clickState===2) {
      //       state.isPlayerSelecting===false
      //       clickState--
      //     }
      //   }
      // }
    },

    

    handlePlayerSelect: (state, action: PayloadAction<number>) => {
      if (action.type === "longestStreak/handlePlayerSelect") {
        const index = action.payload;
        const unselectedBlocks = state.blocks.filter(
          (block) => block.state === BlockState.NOT_SELECTED
        );
        const playerOneSelectedBlock = state.blocks[index]
        const blockTwoValueToSearchFor = playerOneSelectedBlock.value;
        // TODO only do this if player clicked on a non selected block
        if (state.isPlayerSelecting === false && unselectedBlocks.includes(state.blocks[index])) {
         // Player selected first block
          state.blocks[index].state = BlockState.PLAYER_ONE_SELECTED;
          storeSelectedBlock()
          state.isPlayerSelecting = true;
          
      } else if (state.isPlayerSelecting === true && unselectedBlocks.includes(state.blocks[index])) {
         
            // Player selected second block
            // TODO only allow player to click the "correct" block
            state.blocks[index].state = BlockState.PLAYER_ONE_SELECTED;
            state.isPlayerSelecting = false;
            handleAISelection(state);
          }
          
        }
  
    },
  },
});

function handleAISelection(state: LongestStreakState) {
  const unselectedBlocksAll = state.blocks.filter(
    (block) => block.state === BlockState.NOT_SELECTED
  );
  //find block that is "x * y" only
  const unselectedBlocks = unselectedBlocksAll.filter(
    (block) => block.text.length >=4
  );
    let computerSelected: GameBlockState =
    getRandomItemFromArray(unselectedBlocks);
  const indexOfComputerSelected = state.blocks.indexOf(computerSelected);
  state.blocks[indexOfComputerSelected].state = BlockState.PLAYER_TWO_SELECTED; 
  const valueToSearchFor = computerSelected.value;
  
  //find corresponding block in value that is "product" only
  const secondComputerSelectedProduct = unselectedBlocks.filter( (block) => block.text.length <=3)
  const secondComputerSelected = secondComputerSelectedProduct.find( (block) => block.value === valueToSearchFor)
  const indexOfSecondComputerSelected = state.blocks.indexOf(secondComputerSelected);
  state.blocks[indexOfSecondComputerSelected].state = BlockState.PLAYER_TWO_SELECTED;
 

  // TODO find a a non-selected block that has the value to search for and then select that
}

export const {
  setStage,
  setBlocks,
  isPlayerSelecting,
  handlePlayerSelect,
  initializeGame,
  setlongestStreakQuestions,
} = longestStreakSlice.actions;

export const longestStreakSelector = (state: RootState) =>
  state.longestStreakState;

export default longestStreakSlice.reducer;
