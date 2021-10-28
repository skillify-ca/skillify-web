import React from "react";
import BudgetRules from "./BudgetRules";
import { Button } from "../ui/Button";

import { FinanceProfileChart } from "./FinanceProfileChart";
import {
  FinanceProfileType,
  financialProfileData,
} from "../../pages/api/finance/profile";
import { getRndInteger } from "../../pages/api/random";

export interface RulesSessionProps {
  onStartClick: () => void;
  profileData: FinanceProfileType;
  setProfileData: (profileData: FinanceProfileType) => void;
}

export const ProfileSelection = ({
  profileData,
  setProfileData,
  onStartClick,
}: RulesSessionProps) => {
  const randomize = () => {
    const randomProfile = getRndInteger(0, 12);
    setProfileData(financialProfileData[randomProfile]);
  };
  return (
    <div>
      <p className="text-center pb-5">
        Choose a profile to begin your journey:
      </p>

      <div className="flex justify-center pb-6">
        <FinanceProfileChart
          individualOccupation={profileData.individualOccupation}
          individualSalary={profileData.individualSalary}
          maritalStatus={profileData.maritalStatus}
          numberOfChildren={profileData.numberOfChildren}
          spouseOccupation={profileData.spouseOccupation}
          spouseSalary={profileData.spouseSalary}
        />
      </div>
      <div className="flex gap-8 justify-center">
        <Button
          backgroundColor="green"
          textColor="white"
          label="Randomize"
          onClick={randomize}
        />

        <Button
          backgroundColor="green"
          textColor="white"
          label="Start"
          onClick={(_) => onStartClick()}
        />
      </div>
    </div>
  );
};
