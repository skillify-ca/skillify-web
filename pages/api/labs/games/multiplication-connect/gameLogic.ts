import GameBoardBlock from "../../../../../components/math/multiplicationConnect/GameBoardBlock";
import { getRandomItemFromArray } from "../../../random";

export enum SelectedBy {
  Unselected = "UNSELECTED",
  PlayerOne = "PLAYERONE",
  PlayerTwo = "PLAYERTWO",
}

export const calculateWinner = (
  grid: GameBoardBlock[],
  isPlayerOne: boolean
): string => {
  let rows = [
    grid.filter((i) => i.id >= 0 && i.id < 5),
    grid.filter((i) => i.id >= 5 && i.id < 10),
    grid.filter((i) => i.id >= 10 && i.id < 15),
    grid.filter((i) => i.id >= 15 && i.id < 20),
    grid.filter((i) => i.id >= 20 && i.id < 25),
    grid.filter((i) => i.id >= 25 && i.id < 30),
    grid.filter((i) => i.id >= 30 && i.id < 35),
  ];
  let player: SelectedBy;
  // check for a PlayerOne or PlayerTwo win based on the current player state
  isPlayerOne
    ? (player = SelectedBy.PlayerOne)
    : (player = SelectedBy.PlayerTwo);
  let str: string;
  for (let i = 0; i < rows.length; i++) {
    // rows.length == board height == 7
    // rows[i].length == board width == 5
    for (let index = 0; index < rows[i].length - 3; index++) {
      // Horizontal check
      rows[i][index].selectedBy == player &&
      rows[i][index + 1].selectedBy == player &&
      rows[i][index + 2].selectedBy == player &&
      rows[i][index + 3].selectedBy == player
        ? (str = `${player} (horizontal) Four in a row!`)
        : "";
    }
    if (i < rows.length - 3) {
      // Vertical check
      for (let index = 0; index < rows[i].length; index++) {
        rows[i][index].selectedBy == player &&
        rows[i + 1][index].selectedBy == player &&
        rows[i + 2][index].selectedBy == player &&
        rows[i + 3][index].selectedBy == player
          ? (str = `${player} (vertical) Four in a row!`)
          : "";
      }
    }
    if (i >= 3) {
      // Ascending diagonal check
      for (let index = 0; index < rows[i].length - 3; index++) {
        rows[i][index].selectedBy == player &&
        rows[i - 1][index + 1].selectedBy == player &&
        rows[i - 2][index + 2].selectedBy == player &&
        rows[i - 3][index + 3].selectedBy == player
          ? (str = `${player} (ascending diagonal) Four in a row!`)
          : "";
      }
      // Descending diagonal check
      for (let index = 3; index < rows[i].length; index++) {
        rows[i][index].selectedBy == player &&
        rows[i - 1][index - 1].selectedBy == player &&
        rows[i - 2][index - 2].selectedBy == player &&
        rows[i - 3][index - 3].selectedBy == player
          ? (str = `${player} (descending diagonal) Four in a row!`)
          : "";
      }
    }
  }
  str
    ? ""
    : grid.some((i) => i.selectedBy === SelectedBy.Unselected)
    ? (str = "No winner")
    : (str = "Draw");
  console.log(str);
  return str;
};

export const createGrid = () => {
  let arr = [];
  let newGrid = [];
  for (let i = 4; i < 25; i++) i % 2 === 0 ? arr.push(i) : "";
  for (let i = 0; i < 35; i++) {
    let gridNumber = getRandomItemFromArray(arr);
    newGrid.push({
      id: i,
      gridNumber: gridNumber,
      selectedBy: SelectedBy.Unselected,
    });
  }
  return newGrid;
};
