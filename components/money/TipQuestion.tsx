import React from "react";
import { GuessData } from "../../pages/api/guessData";
import { Button } from "../ui/Button";
import { Question } from "../../pages/api/question";

export interface TipQuestionProps {
  answer: string;
  question: Question;
  submitGuess: (guess:GuessData) => void;
}

const TipQuestion: React.FC<TipQuestionProps> = ({ question, submitGuess, answer }) => {
  const onSubmit = (guess: string) => {
    submitGuess({
      guess: guess,
      isCorrect: guess.toString() == answer.toString()
    });
  }
  return(
    <div className="flex flex-col max-h-96 py-4 overflow-y-hidden gap-4">
      <p>Estimate the amount of tip by rounding the bill to the nearest dollar before calculating.</p>
      {""}
      <p className="pl-10">20% tip on a bill of $99.23</p>
      {""}
      <div className="max-w">
        <p className="py-4">The amount of the tip is approximately
          $<input className="border-2 border-gray-300 w-20"></input>.
        </p>
      </div>
      <Button backgroundColor="blue" textColor="white" label="Submit" onClick={()=> onSubmit(answer)}/>
    </div>
  )
}

export default TipQuestion;