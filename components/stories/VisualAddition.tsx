import React, { useState } from "react";
import { GuessData } from "../../pages/api/guessData";
import { Question } from "../../pages/api/question";
import {
  ItemContainerObj,
  Noun,
} from "../../pages/api/WordProblemModelObjects";
import { Button } from "./Button";
import DiceDots from "./DiceDots";
import { Input } from "./Input";
import NumberLiteral from "./NumberLiteral";
import TenFrame from "./tenFrame";

export interface VisualAdditionProp {
  submitGuess: (guess: GuessData) => void;
  question: Question;
}

export const VisualAddition: React.FC<VisualAdditionProp> = ({
  submitGuess,
  question,
  ...props
}) => {
  return (
    <div className="flex flex-row items-center gap-4">
      <div className="flex flex-col items-center gap-4">
        <TenFrame num={3} />
        {/* <DiceDots value={3} /> */}
        <NumberLiteral />
      </div>
      <p className="text-5xl font-bold">+</p>
      <div className="flex flex-col items-center gap-4">
        <TenFrame num={3} />
        <NumberLiteral />
      </div>
    </div>
  );
};
