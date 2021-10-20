import React, { ReactNode, useState } from "react";
import { Button } from "../ui/Button";
import { ItemDataTable } from "./BudgetTableData";

export interface ItemProps {
  budget: number;
}

const BudgetTable = ({ budget }) => {

  const [ isCorrect, setIsCorrect ] = useState(false);
  const displayAnswer = () => {

  }

  const math = () => {
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
        {ItemDataTable.map((ItemData, index) => (
          <div className="grid grid-cols-2 odd:bg-green-200">
            <div key={index} className="pl-4">{ItemData.item}</div>
            <div className="text-right pr-4">${ItemData.cost}</div>
          </div>
        ))}
      </div>

      <div className="flex gap-8 flex-col">
        <Button backgroundColor="blue" textColor="white" label="Yes" onClick={ math }/>
        <Button backgroundColor="blue" textColor="white" label="No" onClick={ math }/>
      </div>

    </div>
  );
};
export default BudgetTable;
