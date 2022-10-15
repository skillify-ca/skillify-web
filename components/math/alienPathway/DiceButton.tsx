import React, { FC, useState } from "react";
import { GuessData } from "../../../pages/api/guessData";
import { Button } from "../../ui/Button";
import {
  getRndInteger,
  getRndTenthsDecimal,
  getRndHundredthsDecimal,
  getRandomItemFromArray,
} from "../../../pages/api/random";
type diceButtonProps = {
  rollNumber: number;
  rollDisplay: string;
  handleDiceRoll: () => void;
};

export const DiceButtonComponent: FC<diceButtonProps> = ({
  handleDiceRoll,
  rollNumber,
}) => {
  return (
    <div className="grid grid-rows2">
      <div className="flex flex-col items-center justify-center w-52 h-48 gap-3 border-2">
        <div className="flex flex-col gap-3">
          <Button label={"Roll Die"} onClick={handleDiceRoll} />
        </div>
        <p className="text-sm text-white place-content-center">
          <input
            className="bg-inherit placeholder:text-inherit text-center"
            placeholder="Enter Player 1's Name"
          ></input>
        </p>
        <p className="text-10xl text-white">{rollNumber}</p>
      </div>
    </div>
  );
};

export default DiceButtonComponent;
