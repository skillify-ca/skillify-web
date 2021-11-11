import React, { useEffect, useState } from "react";
import { GuessData } from "../../../pages/api/guessData";
import { getRndInteger } from "../../../pages/api/random";
import { Button } from "../../ui/Button";

export interface CoinProp {
  coinType: number;
}

export const Coin: React.FC<CoinProp> = ({ coinType }) => {
  return (
    <div className="flex flex-col space-y-8">
      {coinType === 1 && (
        <img src="/images/money/nickle.jpeg" className="w-16 h-16" />
      )}
      {coinType === 2 && (
        <img src="/images/money/loonie.jpeg" className="w-24" />
      )}
      {coinType === 3 && (
        <img src="/images/money/toonie.jpeg" className="w-28" />
      )}
      {coinType === 4 && (
        <img src="/images/money/dime.jpeg" className="w-16 h-16" />
      )}
    </div>
  );
};
