import _, { min } from "lodash";
import React, { useEffect, useState } from "react";
import { EndSession } from "../components/finance/EndSession";
import { RulesSession } from "../components/finance/RulesSession";
import { Stage } from "@react-three/drei";
import AssignmentSession from "../components/finance/AssignmentSession";
import { userId } from "../graphql/utils/constants";
import { FETCH_BADGE_ON_USERID } from "../graphql/fetchBadgeOnUserID";
import { ApolloClient, InMemoryCache, useMutation } from "@apollo/client";
import { useQuery } from "@apollo/client";
import { useSession } from "next-auth/react";
import {
  FinanceProfileType,
  financialProfileData,
} from "./api/finance/profile";
import { getRndInteger } from "./api/random";
import { UNLOCK_BADGE } from "../graphql/unlockBadge";

enum STAGES {
  START,
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
  const { data: session, status } = useSession();

  const [unlockbadge, unlockBadgeData] = useMutation(UNLOCK_BADGE, {});

  const routeAssignment = () => {
    setStage(STAGES.ASSIGNMENT);
  };
  const routeEnd = () => {
    setStage(STAGES.END);
    unlockbadge({
      variables: {
        userId: userId(session),
        badgeId: 56, //Badge ID for Finance Badge (in DB)
      },
    });
  };
  const routeStart = () => {
    setStage(STAGES.START);
  };

  let { data } = useQuery(FETCH_BADGE_ON_USERID, {
    variables: {
      userId: userId(session),
      badgeId: 1, //Addition Level 1 Badge
      badgeId2: 4, //Subtraction Level 1 Badge
    },
  });

  return (
    <div className="">
      {stage === STAGES.START && data && (
        <RulesSession
          profileData={profileData}
          setProfileData={setProfileData}
          onClick={routeAssignment}
          badgeData={data}
        />
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
