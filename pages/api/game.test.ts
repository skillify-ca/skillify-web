import { BlockState } from "../../components/math/longestStreak/MultiplicationBlock";
import { setPlayerName } from "../../redux/longestStreakSlice";
import {
  calculateWinner,
  longestSubarray,
} from "../studentPortal/labs/multiplication/game";

test("Test longest subarray - 1", async () => {
  //Arrange
  const array = [
    {
      text: "72",
      state: BlockState.PLAYER_TWO_SELECTED,
    },
  ];
  //Act
  const result = longestSubarray(array, BlockState.PLAYER_TWO_SELECTED);
  //Assert
  expect(result).toBe(1);
});

test("Test the function outputs the longest consecutive line of elements", async () => {
  //Arrange
  const array = [
    {
      text: "72",
      state: BlockState.PLAYER_TWO_SELECTED,
    },
    {
      text: "8x9",
      state: BlockState.PLAYER_TWO_SELECTED,
    },
    {
      text: "8",
      state: BlockState.PLAYER_ONE_SELECTED,
    },
    {
      text: "8x1",
      state: BlockState.PLAYER_ONE_SELECTED,
    },
    {
      text: "16",
      state: BlockState.PLAYER_ONE_SELECTED,
    },
    {
      text: "2x8",
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
      state: BlockState.PLAYER_TWO_SELECTED,
    },
    {
      text: "8x9",
      state: BlockState.PLAYER_TWO_SELECTED,
    },
    {
      text: "8",
      state: BlockState.PLAYER_ONE_SELECTED,
    },
    {
      text: "8x1",
      state: BlockState.PLAYER_ONE_SELECTED,
    },
    {
      text: "16",
      state: BlockState.PLAYER_ONE_SELECTED,
    },
    {
      text: "2x8",
      state: BlockState.PLAYER_ONE_SELECTED,
    },
  ];
  //Act

  const result = calculateWinner(array, "input");
  //Assert
  expect(result).toBe("input" + ", you have Conquered!");
});

test("Test that the player with the longest line of consecutive squares wins the game", async () => {
  //Arrange
  const array = [
    {
      text: "72",
      state: BlockState.PLAYER_TWO_SELECTED,
    },
    {
      text: "8x9",
      state: BlockState.PLAYER_TWO_SELECTED,
    },
    {
      text: "8",
      state: BlockState.PLAYER_TWO_SELECTED,
    },
    {
      text: "8x1",
      state: BlockState.PLAYER_TWO_SELECTED,
    },
    {
      text: "16",
      state: BlockState.PLAYER_ONE_SELECTED,
    },
    {
      text: "2x8",
      state: BlockState.PLAYER_ONE_SELECTED,
    },
  ];
  //Act
  const result = calculateWinner(array, "input");
  //Assert
  expect(result).toBe(
    "Sorry, " + "input" + " This round goes to Computer the Great..."
  );
});
