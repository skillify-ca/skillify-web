import React, { useState } from "react";
import BudgetRules from "./BudgetRules";
import { Button } from "../ui/Button";

import { FinanceProfileChart } from "./FinanceProfileChart";
import {
  FinanceProfileType,
  financialProfileData,
} from "../../pages/api/finance/profile";
import { getRndInteger } from "../../pages/api/random";
import { STAGES } from "../../pages/finance-profile";
import { EndSession } from "./EndSession";
import AssignmentSession from "./AssignmentSession";
import { ProfileSelection } from "./ProfileSelection";
import { RulesSession } from "./RulesSession";

export interface RulesSessionProps {
  profileData: FinanceProfileType;
  badgeData: any;
  setProfileData: (profileData: FinanceProfileType) => void;
}

export const BudgetPreview = ({
  profileData,
  setProfileData,
  badgeData,
}: RulesSessionProps) => {
  const [stage, setStage] = useState(STAGES.START);

  return (
    <div className="flex flex-col items-center justify-center p-8">
      {stage === STAGES.START && badgeData && (
        <RulesSession
          profileData={profileData}
          setProfileData={setProfileData}
          onClick={() => {}}
          badgeData={badgeData}
        />
      )}
      {stage == STAGES.PROFILE && profileData && (
        <ProfileSelection
          profileData={profileData}
          setProfileData={setProfileData}
          onStartClick={() => {}}
        />
      )}
      {stage === STAGES.ASSIGNMENT && (
        <AssignmentSession profileData={profileData} onClick={() => {}} />
      )}
      {stage === STAGES.END && <EndSession onClick={() => {}} />}
      <div className="flex">
        <Button
          backgroundColor="blue"
          textColor="white"
          label="Previous"
          onClick={() => setStage(stage - 1)}
        />
        <Button
          backgroundColor="blue"
          textColor="white"
          label="Next"
          onClick={() => setStage(stage + 1)}
        />
      </div>
    </div>
  );
};
