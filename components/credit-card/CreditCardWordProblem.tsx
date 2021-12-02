import React from "react";
import { DropDownMenu } from "./DropDownMenu";
import {
  applyArray,
  approvedArray,
  billArray,
  buildArray,
  chargeArray,
  creditCardArray,
  creditLimitArray,
  doesntArray,
  interestArray,
  lateFeeArray,
  minimumArray,
  payArray,
  responsibleArray,
  unpaidArray,
} from "../../pages/api/credit-card/CreditCardWordProblemData";

interface CreditCardWordProps {
  creditQ1: string;
  setCreditQ1: (value: string) => void;
  creditA1: number;
  setCreditA1: (value: number) => void;
  isCreditCorrectQ1: boolean;
  setIsCreditCorrectQ1: (value: boolean) => void;
  creditQ2: string;
  setCreditQ2: (value: string) => void;
  creditA2: number;
  setCreditA2: (value: number) => void;
  isCreditCorrectQ2: boolean;
  setIsCreditCorrectQ2: (value: boolean) => void;
  creditQ3: string;
  setCreditQ3: (value: string) => void;
  creditA3: number;
  setCreditA3: (value: number) => void;
  isCreditCorrectQ3: boolean;
  setIsCreditCorrectQ3: (value: boolean) => void;
  creditQ4: string;
  setCreditQ4: (value: string) => void;
  creditA4: number;
  setCreditA4: (value: number) => void;
  isCreditCorrectQ4: boolean;
  setIsCreditCorrectQ4: (value: boolean) => void;
  creditQ5: string;
  setCreditQ5: (value: string) => void;
  creditA5: number;
  setCreditA5: (value: number) => void;
  isCreditCorrectQ5: boolean;
  setIsCreditCorrectQ5: (value: boolean) => void;
  creditQ6: string;
  setCreditQ6: (value: string) => void;
  creditA6: number;
  setCreditA6: (value: number) => void;
  isCreditCorrectQ6: boolean;
  setIsCreditCorrectQ6: (value: boolean) => void;
  creditQ7: string;
  setCreditQ7: (value: string) => void;
  creditA7: number;
  setCreditA7: (value: number) => void;
  isCreditCorrectQ7: boolean;
  setIsCreditCorrectQ7: (value: boolean) => void;
  creditQ8: string;
  setCreditQ8: (value: string) => void;
  creditA8: number;
  setCreditA8: (value: number) => void;
  isCreditCorrectQ8: boolean;
  setIsCreditCorrectQ8: (value: boolean) => void;
  creditQ9: string;
  setCreditQ9: (value: string) => void;
  creditA9: number;
  setCreditA9: (value: number) => void;
  isCreditCorrectQ9: boolean;
  setIsCreditCorrectQ9: (value: boolean) => void;
  creditQ10: string;
  setCreditQ10: (value: string) => void;
  creditA10: number;
  setCreditA10: (value: number) => void;
  isCreditCorrectQ10: boolean;
  setIsCreditCorrectQ10: (value: boolean) => void;
  creditQ11: string;
  setCreditQ11: (value: string) => void;
  creditA11: number;
  setCreditA11: (value: number) => void;
  isCreditCorrectQ11: boolean;
  setIsCreditCorrectQ11: (value: boolean) => void;
  creditQ12: string;
  setCreditQ12: (value: string) => void;
  creditA12: number;
  setCreditA12: (value: number) => void;
  isCreditCorrectQ12: boolean;
  setIsCreditCorrectQ12: (value: boolean) => void;
  creditQ13: string;
  setCreditQ13: (value: string) => void;
  creditA13: number;
  setCreditA13: (value: number) => void;
  isCreditCorrectQ13: boolean;
  setIsCreditCorrectQ13: (value: boolean) => void;
  creditQ14: string;
  setCreditQ14: (value: string) => void;
  creditA14: number;
  setCreditA14: (value: number) => void;
  isCreditCorrectQ14: boolean;
  setIsCreditCorrectQ14: (value: boolean) => void;
  creditQ15: string;
  setCreditQ15: (value: string) => void;
  creditA15: number;
  setCreditA15: (value: number) => void;
  isCreditCorrectQ15: boolean;
  setIsCreditCorrectQ15: (value: boolean) => void;
}

const CreditCardWordProblem = ({
  creditQ1,
  setCreditQ1,
  creditA1,
  setCreditA1,
  isCreditCorrectQ1,
  setIsCreditCorrectQ1,
  creditQ2,
  setCreditQ2,
  creditA2,
  setCreditA2,
  isCreditCorrectQ2,
  setIsCreditCorrectQ2,
  creditQ3,
  setCreditQ3,
  creditA3,
  setCreditA3,
  isCreditCorrectQ3,
  setIsCreditCorrectQ3,
  creditQ4,
  setCreditQ4,
  creditA4,
  setCreditA4,
  isCreditCorrectQ4,
  setIsCreditCorrectQ4,
  creditQ5,
  setCreditQ5,
  creditA5,
  setCreditA5,
  isCreditCorrectQ5,
  setIsCreditCorrectQ5,
  creditQ6,
  setCreditQ6,
  creditA6,
  setCreditA6,
  isCreditCorrectQ6,
  setIsCreditCorrectQ6,
  creditQ7,
  setCreditQ7,
  creditA7,
  setCreditA7,
  isCreditCorrectQ7,
  setIsCreditCorrectQ7,
  creditQ8,
  setCreditQ8,
  creditA8,
  setCreditA8,
  isCreditCorrectQ8,
  setIsCreditCorrectQ8,
  creditQ9,
  setCreditQ9,
  creditA9,
  setCreditA9,
  isCreditCorrectQ9,
  setIsCreditCorrectQ9,
  creditQ10,
  setCreditQ10,
  creditA10,
  setCreditA10,
  isCreditCorrectQ10,
  setIsCreditCorrectQ10,
  creditQ11,
  setCreditQ11,
  creditA11,
  setCreditA11,
  isCreditCorrectQ11,
  setIsCreditCorrectQ11,
  creditQ12,
  setCreditQ12,
  creditA12,
  setCreditA12,
  isCreditCorrectQ12,
  setIsCreditCorrectQ12,
  creditQ13,
  setCreditQ13,
  creditA13,
  setCreditA13,
  isCreditCorrectQ13,
  setIsCreditCorrectQ13,
  creditQ14,
  setCreditQ14,
  creditA14,
  setCreditA14,
  isCreditCorrectQ14,
  setIsCreditCorrectQ14,
  creditQ15,
  setCreditQ15,
  creditA15,
  setCreditA15,
  isCreditCorrectQ15,
  setIsCreditCorrectQ15,
}: CreditCardWordProps) => {
  return (
    <div className="flex flex-col p-12">
      <div className="mb-12">
        <div className="flex justify-center mb-12">
          <h1 className="text-purple-600 font-bold text-5xl md:text-7xl uppercase">
            Credit Cards
          </h1>
        </div>
        <div className="flex justify-center mb-12">
          <span className="text-4xl">
            You <DropDownMenu words={chargeArray} /> a purchase to your credit
            card
          </span>
        </div>
        <div className="flex flex-col-reverse md:flex-row justify-center items-center">
          <div className="px-12">
            <img className="" src="/images/credit-card/credit-payment.svg" />
          </div>
          <div className="text-2xl">
            <div className="flex justify-center p-8 bg-purple-200 rounded-2xl mx-12">
              <span>
                <DropDownMenu words={creditCardArray} /> company pays the store
              </span>
            </div>
            <div className="flex justify-center p-8 bg-purple-300 rounded-2xl mx-12 my-4">
              <span>
                Credit card company sends you a{" "}
                <DropDownMenu words={billArray} /> and you{" "}
                <DropDownMenu words={payArray} /> the credit card company
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-12 items-center">
        <div className="flex flex-col-reverse md:flex-row-reverse">
          <img
            className="max-w-xs"
            src="/images/credit-card/credit-receipt.svg"
          />
          <ul className="p-12 flex flex-col text-2xl gap-4 md:mx-12 m-12 border-8 border-gray-200">
            <li>
              You receive a <DropDownMenu words={billArray} /> each month
            </li>
            <li>
              Full bill <DropDownMenu words={doesntArray} /> need to be paid
            </li>
            <li>
              <DropDownMenu words={interestArray} /> is charged on{" "}
              <DropDownMenu words={unpaidArray} /> amount
            </li>
            <li>
              a <DropDownMenu words={minimumArray} /> payment is required each
              month
            </li>
            <li>
              <DropDownMenu words={lateFeeArray} /> is billed not paid on time
            </li>
          </ul>
        </div>
        <div className="flex flex-col-reverse md:flex-row md:mx-12 m-12">
          <img
            className="max-w-sm p-4"
            src="/images/credit-card/credit-checklist.svg"
          />
          <ul className="flex flex-col gap-8 p-4 text-2xl">
            <li>
              Spending is limited by a <DropDownMenu words={creditLimitArray} />
            </li>
            <li>
              You <DropDownMenu words={applyArray} /> for a credit card and need
              to be <DropDownMenu words={approvedArray} />
            </li>
            <li>
              <DropDownMenu words={buildArray} /> your credit with{" "}
              <DropDownMenu words={responsibleArray} /> credit card use
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CreditCardWordProblem;
