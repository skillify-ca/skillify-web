import _ from "lodash";
import React, { useEffect, useState } from "react";
import { FETCH_BADGE_ON_USERID } from "../graphql/fetchBadgeOnUserID";
import { useMutation } from "@apollo/client";
import { useQuery } from "@apollo/client";
import {
  FinanceProfileType,
  financialProfileData,
} from "./api/finance/profile";
import { getRndInteger } from "./api/random";
import { UNLOCK_BADGE } from "../graphql/unlockBadge";
import { useAuth } from "../lib/authContext";
import { Button } from "../components/ui/Button";
import AssignmentSession from "../components/budget/AssignmentSession";
import { EndSession } from "../components/budget/EndSession";
import { FinanceProfileChart } from "../components/budget/FinanceProfileChart";
import { RulesSession } from "../components/budget/RulesSession";

enum STAGES {
  START,
  PROFILE,
  ASSIGNMENT,
  END,
}
/**
TODO fix these issues before launching the budget assignment

- center the rules slider on the first page
- sepearate the rules from profile generation
- even if profile has 0 children show it it the profile card
- show the full occupations by widening the dropdown (they're getting cut off)
- remove the empty option for spouse occupation
- add outline to salary text inputs
- section 1 checkbox and warning image is stretched
- missing sections: electric bill, gas and water bill, TV
- there is no validation that the inputs are correct. Validation only checks that two numbers are the sum. if you type 1 + 1 = 2, it shows green, even when 1 and 1 are not the right inputs
- the user is able to select a 2 bed and 2 bath, even though that is not a valid selection from the left column
- there is overlapping text for car expenses on the right column
- users reported the auto-scrolling to be jarring and confusing (consider removing it)
- rename the page to budget instead of finance-profile (rename the component name too)
 */

const FinanceProfile = () => {
  const [profileData, setProfileData] = useState<FinanceProfileType>();

  useEffect(() => {
    const randomProfile = getRndInteger(0, 12);
    setProfileData(financialProfileData[randomProfile]);
  }, []);

  const [stage, setStage] = useState(STAGES.START);
  const { user } = useAuth();

  const [unlockbadge, unlockBadgeData] = useMutation(UNLOCK_BADGE, {});

  const routeProfile = () => {
    setStage(STAGES.PROFILE);
  };
  const routeAssignment = () => {
    setStage(STAGES.ASSIGNMENT);
  };
  const routeEnd = () => {
    setStage(STAGES.END);
    unlockbadge({
      variables: {
        userId: user.uid,
        badgeId: 56, //Badge ID for Finance Badge (in DB)
      },
    });
  };
  const routeStart = () => {
    setStage(STAGES.START);
  };

  let { data } = useQuery(FETCH_BADGE_ON_USERID, {
    variables: {
      userId: user.uid,
      badgeId: 1, //Addition Level 1 Badge
      badgeId2: 4, //Subtraction Level 1 Badge
    },
  });
  const randomize = () => {
    const randomProfile = getRndInteger(0, 12);
    setProfileData(financialProfileData[randomProfile]);
  };

  return (
    <div className="">
      {stage === STAGES.START && data && (
        <RulesSession
          profileData={profileData}
          setProfileData={setProfileData}
          onClick={routeProfile}
          badgeData={data}
        />
      )}
      {stage == STAGES.PROFILE && profileData && (
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
              onClick={(e) => routeAssignment()}
            />
          </div>
        </div>
      )}
      {stage === STAGES.ASSIGNMENT && (
        <AssignmentSession profileData={profileData} onClick={routeEnd} />
      )}
      {stage === STAGES.END && <EndSession onClick={routeStart} />}
    </div>
  );
};

FinanceProfile.auth = true;

export default FinanceProfile;
