import React from "react";
import { GuessData } from "../../pages/api/guessData";
import { Button } from "../ui/Button";
import { Question } from "../../pages/api/question";

export interface BalanceBudgetProps {
  answer: string;
  question: Question;
  submitGuess: (guess:GuessData) => void;
}


const BalanceBudget: React.FC<BalanceBudgetProps> = ({ question, submitGuess, answer }) => {
  const onSubmit = (guess: string) => {
    submitGuess({
      guess: guess,
      isCorrect: guess.toString() == answer.toString()
    });
  }
  return(
    <div>
        Hello world
    </div>
  );

};

export default BalanceBudget;

