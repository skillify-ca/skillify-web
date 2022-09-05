import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { RootState } from "./rootReducer";
import { BlockState } from "../components/math/longestStreak/MultiplicationBlock";
import { GameBlockState } from "../pages/studentPortal/labs/multiplication/game";
import { STAGE } from "../pages/studentPortal/labs/multiplication/game";
import { Stage } from "konva/lib/Stage";

export interface LongestStreakState {
  stage: STAGE;
  blocks: GameBlockState[];
  currentBlock: number;
  isPlayerOneActive: boolean;
  showPlayerOneName: string;
  showPlayerTwoName: string;
  isFilledBoard: boolean;
  isGameReset: boolean;
  isTwoPlayer: boolean;
}

const initialState: LongestStreakState = {
  stage: STAGE.SET_RULES,
  blocks: [],
  currentBlock: 0,
  isPlayerOneActive: false,
  showPlayerOneName: "Player 1",
  showPlayerTwoName: "PLayer 2",
  isFilledBoard: false,
  isGameReset: false,
  isTwoPlayer: false,

};

export const longestStreakSlice: Slice = createSlice({
  name: "longestStreak",
  initialState,
  reducers: {
    setStage: (state: LongestStreakState, action: PayloadAction<STAGE>) => {
        const stageOfGame = action.payload as STAGE;

        state.stage=stageOfGame
    },
    
    setBlocks: (state: LongestStreakState, action: PayloadAction<number>) => {
      const selectedBlock = action.payload as number;
      if (selectedBlock === BlockState.NOT_SELECTED) {
          state.blocks = GameBlockState[];
      } else if (selectedBlock === BlockState.PLAYER_ONE_SELECTED) {
          state.blocks = 1;
      } else if (selectedBlock === BlockState.PLAYER_TWO_SELECTED) {
          state.blocks = 2;
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

  },
});

export const { setStage, setBlocks, setTwoPalyer, setPlayerOneActive, setlongestStreakQuestions } =
  longestStreakSlice.actions;

export const longestStreakSelector = (state: RootState) => state.longestStreakState;

export default longestStreakSlice;