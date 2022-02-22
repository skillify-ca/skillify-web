import Link from "next/link";
import React, { useState } from "react";
import { Button } from "../../components/ui/Button";
import { linesOfCode } from "../api/coding/LinesOfCode";

export default function richestCustomerWealth(props) {
  const [codeStepNum, setCodeStepNum] = useState(0);
  const [lineNum, setLineNum] = useState(0);
  const [loopNum, setLoopNum] = useState(1);
  const [loopElemNum, setLoopElemNum] = useState(0);
  const [balancesState, setBalancesState] = useState([]);
  const [accountSumState, setAccountSumState] = useState(0);
  const [finalAnswerState, setFinalAnswerState] = useState(0);

  function iterateOnSolution() {
    const accounts = [
      [5, 10, 15],
      [2, 4, 6],
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
      setBalancesState((balancesState) =>
        balancesState.sort((a, b) => {
          return b - a;
        })
      );
      setLineNum(lineNum + 1);
    }

    if (lineNum == 11) {
      setFinalAnswerState(balancesState[0]);
      setLineNum(lineNum + 1);
    }
  }

  // this.setState({ myArray: [...this.state.myArray, 'new value'] }) //simple value

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

          {linesOfCode.map(({ line, text }) => {
            return (
              <div className="grid grid-flow-row-dense grid-cols-12">
                <div className="col-span-1">{line}</div>
                <div
                  className={
                    lineNum === line
                      ? "col-span-11 bg-yellow-200"
                      : "col-span-7"
                  }
                >
                  {text}
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
              disabled={lineNum == linesOfCode.length}
              label="Reset"
              backgroundColor="blue"
              textColor="white"
              onClick={() => {
                setLineNum(0);
                setLoopNum(1);
                setBalancesState([]);
                setAccountSumState(0);
                setFinalAnswerState(0);
              }}
            />
          </div>
          <p className="font-bold text border-b-2 border-black">Inputs</p>
          <p> accounts = [[5, 10, 15], [2, 4, 6]] </p>
          <p className="font-bold text border-b-2 border-black">Variables</p>
          <p> balances = {balancesState}</p>
          <p> account_sum = {accountSumState}</p>
          <p> lineNum: {lineNum}</p>

          <p> loopNum: {loopNum}</p>
          <p> loopElemNum: {loopElemNum}</p>
          <p> final answer: {finalAnswerState}</p>
        </div>
      </div>
    </>
  );
}
