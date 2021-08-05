import { sum } from "lodash";
import { ReactNode, useState } from "react";
import StatementRow from "../stories/StatementRow";
import { Input } from "../ui/Input";

export interface incomeTableProps {
  monthlyIncome: string;
  setMonthlyIncome: (monthlyIncome: string) => void; //Line A
  spouseMonthlyIncome: string;
  setSpouseMonthlyIncome: (spouseMonthlyIncome: string) => void; //Line B
  totalMonthlyIncome: string;
  setTotalMonthlyIncome: (totalMonthlyIncome: string) => void; //Line C
  sumValidation: string;
  setSumValidation: (sumValidation: string) => void;
  backgroundColour: string;
  getBackgroundColour: (backgroundColour: string) => void;
}

const IncomeTable = ({
  monthlyIncome,
  setMonthlyIncome,
  spouseMonthlyIncome,
  setSpouseMonthlyIncome,
  totalMonthlyIncome,
  setTotalMonthlyIncome,
  sumValidation,
  setSumValidation,
  backgroundColour,
}: incomeTableProps) => {
  const getBackgroundColour = () => {
    {
      setSumValidation(backgroundColour);
      backgroundColour = sumValidation;
    }
  };
  const resetValidation = () => {
    {
      Number.parseInt(monthlyIncome) + Number.parseInt(spouseMonthlyIncome) ===
      Number.parseInt(totalMonthlyIncome)
        ? setSumValidation("Correct")
        : setSumValidation("");
    }
  };
  return (
    <div>
      {" "}
      <h1 className={"mb-2"}>Section 2: Income</h1>
      <p>If married, add up your incomes in this section and put the</p>
      <p className={"mb-1"}>
        total in Box C. If you are single, you will only have one income.
      </p>
      <table className="table-fixed w-auto border-collapse">
        <thead>
          <tr>
            <th className="w-1/2"></th>
            <th className="w-1/2"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-black ">
              {" "}
              <p className={"mx-2"}> Your Monthly Income</p>{" "}
            </td>
            <td className="border border-black flex flex-nowrap">
              A.
              <div className={"ml-2"}>
                <input
                  value={monthlyIncome}
                  onChange={(e) => {
                    setMonthlyIncome(e.target.value);
                    resetValidation();
                  }}
                  placeholder="Type numbers only"
                ></input>
              </div>
            </td>
          </tr>
          <tr>
            <td className="border border-black">Your Spouses Monthly Income</td>
            <td className="border border-black flex flex-nowrap">
              B.{" "}
              <div className={"ml-2"}>
                <input
                  value={spouseMonthlyIncome}
                  onChange={(e) => {
                    setSpouseMonthlyIncome(e.target.value);
                    resetValidation();
                  }}
                  placeholder="Type numbers only"
                ></input>
              </div>
            </td>
          </tr>
          <tr>
            <td className="border border-black bg-gray-300">
              Total Monthly Income
            </td>
            <td className="border border-black flex flex-nowrap">
              C.
              <div className={"ml-2"}>
                <input
                  value={totalMonthlyIncome}
                  onChange={(e) => {
                    setTotalMonthlyIncome(e.target.value);
                    getBackgroundColour();
                  }}
                  placeholder="Type numbers only"
                  {...(Number.parseInt(monthlyIncome) +
                    Number.parseInt(spouseMonthlyIncome) ===
                  Number.parseInt(totalMonthlyIncome)
                    ? (backgroundColour = "Correct")
                    : (backgroundColour = "Wrong"))}
                  className={
                    backgroundColour === ""
                      ? "bg-white"
                      : backgroundColour === "Correct"
                      ? "bg-green-200"
                      : backgroundColour === "Wrong"
                      ? "bg-red-200"
                      : "bg-white"
                  }
                ></input>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <p className={"ml-64 text-xs"}> **Put this amount in section 7**</p>
      <p>sumValidation = {sumValidation}</p>
      <p>
        {" "}
        background = {backgroundColour} A= {monthlyIncome} B=
        {spouseMonthlyIncome} C={totalMonthlyIncome} sumvalidation ={" "}
        {sumValidation}
      </p>
    </div>
  );
};

export default IncomeTable;
