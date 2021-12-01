import reducer, {
  setPlayerReady,
  startRound,
  finishRound,
} from "./warGameSlice";

const initialState = {
  cardListPlayerOne: [
    { answer: 0, question: "" },
    { answer: 1, question: "" },
    { answer: 2, question: "" },
  ],
  cardListPlayerTwo: [
    { answer: 3, question: "" },
    { answer: 4, question: "" },
    { answer: 5, question: "" },
  ],
  currentRoundIndex: 0,
  playerOneReady: false,
  playerTwoReady: false,
  playerOneWon: false,
  playerTwoWon: false,
  gameOver: false,
};

test("should return the initial state", () => {
  expect(reducer(undefined, { type: "no action" })).toEqual(initialState);
});

test("test player one ready action", () => {
  expect(reducer(initialState, setPlayerReady(1))).toEqual({
    cardListPlayerOne: [
      { answer: 0, question: "" },
      { answer: 1, question: "" },
      { answer: 2, question: "" },
    ],
    cardListPlayerTwo: [
      { answer: 3, question: "" },
      { answer: 4, question: "" },
      { answer: 5, question: "" },
    ],
    currentRoundIndex: 0,
    playerOneReady: true,
    playerTwoReady: false,
    playerOneWon: false,
    playerTwoWon: false,
    gameOver: false,
  });
});

test("test player two ready action", () => {
  expect(reducer(initialState, setPlayerReady(2))).toEqual({
    cardListPlayerOne: [
      { answer: 0, question: "" },
      { answer: 1, question: "" },
      { answer: 2, question: "" },
    ],
    cardListPlayerTwo: [
      { answer: 3, question: "" },
      { answer: 4, question: "" },
      { answer: 5, question: "" },
    ],
    currentRoundIndex: 0,
    playerOneReady: false,
    playerTwoReady: true,
    playerOneWon: false,
    playerTwoWon: false,
    gameOver: false,
  });
});

test("test both players ready and start round action", () => {
  const firstState = reducer(initialState, setPlayerReady(1));
  const secondState = reducer(firstState, setPlayerReady(2));
  expect(reducer(secondState, startRound(null))).toEqual({
    cardListPlayerOne: [
      { answer: 0, question: "" },
      { answer: 1, question: "" },
      { answer: 2, question: "" },
    ],
    cardListPlayerTwo: [
      { answer: 3, question: "" },
      { answer: 4, question: "" },
      { answer: 5, question: "" },
    ],
    currentRoundIndex: 0,
    playerOneReady: true,
    playerTwoReady: true,
    playerOneWon: false,
    playerTwoWon: false,
    gameOver: false,
    playerOneCurrentCard: {
      answer: 0,
      question: "",
    },
    playerTwoCurrentCard: {
      answer: 3,
      question: "",
    },
  });
});

test("test if player one won the round", () => {
  const firstState = reducer(initialState, setPlayerReady(1));
  const secondState = reducer(firstState, setPlayerReady(2));
  const thirdState = reducer(secondState, startRound(null));
  expect(reducer(thirdState, finishRound(1))).toEqual({
    cardListPlayerOne: [
      { answer: 1, question: "" },
      { answer: 2, question: "" },
      { answer: 0, question: "" },
      { answer: 3, question: "" },
    ],
    cardListPlayerTwo: [
      { answer: 4, question: "" },
      { answer: 5, question: "" },
    ],
    currentRoundIndex: 0,
    playerOneReady: false,
    playerTwoReady: false,
    playerOneWon: true,
    playerTwoWon: false,
    gameOver: false,
    playerOneCurrentCard: null,
    playerTwoCurrentCard: null,
  });
});

test("test if player two won the round", () => {
  const firstState = reducer(initialState, setPlayerReady(1));
  const secondState = reducer(firstState, setPlayerReady(2));
  const thirdState = reducer(secondState, startRound(null));
  expect(reducer(thirdState, finishRound(2))).toEqual({
    cardListPlayerOne: [
      { answer: 1, question: "" },
      { answer: 2, question: "" },
    ],
    cardListPlayerTwo: [
      { answer: 4, question: "" },
      { answer: 5, question: "" },
      { answer: 3, question: "" },
      { answer: 0, question: "" },
    ],
    currentRoundIndex: 0,
    playerOneReady: false,
    playerTwoReady: false,
    playerOneWon: false,
    playerTwoWon: true,
    gameOver: false,
    playerOneCurrentCard: null,
    playerTwoCurrentCard: null,
  });
});
