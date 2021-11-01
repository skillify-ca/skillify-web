import React, { ReactNode, useState } from "react";
import { GuessData } from "../../pages/api/guessData";
import { Button } from "../ui/Button";
import { ItemDataTable } from "./BudgetTableData";

export interface ItemProps {
  budget: number;
  submitGuess: (guess:GuessData) => void;
}

const BudgetTable = ({ budget, submitGuess }) => {

  const [ isCorrect, setIsCorrect ] = useState(false);

  const calculateBudget = () => {
    const guessData:GuessData = {isCorrect:true, guess:''}
    submitGuess(guessData)

    if( budget >= 1.56 ) {
      setIsCorrect(true)
    } else {
      setIsCorrect(false)
    }
  }

  return (
    <div>
      <h3 className="font-bold">Question:</h3>
      <p>Cassie has ${budget}. Does she have enough to buy a roll of electrical tape and a light bulb?</p>
      <p className="italic mb-4">Do not round.</p>

      <div className="bg-green-300 mb-8">
        {ItemDataTable.map((itemData, index) => (
          <div className="grid grid-cols-2 odd:bg-green-200">
            <div key={index} className="pl-4">{itemData.item}</div>
            <div className="text-right pr-4">${itemData.cost}</div>
          </div>
        ))}
      </div>

      <div className="flex gap-8 flex-col">
        <Button backgroundColor="blue" textColor="white" label="Yes" onClick={ calculateBudget }/>
        <Button backgroundColor="blue" textColor="white" label="No" onClick={ calculateBudget }/>
      </div>

    </div>
  );
};
export default BudgetTable;
