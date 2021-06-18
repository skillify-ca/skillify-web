import React, { useEffect, useState } from "react";
import { GuessData } from "../../pages/api/guessData";
import { Question } from "../../pages/api/question";
import { Button } from "./Button";
import { PatternBlankProp } from "./patternBlanks";

export interface MissingNumSeqProp {
  numSeq: Array<number>;
  answer: Number;
  submitGuess: (guess: GuessData) => void;
}

export const MissingNumSeq: React.FC<MissingNumSeqProp> = ({
  numSeq,
  answer,
  submitGuess,
  ...props
}) => {
  let items = [];
  for (const i of numSeq) {
    if (i != answer) {
      items.push(<div className="inline-flex">{i}</div>);
    } else {
      items.push(
        <div className="inline space-x-4 items-center">
          <input
            className="border py-0.5 px-0.5 text-grey-darkest p-8 w-20"
            type="number"
          ></input>
        </div>
      );
    }
  }
  return (
    <div className=" flex flex-col items-center space-y-8">
      <h1 className="text-4m font-semibold text-center">
        {" "}
        Enter the Missing Number in the Sequence{" "}
      </h1>
      {items}
    </div>
  );
};
