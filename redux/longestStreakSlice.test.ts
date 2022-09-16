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
      text: "56",
      value: 56,
      isProduct: true,
      state: BlockState.NOT_SELECTED,
    },
    {
      text: "7x8",
      value: 56,
      isProduct: false,
      state: BlockState.NOT_SELECTED,
    },
    {
      text: "72",
      value: 72,
      isProduct: true,
      state: BlockState.NOT_SELECTED,
    },
    {
      text: "6x6",
      value: 36,
      isProduct: false,
      state: BlockState.NOT_SELECTED,
    },
    {
      text: "36",
      value: 36,
      isProduct: true,
      state: BlockState.NOT_SELECTED,
    },
    {
      text: "8x9",
      value: 72,
      isProduct: false,
      state: BlockState.NOT_SELECTED,
    },
  ],
  stage: STAGE.PLAY_GAME,
  isPlayerSelecting: false,
  reset: false,
  handlePlayerSelect: 0,
  playerName: ""
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
        isProduct: true,
        state: BlockState.NOT_SELECTED,
      },
      {
        text: "7x8",
        value: 56,
        isProduct: false,
        state: BlockState.HIGHLIGHTED,
      },
      {
        text: "72",
        value: 72,
        isProduct: true,
        state: BlockState.NOT_SELECTED,
      },
      {
        text: "6x6",
        value: 36,
        isProduct: false,
        state: BlockState.NOT_SELECTED,
      },
      {
        text: "36",
        value: 36,
        isProduct: true,
        state: BlockState.NOT_SELECTED,
      },
      {
        text: "8x9",
        value: 72,
        isProduct: false,
        state: BlockState.NOT_SELECTED,
      },
    ],
    currentlySelectedBlock: 1,
    handlePlayerSelect: 0,
    playerName: "",
    stage: STAGE.PLAY_GAME,
    isPlayerSelecting: true,
    reset: false,
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
        isProduct: true,
        state: BlockState.PLAYER_ONE_SELECTED,
      },
      {
        text: "7x8",
        value: 56,
        isProduct: false,
        state: BlockState.PLAYER_ONE_SELECTED,
      },
      {
        text: "72",
        value: 72,
        isProduct: true,
        state: BlockState.PLAYER_TWO_SELECTED,
      },
      {
        text: "6x6",
        value: 36,
        isProduct: false,
        state: BlockState.NOT_SELECTED,
      },
      {
        text: "36",
        value: 36,
        isProduct: true,
        state: BlockState.NOT_SELECTED,
      },
      {
        text: "8x9",
        value: 72,
        isProduct: false,
        state: BlockState.PLAYER_TWO_SELECTED,
      },
    ],
    stage: STAGE.PLAY_GAME,
    isPlayerSelecting: false,
    playerName: "",
    currentlySelectedBlock: 1,
    handlePlayerSelect: 0,
    reset: false,

  };

  //Act
  const firstState = reducer(initialState, handlePlayerSelect(1));
  const secondState = reducer(firstState, handlePlayerSelect(0));
  // Assert
  expect(secondState).toEqual(finalState);
});

test("test selecting invalid blocks", () => {
  const finalState = {
    blocks: [
      {
        text: "56",
        value: 56,
        isProduct: true,
        state: BlockState.HIGHLIGHTED,
      },
      {
        text: "7x8",
        value: 56,
        isProduct: false,
        state: BlockState.NOT_SELECTED,
      },
      {
        text: "72",
        value: 72,
        isProduct: true,
        state: BlockState.NOT_SELECTED,
      },
      {
        text: "6x6",
        value: 36,
        isProduct: false,
        state: BlockState.NOT_SELECTED,
      },
      {
        text: "36",
        value: 36,
        isProduct: true,
        state: BlockState.NOT_SELECTED,
      },
      {
        text: "8x9",
        value: 72,
        isProduct: false,
        state: BlockState.NOT_SELECTED,
      },
    ],
    stage: STAGE.PLAY_GAME,
    isPlayerSelecting: true,
    playerName: "",
    currentlySelectedBlock: 0,
    handlePlayerSelect: 0,
    reset: false,

  };

  //Act
  const firstState = reducer(initialState, handlePlayerSelect(0));
  const secondState = reducer(firstState, handlePlayerSelect(2));
  // Assert
  expect(secondState).toEqual(finalState);
});

