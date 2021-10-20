import React, { ReactNode, useState } from "react";
import { Button } from "../ui/Button";
import { ItemDataTable } from "./BudgetTableData";

const BudgetTable = () => {

  const [ isCorrect, setIsCorrect ] = useState(false);
  const displayAnswer = () => {

  }


  return (
    <div>
     <p>Cassie has $1.50. Does she have enough to buy a roll of electrical tape and a light bulb?</p>
      <p className="italic">Do not round.</p>

      <div className="even:bg-green-300 odd:bg-green-800">
        {ItemDataTable.map((ItemData, index) => (
          <tr>
            <td key={index}>{ItemData.item}</td>
            <td>{ItemData.cost}</td>s
          </tr>
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
