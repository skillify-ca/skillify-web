import React, { useState } from "react";
import { GuessData } from "../../pages/api/guessData";
import { Button } from "../ui/Button";

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
  const [guess1, setGuess1] = useState("");
  const [guess2, setGuess2] = useState("");
  const [guess3, setGuess3] = useState("");

  function onSubmit() {
    const result = startNumber + "," + guess1 + "," + guess2 + "," + guess3;
    submitGuess({ guess: result, isCorrect: result == answer });
  }

  return (
    <div className="flex flex-col items-center space-y-8">
      <h1 className="text-4m font-semibold text-center"> {displayQuestion} </h1>
      <div className="flex flex-row space-x-4 items-center">
        {startNumber},&nbsp;&nbsp;
        <input
          className="border py-0.5 px-0.5 text-grey-darkest  w-20"
          type="number"
          value={guess1}
          onChange={(e) => setGuess1(e.target.value)}
        ></input>
        ,
        <input
          className="border py-0.5 text-grey-darkest w-20"
          type="number"
          value={guess2}
          onChange={(e) => setGuess2(e.target.value)}
        ></input>
        ,
        <input
          className="border py-0.5 px-0.5 text-grey-darkest w-20"
          type="number"
          value={guess3}
          onChange={(e) => setGuess3(e.target.value)}
        ></input>
      </div>
      <Button
        onClick={onSubmit}
        label="Submit"
        textColor="white"
        backgroundColor="red"
      ></Button>
    </div>
  );
};
