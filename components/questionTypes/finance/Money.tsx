import React, { useEffect, useState } from "react";
import { GuessData } from "../../../pages/api/guessData";
import { Button } from "../../ui/Button";

export interface MoneyProp {}

export const Money: React.FC<MoneyProp> = ({}) => {
  return (
    <div className="flex flex-col items-center space-y-8">
      <h1>How much money is there?</h1>
      <img src="/images/money/nickle.jpeg" className="w-16" />
      <img src="/images/money/loonie.jpeg" className="w-28" />
      <img src="/images/money/toonie.jpeg" className="w-32" />
    </div>
  );
};
