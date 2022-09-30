import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { RootState } from "./rootReducer";
import { BlockState } from "../components/math/longestStreak/MultiplicationBlock";
import { GameBlockState } from "../pages/studentPortal/labs/multiplication/game";
import { getRandomItemFromArray, getRndInteger } from "../pages/api/random";
import {
  GameBlockState,
  GameLevelsMetaData,
  gameLevelsMetaData,
  initializeGameState,
} from "../pages/api/longestStreak";
import { min } from "lodash";

export interface LongestStreakState {
  stage: STAGE;
  reset: boolean;
  blocks: GameBlockState[];
  handlePlayerSelect: number;
  isPlayerSelecting: boolean;
  currentlySelectedBlock?: number;
  playerName: string;
}

export enum STAGE {
  SET_RULES,
  PLAY_GAME,
  CALCULATE_WINNER,
}

function initializeGameState(): GameBlockState[] {
  let dummyArray: GameBlockState[] = [];
  for (let i = 0; i <= 19; i++) {
    let x = getRndInteger(1, 10);
    let y = getRndInteger(1, 10);
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
const initialState: LongestStreakState = {
  stage: STAGE.SET_RULES,
  reset: false,
  blocks: initializeGameState(),
  handlePlayerSelect: 0,
  isPlayerSelecting: false,
  currentlySelectedBlock: null,
  playerName: "Player 1",
};

const resetInitialState: LongestStreakState = {
  stage: STAGE.PLAY_GAME,
  reset: false,
  blocks: initializeGameState(),
  handlePlayerSelect: 0,
  isPlayerSelecting: false,
  currentlySelectedBlock: null,
  playerName: "Player 1",
};

export const longestStreakSlice: Slice = createSlice({
  name: "longestStreak",
  initialState,
  reducers: {
    setStage: (state: LongestStreakState, action: PayloadAction<STAGE>) => {
      const stageOfGame = action.payload as STAGE;
      state.stage = stageOfGame;
    },

    reset: () => resetInitialState,

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
    },

    currentlySelectedBlock: (
      state: LongestStreakState,
      action: PayloadAction
    ) => {
      if (action.type === "longestStreak/currentlySelectedBlock") {
        const index = action.payload;
        return index;
      }
    },

    setPlayerName: (state, action: PayloadAction<string>) => {
      if (action.type === "longestStreak/setPlayerName") {
        const playerName = action.payload;
        state.playerName = playerName;
      }
    },
    handlePlayerSelect: (state, action: PayloadAction<number>) => {
      if (action.type === "longestStreak/handlePlayerSelect") {
        const index = action.payload;
        const unselectedBlocks = state.blocks.filter(
          (block) => block.state === BlockState.NOT_SELECTED
        );
        const secondSelectedBlockIndex = state.currentlySelectedBlock;
        // only do this if player clicked on a non selected block
        if (
          state.isPlayerSelecting === false &&
          unselectedBlocks.includes(state.blocks[index])
        ) {
          state.blocks[index].state = BlockState.HIGHLIGHTED;
          state.currentlySelectedBlock = index;
          state.isPlayerSelecting = true;
          if (secondSelectedBlockIndex != null) {
            state.blocks[secondSelectedBlockIndex].state ===
              BlockState.PLAYER_ONE_SELECTED;
          }
        } else if (
          state.isPlayerSelecting === true &&
          unselectedBlocks.includes(state.blocks[index])
        ) {
          const firstSelectedBlockIndex = state.currentlySelectedBlock;
          if (
            state.blocks[index].value ===
            state.blocks[firstSelectedBlockIndex].value
          ) {
            if (
              (state.blocks[firstSelectedBlockIndex].isProduct === true &&
                state.blocks[index].isProduct === false) ||
              (state.blocks[firstSelectedBlockIndex].isProduct === false &&
                state.blocks[index].isProduct === true)
            ) {
              state.blocks[index].state = BlockState.PLAYER_ONE_SELECTED;
              state.blocks[firstSelectedBlockIndex].state =
                BlockState.PLAYER_ONE_SELECTED;
              state.isPlayerSelecting = false;
              console.log("Index: " + index);
              console.log("Unselected: " + unselectedBlocks.length);
              console.log(
                "Last Clicked Index: " + state.currentlySelectedBlock
              );
              handleAISelection(state);
            } else {
              alert(
                "Ouch...you're being tricky with me. Re-read the rules of the game.  That move shall not pass."
              );
            }
          } else {
            alert("Whoops! You need two integers and their product!");
          }
        }
      }
    },
  },
});

function handleAISelection(state: LongestStreakState) {
  const unselectedBlocks = state.blocks.filter(
    (block) =>
      block.state === BlockState.NOT_SELECTED && block.isProduct === true
  );
  console.log("Product: " + unselectedBlocks.length);
  if (unselectedBlocks.length > 0) {
    let computerSelected: GameBlockState =
      getRandomItemFromArray(unselectedBlocks);
    const indexOfComputerSelected = state.blocks.indexOf(computerSelected);
    state.blocks[indexOfComputerSelected].state =
      BlockState.PLAYER_TWO_SELECTED;
    const valueToSearchFor = computerSelected.value;

    //find corresponding block in value that is "product" only
    const secondUnselectedBlocks = state.blocks.filter(
      (block) =>
        block.state === BlockState.NOT_SELECTED && block.isProduct === false
    );
    const secondComputerSelected = secondUnselectedBlocks.find(
      (block) => block.value === valueToSearchFor
    );
    const indexOfSecondComputerSelected = state.blocks.indexOf(
      secondComputerSelected
    );
    state.blocks[indexOfSecondComputerSelected].state =
      BlockState.PLAYER_TWO_SELECTED;
    if (unselectedBlocks.length <= 1) {
      console.log("Unselected: " + unselectedBlocks.length);
      console.log("STAGE: " + state.stage);
      state.stage = STAGE.CALCULATE_WINNER;
    }
  }
  //find block that is "x * y" only
}

export const {
  setStage,
  reset,
  setBlocks,
  isPlayerSelecting,
  handlePlayerSelect,
  initializeGame,
  currentlySelectedBlock,
  setPlayerName,
} = longestStreakSlice.actions;

export const longestStreakSelector = (state: RootState) =>
  state.longestStreakState;

export default longestStreakSlice.reducer;
