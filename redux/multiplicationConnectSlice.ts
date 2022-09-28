import { createSlice, current, PayloadAction, Slice } from "@reduxjs/toolkit";
import { RootState } from "./rootReducer";
import {
  calculateWinner,
  createGrid,
  SelectedBy,
} from "../pages/api/labs/games/multiplication-connect/gameLogic";
import GameBoardBlock from "../components/math/multiplicationConnect/GameBoardBlock";

/* todo: flesh this out and implement in Index like Kari's game.tsx
    - include this in State after
    - add string like SelectedBy type (if it makes more sense when debugging)
 */
export enum Stage {
  WELCOME = "WELCOME",
  GAME_PLAY = "GAME_PLAY",
  GAME_RULES = "GAME_RULES",
  GAME_WIN = "GAME_WIN",
  GAME_OVER = "GAME_OVER",
}

export interface MultiplicationConnectState {
  isPlayerOne: boolean;
  grid: GameBoardBlock[];
  stage: Stage;
  newGame: number;
}

const initialState: MultiplicationConnectState = {
  isPlayerOne: true,
  grid: createGrid(),
  stage: Stage.WELCOME,
  newGame: 0,
};

export const multiplicationConnectSlice: Slice = createSlice({
  name: "MultiplicationConnectGame",
  initialState,
  reducers: {
    reloadGrid: (state: MultiplicationConnectState) => {
      state.grid = createGrid();
    },
    blockClick: (
      state: MultiplicationConnectState,
      action: PayloadAction<GameBoardBlock>
    ) => {
      const block = action.payload as GameBoardBlock;
      state.isPlayerOne
        ? (state.grid[block.id].selectedBy = SelectedBy.PlayerOne)
        : (state.grid[block.id].selectedBy = SelectedBy.PlayerTwo);
    },
    // setGameWin — change the selectedBy properties of the winning blocks to SelectedBy.Winner to be styled in the GameBoardBlock
    togglePlayer: (state: MultiplicationConnectState) => {
      state.isPlayerOne = !state.isPlayerOne;
    },
    setStage: (
      state: MultiplicationConnectState,
      action: PayloadAction<Stage>
    ) => {
      const gameStage = action.payload as Stage;
      console.log(state.stage + " > " + gameStage);
      state.stage = gameStage;
    },
    setGameWin: (state: MultiplicationConnectState) => {
      // TODO set winning blocks selectedBy property here & set the stage as well to game_win
      state.stage = Stage.GAME_WIN;
      console.log("game win and blocks styled here");
    },
    setNewGame: (state: MultiplicationConnectState) => {
      state.newGame++;
      state.stage = Stage.GAME_PLAY;
    },
  },
});

export const {
  togglePlayer,
  reloadGrid,
  blockClick,
  setStage,
  setNewGame,
  setGameWin,
} = multiplicationConnectSlice.actions;

export const multiplicationConnectSelector = (state: RootState) =>
  state.multiplicationConnect;
