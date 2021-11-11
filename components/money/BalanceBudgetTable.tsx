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

  const [ guess, setGuess ] = useState("");
  const [ totalIncome, setTotalIncome ] = useState("");
  const [ totalExpense, setTotalExpense ] = useState("");

  return (
    <div className="flex flex-col max-h-96 py-4 overflow-y-hidden">
      <p className="mb-4">
        How much money does {question.personDataModel.name} need to earn to balance her budget?
        Complete the table.
      </p>

      <div className="grid bg-blue-600 text-white">
        <div className="flex justify-self-center">
          <span className="">{question.personDataModel.name}'s {question.personDataModel.month} Budget</span>
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
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col">
            {(question.personDataModel.income).map((income, index) => {
              return (
              (income.cost === 0)
                ? 
                <div key={index}>
                  {income.title}:
                  $<input 
                    className="border-2 border-grey-500 text-black font-bold w-14 text-right overflow-hidden"
                    value={guess}
                    type="number"
                    placeholder="0"
                    onChange={(e) => setGuess(e.target.value)}>
                  </input>
                </div>
                :
                <div key={index}>{income.title}: ${income.cost}</div>
              )
            })}
          </div>
          <div className="flex flex-col">
            {(question.personDataModel.expenses).map((expense, index) => {
              return (
                <div key={index}>{expense.title}: ${expense.cost}</div>
              )
            })}
          </div>
        </div>
        <div className="grid grid-cols-2 border-t-2 border-grey-500">
          <div>
            Total: ${question.personDataModel.totalIncome} + {guess}
          </div>
          <div>
            Total: ${question.personDataModel.totalExpenses}
          </div>
        </div>
      <Button backgroundColor="blue" textColor="white" label="Submit" onClick={()=> onSubmit(guess)}/>
    </div>
  );

};

export default BalanceBudget;

