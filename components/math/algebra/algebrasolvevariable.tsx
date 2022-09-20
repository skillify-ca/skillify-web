import React, { useState, useEffect } from "react";
import { GuessData } from "../../../pages/api/guessData";
import { Button } from "../../ui/Button";

export interface AlgebraSolveVariableProps {
  variableLetter: string;
  variableProblem: string;
  submitGuess: (guess: GuessData) => void;
  text: string;
  answer: string;
  personName: string;
}

const AlgebraSolveVariable: React.FC<AlgebraSolveVariableProps> = ({
  variableLetter,
  variableProblem,
  submitGuess,
  text,
  answer,
  personName,
}) => {
  const onSubmit = (guess: string) => {
    submitGuess({
      guess: guess.toString(),
      isCorrect: guess === answer,
    }),
      setGuess("");
  };
  const [guess, setGuess] = useState("");
  useEffect(() => {
    (document.getElementById("input") as HTMLInputElement).value = "";
  }, []);
  return (
    <div className="text-xl space-y-4">
      <p>
        Help {personName} solve for the unknown {variableLetter} in the
        following problem
      </p>
      <div className="flex items-center justify-center">
        <p className="font-bold pl-2">
          {variableLetter}
          {variableProblem}
        </p>
      </div>
      <div>
        <div className="flex items-center justify-center">
          <p className="flex flex-row">
            {variableLetter} =
            <input
              id="input"
              type="number"
              value={guess}
              className="w-20 font-bold flex text-center border-2 border-gray-300"
              onChange={(e) => setGuess(e.target.value)}
            ></input>
          </p>
        </div>
      </div>
      <p>{text}</p>
      <div className="flex items-center justify-center flex-direction: column;">
        <Button
          backgroundColor="blue"
          textColor="white"
          label="Submit"
          onClick={() => onSubmit(guess)}
        />
      </div>
    </div>
  );
};

export default AlgebraSolveVariable;
