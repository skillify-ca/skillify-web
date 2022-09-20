import { calculateWinner, createGrid, SelectedBy } from "../../../../studentPortal/labs/multiplication-connect/Index";

/* More testing:
    - block an invalid block selection: 
        * block that's already selected
        * block that doesn't match value from dice roll
*/

describe("calculateWinner() Tests", () => {
    test("No win with unselected blocks", () => {
        let grid = createGrid();
        let isPlayerOne = true;
        expect(calculateWinner(grid, isPlayerOne)).toEqual("No winner");
    });
    test("PlayerOne horizontal win", () => {
        let grid = createGrid();
        let isPlayerOne = true;
        grid[6].selectedBy = SelectedBy.PlayerOne;
        grid[7].selectedBy = SelectedBy.PlayerOne;
        grid[8].selectedBy = SelectedBy.PlayerOne;
        grid[9].selectedBy = SelectedBy.PlayerOne;
        expect(calculateWinner(grid, isPlayerOne)).toEqual("PLAYERONE (horizontal) Four in a row!");
    });
    test("PlayerTwo horizontal win", () => {
        let grid = createGrid();
        let isPlayerOne = false;
        grid[0].selectedBy = SelectedBy.PlayerTwo;
        grid[1].selectedBy = SelectedBy.PlayerTwo;
        grid[2].selectedBy = SelectedBy.PlayerTwo;
        grid[3].selectedBy = SelectedBy.PlayerTwo;
        expect(calculateWinner(grid, isPlayerOne)).toEqual("PLAYERTWO (horizontal) Four in a row!");
    });

    test("PlayerOne vertical win", () => {
        let grid = createGrid();
        let isPlayerOne = true;
        grid[12].selectedBy = SelectedBy.PlayerOne;
        grid[17].selectedBy = SelectedBy.PlayerOne;
        grid[22].selectedBy = SelectedBy.PlayerOne;
        grid[27].selectedBy = SelectedBy.PlayerOne;
        expect(calculateWinner(grid, isPlayerOne)).toEqual("PLAYERONE (vertical) Four in a row!");
    });
    test("PlayerTwo vertical win", () => {
        let grid = createGrid();
        let isPlayerOne = false;
        grid[19].selectedBy = SelectedBy.PlayerTwo;
        grid[24].selectedBy = SelectedBy.PlayerTwo;
        grid[29].selectedBy = SelectedBy.PlayerTwo;
        grid[34].selectedBy = SelectedBy.PlayerTwo;
        expect(calculateWinner(grid, isPlayerOne)).toEqual("PLAYERTWO (vertical) Four in a row!");
    });

    test("PlayerOne descending diagonal win", () => {
        let grid = createGrid();
        let isPlayerOne = true;
        grid[11].selectedBy = SelectedBy.PlayerOne;
        grid[17].selectedBy = SelectedBy.PlayerOne;
        grid[23].selectedBy = SelectedBy.PlayerOne;
        grid[29].selectedBy = SelectedBy.PlayerOne;
        expect(calculateWinner(grid, isPlayerOne)).toEqual("PLAYERONE (descending diagonal) Four in a row!");
    });
    test("PlayerTwo descending diagonal win", () => {
        let grid = createGrid();
        let isPlayerOne = false;
        grid[1].selectedBy = SelectedBy.PlayerTwo;
        grid[7].selectedBy = SelectedBy.PlayerTwo;
        grid[13].selectedBy = SelectedBy.PlayerTwo;
        grid[19].selectedBy = SelectedBy.PlayerTwo;
        expect(calculateWinner(grid, isPlayerOne)).toEqual("PLAYERTWO (descending diagonal) Four in a row!");
    });

    test("PlayerOne ascending diagonal win", () => {
        let grid = createGrid();
        let isPlayerOne = true;
        grid[31].selectedBy = SelectedBy.PlayerOne;
        grid[27].selectedBy = SelectedBy.PlayerOne;
        grid[23].selectedBy = SelectedBy.PlayerOne;
        grid[19].selectedBy = SelectedBy.PlayerOne;
        expect(calculateWinner(grid, isPlayerOne)).toEqual("PLAYERONE (ascending diagonal) Four in a row!");
    });
    test("PlayerTwo ascending diagonal win", () => {
        let grid = createGrid();
        let isPlayerOne = false;
        grid[16].selectedBy = SelectedBy.PlayerTwo;
        grid[12].selectedBy = SelectedBy.PlayerTwo;
        grid[8].selectedBy = SelectedBy.PlayerTwo;
        grid[4].selectedBy = SelectedBy.PlayerTwo;
        expect(calculateWinner(grid, isPlayerOne)).toEqual("PLAYERTWO (ascending diagonal) Four in a row!");
    });

    test("No win with mixed selected blocks", () => {
        let grid = createGrid();
        let isPlayerOne = true;
        grid[11].selectedBy = SelectedBy.PlayerOne;
        grid[17].selectedBy = SelectedBy.PlayerTwo;
        grid[23].selectedBy = SelectedBy.PlayerTwo;
        grid[29].selectedBy = SelectedBy.Unselected;
        expect(calculateWinner(grid, isPlayerOne)).toEqual("No winner");
    });
    test("Draw when there's no winner & all blocks are selected", () => {
        let grid = createGrid();
        let isPlayerOne = true;
        // Rework to use an array instead for readability
        grid[0].selectedBy = SelectedBy.PlayerOne
        grid[1].selectedBy = SelectedBy.PlayerTwo
        grid[2].selectedBy = SelectedBy.PlayerOne
        grid[3].selectedBy = SelectedBy.PlayerTwo
        grid[4].selectedBy = SelectedBy.PlayerOne
        grid[5].selectedBy = SelectedBy.PlayerTwo
        grid[6].selectedBy = SelectedBy.PlayerOne
        grid[7].selectedBy = SelectedBy.PlayerTwo
        grid[8].selectedBy = SelectedBy.PlayerOne
        grid[9].selectedBy = SelectedBy.PlayerTwo
        grid[10].selectedBy = SelectedBy.PlayerOne
        grid[11].selectedBy = SelectedBy.PlayerTwo
        grid[12].selectedBy = SelectedBy.PlayerOne
        grid[13].selectedBy = SelectedBy.PlayerTwo
        grid[14].selectedBy = SelectedBy.PlayerOne
        grid[15].selectedBy = SelectedBy.PlayerOne
        grid[16].selectedBy = SelectedBy.PlayerTwo
        grid[17].selectedBy = SelectedBy.PlayerOne
        grid[18].selectedBy = SelectedBy.PlayerTwo
        grid[19].selectedBy = SelectedBy.PlayerTwo
        grid[20].selectedBy = SelectedBy.PlayerOne
        grid[21].selectedBy = SelectedBy.PlayerOne
        grid[22].selectedBy = SelectedBy.PlayerTwo
        grid[23].selectedBy = SelectedBy.PlayerOne
        grid[24].selectedBy = SelectedBy.PlayerTwo
        grid[25].selectedBy = SelectedBy.PlayerTwo
        grid[26].selectedBy = SelectedBy.PlayerOne
        grid[27].selectedBy = SelectedBy.PlayerTwo
        grid[28].selectedBy = SelectedBy.PlayerOne
        grid[29].selectedBy = SelectedBy.PlayerTwo
        grid[30].selectedBy = SelectedBy.PlayerOne
        grid[31].selectedBy = SelectedBy.PlayerTwo
        grid[32].selectedBy = SelectedBy.PlayerOne
        grid[33].selectedBy = SelectedBy.PlayerTwo
        grid[34].selectedBy = SelectedBy.PlayerOne
        expect(calculateWinner(grid, isPlayerOne)).toEqual("Draw");
    });
});
