import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { RootState } from "./rootReducer";
import { BlockState } from "../components/math/longestStreak/MultiplicationBlock";
import { GameBlockState } from "../pages/studentPortal/labs/multiplication/game";
import { STAGE } from "../pages/studentPortal/labs/multiplication/game";
import { Stage } from "konva/lib/Stage";
import { getRndInteger } from "../pages/api/random";
import { shuffle } from "lodash";
import { Action } from "lottie-react";

export interface LongestStreakState {
  stage: STAGE;
  blocks: GameBlockState[];
  isPlayerOneActive: boolean;
  handlePlayerSelect: number;
}

function initializeGameState(): GameBlockState[] {
  let dummyArray = [];
  for (let i = 0; i <= 20; i++) {
    let x = getRndInteger(1, 9);
    let y = getRndInteger(1, 9);
    let z = x * y;
    let product = x + " x " + y;

    let initiateBlockState = {};

    initiateBlockState = {
      text: z.toString(),
      state: BlockState.NOT_SELECTED,
    };
    dummyArray.push(initiateBlockState);

    initiateBlockState = {
      text: product.toString(),
      state: BlockState.NOT_SELECTED,
    };
    dummyArray.push(initiateBlockState);
  }

  //shuffle list
  dummyArray = shuffle(dummyArray)
  return dummyArray

}
const initialState: LongestStreakState = {
  stage: STAGE.SET_RULES,
  blocks: initializeGameState(),
  isPlayerOneActive: false,
  handlePlayerSelect: 0,

};

export const longestStreakSlice: Slice = createSlice({
  name: "longestStreak",
  initialState,
  reducers: {
    setStage: (state: LongestStreakState, action: PayloadAction<STAGE>) => {
        const stageOfGame = action.payload as STAGE;

        state.stage=stageOfGame
    },

    setBlocks: (state: LongestStreakState, action: PayloadAction<GameBlockState[]>) => {
      const selectedBlock = action.payload as GameBlockState[];
      state.blocks = selectedBlock
  },
    initializeGame: (state: LongestStreakState, action: PayloadAction) => {
      state.blocks = initializeGameState()
    },

    setPlayerOneActive: (state, action: PayloadAction<boolean>) => {
        if (action.type === "longestStreak/setPlayerOneActive") {
          state.isPlayerOneActive = action.payload;
        }
      },
      //here's where to add the AI randomly selecting next block.
    handlePlayerSelect: (state, action: PayloadAction<number>) => {
      if (action.type === "longestStreak/handlePlayerSelect") {
        const index = action.payload; 
        if (state.isPlayerOneActive === true) {
          state.blocks[index].state = BlockState.PLAYER_ONE_SELECTED;
        } else if (state.isPlayerOneActive === false) {
          state.blocks[index].state = BlockState.PLAYER_TWO_SELECTED;
        }
      }
    }

  },
});

export const { setStage, setBlocks, setTwoPalyer, setPlayerOneActive, handlePlayerSelect, initializeGame, setlongestStreakQuestions } =
  longestStreakSlice.actions;

export const longestStreakSelector = (state: RootState) => state.longestStreakState;

export default longestStreakSlice;