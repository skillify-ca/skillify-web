import { BlockState } from "../components/math/longestStreak/MultiplicationBlock";
import reducer, {
  handlePlayerSelect,
  LongestStreakState,
  STAGE,
} from "./longestStreakSlice";

// Arrange create initialState
// Act reducer(initialState, action)
// Assert expect()

const initialState: LongestStreakState = {
  blocks: [
    {
      text: "72",
      value: 72,
      state: BlockState.NOT_SELECTED,
    },
    {
      text: "7 x 8",
      value: 56,
      state: BlockState.NOT_SELECTED,
    },
    {
      text: "72",
      value: 72,
      state: BlockState.NOT_SELECTED,
    },
  ],
  stage: STAGE.PLAY_GAME,
  isPlayerOneActive: false, // TODO remove?
  handlePlayerSelect: 0, // TODO remove?
  isPlayerSelecting: false,
};

test("should return the initial state", () => {
  expect(reducer(initialState, { type: "no action" })).toEqual(initialState);
});

test("test selecting one block", () => {
  // Arrange
  // Act
  // Assert

  const finalState = {
    blocks: [
      {
        text: "72",
        value: 72,
        state: BlockState.PLAYER_ONE_SELECTED,
      },
      {
        text: "7 x 8",
        value: 56,
        state: BlockState.NOT_SELECTED,
      },
      {
        text: "72",
        value: 72,
        state: BlockState.NOT_SELECTED,
      },
    ],
    stage: STAGE.PLAY_GAME,
    isPlayerOneActive: false, // TODO remove?
    handlePlayerSelect: 0, // TODO remove?
    isPlayerSelecting: true,
  };
  expect(reducer(initialState, handlePlayerSelect(0))).toEqual(finalState);
});

test("test selecting two blocks should trigger AI selection", () => {
  // Arrange
  const finalState = {
    blocks: [
      {
        text: "72",
        value: 72,
        state: BlockState.PLAYER_ONE_SELECTED,
      },
      {
        text: "7 x 8",
        value: 56,
        state: BlockState.PLAYER_ONE_SELECTED,
      },
      {
        text: "72",
        value: 72,
        state: BlockState.PLAYER_TWO_SELECTED,
      },
    ],
    stage: STAGE.PLAY_GAME,
    isPlayerOneActive: false, // TODO remove?
    handlePlayerSelect: 0, // TODO remove?
    isPlayerSelecting: false,
  };

  //Act
  const firstState = reducer(initialState, handlePlayerSelect(0));
  const secondState = reducer(firstState, handlePlayerSelect(1));

  // Assert
  expect(secondState).toEqual(finalState);
});

test("test selecting invalid blocks", () => {
  //TODO implement this
});
