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
import differenceInSecondsWithOptions from "date-fns/esm/fp/differenceInSecondsWithOptions/index.js";
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

// create diceOutput object to return both integer roll and display string
type diceOutput = {
  diceNumber: number;
  diceDisplay: string;
};

// use parseint as a working solution -- find optimal way to convert
const diceRoll = () => {
  const diceDisp = getRandomItemFromArray([
    "⚀ 1 ⚀",
    "⚁ 2 ⚁",
    "⚂ 3 ⚂",
    "⚃ 4 ⚃",
    "⚄ 5 ⚄",
    "⚅ 6 ⚅",
  ]);
  console.log(diceDisp);
  const diceNumb = parseInt(diceDisp.split()[2]);
  const diceOutp: diceOutput = {
    diceNumber: diceNumb,
    diceDisplay: diceDisp,
  };
  return diceOutp;
};

export interface IndexProps {
  submitGuess: (guess: GuessData) => void;
  answer: string;
}

// need two separate rolls for a player, one for diceNumb, another for diceDisplay
// how to think about the separate rolls?
const Index: FC<IndexProps> = ({ submitGuess, answer }) => {
  const [grid, setGrid] = useState([]);
  const [newGame, setNewGame] = useState(0);
  const [roll1Display, setRoll1Display] = useState("⚀⚁⚂⚃⚄⚅");
  const [roll2Display, setRoll2Display] = useState("⚀⚁⚂⚃⚄⚅");
  const [roll1Number, setRoll1Number] = useState(0);
  const [roll2Number, setRoll2Number] = useState(0);
  const [indexNumber, setIndexNumber] = useState(0);
  const handleDiceRoll = () => {
    setRoll1Display(diceRoll().diceDisplay);
    setRoll1Number(diceRoll().diceNumber);
  };
  useEffect(() => {
    let counter = (roll1Number - 1) * 7;
    setIndexNumber(counter);
  });
  useEffect(() => {
    setGrid(createGrid);
  }, [newGame]);
  function newGameButton() {
    return setNewGame(newGame + 1);
  }
  // does this function need to use an object if there is only one output?
  function createGrid() {
    let gridList = [];
    for (let i = 0; i < 42; i++) {
      gridList.push({
        id: i,
      });
    }
    return gridList;
  }
  console.log(roll1Number);
  return (
    <div className="">
      {/* <p>{indexNumber}</p> */}
      <Button label="New Game" onClick={() => newGameButton()}>
        newGame
      </Button>
      <div className="grid grid-cols-2 place-content-center">
        <DiceButtonComponent
          rollDisplay={roll1Display}
          rollNumber={roll1Number}
          handleDiceRoll={handleDiceRoll}
        />
        <DiceButtonComponent
          rollDisplay={roll2Display}
          rollNumber={roll2Number}
          handleDiceRoll={handleDiceRoll}
        />
      </div>
      <div className="grid grid-rows-2 gap-8 px-20 pb-10">
        <div className="grid grid-cols-7 border-2 text-white text-2xl">
          {grid.map((gridData) => (
            <div className="border-r-2 border-b-2 md:h-8 sm:h-8 h-8">
              <BlockComponent
                index={indexNumber}
                // update current roll, just grab number roll from diceOutput obj
                rollDisplay={roll1Display}
                currentRoll={roll1Number}
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
                rollDisplay={roll2Display}
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
    </div>
  );
};

export default Index;
