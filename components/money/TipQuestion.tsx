import React, { useState, useEffect } from "react";
import { GuessData } from "../../pages/api/guessData";
import { Button } from "../ui/Button";
import { Question } from "../../pages/api/question";

export interface TipQuestionProps {
  answer: string;
  question: Question;
  submitGuess: (guess:GuessData) => void;
}

const TipQuestion: React.FC<TipQuestionProps> = ({ 
  question, 
  submitGuess, 
  answer,
}) => {
  const onSubmit = (guess: string) => {
    submitGuess({
      guess: guess,
      isCorrect: guess.toString() == answer.toString()
    });
  }
  /** Reference user input and store it in a state, then clear input values by next question */
  const [ guess, setGuess ] = useState("");
  useEffect(() => {
    (document.getElementById("input") as HTMLInputElement).value = "";
  }, []);

  return(
    <div className="flex flex-col max-h-96 py-4 overflow-y-hidden gap-4">
      <p>Estimate the amount of tip by rounding the bill to the nearest dollar before calculating.</p>
      {""}
      <p className="pl-10">{question.text}% tip on a bill of ${question.displayNum}</p>
      {""}
      <div className="max-w">
        <p className="py-4">The amount of the tip is approximately
          $<input 
              id="input"
              type="string"
              value={guess}
              className="border-2 border-gray-300 w-20"
              onChange={(e) => setGuess(e.target.value)}
            ></input>.
        </p>
      </div>
      <Button backgroundColor="blue" textColor="white" label="Submit" onClick={()=> onSubmit(guess)}/>
    </div>
  )
}

export default TipQuestion;