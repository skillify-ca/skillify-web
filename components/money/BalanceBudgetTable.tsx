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
    validateGuess();
    submitGuess({
      guess: guess,
      isCorrect: guess.toString() == answer.toString()
    });
  }

  const validateGuess = ()=> {
    if ( totalIncome === totalExpense && totalExpense == answer ) {
      setGuess(answer);
    }
  }

  const [ guess, setGuess ] = useState("");
  const [ input1, setInput1 ] = useState("");
  const [ totalIncome, setTotalIncome ] = useState("");
  const [ totalExpense, setTotalExpense ] = useState("");

  return (
    <div className="flex flex-col max-h-96 py-4 overflow-y-hidden">
      <p className="mb-4">
        This table shows {question.personDataModel.name}'s monthly budget.
        How much money does she need to earn tutoring to balance her budget?
        Complete the table.
      </p>

      <div className="grid bg-blue-600 text-white border-b border-grey-500">
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
        <div className="grid grid-cols-2 border border-grey-500">
          <div className="flex flex-col border-r border-grey-500">
            {(question.personDataModel.income).map((income, index) => {
              return (
              (income.cost === 0)
                ? 
                <div key={index} className="border-b border-grey-500">
                  {income.title}: 
                  $<input 
                    className="border border-grey-500 text-black font-bold w-12 text-right"
                    value={input1}
                    type="number"
                    onChange={(e) => setInput1(e.target.value)}>
                  </input>
                </div>
                :
                <div key={index} className="border-b border-grey-500">{income.title}: ${income.cost}</div>
              )
            })}
            <div>
              Total: 
              <input 
                className="border border-grey-500 text-black font-bold w-12 text-right"
                value={totalIncome}
                type="number"
                onChange={(e) => setTotalIncome(e.target.value)}>
              </input>
            </div>
          </div>
          <div className="flex flex-col">
            {(question.personDataModel.expenses).map((expense, index) => {
              return (
                <div key={index} className="border-b border-grey-500">{expense.title}: ${expense.cost}</div>
              )
            })}
            <div>
              Total:
              <input 
                className="border border-grey-500 text-black font-bold w-12 text-right"
                value={totalExpense}
                type="number"
                onChange={(e) => setTotalExpense(e.target.value)}>
              </input>
            </div>
          </div>
        </div>
        <Button backgroundColor="blue" textColor="white" label="Submit" onClick={()=> onSubmit(guess)}/>
    </div>
  );

};

export default BalanceBudget;

