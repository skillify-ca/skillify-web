import React, { FC, useState, useEffect } from "react";
import {
  getRndInteger,
  getRndTenthsDecimal,
  getRndHundredthsDecimal,
  getRandomItemFromArray,
} from "../../../api/random";
import { Button } from "../../../../components/ui/Button";
import { BlockComponent } from "../../../../components/math/alienPathway/Block";
import { GuessData } from "../../../api/guessData";
import { DiceButtonComponent } from "../../../../components/math/alienPathway/DiceButton";
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

export const MainButton: React.FC<ButtonProps> = ({
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

enum SelectedBy {
  Unselected = "UNSELECTED",
  PlayerOne = "PLAYERONE",
  PlayerTwo = "PLAYERTWO",
}

const diceRoll = () => {
  return getRandomItemFromArray([
    "⚀ 1 ⚀",
    "⚁ 2 ⚁",
    "⚂ 3 ⚂",
    "⚃ 4 ⚃",
    "⚄ 5 ⚄",
    "⚅ 6 ⚅",
  ]);
};

export interface IndexProps {
  submitGuess: (guess: GuessData) => void;
  answer: string;
}
const Index: FC<IndexProps> = ({ submitGuess, answer }) => {
  const [grid, setGrid] = useState([]);
  const [newGame, setNewGame] = useState(0);
  const [roll1, setRoll1] = useState("⚀⚁⚂⚃⚄⚅");
  const [roll2, setRoll2] = useState("⚀⚁⚂⚃⚄⚅");
  const [indexNumber, setIndexNumber] = useState(0);
  const handleDiceRoll = () => {
    setRoll1(diceRoll());
    console.log("hello");
  };
  useEffect(() => {
    let counter = (parseInt(roll1.split("")[2]) - 1) * 7;
    setIndexNumber(counter);
  });
  useEffect(() => {
    console.log(`newGame: ${newGame}`);
    setGrid(createGrid);
  }, [newGame]);
  function newGameButton() {
    return setNewGame(newGame + 1);
  }
  function createGrid() {
    let gridList = [];
    for (let i = 0; i < 42; i++) {
      gridList.push({
        id: i,
      });
    }
    return gridList;
  }
  // useEffect(() => {
  //   setGrid(createGrid);
  //   setIsPlayerOne(true);
  // }, [newGame]);
  return (
    <div className="">
      {/* <p>{indexNumber}</p> */}
      <Button label="New Game" onClick={() => newGameButton()}>
        newGame
      </Button>
      <div className="grid grid-cols-2 place-content-center">
        <DiceButtonComponent
          rollNumber={roll1}
          handleDiceRoll={handleDiceRoll}
        />
        <DiceButtonComponent
          rollNumber={roll2}
          handleDiceRoll={handleDiceRoll}
        />
      </div>
      <div className="grid grid-rows-2 gap-8 px-20 pb-10">
        <div className="grid grid-cols-7 border-2 text-white text-2xl">
          {grid.map((gridData) => (
            <div className="border-r-2 border-b-2 md:h-8 sm:h-8 h-8">
              <BlockComponent
                index={indexNumber}
                currentRoll={parseInt(roll1.split("")[2])}
                blockNumber={gridData.id}
                newGame={0}
                answer={""}
                // submitGuess={{"", false}}
              />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 border-2 text-white text-2xl">
          {grid.map((gridData) => (
            <div className="border-r-2 border-b-2 md:h-8 sm:h-8 h-8">
              <BlockComponent
                index={indexNumber}
                currentRoll={0}
                blockNumber={0}
                newGame={0}
                answer={""}
                // submitGuess={""}
              />
            </div>
          ))}
        </div>
      </div>

      {/* <BlockComponent
        blockNumber={0}
        newGame={0}
        answer={""}
        submitGuess={function (guess: GuessData): void {
          throw new Error("Function not implemented.");
        }}
      /> */}
    </div>
  );
};

export default Index;
