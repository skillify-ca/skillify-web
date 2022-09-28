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

/* todo: Change states to use Redux:
    - initialState should be set here, rather than the useState hook
    - remove prop drilling and access with selector + slice

    Upcoming: 
    + consider adding the stage and game rules now, 
    + diceRoll
    + setPlayerName
*/
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
      // if calculateWinner() === Win (Loss, Draw)
      // state.stage = Stage.GAME_WIN
      /* todo: calculateWinner should return winning block.id's to be highlighted on gameboard & the winning player*/
      calculateWinner(state.grid, state.isPlayerOne);
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
    setNewGame: (state: MultiplicationConnectState) => {
      state.newGame++;
    },
  },
});

export const { togglePlayer, reloadGrid, blockClick, setStage, setNewGame } =
  multiplicationConnectSlice.actions;

export const multiplicationConnectSelector = (state: RootState) =>
  state.multiplicationConnect;
