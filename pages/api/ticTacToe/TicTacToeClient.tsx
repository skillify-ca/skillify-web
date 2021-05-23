import { Client } from "boardgame.io/react";
import { INVALID_MOVE } from "boardgame.io/core";
import TicTacToeBoard from "../../../components/ticTacToe/TicTacToeBoard";
import { TARGET } from "./constants";


export const TicTacToeGame = {
  setup: () => ({ cells: Array(9).fill(null), target: TARGET }),
  turn: {
    moveLimit: 1,
  },
  moves: {
    placeCell: (G, ctx, id, value) => {
      if (G.cells[id] !== null) {
        return INVALID_MOVE;
      }
      if (G.cells.includes(value)) {
        return INVALID_MOVE;
      }
      G.cells[id] = value;
    },
  },
  endIf: (G, ctx) => {
    if (IsVictory(G.cells, G.target)) {
      return { winner: ctx.currentPlayer };
    }
    if (IsDraw(G.cells)) {
      return { draw: true };
    }
  },
};

// Return true if `cells` is in a winning configuration.
function IsVictory(cells, target) {
  const positions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const isRowComplete = (row) => {
    const symbols = row.map((i) => cells[i]);
    const sum = symbols.reduce(
      (a, b) => Number.parseInt(a) + Number.parseInt(b),
      0
    );
    return symbols.every((i) => i !== null) && sum === target;
  };

  return positions.map(isRowComplete).some((i) => i === true);
}

// Return true if all `cells` are occupied.
function IsDraw(cells) {
  return cells.filter((c) => c === null).length === 0;
}

const TicTacToeClient = Client({ game: TicTacToeGame, board: TicTacToeBoard });

export default TicTacToeClient;
