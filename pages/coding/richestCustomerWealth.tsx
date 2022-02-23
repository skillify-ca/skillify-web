import Link from "next/link";
import React, { useState } from "react";
import { Button } from "../../components/ui/Button";
import { linesOfCode } from "../api/coding/LinesOfCode";

export default function richestCustomerWealth(props) {
  const [lineNum, setLineNum] = useState(0);
  const [loopNum, setLoopNum] = useState(1);
  const [loopElemNum, setLoopElemNum] = useState(0);
  const [loopElemValue, setLoopElemValue] = useState(0);
  const [balancesState, setBalancesState] = useState([]);
  const [accountSumState, setAccountSumState] = useState(0);
  const [finalAnswerState, setFinalAnswerState] = useState(0);

  const renderAccounts = [
    "[",
    "2",
    ",",
    "4",
    ",",
    "6",
    "]",
    "[",
    "5",
    ",",
    "10",
    ",",
    "15",
    "]",
  ];

  function iterateOnSolution() {
    const accounts = [
      [2, 4, 6],
      [5, 10, 15],
    ];

    if (lineNum < 4) {
      setLineNum(lineNum + 1);
      return;
    }

    if (lineNum == 4) {
      setAccountSumState(0);
      setLineNum(lineNum + 1);
      return;
    }

    if (lineNum == 5) {
      setLoopElemValue(accounts[loopNum - 1][loopElemNum]);
      setLineNum(lineNum + 1);
      return;
    }

    if (lineNum == 6) {
      setAccountSumState(accountSumState + accounts[loopNum - 1][loopElemNum]);
      setLineNum(lineNum + 1);
      return;
    }

    if (lineNum == 7 && loopElemNum < 2) {
      setLoopElemNum(loopElemNum + 1);
      setLineNum(5);
      return;
    }

    if (lineNum == 8) {
      setBalancesState((balancesState) => [balancesState, accountSumState]);
      setLineNum(lineNum + 1);
    }

    if (lineNum == 9 && loopNum < 2) {
      setLoopNum(loopNum + 1);
      setLoopElemNum(0);
      setLineNum(3);
    } else {
      setLineNum(lineNum + 1);
    }

    if (lineNum == 10) {
      // this still is not working yet
      setBalancesState(balancesState.sort().reverse());
      setLineNum(lineNum + 1);
    }

    if (lineNum == 11) {
      setFinalAnswerState(sortedBalancesState[0]);
      setLineNum(lineNum + 1);
    }
  }

  return (
    <>
      <div className="sticky top-0 w-full shadow-md">
        <h1 className="w-full p-4 text-2xl font-bold text-center bg-blue-300">
          1672. Richest Customer Wealth
        </h1>
      </div>
      <div className="flex flex-col gap-4 p-8 bg-white shadow-lg rounded-xl">
        <div className="grid grid-cols-3">
          <p className="col-start-2">
            You are given an [m x n] integer grid accounts where accounts[i][j]
            is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the
            j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer
            has. A customer's wealth is the amount of money they have in all
            their bank accounts. The richest customer is the customer that has
            the maximum wealth.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 items-center justify-center gap-4 heropattern-bamboo-gray-300 pt-8">
        <div className="flex flex-col gap-4 p-4 bg-white shadow-lg rounded-xl">
          <p className="font-bold text  border-b-2 border-black">
            Code to Evaluate
          </p>

          {linesOfCode.map(({ line, text, indent }) => {
            return (
              <div className="grid grid-flow-row-dense grid-cols-12 text-lg">
                <div className="col-span-1">{line}</div>
                <div
                  className={
                    lineNum === line
                      ? "col-span-11 bg-yellow-200"
                      : "col-span-11"
                  }
                >
                  <p
                    className={
                      indent === "none"
                        ? "ml-0"
                        : indent === "single"
                        ? "ml-8"
                        : indent === "double"
                        ? "ml-16"
                        : "ml-24"
                    }
                  >
                    {text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-col gap-4 p-4 bg-white shadow-lg rounded-xl">
          <p className="font-bold text border-b-2 border-black">Controls</p>
          <div className="grid grid-cols-4 gap-4">
            <Button
              disabled={lineNum == linesOfCode.length}
              label="Next"
              backgroundColor="blue"
              textColor="white"
              onClick={() => {
                setLineNum(lineNum + 1);
                iterateOnSolution();
              }}
            />

            <Button
              label="Reset"
              backgroundColor="blue"
              textColor="white"
              onClick={() => {
                setLineNum(0);
                setLoopNum(1);
                setBalancesState([]);
                setAccountSumState(0);
                setFinalAnswerState(0);
                setLoopElemNum(0);
                setLoopElemValue(0);
              }}
            />
          </div>
          <p className="font-bold text border-b-2 border-black">Inputs</p>
          <div className="flex flex-row gap-2 text-2xl">
            {renderAccounts.map((elem) => {
              return (
                <p
                  className={
                    parseInt(elem) == loopElemValue ? "bg-red-200" : ""
                  }
                >
                  {elem}
                </p>
              );
            })}
          </div>
          <p className="font-bold text border-b-2 border-black">Outputs</p>
          <div className="flex flex-col text-lg gap-4">
            <p>Balances: [{balancesState}]</p>
            <p>account_sum: {accountSumState}</p>
            <p>
              {" "}
              Final Answer: {finalAnswerState == 0 ? "" : finalAnswerState}
            </p>
          </div>
          <p className="font-bold text border-b-2 border-black">
            Solution Progress
          </p>

          <p> lineNum: {lineNum}</p>
          <p> loopNum: {loopNum}</p>
          <p> loopElemNum: {loopElemNum}</p>
          <p> loopElemValue: {loopElemValue}</p>
        </div>
      </div>
    </>
  );
}
