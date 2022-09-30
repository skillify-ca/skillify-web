import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { RootState } from "./rootReducer";
import { BlockState } from "../components/math/longestStreak/MultiplicationBlock";
import { getRandomItemFromArray, getRndInteger } from "../pages/api/random";
import { GameBlockState, initializeGameState } from "../pages/api/longestStreak";

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


export enum GameLevel {
  BEGINNER = 1,
  BEGINNER_ADVANCED = 2,
  INTERMEDIATE = 3,
  INTERMEDIATE_ADVANCED = 4,
  EXPERT = 5,
}

//function that takes in GameLevel as input

const initialState: LongestStreakState = {
  stage: STAGE.SET_RULES,
  reset: false,
  blocks: initializeGameState(GameLevel.BEGINNER),
  handlePlayerSelect: 0,
  isPlayerSelecting: false,
  currentlySelectedBlock: null,
  playerName: "",
};

const resetInitialState: LongestStreakState = {
  stage: STAGE.PLAY_GAME,
  reset: false,
  blocks: initializeGameState(GameLevel.BEGINNER),
  handlePlayerSelect: 0,
  isPlayerSelecting: false,
  currentlySelectedBlock: null,
  playerName: "",
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

    initializeGame: (state: LongestStreakState, action: PayloadAction<GameLevel>) => {
      const currentLevel = action.payload
      state.blocks = initializeGameState(currentLevel);
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
          ) 
            {if(state.blocks[firstSelectedBlockIndex].isProduct===true && state.blocks[index].isProduct===false||state.blocks[firstSelectedBlockIndex].isProduct===false && state.blocks[index].isProduct===true){
              state.blocks[index].state = BlockState.PLAYER_ONE_SELECTED;
              state.blocks[firstSelectedBlockIndex].state =
              BlockState.PLAYER_ONE_SELECTED;
              state.isPlayerSelecting = false;
              handleAISelection(state);
            } else {
              alert("Ouch...you're being tricky with me. Re-read the rules of the game.  That move shall not pass.")
            }
              
        } else {
          alert("Whoops! You need two integers and their product!")
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
        state.stage = STAGE.CALCULATE_WINNER;  
    } 
  }
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
