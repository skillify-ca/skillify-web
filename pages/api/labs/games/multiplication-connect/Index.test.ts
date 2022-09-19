import { calculateWinner, createGrid, SelectedBy } from "../../../../studentPortal/labs/multiplication-connect/Index";

// Arrange
// Act
// Assert

/* To set the test up:
    - setup whatever calculateWinner() needs right here in the test file
    - might need to export the GameBoardBlock type for the grid variable to work as expected
    - and will also need to initialize isPlayerOne somewhere
    - create a mock grid to line up with the diff scenarios below
    - pass these to calculateWinner and see what happens

    - AFTER REFACTOR: expect(calculateWinner).toBe/toEqual diff returns based on the provided grid
*/

 /*  Outline for testing calculateWinner():
        * check that SelectedBy type is working as expected:
            - PlayerOne selection
            - PlayerTwo selection
            - Unselected blocks
            - Any other value for the type produces an error
        * check a PlayerOne win
        * check a PlayerTwo win
        * check that no win occurs:
            - mixed blocks consecutive blocks are selected
            - a draw
            - when no blocks are selected
            - when board is full with no 4 in a row
 */

describe("calculateWinner() Tests", () => {
    let grid = createGrid();
    let isPlayerOne = true;
    test("No win with unselected blocks", () => {
        expect(calculateWinner(grid, isPlayerOne)).toEqual("No winner");
    });
    test("PlayerOne horizontal win", () => {
        grid[6].selectedBy = SelectedBy.PlayerOne;
        grid[7].selectedBy = SelectedBy.PlayerOne;
        grid[8].selectedBy = SelectedBy.PlayerOne;
        grid[9].selectedBy = SelectedBy.PlayerOne;
        expect(calculateWinner(grid, isPlayerOne)).toEqual("PLAYERONE (horizontal) Four in a row!");
    });
    test("PlayerTwo horizontal win", () => {
        isPlayerOne = false;
        grid[0].selectedBy = SelectedBy.PlayerTwo;
        grid[1].selectedBy = SelectedBy.PlayerTwo;
        grid[2].selectedBy = SelectedBy.PlayerTwo;
        grid[3].selectedBy = SelectedBy.PlayerTwo;
        console.log(grid);
        expect(calculateWinner(grid, isPlayerOne)).toEqual("PLAYERTWO (horizontal) Four in a row!");
    });

    test.todo("PlayerOne vertical win");
    test.todo("PlayerTwo vertical win");

    test.todo("PlayerOne ascending diagonal win");
    test.todo("PlayerTwo ascending diagonal win");

    test.todo("PlayerOne descending diagonal win");
    test.todo("PlayerTwo descending diagonal win");

    test.todo("No win with mixed selected blocks");
    test.todo("Draw when there's no winner & all blocks are selected"); // !== 'SelectedBy.Unselected'
});
