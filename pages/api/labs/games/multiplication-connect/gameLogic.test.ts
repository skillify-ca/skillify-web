import { SelectedBy, createGrid, calculateWinner, WinType } from "./gameLogic";

/* More testing:
    - block an invalid block selection: 
        * block that's already selected
        * block that doesn't match value from dice roll
*/

describe("calculateWinner() Tests", () => {
  test("No win with unselected blocks — winType===WinType.Pending & winningBlocks===null", () => {
    let grid = createGrid();
    let isPlayerOne = true;
    let winDetails = {
      winType: WinType.Pending,
      winningBlocks: null,
    };
    expect(calculateWinner(grid, isPlayerOne)).toEqual(winDetails);
  });
  test("PlayerOne horizontal win", () => {
    let grid = createGrid();
    let isPlayerOne = true;
    let winDetails = {
      winType: WinType.PlayerOne,
      winningBlocks: [6, 7, 8, 9],
    };
    grid[6].selectedBy = SelectedBy.PlayerOne;
    grid[7].selectedBy = SelectedBy.PlayerOne;
    grid[8].selectedBy = SelectedBy.PlayerOne;
    grid[9].selectedBy = SelectedBy.PlayerOne;
    expect(calculateWinner(grid, isPlayerOne)).toEqual(winDetails);
  });
  test("PlayerTwo horizontal win", () => {
    let grid = createGrid();
    let isPlayerOne = false;
    let winDetails = {
      winType: WinType.PlayerTwo,
      winningBlocks: [0, 1, 2, 3],
    };
    grid[0].selectedBy = SelectedBy.PlayerTwo;
    grid[1].selectedBy = SelectedBy.PlayerTwo;
    grid[2].selectedBy = SelectedBy.PlayerTwo;
    grid[3].selectedBy = SelectedBy.PlayerTwo;
    expect(calculateWinner(grid, isPlayerOne)).toEqual(winDetails);
  });

  test("PlayerOne vertical win", () => {
    let grid = createGrid();
    let isPlayerOne = true;
    let winDetails = {
      winType: WinType.PlayerOne,
      winningBlocks: [12, 17, 22, 27],
    };
    grid[12].selectedBy = SelectedBy.PlayerOne;
    grid[17].selectedBy = SelectedBy.PlayerOne;
    grid[22].selectedBy = SelectedBy.PlayerOne;
    grid[27].selectedBy = SelectedBy.PlayerOne;
    expect(calculateWinner(grid, isPlayerOne)).toEqual(winDetails);
  });
  test("PlayerTwo vertical win", () => {
    let grid = createGrid();
    let isPlayerOne = false;
    let winDetails = {
      winType: WinType.PlayerTwo,
      winningBlocks: [19, 24, 29, 34],
    };
    grid[19].selectedBy = SelectedBy.PlayerTwo;
    grid[24].selectedBy = SelectedBy.PlayerTwo;
    grid[29].selectedBy = SelectedBy.PlayerTwo;
    grid[34].selectedBy = SelectedBy.PlayerTwo;
    expect(calculateWinner(grid, isPlayerOne)).toEqual(winDetails);
  });

  test("PlayerOne descending diagonal win", () => {
    let grid = createGrid();
    let isPlayerOne = true;
    let winDetails = {
      winType: WinType.PlayerOne,
      winningBlocks: [29, 23, 17, 11],
    };
    grid[11].selectedBy = SelectedBy.PlayerOne;
    grid[17].selectedBy = SelectedBy.PlayerOne;
    grid[23].selectedBy = SelectedBy.PlayerOne;
    grid[29].selectedBy = SelectedBy.PlayerOne;
    expect(calculateWinner(grid, isPlayerOne)).toEqual(winDetails);
  });
  test("PlayerTwo descending diagonal win", () => {
    let grid = createGrid();
    let isPlayerOne = false;
    let winDetails = {
      winType: WinType.PlayerTwo,
      winningBlocks: [19, 13, 7, 1],
    };
    grid[1].selectedBy = SelectedBy.PlayerTwo;
    grid[7].selectedBy = SelectedBy.PlayerTwo;
    grid[13].selectedBy = SelectedBy.PlayerTwo;
    grid[19].selectedBy = SelectedBy.PlayerTwo;
    expect(calculateWinner(grid, isPlayerOne)).toEqual(winDetails);
  });

  test("PlayerOne ascending diagonal win", () => {
    let grid = createGrid();
    let isPlayerOne = true;
    let winDetails = {
      winType: WinType.PlayerOne,
      winningBlocks: [31, 27, 23, 19],
    };
    grid[31].selectedBy = SelectedBy.PlayerOne;
    grid[27].selectedBy = SelectedBy.PlayerOne;
    grid[23].selectedBy = SelectedBy.PlayerOne;
    grid[19].selectedBy = SelectedBy.PlayerOne;
    expect(calculateWinner(grid, isPlayerOne)).toEqual(winDetails);
  });
  test("PlayerTwo ascending diagonal win", () => {
    let grid = createGrid();
    let isPlayerOne = false;
    let winDetails = {
      winType: WinType.PlayerTwo,
      winningBlocks: [16, 12, 8, 4],
    };
    grid[16].selectedBy = SelectedBy.PlayerTwo;
    grid[12].selectedBy = SelectedBy.PlayerTwo;
    grid[8].selectedBy = SelectedBy.PlayerTwo;
    grid[4].selectedBy = SelectedBy.PlayerTwo;
    expect(calculateWinner(grid, isPlayerOne)).toEqual(winDetails);
  });

  test("No win with mixed selected blocks", () => {
    let grid = createGrid();
    let isPlayerOne = true;
    let winDetails = {
      winType: WinType.Pending,
      winningBlocks: null,
    };
    grid[11].selectedBy = SelectedBy.PlayerOne;
    grid[17].selectedBy = SelectedBy.PlayerTwo;
    grid[23].selectedBy = SelectedBy.PlayerTwo;
    grid[29].selectedBy = SelectedBy.Unselected;
    expect(calculateWinner(grid, isPlayerOne)).toEqual(winDetails);
  });
  test("Draw when there's no winner & all blocks are selected", () => {
    let grid = createGrid();
    let isPlayerOne = true;
    let winDetails = {
      winType: WinType.Draw,
      winningBlocks: null,
    };
    // Rework to use an array instead for readability
    grid[0].selectedBy = SelectedBy.PlayerOne;
    grid[1].selectedBy = SelectedBy.PlayerTwo;
    grid[2].selectedBy = SelectedBy.PlayerOne;
    grid[3].selectedBy = SelectedBy.PlayerTwo;
    grid[4].selectedBy = SelectedBy.PlayerOne;
    grid[5].selectedBy = SelectedBy.PlayerTwo;
    grid[6].selectedBy = SelectedBy.PlayerOne;
    grid[7].selectedBy = SelectedBy.PlayerTwo;
    grid[8].selectedBy = SelectedBy.PlayerOne;
    grid[9].selectedBy = SelectedBy.PlayerTwo;
    grid[10].selectedBy = SelectedBy.PlayerOne;
    grid[11].selectedBy = SelectedBy.PlayerTwo;
    grid[12].selectedBy = SelectedBy.PlayerOne;
    grid[13].selectedBy = SelectedBy.PlayerTwo;
    grid[14].selectedBy = SelectedBy.PlayerOne;
    grid[15].selectedBy = SelectedBy.PlayerOne;
    grid[16].selectedBy = SelectedBy.PlayerTwo;
    grid[17].selectedBy = SelectedBy.PlayerOne;
    grid[18].selectedBy = SelectedBy.PlayerTwo;
    grid[19].selectedBy = SelectedBy.PlayerTwo;
    grid[20].selectedBy = SelectedBy.PlayerOne;
    grid[21].selectedBy = SelectedBy.PlayerOne;
    grid[22].selectedBy = SelectedBy.PlayerTwo;
    grid[23].selectedBy = SelectedBy.PlayerOne;
    grid[24].selectedBy = SelectedBy.PlayerTwo;
    grid[25].selectedBy = SelectedBy.PlayerTwo;
    grid[26].selectedBy = SelectedBy.PlayerOne;
    grid[27].selectedBy = SelectedBy.PlayerTwo;
    grid[28].selectedBy = SelectedBy.PlayerOne;
    grid[29].selectedBy = SelectedBy.PlayerTwo;
    grid[30].selectedBy = SelectedBy.PlayerOne;
    grid[31].selectedBy = SelectedBy.PlayerTwo;
    grid[32].selectedBy = SelectedBy.PlayerOne;
    grid[33].selectedBy = SelectedBy.PlayerTwo;
    grid[34].selectedBy = SelectedBy.PlayerOne;
    expect(calculateWinner(grid, isPlayerOne)).toEqual(winDetails);
  });
});
