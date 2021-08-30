import React, { useState } from "react";
import { GuessData } from "../../pages/api/guessData";
import { Skill } from "../../pages/api/skill";
import { Button } from "../ui/Button";

export interface NumberComparisonProp {
  valueText: string;
  answer: string;
  submitGuess: (guess: GuessData) => void;
}

export const NumberComparison: React.FC<NumberComparisonProp> = ({
  valueText,
  answer,
  submitGuess,
  ...props
}) => {
  const parse = () => {
    const parts = valueText.split(",");
    return {
      val1: parts[0],
      val2: parts[1],
    };
  };
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
          label={parse().val1}
          onClick={(e) => onSubmit(parse().val1)}
        ></Button>
        <Button
          backgroundColor="red"
          textColor="white"
          label={parse().val2}
          onClick={(e) => onSubmit(parse().val2)}
        ></Button>
      </div>
    </div>
  );
};
