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
  shouldShowPlayerOneName: string;
  shouldShowPlayerTwoName: string;
  isFilledBoard: boolean;
  isGameReset: boolean;
  isTwoPlayer: boolean;
}

const initialState: LongestStreakState = {
  stage: 1,
  blocks: [],
  currentBlock: 0,
  isPlayerOneActive: false,
  shouldShowPlayerOneName: "Player 1",
  shouldShowPlayerTwoName: "PLayer 2",
  isFilledBoard: false,
  isGameReset: false,
  isTwoPlayer: false,
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
            state.shouldShowPlayerOneName = action.payload;
        }
    },
    setShowPlayerTwoName: (state, action: PayloadAction<string>) => {
        if (action.type === "longestStreak/setShowPlayerOneName") {
            state.shouldShowPlayerTwoName = action.payload;
        }
    },
    continueRequested: (state, action) => {
      if (action.type == "longestStreak/continueRequested") {
        if (state.isGraded) {
          state.isGraded = false;
          if (state.shouldShowCorrectGrade) {
            state.shouldShowCorrectGrade = false;
          }
          if (state.shouldShowIncorrectGrade) {
            state.shouldShowIncorrectGrade = false;
          }
          if (state.currentQuestion === state.questions.length - 1) {
            state.currentQuestion = state.currentQuestion + 1;
            state.showSessionEnd = true;
          } else {
            state.currentQuestion = state.currentQuestion + 1;
          }
          state.selectedOption = undefined;
        } else {
          state.isGraded = true;
          if (
            state.selectedOption ===
            state.questions[state.currentQuestion].answer
          ) {
            state.shouldShowCorrectGrade = true;
          } else {
            state.shouldShowIncorrectGrade = true;
          }
        }
      }
    },
  },
});

export const { setlongestStreakQuestions, selectOptionRequested, continueRequested } =
  longestStreakSlice.actions;

export const longestStreakSelector = (state: RootState) => state.longestStreakState;
