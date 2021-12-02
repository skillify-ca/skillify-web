import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { RootState } from "./rootReducer";

export type ExpressionCard = {
  question: String; // 2^2 - 16
  answer: number; //Answers to the questions above
};

export interface WarGameState {
  cardListPlayerOne: ExpressionCard[];
  cardListPlayerTwo: ExpressionCard[];
  playerOneCurrentCard?: ExpressionCard;
  playerTwoCurrentCard?: ExpressionCard;
  currentRoundIndex: number;
  playerOneReady: boolean;
  playerTwoReady: boolean;
  playerOneWon: boolean;
  playerTwoWon: boolean;
  gameOver: boolean;
  playerOneCorrectExpressionPoints?: number;
  playerTwoCorrectExpressionPoints?: number;
}

const initialState: WarGameState = {
  cardListPlayerOne: [
    { question: "", answer: 0 },
    { question: "", answer: 1 },
    { question: "", answer: 2 },
  ],
  cardListPlayerTwo: [
    { question: "", answer: 3 },
    { question: "", answer: 4 },
    { question: "", answer: 5 },
  ],
  currentRoundIndex: 0,
  playerOneReady: false,
  playerTwoReady: false,
  playerOneWon: false,
  playerTwoWon: false,
  gameOver: false,
  playerOneCorrectExpressionPoints: 0,
  playerTwoCorrectExpressionPoints: 0,
};

export const warGameSlice: Slice = createSlice({
  name: "WarGame",
  initialState,
  reducers: {
    //Action to handle if player is ready using buttons
    setPlayerReady: (state: WarGameState, action: PayloadAction<number>) => {
      const playerId = action.payload as number;

      if (playerId === 1) {
        state.playerOneReady = true;
      } else {
        state.playerTwoReady = true;
      }
    },
    //Action to assign from cardList to playerOne or Two currentCard
    startRound: (state: WarGameState, action: PayloadAction) => {
      if (state.playerOneReady == true && state.playerTwoReady == true) {
        state.playerOneCurrentCard = state.cardListPlayerOne[0];
        state.playerTwoCurrentCard = state.cardListPlayerTwo[0];
      }
    },
    //Action that handles winning and also handles moving cards from other player and from current card they chose
    finishRound: (state: WarGameState, action: PayloadAction<number>) => {
      if (
        state.cardListPlayerOne.length == 0 ||
        state.cardListPlayerTwo.length == 0
      ) {
        state.gameOver = true;
        return;
      }
      const playerWon = action.payload as number;

      if (playerWon == 1) {
        state.playerOneWon = true;
      } else {
        state.playerTwoWon = true;
      }

      if (state.playerOneWon == true) {
        state.cardListPlayerOne.push(state.cardListPlayerOne.shift());
        state.cardListPlayerOne.push(state.cardListPlayerTwo[0]);
        state.cardListPlayerTwo.shift();
        state.playerOneCurrentCard = null;
        state.playerTwoCurrentCard = null;
        state.playerOneReady = false;
        state.playerTwoReady = false;
      } else {
        state.cardListPlayerTwo.push(state.cardListPlayerTwo.shift());
        state.cardListPlayerTwo.push(state.cardListPlayerOne[0]);
        state.cardListPlayerOne.shift();
        state.playerOneCurrentCard = null;
        state.playerTwoCurrentCard = null;
        state.playerOneReady = false;
        state.playerTwoReady = false;
      }
    },

    playerCorrectExpressionPointsCalcuation: (
      state: WarGameState,
      action: PayloadAction<number>
    ) => {
      const playerID = action.payload as number;
      if (playerID == 1) {
        state.playerOneCorrectExpressionPoints =
          state.playerOneCorrectExpressionPoints + 1;
      } else {
        state.playerTwoCorrectExpressionPoints =
          state.playerTwoCorrectExpressionPoints + 1;
      }
    },
  },
});

export const {
  setPlayerReady,
  startRound,
  finishRound,
  playerCorrectExpressionPointsCalcuation,
} = warGameSlice.actions;

export default warGameSlice.reducer;
