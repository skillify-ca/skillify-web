import React from "react";
import { DropDownMenu } from "./DropDownMenu";
import {
  applyArray,
  approvedArray,
  billArray,
  buildArray,
  bill2Array,
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
            You{" "}
            <DropDownMenu
              words={chargeArray}
              answer="charge"
              value={creditQ1}
              setValue={setCreditQ1}
              point={creditA1}
              getPoint={setCreditA1}
              isCorrect={isCreditCorrectQ1}
              setIsCorrect={setIsCreditCorrectQ1}
            />{" "}
            a purchase to your credit card
          </span>
        </div>
        <div className="flex flex-col-reverse md:flex-row justify-center items-center">
          <div className="px-12">
            <img className="" src="/images/credit-card/credit-payment.svg" />
          </div>
          <div className="text-2xl">
            <div className="flex justify-center p-8 bg-purple-200 rounded-2xl mx-12">
              <span>
                <DropDownMenu
                  words={creditCardArray}
                  answer="credit card"
                  value={creditQ2}
                  setValue={setCreditQ2}
                  point={creditA2}
                  getPoint={setCreditA2}
                  isCorrect={isCreditCorrectQ2}
                  setIsCorrect={setIsCreditCorrectQ2}
                />{" "}
                company pays the store
              </span>
            </div>
            <div className="flex justify-center p-8 bg-purple-300 rounded-2xl mx-12 my-4">
              <span>
                Credit card company sends you a{" "}
                <DropDownMenu
                  words={billArray}
                  answer="bill"
                  value={creditQ3}
                  setValue={setCreditQ3}
                  point={creditA3}
                  getPoint={setCreditA3}
                  isCorrect={isCreditCorrectQ3}
                  setIsCorrect={setIsCreditCorrectQ3}
                />{" "}
                and you{" "}
                <DropDownMenu
                  words={payArray}
                  answer="pay"
                  value={creditQ4}
                  setValue={setCreditQ4}
                  point={creditA4}
                  getPoint={setCreditA4}
                  isCorrect={isCreditCorrectQ4}
                  setIsCorrect={setIsCreditCorrectQ4}
                />{" "}
                the credit card company
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
              You receive a{" "}
              <DropDownMenu
                words={bill2Array}
                answer="bill"
                value={creditQ5}
                setValue={setCreditQ5}
                point={creditA5}
                getPoint={setCreditA5}
                isCorrect={isCreditCorrectQ5}
                setIsCorrect={setIsCreditCorrectQ5}
              />{" "}
              each month
            </li>
            <li>
              Full bill{" "}
              <DropDownMenu
                words={doesntArray}
                answer="doesn't"
                value={creditQ6}
                setValue={setCreditQ6}
                point={creditA6}
                getPoint={setCreditA6}
                isCorrect={isCreditCorrectQ6}
                setIsCorrect={setIsCreditCorrectQ6}
              />{" "}
              need to be paid
            </li>
            <li>
              <DropDownMenu
                words={interestArray}
                answer="interest"
                value={creditQ7}
                setValue={setCreditQ7}
                point={creditA7}
                getPoint={setCreditA7}
                isCorrect={isCreditCorrectQ7}
                setIsCorrect={setIsCreditCorrectQ7}
              />{" "}
              is charged on{" "}
              <DropDownMenu
                words={unpaidArray}
                answer="unpaid"
                value={creditQ8}
                setValue={setCreditQ8}
                point={creditA8}
                getPoint={setCreditA8}
                isCorrect={isCreditCorrectQ8}
                setIsCorrect={setIsCreditCorrectQ8}
              />{" "}
              amount
            </li>
            <li>
              a{" "}
              <DropDownMenu
                words={minimumArray}
                answer="minimum"
                value={creditQ9}
                setValue={setCreditQ9}
                point={creditA9}
                getPoint={setCreditA9}
                isCorrect={isCreditCorrectQ9}
                setIsCorrect={setIsCreditCorrectQ9}
              />{" "}
              payment is required each month
            </li>
            <li>
              <DropDownMenu
                words={lateFeeArray}
                answer="late fee"
                value={creditQ10}
                setValue={setCreditQ10}
                point={creditA10}
                getPoint={setCreditA10}
                isCorrect={isCreditCorrectQ10}
                setIsCorrect={setIsCreditCorrectQ10}
              />{" "}
              is billed not paid on time
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
              Spending is limited by a{" "}
              <DropDownMenu
                words={creditLimitArray}
                answer="credit limit"
                value={creditQ11}
                setValue={setCreditQ11}
                point={creditA11}
                getPoint={setCreditA11}
                isCorrect={isCreditCorrectQ11}
                setIsCorrect={setIsCreditCorrectQ11}
              />
            </li>
            <li>
              You{" "}
              <DropDownMenu
                words={applyArray}
                answer="apply"
                value={creditQ12}
                setValue={setCreditQ12}
                point={creditA12}
                getPoint={setCreditA12}
                isCorrect={isCreditCorrectQ12}
                setIsCorrect={setIsCreditCorrectQ12}
              />{" "}
              for a credit card and need to be{" "}
              <DropDownMenu
                words={approvedArray}
                answer="approved"
                value={creditQ13}
                setValue={setCreditQ13}
                point={creditA13}
                getPoint={setCreditA13}
                isCorrect={isCreditCorrectQ13}
                setIsCorrect={setIsCreditCorrectQ13}
              />
            </li>
            <li>
              <DropDownMenu
                words={buildArray}
                answer="build"
                value={creditQ14}
                setValue={setCreditQ14}
                point={creditA14}
                getPoint={setCreditA14}
                isCorrect={isCreditCorrectQ14}
                setIsCorrect={setIsCreditCorrectQ14}
              />{" "}
              your credit with{" "}
              <DropDownMenu
                words={responsibleArray}
                answer="responsible"
                value={creditQ15}
                setValue={setCreditQ15}
                point={creditA15}
                getPoint={setCreditA15}
                isCorrect={isCreditCorrectQ15}
                setIsCorrect={setIsCreditCorrectQ15}
              />{" "}
              credit card use
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CreditCardWordProblem;
