import { sum } from "lodash";
import { ReactNode, useState } from "react";
import StatementRow from "../stories/StatementRow";
import { Input } from "../ui/Input";

export interface incomeTableProps {
  monthlyIncome: string;
  setmonthlyIncome: (value: string) => void; //Line A
  spouseMonthlyIncome: string;
  setspouseMonthlyIncome: (spouseMonthlyIncome: string) => void; //Line B
  totalMonthlyIncome: string;
  settotalMonthlyIncome: (totalMonthlyIncome: string) => void; //Line C
  sumValidation: string;
  setsumValidation: (sumValidation: string) => void;
}

const IncomeTable = ({
  monthlyIncome,
  setmonthlyIncome,
  spouseMonthlyIncome,
  setspouseMonthlyIncome,
  totalMonthlyIncome,
  settotalMonthlyIncome,
  sumValidation,
}: incomeTableProps) => {
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
                  onChange={(e) => setmonthlyIncome(e.target.value)}
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
                  onChange={(e) => setspouseMonthlyIncome(e.target.value)}
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
                  onChange={(e) => settotalMonthlyIncome(e.target.value)}
                  placeholder="Type numbers only"
                  {...(+monthlyIncome + +spouseMonthlyIncome === 0
                    ? (sumValidation = "")
                    : +monthlyIncome + +spouseMonthlyIncome ===
                      +totalMonthlyIncome
                    ? (sumValidation = "Correct")
                    : (sumValidation = "Wrong"))}
                  className={
                    sumValidation === ""
                      ? "bg-white"
                      : sumValidation === "Correct"
                      ? "bg-green-200"
                      : sumValidation === "Wrong"
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
    </div>
  );
};

export default IncomeTable;
