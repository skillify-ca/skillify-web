import React, { useState } from "react";
import { GuessData } from "../../pages/api/guessData";
import { Question } from "../../pages/api/question";
import {
  ItemContainerObj,
  Noun,
} from "../../pages/api/WordProblemModelObjects";
import { Button } from "./Button";
import { Input } from "./Input";
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
    <div className="flex flex-col items-center gap-4">
      <TenFrame num={3} />
    </div>
  );
};
