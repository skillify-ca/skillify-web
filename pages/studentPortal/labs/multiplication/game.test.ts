import "@testing-library/jest-dom/extend-expect";
import { BlockState } from "../../../../components/math/MultiplicationBlock";
import { calculateWinner } from "./game";

test("Test that the player with the longest line of consecutive squares wins the game", async () => {
    //Arrange
    const array=[{
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
        state: BlockState.PLAYER_ONE_SELECTED,
      },
      {
        text: "16",
        state: BlockState.PLAYER_ONE_SELECTED,
      },
      {
        text: "2x8",
        state: BlockState.PLAYER_ONE_SELECTED,
      }]
    //Act
    const result = calculateWinner(array)
    //Assert
    expect(result).toBe("Play One is the winner")
})

test("Test that the player with the longest line of consecutive squares wins the game", async () => {
    //Arrange
    const array=[{
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
      }]
    //Act
    const result = calculateWinner(array)
    //Assert
    expect(result).toBe("Player Two is the winner")
})