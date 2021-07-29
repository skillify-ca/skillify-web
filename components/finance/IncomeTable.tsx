import { ReactNode, useState } from "react";
import StatementRow from "../stories/StatementRow";
import { Input } from "../ui/Input";

const IncomeTable = ({}) => {
  const [count, setCount] = useState("");
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
                  value={count}
                  onChange={(e) => setCount(e.target.value)}
                  placeholder="Type in here"
                ></input>
              </div>
            </td>
          </tr>
          <tr>
            <td className="border border-black">Your Spouses Monthly Income</td>
            <td className="border border-black flex flex-nowrap">
              B.{" "}
              <div className={"ml-2"}>
                <input></input>
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
                <input></input>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <p className={"ml-64 text-xs"}> **Put this amount in section 7**</p>
      <p>"A cell = {count}</p>
    </div>
  );
};

export default IncomeTable;
