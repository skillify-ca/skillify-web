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
    <div>
      <div>
        <p className="font-size: 30px;">
          Help {personname} solve for the unknown {variableLetter} in the
          following problem
        </p>
        <div className="flex items-center justify-center">
        <p className="font-bold pl-2">
          {variableLetter}
          {variableproblem}
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
              className="w-20 font-bold flex text-right border-2 border-gray-300"
              onChange={(e) => setGuess(e.target.value)}
            ></input>
            </p>
          </div>
        </div>
        {""}
        <p>{text}</p>
        <div className = "flex items-center justify-center flex-direction: column;">
          <div className="flex items-center justify-center  flex-direction: column; f">
            <Button
              backgroundColor="blue"
              textColor="white"
              label="Submit"
              onClick={() => onSubmit(guess)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlgebraSolveVariable;
function setGuess(arg0: string) {
  throw new Error("Function not implemented.");
}
