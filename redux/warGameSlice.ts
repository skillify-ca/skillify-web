import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";
import { RootState } from "./rootReducer";

export type ExpressionCard = {
  question: String; // 2^2 - 16
  answer: number; //Answers to the questions above
};

export interface WarGameState {
  cardListPlayerOne: ExpressionCard[];
  cardListPlayerTwo: ExpressionCard[];
  drawListPlayerOne?: ExpressionCard[];
  drawListPlayerTwo?: ExpressionCard[];
  playerOneCurrentCard?: ExpressionCard;
  playerTwoCurrentCard?: ExpressionCard;
  currentRoundIndex: number;
  playerOneReady: boolean;
  playerTwoReady: boolean;
  playerOneWon: boolean;
  playerTwoWon: boolean;
  gameOver: boolean;
  playerOneScoring?: number;
  playerTwoScoring?: number;
}

export const initialState: WarGameState = {
  cardListPlayerOne: [
    { question: "2^2 + 16", answer: 0 },
    { question: "2*(-4) + 10", answer: 1 },
    { question: "1*(-5) + 14", answer: 2 },
    { question: "1*(-3) + 14", answer: 3 },
    { question: "1*(-6) + 14", answer: 4 },
    { question: "1*(-7) + 14", answer: 5 },
  ],
  cardListPlayerTwo: [
    { question: "2^1 + 12", answer: 3 },
    { question: "2^3 + 13", answer: 4 },
    { question: "2*12 + (-6)", answer: 5 },
    { question: "1*(-2) + 14", answer: 3 },
    { question: "1*(-8) + 14", answer: 4 },
    { question: "1*(-9) + 14", answer: 5 },
  ],
  drawListPlayerOne: [],
  drawListPlayerTwo: [],
  currentRoundIndex: 0,
  playerOneReady: false,
  playerTwoReady: false,
  playerOneWon: false,
  playerTwoWon: false,
  playerOneCurrentCard: null,
  playerTwoCurrentCard: null,
  gameOver: false,
  playerOneScoring: 0,
  playerTwoScoring: 0,
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
      } else if (playerWon == 2) {
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
      } else if (state.playerTwoWon == true) {
        state.cardListPlayerTwo.push(state.cardListPlayerTwo.shift());
        state.cardListPlayerTwo.push(state.cardListPlayerOne[0]);
        state.cardListPlayerOne.shift();
        state.playerOneCurrentCard = null;
        state.playerTwoCurrentCard = null;
        state.playerOneReady = false;
        state.playerTwoReady = false;
      }

      if (playerWon == 0) {
        //Call a reducer here if in case there is a draw
        drawState(state, 0);
      }
    },

    increasePlayerScore: (
      state: WarGameState,
      action: PayloadAction<number>
    ) => {
      const playerID = action.payload as number;
      if (playerID == 1) {
        state.playerOneScoring = state.playerOneScoring + 1;
      } else {
        state.playerTwoScoring = state.playerTwoScoring + 1;
      }
    },

    resetRound: (state: WarGameState, action: PayloadAction<WarGameState>) => {
      const resetState = action.payload as WarGameState;
      console.log("RESET");

      Object.assign(state, resetState);
    },
    //Add functions before this },
  },
});

const drawState = (state: WarGameState, drawCheck: number) => {
  //If it's a draw, three cards to each player (assign them to the drawList) and then one card face up (current card)
  if (drawCheck == 0) {
    const cardsForRound = [];
    //Whoever has highest number from those cards gets all the cards (assign all cards in each drawlist to the bottom of the array)
    cardsForRound.push(state.cardListPlayerOne.shift());
    cardsForRound.push(state.cardListPlayerOne.shift());
    cardsForRound.push(state.cardListPlayerOne.shift());
    cardsForRound.push(state.cardListPlayerOne.shift());

    cardsForRound.push(state.cardListPlayerTwo.shift());
    cardsForRound.push(state.cardListPlayerTwo.shift());
    cardsForRound.push(state.cardListPlayerTwo.shift());
    cardsForRound.push(state.cardListPlayerTwo.shift());

    state.playerOneCurrentCard = state.cardListPlayerOne[0];
    state.playerTwoCurrentCard = state.cardListPlayerTwo[0];

    if (state.playerOneCurrentCard.answer > state.playerTwoCurrentCard.answer) {
      cardsForRound.push(state.cardListPlayerOne.shift());
      cardsForRound.push(state.cardListPlayerTwo.shift());
      state.cardListPlayerOne.push(...cardsForRound);
      state.playerOneWon = true;
    } else if (
      state.playerTwoCurrentCard.answer > state.playerOneCurrentCard.answer
    ) {
      cardsForRound.push(state.cardListPlayerOne.shift());
      cardsForRound.push(state.cardListPlayerTwo.shift());
      state.cardListPlayerTwo.push(...cardsForRound);
      state.playerTwoWon = true;
    }
    state.playerOneCurrentCard = null;
    state.playerTwoCurrentCard = null;
    state.playerOneReady = false;
    state.playerTwoReady = false;
  }
  return state;
};

export const {
  setPlayerReady,
  startRound,
  finishRound,
  increasePlayerScore,
  resetRound,
} = warGameSlice.actions;

export const warGameSelector = (state: RootState) => state.warGame;

export default warGameSlice.reducer;
