import { BlockState } from "../../components/math/longestStreak/MultiplicationBlock";
import { calculateWinner, longestSubarray, showWinner } from "./longestStreak";
import { showEndGameImage } from "./showEndGameImage";


test("Test longest subarray - 1", async () => {
  //Arrange
  const array = [
    {
      text: "72",
      value: 72,
      isProduct: true,
      state: BlockState.PLAYER_TWO_SELECTED,
    },
  ];
  
  //Act
  const result = longestSubarray(array, BlockState.PLAYER_TWO_SELECTED);
  //Assert
  expect(result).toBe(2);
});

test("Test the function outputs the longest consecutive line of elements", async () => {
  //Arrange
  const array = [
    {
      text: "72",
      value: 72,
      isProduct: true,
      state: BlockState.PLAYER_TWO_SELECTED,
    },
    {
      text: "8x9",
      value: 72,
      isProduct: false,
      state: BlockState.PLAYER_TWO_SELECTED,
    },
    {
      text: "8",
      value: 8,
      isProduct: false,
      state: BlockState.PLAYER_ONE_SELECTED,
    },
    {
      text: "8x1",
      value: 8,
      isProduct: false,
      state: BlockState.PLAYER_ONE_SELECTED,
    },
    {
      text: "16",
      value: 16,
      isProduct: true,
      state: BlockState.PLAYER_ONE_SELECTED,
    },
    {
      text: "2x8",
      value: 16,
      isProduct: false,
      state: BlockState.PLAYER_ONE_SELECTED,
    },
  ];

  //Act
  const result = longestSubarray(array, BlockState.PLAYER_ONE_SELECTED);
  //Assert
  expect(result).toBe(4);
});

test("Test that the player with the longest line of consecutive squares wins the game", async () => {
  //Arrange
  const array = [
    {
      text: "72",
      value: 72,
      isProduct: true,
      state: BlockState.PLAYER_TWO_SELECTED,
    },
    {
      text: "8x9",
      value: 72,
      isProduct: false,
      state: BlockState.PLAYER_TWO_SELECTED,
    },
    {
      text: "8",
      value: 8,
      isProduct: true,
      state: BlockState.PLAYER_ONE_SELECTED,
    },
    {
      text: "8x1",
      value: 8,
      isProduct: false,
      state: BlockState.PLAYER_ONE_SELECTED,
    },
    {
      text: "16",
      value: 16,
      isProduct: true,
      state: BlockState.PLAYER_ONE_SELECTED,
    },
    {
      text: "2x8",
      value: 16,
      isProduct: false,
      state: BlockState.PLAYER_ONE_SELECTED,
    },
  ];
  //Act
  const result = calculateWinner(array, showWinner); 
  //Assert
  expect(result).toBe(true);
  

});

test("Test that the player with the longest line of consecutive squares wins the game", async () => {
  //Arrange
  const array = [
    {
      text: "72",
      value: 72,
      isProduct: true,
      state: BlockState.PLAYER_TWO_SELECTED,
    },
    {
      text: "8x9",
      value: 72,
      isProduct: false,
      state: BlockState.PLAYER_TWO_SELECTED,
    },
    {
      text: "8",
      value: 8,
      isProduct: true,
      state: BlockState.PLAYER_TWO_SELECTED,
    },
    {
      text: "8x1",
      value: 8,
      isProduct: false,
      state: BlockState.PLAYER_TWO_SELECTED,
    },
    {
      text: "16",
      value: 16,
      isProduct: true,
      state: BlockState.PLAYER_ONE_SELECTED,
    },
    {
      text: "2x8",
      value: 16,
      isProduct: false,
      state: BlockState.PLAYER_ONE_SELECTED,
    },
  ];

    //Act
  const result = calculateWinner(array, showWinner);
  //Assert
  expect(result).toBe(false);
});

