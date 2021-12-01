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
  setInfoA1: (infoA1: number) => void;
  infoQ2: string;
  setInfoQ2: (infoQ2: string) => void;
  setInfoA2: (infoA2: number) => void;
  infoQ3: string;
  setInfoQ3: (infoQ3: string) => void;
  setInfoA3: (infoA3: number) => void;
  infoQ4: string;
  setInfoQ4: (infoQ4: string) => void;
  setInfoA4: (infoA4: number) => void;
  infoQ5: string;
  setInfoQ5: (infoQ5: string) => void;
  setInfoA5: (infoA5: number) => void;
  infoQ6: string;
  setInfoQ6: (infoQ6: string) => void;
  setInfoA6: (infoA6: number) => void;
  infoQ7: string;
  setInfoQ7: (infoQ7: string) => void;
  setInfoA7: (infoA7: number) => void;
  infoQ8: string;
  setInfoQ8: (infoQ8: string) => void;
  setInfoA8: (infoA8: number) => void;
  infoQ9: string;
  setInfoQ9: (infoQ9: string) => void;
  setInfoA9: (infoA9: number) => void;
  infoQ10: string;
  setInfoQ10: (infoQ10: string) => void;
  setInfoA10: (infoA10: number) => void;
  infoQ11: string;
  setInfoQ11: (infoQ11: string) => void;
  setInfoA11: (infoA11: number) => void;
}

const CreditDebitInfo = ({
  infoQ1,
  setInfoQ1,
  setInfoA1,
  infoQ2,
  setInfoQ2,
  setInfoA2,
  infoQ3,
  setInfoQ3,
  setInfoA3,
  infoQ4,
  setInfoQ4,
  setInfoA4,
  infoQ5,
  setInfoQ5,
  setInfoA5,
  infoQ6,
  setInfoQ6,
  setInfoA6,
  infoQ7,
  setInfoQ7,
  setInfoA7,
  infoQ8,
  setInfoQ8,
  setInfoA8,
  infoQ9,
  setInfoQ9,
  setInfoA9,
  infoQ10,
  setInfoQ10,
  setInfoA10,
  infoQ11,
  setInfoQ11,
  setInfoA11,
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
                    value={infoQ1}
                    setValue={setInfoQ1}
                    words={borrowArray}
                    answer={"borrow"}
                    getPoint={setInfoA1}
                  />
                  money from a financial institution and{" "}
                  <DropDownMenu
                    value={infoQ2}
                    setValue={setInfoQ2}
                    words={payArray}
                    answer={"pay"}
                    getPoint={setInfoA2}
                  />
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
                    value={infoQ3}
                    setValue={setInfoQ3}
                    words={spendArray}
                    answer={"spend"}
                    getPoint={setInfoA3}
                  />{" "}
                  money they have{" "}
                  <DropDownMenu
                    value={infoQ4}
                    setValue={setInfoQ4}
                    words={depositArray}
                    answer={"deposited"}
                    getPoint={setInfoA4}
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
                value={infoQ5}
                setValue={setInfoQ5}
                words={purchaseArray}
                answer={"purchases"}
                getPoint={setInfoA5}
              />
            </li>
            <li>
              If card is{" "}
              <DropDownMenu
                value={infoQ6}
                setValue={setInfoQ6}
                words={lostArray}
                answer={"lost"}
                getPoint={setInfoA6}
              />{" "}
              or{" "}
              <DropDownMenu
                value={infoQ7}
                setValue={setInfoQ7}
                words={stolenArray}
                answer={"stolen"}
                getPoint={setInfoA7}
              />
              , report import it immediately
            </li>
            <li>
              Hard,{" "}
              <DropDownMenu
                value={infoQ8}
                setValue={setInfoQ8}
                words={plasticArray}
                answer={"plastic"}
                getPoint={setInfoA8}
              />{" "}
              card with information stored on a{" "}
              <DropDownMenu
                value={infoQ9}
                setValue={setInfoQ9}
                words={magneticArray}
                answer={"magnetic"}
                getPoint={setInfoA9}
              />{" "}
              strip.
            </li>
            <li>
              Owner's{" "}
              <DropDownMenu
                value={infoQ10}
                setValue={setInfoQ10}
                words={nameArray}
                answer={"name"}
                getPoint={setInfoA10}
              />{" "}
              and an{" "}
              <DropDownMenu
                value={infoQ11}
                setValue={setInfoQ11}
                words={expirationArray}
                answer={"expiration"}
                getPoint={setInfoA11}
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
