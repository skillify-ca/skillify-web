import { calculateWinner } from "../multiplication/game";

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

/* Refactor calculateWinner():
    - to return a string s.t. the function is testable.
*/

test.todo("calculateWinner()");
