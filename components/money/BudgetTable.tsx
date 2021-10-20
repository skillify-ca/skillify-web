import React, { useState } from "react";
import { Button } from "../ui/Button";
import { ItemDataTable } from "./BudgetTableData";

export interface ItemProps {
  item: string;
  setItem: (item: string) => void;
  cost: number;
  setCost: (cost: number) => void;
  budget: number;
  setBudget: (budget: number) => void;
}

const BudgetTable = ({
  item,
  setItem,
  cost,
  setCost,
  budget,
  setBudget,
}) => {

  const [ isCorrect, setIsCorrect ] = useState(false);
  const displayAnswer = () => {

  }


  return (
    <div>
      <h3 className="font-bold">Question:</h3>
      <p>Cassie has $1.50. Does she have enough to buy a roll of electrical tape and a light bulb?</p>
      <p className="italic mb-4">Do not round.</p>

      <div className="bg-green-300 mb-8 ">
        {ItemDataTable.map((ItemData, index) => (
          <div className="grid grid-cols-3 odd:bg-green-200">
            <div key={index} className="col-span-2">{ItemData.item}</div>
            <div className="">${ItemData.cost}</div>
          </div>
        ))}
      </div>

      <div className="flex gap-8 flex-col">
        <Button backgroundColor="blue" textColor="white" label="Yes"/>
        <Button backgroundColor="blue" textColor="white" label="No"/>
      </div>

      <div className="answer">
        <h1></h1>
      </div>
    </div>
  );
};
export default BudgetTable;
