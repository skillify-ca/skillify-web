import React, { useState, useEffect } from "react";
import { GuessData } from "../../../pages/api/guessData";
import { Button } from "../../ui/Button";

export interface AlgebraSolveVariableProps {
  variableLetter: string;
  variableproblem: string;
  submitGuess: (guess: GuessData) => void;
  text: string;
  answer: string;
  personname: string;
}

const AlgebraSolveVariable: React.FC<AlgebraSolveVariableProps> = ({
  variableLetter,
  variableproblem,
  submitGuess,
  text,
  answer,
  personname,
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
    <div className="flex items-center justify-center">
      <div>
        <p className="flex flex-row">
          Help {personname} solve for the unknown {variableLetter} in the
          following problem
        </p>
        <p className="">
          {variableLetter}
          {variableproblem}
        </p>
        <div>
          <div className="flex items-centre justify-centre">
            <input
              id="input"
              type="number"
              className="w-20 font-bold text-right border-2 border-gray-300"
            ></input>
          </div>
        </div>
        {""}
        <p>{text}</p>
        <div className="flex items-center justify-center">
          <Button
            backgroundColor="blue"
            textColor="white"
            label="Submit"
            onClick={() => onSubmit(guess)}
          />
        </div>
      </div>
    </div>
  );
};

export default AlgebraSolveVariable;
function setGuess(arg0: string) {
  throw new Error("Function not implemented.");
}
