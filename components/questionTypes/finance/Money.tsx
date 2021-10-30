import React, { useEffect, useState } from "react";
import { GuessData } from "../../../pages/api/guessData";
import { getRndInteger } from "../../../pages/api/random";
import { Button } from "../../ui/Button";
import { Coin } from "./Coin";

export interface MoneyProp {}

export const Money: React.FC<MoneyProp> = ({}) => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const getAnswer = () => {
    // TODO calcuate this instead of hard coding.
    if (coinNumber === 1) {
      return "0.05";
    } else if (coinNumber === 2) {
      return "0.10";
    } else if (coinNumber === 3) {
      return "1.10";
    } else if (coinNumber === 4) {
      return "2.10";
    } else if (coinNumber === 5) {
      return "4.10";
    } else if (coinNumber === 6) {
      return "4.20";
    } else {
      return "4.30";
    }
    return;
  };

  // const isCorrect = inputValue === getAnswer();
  const [coinNumber, setCoinNumber] = useState(1);
  const onButtonClick = () => {
    // this will be called on every button click
    setCount(count + 1);
    const answerIsCorrect = inputValue === getAnswer();
    setIsCorrect(answerIsCorrect);
  };
  const onInputChange = (value) => {
    setInputValue(value);
    // this gets called when the input changes
  };

  return (
    <div className="flex flex-col space-y-8">
      <h1>How much money is there?</h1>
      <div className="flex flex-wrap w-108">
        {coinNumber >= 1 && <Coin coinType={4} />}
        {coinNumber >= 2 && <Coin coinType={1} />}

        {coinNumber >= 3 && <Coin coinType={2} />}

        {coinNumber >= 4 && <Coin coinType={2} />}

        {coinNumber >= 5 && <Coin coinType={3} />}

        {coinNumber >= 6 && <Coin coinType={4} />}

        {coinNumber >= 7 && <Coin coinType={4} />}
      </div>
      <div className="flex flex-start">
        <p>$</p>
        <input
          type="text"
          className={`border-2 ${
            isCorrect ? "border-green-600" : "border-red-600"
          } `}
          value={inputValue}
          onChange={(e) => onInputChange(e.target.value)}
        />
      </div>
      <div>
        <Button
          label="Submit"
          backgroundColor="blue"
          textColor="white"
          onClick={onButtonClick}
        />
      </div>
      {count > 0 && <p>You clicked {count} times</p>}
    </div>
  );
};
