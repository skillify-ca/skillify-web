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
    <div className="flex flex-col max-h-96 py-4 overflow-y-hidden">
      <p>
        This table shows Tiana's monthly budget.
        How much money does she need to earn tutoring to balance her budget?
        Complete the table.
      </p>
      <div className="grid bg-blue-600 text-white border-b border-grey-500">
        <div className="flex justify-self-center">
          <span>Tiana's March Budget</span>
        </div>
      </div>
        <div className="grid grid-cols-2 bg-blue-300 text-white border-r border-grey-500">
          <div className="flex justify-self-center">
            <span>Income</span>
          </div>
          <div className="flex justify-self-center">
            <p>Expenses</p>
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div className="flex flex-col border-r border-l border-grey-500">
            <span className="border-b border-grey-500">Job at a flower shop: $140</span>
            <span className="border-b border-grey-500">Tutoring: $<input></input></span>
            <span className="border-b border-grey-500">Gift from brother: $15</span>
            <span className="border-b border-grey-500">Total:<input></input></span>
          </div>
          <div className="flex flex-col border-r">
            <span className="border-b border-grey-500">Calculator: $75</span>
            <span className="border-b border-grey-500">Haircut: $55</span>
            <span className="border-b border-grey-500">Books: $65</span>
            <span className="border-b border-grey-500">Total:<input></input></span>
          </div>
        </div>
        
        <Button backgroundColor="blue" textColor="white" label="Submit" onClick={()=> onSubmit("guess here")}/>
    </div>
  );

};

export default BalanceBudget;

