import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { RootState } from "./rootReducer";

export interface MultiplicationConnectState {
  isPlayerOne: boolean;
}

/* todo: change isPlayerOne state to use Redux -- USED IN: useEffect, blockClick
    - initialState should be set here, rather than the useEffect
    - don't prop drill the state and access it w Redux instead
    - get help if getting stuck here

    upcoming: 
    + convert grid state to Redux, 
    + move the blockClick function, 
    + consider adding the stage and game rules now, 
*/
const initialState: MultiplicationConnectState = {
  isPlayerOne: true,
};

/* Actions brainstorm:
    - block selection / blockClick() -- might be able to work w the function here rather than the API file
    - setGrid
    - diceRoll
    - setPlayerName
*/
export const multiplicationConnectSlice: Slice = createSlice({
  name: "MultiplicationConnectGame",
  initialState,
  reducers: {
    // Toggles boolean isPlayerOne state on blockClick()
    // todo: make sure this toggle is working as expected when called, before calling it in blockClick()/useEffect
    togglePlayer: (state) => {
      state.isPlayerOne = !state.isPlayerOne;
      //   console.log("isPlayerOne: " + state.isPlayerOne);
    },
  },
});

export const { togglePlayer } = multiplicationConnectSlice.actions;

export const multiplicationConnectSelector = (state: RootState) =>
  state.multiplicationConnect;
