import React, { useState } from "react";
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

  const [ input1, setInput1 ] = useState("");
  const [ totalIncome, setTotalIncome ] = useState("");
  const [ totalExpense, setTotalExpense ] = useState("");

  return (
    <div className="flex flex-col max-h-96 py-4 overflow-y-hidden">
      <p className="mb-4">
        This table shows {question.personDataModel}'s monthly budget.
        How much money does she need to earn tutoring to balance her budget?
        Complete the table.
      </p>

      <div className="grid bg-blue-600 text-white border-b border-grey-500">
        <div className="flex justify-self-center">
          <span className="">{question.text}'s March Budget</span>
        </div>
      </div>
        <div className="grid grid-cols-2 bg-blue-300 text-white">
          <div className="border-r border-grey-500">
              <div className="flex justify-center">
                <span className="">Income</span>
              </div>
          </div>
          <div className="flex justify-center">
            <span className="">Expenses</span>
          </div>
        </div>
        <div className="grid grid-cols-2 border border-grey-500">
          <div className="flex flex-col border-r border-grey-500">
            <span className="border-b border-grey-500">Job at a flower shop: $140</span>
            <span className="border-b border-grey-500">Tutoring: $<input className="border border-grey-500 text-black font-bold w-12 text-right"></input></span>
            <span className="border-b border-grey-500">Gift from brother: $15</span>
            <span className="">Total: <input className="border border-grey-500 text-black font-bold w-12 text-right"></input></span>
          </div>
          <div className="flex flex-col">
            <span className="border-b border-grey-500">Calculator: $75</span>
            <span className="border-b border-grey-500">Haircut: $55</span>
            <span className="border-b border-grey-500">Books: $65</span>
            <span className="">Total: <input className="border border-grey-500 text-black font-bold w-12 text-right"></input></span>
          </div>
        </div>
        
        <Button backgroundColor="blue" textColor="white" label="Submit" onClick={()=> onSubmit("guess here")}/>
    </div>
  );

};

export default BalanceBudget;

