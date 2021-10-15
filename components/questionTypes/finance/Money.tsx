import React, { useEffect, useState } from "react";
import { GuessData } from "../../../pages/api/guessData";
import { Button } from "../../ui/Button";

export interface MoneyProp {}

export const Money: React.FC<MoneyProp> = ({}) => {
  return (
    <div className="flex flex-col space-y-8">
      <h1>How much money is there?</h1>
      <div className="flex flex-wrap w-108">
        <img src="/images/money/nickle.jpeg" className="w-16 h-16" />
        <img src="/images/money/nickle.jpeg" className="w-16 h-16" />
        <img src="/images/money/loonie.jpeg" className="w-24" />
        <img src="/images/money/loonie.jpeg" className="w-24" />
        <img src="/images/money/toonie.jpeg" className="w-28" />
        <img src="/images/money/dime.jpeg" className="w-16 h-16" />
        <img src="/images/money/dime.jpeg" className="w-16 h-16" />
      </div>
      <div className="flex flex-start">
        <p>$</p>
        <input type="text" className="border-2 border-red-600" />
      </div>
    </div>
  );
};
