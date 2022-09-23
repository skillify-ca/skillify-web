import { createSlice, current, PayloadAction, Slice } from "@reduxjs/toolkit";
import { RootState } from "./rootReducer";
import {
  calculateWinner,
  createGrid,
  SelectedBy,
} from "../pages/api/labs/games/multiplication-connect/gameLogic";
import GameBoardBlock from "../components/math/multiplicationConnect/GameBoardBlock";

export interface MultiplicationConnectState {
  isPlayerOne: boolean;
  grid: GameBoardBlock[];
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
      // console.log(current(state.grid[block.id]));
      state.isPlayerOne
        ? (state.grid[block.id].selectedBy = SelectedBy.PlayerOne)
        : (state.grid[block.id].selectedBy = SelectedBy.PlayerTwo);
      calculateWinner(state.grid, state.isPlayerOne);
      // can't dispatch here, but could toggle state instead
      // togglePlayer(state.isPlayerOne);
    },
    togglePlayer: (state: MultiplicationConnectState) => {
      state.isPlayerOne = !state.isPlayerOne;
    },
  },
});

export const { togglePlayer, reloadGrid, blockClick } =
  multiplicationConnectSlice.actions;

export const multiplicationConnectSelector = (state: RootState) =>
  state.multiplicationConnect;
