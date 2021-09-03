import { ReactNode } from "react";
import React, { useState } from "react";
import BudgetRules from "./BudgetRules";
import { Button } from "../ui/Button";
import FinanceProfile from "/Users/brianlee/Documents/GitHub/math/pages/finance-profile";

export interface RulesSessionProps {
  onClick: () => void;
}

export const RulesSession = ({ onClick }: RulesSessionProps) => {
  const [badgeImage, setBadgeImage] = useState("");

  return (
    <div>
      <p className="text-center text-4xl pb-8">Balancing a Budget</p>
      <div className="pb-8">
        <BudgetRules />
      </div>
      <div className="flex flex-nowrap justify-center">
        <div className="pr-5">
          <Button
            backgroundColor="green"
            textColor="white"
            label="Randomize"
            // no functionality yet
          />
        </div>
        <div>
          <Button
            backgroundColor="green"
            textColor="white"
            label="Start"
            onClick={(e) => onClick()}
          />
        </div>
      </div>
      <div>
        <FinanceProfile badgeImage={badgeImage} setBadgeImage={setBadgeImage} />
      </div>
    </div>
  );
};
