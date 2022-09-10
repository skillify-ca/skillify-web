import { BlockState } from "../components/math/longestStreak/MultiplicationBlock";
import reducer, {
  currentlySelectedBlock,
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
      text: "56",
      value: 56,
      isProduct: 1,
      state: BlockState.NOT_SELECTED,
    },
    {
      text: "7 x 8",
      value: 56,
      isProduct: null,
      state: BlockState.NOT_SELECTED,
    },
    {
      text: "72",
      value: 72,
      isProduct: 1,
      state: BlockState.NOT_SELECTED,
    },
    {
      text: "6 x 6",
      value: 36,
      isProduct: null,
      state: BlockState.NOT_SELECTED,
    },
    {
      text: "36",
      value: 36,
      isProduct: 1,
      state: BlockState.NOT_SELECTED,
    },
    {
      text: "8 x 9",
      value: 72,
      isProduct: null,
      state: BlockState.NOT_SELECTED,
    },
  ],
  stage: STAGE.PLAY_GAME,
  isPlayerSelecting: false,
  handlePlayerSelect: 1,
  currentlySelectedBlock: 1,
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
        text: "56",
        value: 56,
        isProduct: 1,
        state: BlockState.NOT_SELECTED,
      },
      {
        text: "7 x 8",
        value: 56,
        isProduct: null,
        state: BlockState.PLAYER_ONE_SELECTED,
      },
      {
        text: "72",
        value: 72,
        isProduct: 1,
        state: BlockState.NOT_SELECTED,
      },
      {
        text: "6 x 6",
        value: 36,
        isProduct: null,
        state: BlockState.NOT_SELECTED,
      },
      {
        text: "36",
        value: 36,
        isProduct: 1,
        state: BlockState.NOT_SELECTED,
      },
      {
        text: "8 x 9",
        value: 72,
        isProduct: null,
        state: BlockState.NOT_SELECTED,
      },
    ],
    stage: STAGE.PLAY_GAME,
    isPlayerSelecting: true,
    handlePlayerSelect: 1,
    currentlySelectedBlock: 1,
  };
  expect(reducer(initialState, handlePlayerSelect(1))).toEqual(finalState);
});

test("test selecting two blocks should trigger AI selection", () => {
  // Arrange
  const finalState = {
    blocks: [
      {
        text: "56",
        value: 56,
        isProduct: 1,
        state: BlockState.PLAYER_ONE_SELECTED,
      },
      {
        text: "7 x 8",
        value: 56,
        isProduct: null,
        state: BlockState.PLAYER_ONE_SELECTED,
      },
      {
        text: "72",
        value: 72,
        isProduct: 1,
        state: BlockState.PLAYER_TWO_SELECTED,
      },
      {
        text: "6 x 6",
        value: 36,
        isProduct: null,
        state: BlockState.NOT_SELECTED,
      },
      {
        text: "36",
        value: 36,
        isProduct: 1,
        state: BlockState.NOT_SELECTED,
      },
      {
        text: "8 x 9",
        value: 72,
        isProduct: null,
        state: BlockState.PLAYER_TWO_SELECTED,
      },
    ],
    stage: STAGE.PLAY_GAME,
    isPlayerSelecting: false,
    handlePlayerSelect: 1,
    currentlySelectedBlock: 1,
  };

  //Act
  const firstState = reducer(initialState, handlePlayerSelect(1));
  const secondState = reducer(firstState, handlePlayerSelect(0),);
  const thirdState = reducer(secondState, handlePlayerSelect(2));
  const fourthState = reducer(thirdState, handlePlayerSelect(5));
  // Assert
  expect(fourthState).toEqual(finalState);
});

test("test selecting invalid blocks", () => {
// Arrange
  //TODO implement this
});
