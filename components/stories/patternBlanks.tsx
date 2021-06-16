import React, { useEffect, useState } from "react";
import { GuessData } from "../../pages/api/guessData";
import { Question } from "../../pages/api/question";
import { Button } from "./Button";

export interface PatternBlankProp {
  displayQuestion: string;
  startNumber: string;
  answer: string;
  submitGuess: (guess: GuessData) => void;
}

export const PatternBlank: React.FC<PatternBlankProp> = ({
  displayQuestion,
  startNumber,
  answer,
  submitGuess,
  ...props
}) => {
  return (
    <div className="flex flex-col items-center space-y-8">
      <h1 className="text-4m font-semibold text-center"> {displayQuestion} </h1>
      <div className="flex flex-row space-x-4 items-center">
        {startNumber},
        <input
          className="border py-0.5 px-0.5 text-grey-darkest p-8 w-20"
          type="number"
        ></input>
        ,
        <input
          className="border py-0.5 px-0.5 text-grey-darkest p-8 w-20"
          type="number"
        ></input>
        ,
        <input
          className="border py-0.5 px-0.5 text-grey-darkest p-8 w-20"
          type="number"
        ></input>
      </div>
    </div>
  );
};
