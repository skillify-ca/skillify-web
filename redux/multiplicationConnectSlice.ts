import { createSlice, current, PayloadAction, Slice } from "@reduxjs/toolkit";
import { RootState } from "./rootReducer";
import {
  calculateWinner,
  createGrid,
  SelectedBy,
  WinType,
} from "../pages/api/labs/games/multiplication-connect/gameLogic";
import GameBoardBlock from "../components/math/multiplicationConnect/GameBoardBlock";

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
  hasWinner: null | WinType;
  diceButtonRef: any; // undefined | HTMLDivElement causing errors
  diceState: null | number;
}

const initialState: MultiplicationConnectState = {
  isPlayerOne: true,
  grid: createGrid(),
  stage: Stage.WELCOME,
  newGame: 0,
  hasWinner: null,
  diceButtonRef: undefined,
  diceState: null,
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
    /* Outline: 
       - ✅ get computer block click to execute on each p2 move
       - ✅ setup calculateWinner logic in computerBC — figure out how to extract to function to remove redundancy 
              OR create a new action (checkWin)
       - automate the BC:
          - Roll dice
              - ✅ trigger button click inside computerBlockClick w useRef
              - ✅ create diceState — to contain the output of the dice roll
              - access the diceState to make an appropriate block selection in reducer action
          - if(p2) — select block with matching number on the GameBoard if it exists
          - else — roll again until it does 
      — output a game loss if p2 (i.e. computer) wins the game
    */
    computerBlockClick: (
      state: MultiplicationConnectState
      // action: PayloadAction<GameBoardBlock>
    ) => {
      // const block = action.payload as GameBoardBlock;

      console.log("computerBlockClick");
      const diceRoll = state.diceState;
      // array of unselected blocks
      /*       const blocks = state.grid.filter(
        (i) =>
          i.selectedBy === SelectedBy.Unselected && i.gridNumber === diceRoll
      );
      console.log(blocks.map((i) => current(i))); */
      const block = state.grid.find(
        (i) =>
          i.selectedBy === SelectedBy.Unselected && i.gridNumber === diceRoll
      );
      console.log(current(block));
      // state.grid[block.id].selectedBy = SelectedBy.PlayerTwo;
    },
    addDiceButtonRef: (
      state: MultiplicationConnectState,
      action: PayloadAction<HTMLDivElement>
    ) => {
      const diceButton = action.payload as HTMLDivElement;
      state.diceButtonRef = diceButton;
    },
    diceButtonClick: (state: MultiplicationConnectState) => {
      state.diceButtonRef.current.click();
    },
    setDiceState: (
      state: MultiplicationConnectState,
      action: PayloadAction<Number>
    ) => {
      const diceState = action.payload as number;
      state.diceState = diceState;
      console.log("diceState:", diceState);
    },
    checkWin: (state: MultiplicationConnectState) => {
      const { winType, winningBlocks } = calculateWinner(
        state.grid,
        state.isPlayerOne
      );
      console.log("{winType, winningBlocks}", { winType, winningBlocks });
      if (winningBlocks) {
        state.stage = Stage.GAME_WIN;
        state.hasWinner = winType;
        state.grid.map((block) => {
          winningBlocks.map(
            (winBlock) =>
              block.id === winBlock && (block.selectedBy = SelectedBy.Winner)
          );
        });
        // console.log("hasWinner", state.hasWinner);
        // console.log("stage after blockClick action", state.stage);
      } else if (winType === WinType.Draw) {
        state.stage = Stage.GAME_OVER;
      }
    },
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
      state.stage = Stage.GAME_PLAY;
    },
  },
});

export const {
  togglePlayer,
  reloadGrid,
  blockClick,
  computerBlockClick,
  addDiceButtonRef,
  diceButtonClick,
  setDiceState,
  checkWin,
  setStage,
  setNewGame,
} = multiplicationConnectSlice.actions;

export const multiplicationConnectSelector = (state: RootState) =>
  state.multiplicationConnect;
