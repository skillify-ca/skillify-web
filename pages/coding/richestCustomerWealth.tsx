import Link from "next/link";
import React, { useState } from "react";
import { Button } from "../../components/ui/Button";
import { linesOfCode } from "../api/coding/linesOfCode";

export default function richestCustomerWealth(props) {
  const [lineNum, setLineNum] = useState(0);

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
                    lineNum === 5 ? "col-span-11 bg-yellow-200" : "col-span-7"
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
              disabled={lineNum == 0}
              label="Previous"
              backgroundColor="blue"
              textColor="white"
              onClick={() => setLineNum(lineNum - 1)}
            />

            <Button
              disabled={lineNum == linesOfCode.length - 1}
              label="Next"
              backgroundColor="blue"
              textColor="white"
              onClick={() => setLineNum(lineNum + 1)}
            />
          </div>
          <p className="font-bold text border-b-2 border-black">Inputs</p>
          <p> accounts = [[1,2,3],[3,2,1]] </p>
          <p className="font-bold text border-b-2 border-black">Variables</p>
          <p> balances = []</p>
          <p> account_sum = 0</p>
          <p> What line are we on: {lineNum}</p>
        </div>
      </div>
    </>
  );
}
