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
    //Action that handles winning

    //Action that also handles moving cards from other player and from current card they chose
  },
});

export const { setPlayerReady, startRound } = warGameSlice.actions;

export default warGameSlice.reducer;
