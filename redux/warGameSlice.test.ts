import reducer, { setPlayerReady, startRound } from "./warGameSlice";

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
  });
});

// test("should handle a todo being added to an empty list", () => {
//   const previousState = [];
//   expect(reducer(previousState, todoAdded("Run the tests"))).toEqual([
//     {
//       text: "Run the tests",
//       completed: false,
//       id: 0,
//     },
//   ]);
// });

// test("should handle a todo being added to an existing list", () => {
//   const previousState = [
//     {
//       text: "Run the tests",
//       completed: true,
//       id: 0,
//     },
//   ];
//   expect(reducer(previousState, todoAdded("Use Redux"))).toEqual([
//     {
//       text: "Run the tests",
//       completed: true,
//       id: 0,
//     },
//     {
//       text: "Use Redux",
//       completed: false,
//       id: 1,
//     },
//   ]);
// });
