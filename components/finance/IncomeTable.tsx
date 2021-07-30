import { ReactNode, useState } from "react";
import StatementRow from "../stories/StatementRow";
import { Input } from "../ui/Input";

export interface incomeTableProps {
  value: string;
  setValue: (value: string) => void; //Line A
  value2: string;
  setValue2: (value2: string) => void; //Line B
  value3: string;
  setValue3: (value3: string) => void; //Line C
}

const IncomeTable = ({
  value,
  setValue,
  value2,
  setValue2,
  value3,
  setValue3,
}: incomeTableProps) => {
  return (
    <div>
      {" "}
      <h1 className={"mb-2"}>Section 2: Income</h1>
      <p>If married, add up your incomes in this section and put the</p>
      <p className={"mb-1"}>
        total in Box C. If you are single, you will only have on income.
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
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
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
                  value={value2}
                  onChange={(e) => setValue2(e.target.value)}
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
                  value={value3}
                  onChange={(e) => setValue3(e.target.value)}
                  placeholder="Type numbers only"
                ></input>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <p className={"ml-64 text-xs"}> **Put this amount in section 7**</p>
      <p>A cell = {value}</p>
      <p>B cell = {value2} </p>
      <p>c cell = {value3}</p>
      <p>Cell C CORRECT answer is ={+value + +value2}</p>
    </div>
  );
};

export default IncomeTable;
