import React, { useState } from "react";
import { GuessData } from "../../pages/api/guessData";
import { Skill } from "../../pages/api/skill";
import { Button } from "../ui/Button";

export interface NumberComparisonProp {
  val1: number;
  val2: number;
  answer: string;
  submitGuess: (guess: GuessData) => void;
}

export const NumberComparison: React.FC<NumberComparisonProp> = ({
  val1,
  val2,
  answer,
  submitGuess,
  ...props
}) => {
  function onSubmit(val: string) {
    submitGuess({
      guess: val,
      isCorrect: val == answer,
    });
  }
  return (
    <div className=" flex flex-col items-center  gap-16 justify-center">
      <h1 className="text-4m font-semibold text-center">
        Which Number is Bigger?
      </h1>
      <div className=" flex flex-row gap-16">
        <Button
          backgroundColor="blue"
          textColor="white"
          label={val1.toString()}
          onClick={(e) => onSubmit(val1.toString())}
        ></Button>
        <Button
          backgroundColor="red"
          textColor="white"
          label={val2.toString()}
        ></Button>
      </div>
    </div>
  );
};
