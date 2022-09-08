import React, { useState } from "react";
import { Button } from "../../ui/Button";
import { Coin, CoinType } from "./Coin";

export type CountCoinsProps = {
  coins: CoinType[];
};

export const CountCoinsQuestion: React.FC<CountCoinsProps> = ({ coins }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="flex flex-col items-center space-y-8 ">
      <h1>How much money is there?</h1>
      <div className="flex flex-wrap justify-center w-108">
        {coins.map((coin) => (
          <Coin coinType={coin} />
        ))}
      </div>
      <div className="flex items-center flex-start">
        <p className="text-2xl">$</p>
        <input type="text" className="p-2 border-2" value={inputValue} />
      </div>
      <div>
        <Button label="Submit" backgroundColor="blue" textColor="white" />
      </div>
    </div>
  );
};
