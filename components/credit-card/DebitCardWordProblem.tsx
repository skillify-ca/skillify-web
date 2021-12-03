import React from "react";

import {
  makeArray,
  bankArray,
  moneyArray,
  deductedArray,
  bankArray2,
  limitedArray,
  overdraftArray,
  protectionArray,
  pinArray,
  atmArray,
  checkingArray,
  bankArray3,
} from "../../pages/api/credit-card/DebitCardWordProblemData";
import { DropDownMenu } from "./DropDownMenu";

interface DebitCardWordProps {
  debitQ1: string;
  setDebitQ1: (value: string) => void;
  debitA1: number;
  setDebitA1: (value: number) => void;
  isDebitCorrectQ1: boolean;
  setIsDebitCorrectQ1: (value: boolean) => void;
  debitQ2: string;
  setDebitQ2: (value: string) => void;
  debitA2: number;
  setDebitA2: (value: number) => void;
  isDebitCorrectQ2: boolean;
  setIsDebitCorrectQ2: (value: boolean) => void;
  debitQ3: string;
  setDebitQ3: (value: string) => void;
  debitA3: number;
  setDebitA3: (value: number) => void;
  isDebitCorrectQ3: boolean;
  setIsDebitCorrectQ3: (value: boolean) => void;
  debitQ4: string;
  setDebitQ4: (value: string) => void;
  debitA4: number;
  setDebitA4: (value: number) => void;
  isDebitCorrectQ4: boolean;
  setIsDebitCorrectQ4: (value: boolean) => void;
  debitQ5: string;
  setDebitQ5: (value: string) => void;
  debitA5: number;
  setDebitA5: (value: number) => void;
  isDebitCorrectQ5: boolean;
  setIsDebitCorrectQ5: (value: boolean) => void;
  debitQ6: string;
  setDebitQ6: (value: string) => void;
  debitA6: number;
  setDebitA6: (value: number) => void;
  isDebitCorrectQ6: boolean;
  setIsDebitCorrectQ6: (value: boolean) => void;
  debitQ7: string;
  setDebitQ7: (value: string) => void;
  debitA7: number;
  setDebitA7: (value: number) => void;
  isDebitCorrectQ7: boolean;
  setIsDebitCorrectQ7: (value: boolean) => void;
  debitQ8: string;
  setDebitQ8: (value: string) => void;
  debitA8: number;
  setDebitA8: (value: number) => void;
  isDebitCorrectQ8: boolean;
  setIsDebitCorrectQ8: (value: boolean) => void;
  debitQ9: string;
  setDebitQ9: (value: string) => void;
  debitA9: number;
  setDebitA9: (value: number) => void;
  isDebitCorrectQ9: boolean;
  setIsDebitCorrectQ9: (value: boolean) => void;
  debitQ10: string;
  setDebitQ10: (value: string) => void;
  debitA10: number;
  setDebitA10: (value: number) => void;
  isDebitCorrectQ10: boolean;
  setIsDebitCorrectQ10: (value: boolean) => void;
  debitQ11: string;
  setDebitQ11: (value: string) => void;
  debitA11: number;
  setDebitA11: (value: number) => void;
  isDebitCorrectQ11: boolean;
  setIsDebitCorrectQ11: (value: boolean) => void;
  debitQ12: string;
  setDebitQ12: (value: string) => void;
  debitA12: number;
  setDebitA12: (value: number) => void;
  isDebitCorrectQ12: boolean;
  setIsDebitCorrectQ12: (value: boolean) => void;
}

const DebitCardWordProblem = ({
  debitQ1,
  setDebitQ1,
  debitA1,
  setDebitA1,
  isDebitCorrectQ1,
  setIsDebitCorrectQ1,
  debitQ2,
  setDebitQ2,
  debitA2,
  setDebitA2,
  isDebitCorrectQ2,
  setIsDebitCorrectQ2,
  debitQ3,
  setDebitQ3,
  debitA3,
  setDebitA3,
  isDebitCorrectQ3,
  setIsDebitCorrectQ3,
  debitQ4,
  setDebitQ4,
  debitA4,
  setDebitA4,
  isDebitCorrectQ4,
  setIsDebitCorrectQ4,
  debitQ5,
  setDebitQ5,
  debitA5,
  setDebitA5,
  isDebitCorrectQ5,
  setIsDebitCorrectQ5,
  debitQ6,
  setDebitQ6,
  debitA6,
  setDebitA6,
  isDebitCorrectQ6,
  setIsDebitCorrectQ6,
  debitQ7,
  setDebitQ7,
  debitA7,
  setDebitA7,
  isDebitCorrectQ7,
  setIsDebitCorrectQ7,
  debitQ8,
  setDebitQ8,
  debitA8,
  setDebitA8,
  isDebitCorrectQ8,
  setIsDebitCorrectQ8,
  debitQ9,
  setDebitQ9,
  debitA9,
  setDebitA9,
  isDebitCorrectQ9,
  setIsDebitCorrectQ9,
  debitQ10,
  setDebitQ10,
  debitA10,
  setDebitA10,
  isDebitCorrectQ10,
  setIsDebitCorrectQ10,
  debitQ11,
  setDebitQ11,
  debitA11,
  setDebitA11,
  isDebitCorrectQ11,
  setIsDebitCorrectQ11,
  debitQ12,
  setDebitQ12,
  debitA12,
  setDebitA12,
  isDebitCorrectQ12,
  setIsDebitCorrectQ12,
}: DebitCardWordProps) => {
  return (
    <div className="flex flex-col p-12">
      <div className="mb-12">
        <div className="flex justify-center mb-12">
          <h1 className="text-green-500 font-bold text-5xl md:text-7xl uppercase">
            Debit Cards
          </h1>
        </div>
        <div className="flex justify-center mb-12">
          <span className="text-4xl">
            You{" "}
            <DropDownMenu
              words={makeArray}
              answer={"make"}
              value={debitQ1}
              setValue={setDebitQ1}
              point={debitA1}
              getPoint={setDebitA1}
              isCorrect={isDebitCorrectQ1}
              setIsCorrect={setIsDebitCorrectQ1}
            />{" "}
            a purchase to your debit card
          </span>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="px-12">
            <img className="" src="/images/credit-card/debit-piggybank.svg" />
          </div>
          <div className="text-2xl">
            <div className="flex justify-center p-8 bg-green-200 rounded-2xl mx-12">
              <span>
                The{" "}
                <DropDownMenu
                  words={bankArray}
                  answer={"bank"}
                  value={debitQ2}
                  setValue={setDebitQ2}
                  point={debitA2}
                  getPoint={setDebitA2}
                  isCorrect={isDebitCorrectQ2}
                  setIsCorrect={setIsDebitCorrectQ2}
                />{" "}
                send your{" "}
                <DropDownMenu
                  words={moneyArray}
                  answer={"money"}
                  value={debitQ3}
                  setValue={setDebitQ3}
                  point={debitA3}
                  getPoint={setDebitA3}
                  isCorrect={isDebitCorrectQ3}
                  setIsCorrect={setIsDebitCorrectQ3}
                />{" "}
                to the store
              </span>
            </div>
            <div className="flex justify-center p-8 bg-green-300 rounded-2xl mx-12 my-4">
              <span>
                Money is{" "}
                <DropDownMenu
                  words={deductedArray}
                  answer={"deducted"}
                  value={debitQ4}
                  setValue={setDebitQ4}
                  point={debitA4}
                  getPoint={setDebitA4}
                  isCorrect={isDebitCorrectQ4}
                  setIsCorrect={setIsDebitCorrectQ4}
                />{" "}
                from your{" "}
                <DropDownMenu
                  words={checkingArray}
                  answer={"checking"}
                  value={debitQ5}
                  setValue={setDebitQ5}
                  point={debitA5}
                  getPoint={setDebitA5}
                  isCorrect={isDebitCorrectQ5}
                  setIsCorrect={setIsDebitCorrectQ5}
                />{" "}
                account
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse gap-12 items-center">
        <img
          className="max-w-sm p-4"
          src="/images/credit-card/debit-wallet.svg"
        />
        <ul className="flex flex-col gap-8 p-12 text-2xl">
          <li>
            Issued by a{" "}
            <DropDownMenu
              words={bankArray2}
              answer={"bank"}
              value={debitQ6}
              setValue={setDebitQ6}
              point={debitA6}
              getPoint={setDebitA6}
              isCorrect={isDebitCorrectQ6}
              setIsCorrect={setIsDebitCorrectQ6}
            />{" "}
            and linked to customer's{" "}
            <DropDownMenu
              words={bankArray3}
              answer={"bank"}
              value={debitQ7}
              setValue={setDebitQ7}
              point={debitA7}
              getPoint={setDebitA7}
              isCorrect={isDebitCorrectQ7}
              setIsCorrect={setIsDebitCorrectQ7}
            />{" "}
            account
          </li>
          <li>
            Spending{" "}
            <DropDownMenu
              words={limitedArray}
              answer={"limited"}
              value={debitQ8}
              setValue={setDebitQ8}
              point={debitA8}
              getPoint={setDebitA8}
              isCorrect={isDebitCorrectQ8}
              setIsCorrect={setIsDebitCorrectQ8}
            />{" "}
            by how much is in the bank account
          </li>
          <li>
            May be{" "}
            <DropDownMenu
              words={overdraftArray}
              answer={"overdraft"}
              value={debitQ9}
              setValue={setDebitQ9}
              point={debitA9}
              getPoint={setDebitA9}
              isCorrect={isDebitCorrectQ9}
              setIsCorrect={setIsDebitCorrectQ9}
            />{" "}
            fees for spending more than what is in the account
          </li>
          <li>
            Overdraft{" "}
            <DropDownMenu
              words={protectionArray}
              answer={"protection"}
              value={debitQ10}
              setValue={setDebitQ10}
              point={debitA10}
              getPoint={setDebitA10}
              isCorrect={isDebitCorrectQ10}
              setIsCorrect={setIsDebitCorrectQ10}
            />{" "}
            may be available
          </li>
          <li>
            A{" "}
            <DropDownMenu
              words={pinArray}
              answer={"PIN"}
              value={debitQ11}
              setValue={setDebitQ11}
              point={debitA11}
              getPoint={setDebitA11}
              isCorrect={isDebitCorrectQ11}
              setIsCorrect={setIsDebitCorrectQ11}
            />{" "}
            is required to make a purchase or get money out of{" "}
            <DropDownMenu
              words={atmArray}
              answer={"ATM"}
              value={debitQ12}
              setValue={setDebitQ12}
              point={debitA12}
              getPoint={setDebitA12}
              isCorrect={isDebitCorrectQ12}
              setIsCorrect={setIsDebitCorrectQ12}
            />
          </li>
        </ul>
        <img
          className="max-w-sm p-4"
          src="/images/credit-card/debit-vault.svg"
        />
      </div>
    </div>
  );
};

export default DebitCardWordProblem;
