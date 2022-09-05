import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { RootState } from "./rootReducer";
import { BlockState } from "../components/math/longestStreak/MultiplicationBlock";
import { GameBlockState } from "../pages/studentPortal/labs/multiplication/game";
import { STAGE } from "../pages/studentPortal/labs/multiplication/game";

export interface LongestStreakState {
  stage: number;
  blocks: GameBlockState[];
  currentBlock: number;
  isPlayerOneActive: boolean;
  showPlayerOneName: string;
  showPlayerTwoName: string;
  isFilledBoard: boolean;
  isGameReset: boolean;
  isTwoPlayer: boolean;
  showPlayerOneSelected: boolean;
  showPlayerTwoSelected: boolean;
  showNotSelected: boolean;
  setBlockFreeze: boolean;
}

const initialState: LongestStreakState = {
  stage: 1,
  blocks: [],
  currentBlock: 0,
  isPlayerOneActive: false,
  showPlayerOneName: "Player 1",
  showPlayerTwoName: "PLayer 2",
  isFilledBoard: false,
  isGameReset: false,
  isTwoPlayer: false,
  showPlayerOneSelected: false,
  showPlayerTwoSelected: false,
  showNotSelected: true,
  setBlockFreeze: false,

};

export const longestStreakSlice: Slice = createSlice({
  name: "longestStreak",
  initialState,
  reducers: {
    setStage: (state: LongestStreakState, action: PayloadAction<number>) => {
        const stageOfGame = action.payload as number;

        if (stageOfGame === STAGE.SET_RULES) {
            state.stage = 1;
        } else if (stageOfGame === STAGE.PLAY_GAME) {
            state.stage = 2;
        } else if (stageOfGame === STAGE.CALCULATE_WINNER) {
            state.stage = 3;
        }
    },
    setBlocks: (state: LongestStreakState, action: PayloadAction<GameBlockState[]>) => {
        if (action.type == "longestStreak/setBlocks") {
          state.blocks = action.payload;
        }
      },
    setTwoPlayer: (state, action: PayloadAction<boolean>) => {
      if (action.type === "longestStreak/setTwoPlayer") {
        state.isTwoPlayer = action.payload;
      }
    },
    setPlayerOneActive: (state, action: PayloadAction<boolean>) => {
        if (action.type === "longestStreak/setPlayerOneActive") {
          state.isPlayerOneActive = action.payload;
        }
      },
    setShowPlayerOneName: (state, action: PayloadAction<string>) => {
        if (action.type === "longestStreak/setShowPlayerOneName") {
            state.showPlayerOneName = action.payload;
        }
    },
    setShowPlayerTwoName: (state, action: PayloadAction<string>) => {
        if (action.type === "longestStreak/setShowPlayerOneName") {
            state.showPlayerTwoName = action.payload;
        }
    },

    selectBlocks: (state, action) => {
      if (action.type == "longestStreak/selectBlocks") {
        if (state.stage === 2 ) {
          state.blocks = action.payload;
          if (state.showPlayerOneSelected) {
            state.setBlockFreeze = true;
          }
          if (state.showPlayerTwoSelected) {
            state.setBlockFreeze = true;
          }
          if (state.isFilledBoard) {
            state.stage + 1 ;
          } else {
            state.stage - 1;
          }
          if (
            state.isGameReset) {
                state.stage === 1;
            } 
        }
      }
    },
  },
});

export const { setlongestStreakQuestions, selectOptionRequested, continueRequested } =
  longestStreakSlice.actions;

export const longestStreakSelector = (state: RootState) => state.longestStreakState;
