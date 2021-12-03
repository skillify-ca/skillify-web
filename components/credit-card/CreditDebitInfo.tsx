import React from "react";
import {
  borrowArray,
  payArray,
  spendArray,
  depositArray,
  purchaseArray,
  lostArray,
  stolenArray,
  plasticArray,
  magneticArray,
  nameArray,
  expirationArray,
} from "../../pages/api/credit-card/CreditDebitInfoData";
import { DropDownMenu } from "./DropDownMenu";

export interface DropDownMenuProps {
  word: string;
  answer: string;
}

export interface CreditDebitInfoProps {
  infoQ1: string;
  setInfoQ1: (infoQ1: string) => void;
  infoA1: number;
  setInfoA1: (infoA1: number) => void;
  infoQ2: string;
  setInfoQ2: (infoQ2: string) => void;
  infoA2: number;
  setInfoA2: (infoA2: number) => void;
  infoQ3: string;
  setInfoQ3: (infoQ3: string) => void;
  infoA3: number;
  setInfoA3: (infoA3: number) => void;
  infoQ4: string;
  setInfoQ4: (infoQ4: string) => void;
  infoA4: number;
  setInfoA4: (infoA4: number) => void;
  infoQ5: string;
  setInfoQ5: (infoQ5: string) => void;
  infoA5: number;
  setInfoA5: (infoA5: number) => void;
  infoQ6: string;
  setInfoQ6: (infoQ6: string) => void;
  infoA6: number;
  setInfoA6: (infoA6: number) => void;
  infoQ7: string;
  setInfoQ7: (infoQ7: string) => void;
  infoA7: number;
  setInfoA7: (infoA7: number) => void;
  infoQ8: string;
  setInfoQ8: (infoQ8: string) => void;
  infoA8: number;
  setInfoA8: (infoA8: number) => void;
  infoQ9: string;
  setInfoQ9: (infoQ9: string) => void;
  infoA9: number;
  setInfoA9: (infoA9: number) => void;
  infoQ10: string;
  setInfoQ10: (infoQ10: string) => void;
  infoA10: number;
  setInfoA10: (infoA10: number) => void;
  infoQ11: string;
  setInfoQ11: (infoQ11: string) => void;
  infoA11: number;
  setInfoA11: (infoA11: number) => void;

  isCorrectQ1: boolean;
  setIsCorrectQ1: (isCorrectQ1: boolean) => void;
  isCorrectQ2: boolean;
  setIsCorrectQ2: (isCorrectQ2: boolean) => void;
  isCorrectQ3: boolean;
  setIsCorrectQ3: (isCorrectQ3: boolean) => void;
  isCorrectQ4: boolean;
  setIsCorrectQ4: (isCorrectQ4: boolean) => void;
  isCorrectQ5: boolean;
  setIsCorrectQ5: (isCorrectQ5: boolean) => void;
  isCorrectQ6: boolean;
  setIsCorrectQ6: (isCorrectQ6: boolean) => void;
  isCorrectQ7: boolean;
  setIsCorrectQ7: (isCorrectQ7: boolean) => void;
  isCorrectQ8: boolean;
  setIsCorrectQ8: (isCorrectQ8: boolean) => void;
  isCorrectQ9: boolean;
  setIsCorrectQ9: (isCorrectQ9: boolean) => void;
  isCorrectQ10: boolean;
  setIsCorrectQ10: (isCorrectQ10: boolean) => void;
  isCorrectQ11: boolean;
  setIsCorrectQ11: (isCorrectQ11: boolean) => void;
}

const CreditDebitInfo = ({
  infoQ1,
  setInfoQ1,
  infoA1,
  setInfoA1,
  isCorrectQ1,
  setIsCorrectQ1,
  infoQ2,
  setInfoQ2,
  infoA2,
  setInfoA2,
  isCorrectQ2,
  setIsCorrectQ2,
  infoQ3,
  setInfoQ3,
  infoA3,
  setInfoA3,
  isCorrectQ3,
  setIsCorrectQ3,
  infoQ4,
  setInfoQ4,
  infoA4,
  setInfoA4,
  isCorrectQ4,
  setIsCorrectQ4,
  infoQ5,
  setInfoQ5,
  infoA5,
  setInfoA5,
  isCorrectQ5,
  setIsCorrectQ5,
  infoQ6,
  setInfoQ6,
  infoA6,
  setInfoA6,
  isCorrectQ6,
  setIsCorrectQ6,
  infoQ7,
  setInfoQ7,
  infoA7,
  setInfoA7,
  isCorrectQ7,
  setIsCorrectQ7,
  infoQ8,
  setInfoQ8,
  infoA8,
  setInfoA8,
  isCorrectQ8,
  setIsCorrectQ8,
  infoQ9,
  setInfoQ9,
  infoA9,
  setInfoA9,
  isCorrectQ9,
  setIsCorrectQ9,
  infoQ10,
  setInfoQ10,
  infoA10,
  setInfoA10,
  isCorrectQ10,
  setIsCorrectQ10,
  infoQ11,
  setInfoQ11,
  infoA11,
  setInfoA11,
  isCorrectQ11,
  setIsCorrectQ11,
}: CreditDebitInfoProps) => {
  return (
    <div className="flex flex-col p-12">
      <div className="mb-12 flex justify-center">
        <h1 className="font-extrabold text-8xl uppercase -pl-12 text-yellow-400">
          <span className="text-purple-500">Credit</span> vs{" "}
          <span className="text-green-500">Debit</span>
        </h1>
      </div>

      <div className="mb-12">
        <div className="mb-4 flex justify-center">
          <h2 className="text-5xl">What's the difference?</h2>
        </div>
        <div className="flex flex-col gap-4">
          <div className="w-full p-12">
            <div className="flex md:flex-row flex-col-reverse justify-center">
              <div className="flex flex-col justify-center bg-purple-200 p-12 mx-12 rounded-2xl">
                <h2 className="text-4xl mb-4">Credit Cards</h2>
                <span className="text-2xl">
                  Allow consumers to{" "}
                  <DropDownMenu
                    words={borrowArray}
                    answer={"borrow"}
                    value={infoQ1}
                    setValue={setInfoQ1}
                    point={infoA1}
                    getPoint={setInfoA1}
                    isCorrect={isCorrectQ1}
                    setIsCorrect={setIsCorrectQ1}
                  />{" "}
                  money from a financial institution and{" "}
                  <DropDownMenu
                    words={payArray}
                    answer={"pay"}
                    value={infoQ2}
                    setValue={setInfoQ2}
                    point={infoA2}
                    getPoint={setInfoA2}
                    isCorrect={isCorrectQ2}
                    setIsCorrect={setIsCorrectQ2}
                  />{" "}
                  it back later
                </span>
              </div>
              <img
                className="max-w-xs sm:w-5/6"
                src="/images/credit-card/credit-card.svg"
              />
            </div>
          </div>
          <div className="w-full p-12">
            <div className="flex md:flex-row-reverse flex-col-reverse justify-center">
              <div className="flex flex-col justify-center bg-green-200 p-12 mx-12 rounded-2xl">
                <h2 className="text-4xl mb-4">Debit Cards</h2>
                <span className="text-2xl">
                  Allow consumers to{" "}
                  <DropDownMenu
                    words={spendArray}
                    answer={"spend"}
                    value={infoQ3}
                    setValue={setInfoQ3}
                    point={infoA3}
                    getPoint={setInfoA3}
                    isCorrect={isCorrectQ3}
                    setIsCorrect={setIsCorrectQ3}
                  />{" "}
                  money they have{" "}
                  <DropDownMenu
                    words={depositArray}
                    answer={"deposited"}
                    value={infoQ4}
                    setValue={setInfoQ4}
                    point={infoA4}
                    getPoint={setInfoA4}
                    isCorrect={isCorrectQ4}
                    setIsCorrect={setIsCorrectQ4}
                  />{" "}
                  in their bank account
                </span>
              </div>
              <img
                className="max-w-md"
                src="/images/credit-card/card-with-hand.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex md:flex-row-reverse flex-col justify-center px-12">
        <img
          className=" max-w-md"
          src="/images/credit-card/both-card-woman.svg"
        />
        <div className=" flex flex-col justify-center bg-gray-200 p-12 mx-12 rounded-2xl">
          <h2 className="text-4xl mb-12">So how are they similar?</h2>
          <ul className="flex flex-col gap-4 text-2xl">
            <li>
              Allow a person to make{" "}
              <DropDownMenu
                words={purchaseArray}
                answer={"purchases"}
                value={infoQ5}
                setValue={setInfoQ5}
                point={infoA5}
                getPoint={setInfoA5}
                isCorrect={isCorrectQ5}
                setIsCorrect={setIsCorrectQ5}
              />
            </li>
            <li>
              If card is{" "}
              <DropDownMenu
                words={lostArray}
                answer={"lost"}
                value={infoQ6}
                setValue={setInfoQ6}
                point={infoA6}
                getPoint={setInfoA6}
                isCorrect={isCorrectQ6}
                setIsCorrect={setIsCorrectQ6}
              />{" "}
              or{" "}
              <DropDownMenu
                words={stolenArray}
                answer={"stolen"}
                value={infoQ7}
                setValue={setInfoQ7}
                point={infoA7}
                getPoint={setInfoA7}
                isCorrect={isCorrectQ7}
                setIsCorrect={setIsCorrectQ7}
              />
              , report import it immediately
            </li>
            <li>
              Hard,{" "}
              <DropDownMenu
                words={plasticArray}
                answer={"plastic"}
                value={infoQ8}
                setValue={setInfoQ8}
                point={infoA8}
                getPoint={setInfoA8}
                isCorrect={isCorrectQ8}
                setIsCorrect={setIsCorrectQ8}
              />{" "}
              card with information stored on a{" "}
              <DropDownMenu
                words={magneticArray}
                answer={"magnetic"}
                value={infoQ9}
                setValue={setInfoQ9}
                point={infoA9}
                getPoint={setInfoA9}
                isCorrect={isCorrectQ9}
                setIsCorrect={setIsCorrectQ9}
              />{" "}
              strip.
            </li>
            <li>
              Owner's{" "}
              <DropDownMenu
                words={nameArray}
                answer={"name"}
                value={infoQ10}
                setValue={setInfoQ10}
                point={infoA10}
                getPoint={setInfoA10}
                isCorrect={isCorrectQ10}
                setIsCorrect={setIsCorrectQ10}
              />{" "}
              and an{" "}
              <DropDownMenu
                words={expirationArray}
                answer={"expiration"}
                value={infoQ11}
                setValue={setInfoQ11}
                point={infoA11}
                getPoint={setInfoA11}
                isCorrect={isCorrectQ11}
                setIsCorrect={setIsCorrectQ11}
              />{" "}
              date on the card
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CreditDebitInfo;
