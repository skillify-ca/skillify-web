import React, { FC, useState, useEffect } from "react";
import AlienBoard from "../../../../components/math/alienPathway/AlienBoard";
import AlienBoardBlock from "../../../../components/math/alienPathway/AlienBoardBlock";
import {
  getRndInteger,
  getRndTenthsDecimal,
  getRndHundredthsDecimal,
  getRandomItemFromArray,
} from "../../../api/random";

const diceRoll = () => {
  Math.floor(Math.random() * 6 + 1);
  const die = getRandomItemFromArray([
    "⚀ 1 ⚀",
    "⚁ 2 ⚁",
    "⚂ 3 ⚂",
    "⚃ 4 ⚃",
    "⚄ 5 ⚄",
    "⚅ 6 ⚅",
  ]);
  return die;
};

export interface ButtonProps {
  /**
   * What background color to use
   */
  backgroundColor?:
    | "blue"
    | "green"
    | "red"
    | "purple"
    | "pink"
    | "yellow"
    | "orange"
    | "white";
  /**
   * What text color to use
   * Can be white, black, gray-500, blue-200, blue-900, red-500, etc..
   */
  textColor?: string;
  /**
   * Button contents
   */
  label: string;
  disabled?: boolean;
  /**
   * Optional click handler
   */
  onClick?: (e) => void;
  size?: "small" | "medium" | "large";
}

export const Button: React.FC<ButtonProps> = ({
  backgroundColor = "primary",
  textColor = "white",
  label,
  disabled = false,
  onClick,
  size = "medium",
  ...props
}) => {
  let backgroundStyles;
  switch (backgroundColor) {
    case "primary":
      backgroundStyles = "bg-charmander hover:bg-pikachu-500";
      break;
    case "blue":
      backgroundStyles = "bg-blue-500 border-blue-900 hover:bg-blue-400";
      break;
    case "green":
      backgroundStyles =
        "bg-green-500 via-green-400 to-green-500 border-green-900 hover:bg-green-400";
      break;
    case "red":
      backgroundStyles =
        "bg-red-500 via-red-400 to-red-500 border-red-900 hover:bg-red-400";
      break;
    case "purple":
      backgroundStyles =
        "bg-purple-500 via-purple-400 to-purple-500 border-purple-900 hover:bg-purple-400";
      break;
    case "pink":
      backgroundStyles =
        "bg-pink-500 via-pink-400 to-pink-500 border-pink-900 hover:bg-pink-400";
      break;
    case "yellow":
      backgroundStyles =
        "bg-yellow-500 via-yellow-400 to-yellow-500 border-yellow-900 hover:bg-yellow-400";
      break;
    case "white":
      backgroundStyles = "bg-white border-gray-300 border-2 hover:bg-blue-400";
      break;
  }
  return (
    <button
      disabled={disabled}
      type="button"
      onClick={disabled ? null : onClick}
      className={`bg-gradient-to-b px-4 font-bold border-b-4 rounded-lg ${
        size === "large" ? "w-48 py-4 h-16" : "w-36 py-2 h-12"
      } 
      ${disabled ? "bg-gray-400" : backgroundStyles}
      ${disabled ? "" : "active:border-b-2"}
      ${disabled ? "cursor-default" : "cursor-pointer"}
      `}
      {...props}
    >
      <p
        className={`${disabled ? "text-gray-50" : "text-" + textColor} ${
          size === "large" ? "text-xl" : "text-base"
        }`}
      >
        {label}
      </p>
    </button>
  );
};

interface AlienBoardBlock {
  id: number;
  newGame: number;
  submitGuess: (guess: GuessData) => void;
  answer: string;
  gridNumber: number;
  selectedBy: SelectedBy;
}

export const calculateWinner = (
  grid: AlienBoardBlock[],
  isPlayerOne: boolean
) => {
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
  isPlayerOne
    ? (player = SelectedBy.PlayerOne)
    : (player = SelectedBy.PlayerTwo);
  for (let i = 0; i < rows.length; i++) {
    // rows.length == board height == 7
    // rows[i].length == board width == 5
    for (let index = 0; index < rows[i].length - 3; index++) {
      // Horizontal check
      rows[i][index].selectedBy == player &&
      rows[i][index + 1].selectedBy == player &&
      rows[i][index + 2].selectedBy == player &&
      rows[i][index + 3].selectedBy == player
        ? console.log(player, "(horizontal) Four in a row!")
        : "";
    }
    if (i < rows.length - 3) {
      // Vertical check
      for (let index = 0; index < rows[i].length; index++) {
        rows[i][index].selectedBy == player &&
        rows[i + 1][index].selectedBy == player &&
        rows[i + 2][index].selectedBy == player &&
        rows[i + 3][index].selectedBy == player
          ? console.log(player, "(vertical) Four in a row!")
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
          ? console.log(player, "(ascending diagonal) Four in a row!")
          : "";
      }
      // Descending diagonal check
      for (let index = 3; index < rows[i].length; index++) {
        rows[i][index].selectedBy == player &&
        rows[i - 1][index - 1].selectedBy == player &&
        rows[i - 2][index - 2].selectedBy == player &&
        rows[i - 3][index - 3].selectedBy == player
          ? console.log(player, "(descending diagonal) Four in a row!")
          : "";
      }
    }
  }
};

const DiceSection: FC = () => {
  const [roll1, setRoll1] = useState("⚀⚁⚂⚃⚄⚅");
  const [roll2, setRoll2] = useState("⚀⚁⚂⚃⚄⚅");

  return (
    <div className="flex items-center justify-evenly text-2xl">
      <div className="flex flex-col items-center justify-center w-52 h-48 gap-3 border-2">
        <div className="flex flex-col gap-3">
          <Button
            label={"Roll Die"}
            onClick={() => {
              setRoll1(diceRoll);
            }}
          />
        </div>
        <p className="text-sm text-white place-content-center">
          <input
            className="bg-inherit placeholder:text-inherit text-center"
            placeholder="Enter Player 1's Name"
          ></input>
        </p>
        <p className="text-10xl text-white">{roll1}</p>
      </div>

      <div className="flex flex-col items-center justify-center w-52 h-48 gap-3 border-2">
        <Button
          label={"Roll Die"}
          onClick={() => {
            setRoll2(diceRoll);
          }}
        />
        <p className="text-sm text-white place-content-center">
          <input
            className="bg-inherit placeholder:text-inherit text-center"
            placeholder="Enter Player 2's Name"
          ></input>
        </p>
        <h1 className="text-2xl text-white">{roll2}</h1>
      </div>

      <div className="flex flex-col items-center gap-5"></div>
    </div>
  );
};
enum SelectedBy {
  Unselected = "UNSELECTED",
  PlayerOne = "PLAYERONE",
  PlayerTwo = "PLAYERTWO",
}
const createGrid = () => {
  let arr = [];
  let newGrid = [];
  for (let i = 6; i < 12; i++) {
    arr.push(i);
  }
  for (let i = 0; i < 42; i++) {
    let gridNumber = getRandomItemFromArray(arr);
    newGrid.push({
      id: i,
      gridNumber: gridNumber,
      selectedBy: SelectedBy.Unselected,
    });
  }
  console.log(newGrid);
  return newGrid;
};

const Index = () => {
  const [grid, setGrid] = useState([]);
  const [newGame, setNewGame] = useState(0);
  const [isPlayerOne, setIsPlayerOne] = useState(true);

  function newGameButton() {
    return setNewGame(newGame + 1);
  }

  useEffect(() => {
    setGrid(createGrid);
    setIsPlayerOne(true);
  }, [newGame]);

  return (
    <div>
      <button onClick={() => newGameButton()}>newGame</button>
      <DiceSection />
      <AlienBoard grid={grid} newGame={newGame} isPlayerOne={isPlayerOne} />
      <AlienBoard grid={grid} newGame={newGame} isPlayerOne={isPlayerOne} />
    </div>
  );
};

export default Index;
