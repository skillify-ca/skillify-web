import _, { min } from "lodash";
import React, { useEffect, useState } from "react";
import { EndSession } from "../components/finance/EndSession";
import { RulesSession } from "../components/finance/RulesSession";
import { Stage } from "@react-three/drei";
import AssignmentSession from "../components/finance/AssignmentSession";
import { userId } from "../graphql/utils/constants";
import { FETCH_BADGE_ON_USERID } from "../graphql/fetchBadgeOnUserID";
import { ApolloClient, InMemoryCache, useMutation } from "@apollo/client";
import { data } from "browserslist";
import { useQuery } from "@apollo/client";
import { useSession } from "next-auth/client";
import { FinanceProfileType, financialProfileData } from "./api/finance/profile";
import { getRndInteger } from "./api/random";
import { UNLOCK_BADGE } from "../graphql/unlockBadge";

enum STAGES {
  START,
  ASSIGNMENT,
  END,
}

const FinanceProfile = () => {

  const [profileData, setProfileData] = useState<FinanceProfileType>()

  useEffect(() => {
    const randomProfile = getRndInteger(0, 12);
    setProfileData(financialProfileData[randomProfile]);
  }, []);

  const [stage, setStage] = useState(STAGES.START);
  const [session, loading] = useSession();
  const [unlockbadge, unlockBadgeData] = useMutation(UNLOCK_BADGE, {});

  const routeAssignment = () => {
    setStage(STAGES.ASSIGNMENT);
  };
  const routeEnd = () => {
    setStage(STAGES.END);
    unlockbadge({
      variables: {
        userId: userId(session),
        badgeId: 56,
      },
    });
  };
  const routeStart = () => {
    setStage(STAGES.START);
  };

  let { data } = useQuery(FETCH_BADGE_ON_USERID, {
    variables: {
      userId: /*userId(session)*/ "116309327098433793664",
      badgeId: 50,
      badgeId2: 44,
    },
  });

  return (
    <div className="p-4">
      {stage === STAGES.START &&
        <RulesSession
          profileData={profileData}
          setProfileData={setProfileData}
          onClick={routeAssignment}
          badgeData={data}
        />}
      {stage === STAGES.ASSIGNMENT &&
        <AssignmentSession
          profileData={profileData}
          onClick={routeEnd}
        />}
      {stage === STAGES.END && <EndSession onClick={routeStart} />}
    </div>
  );
};

export default FinanceProfile;
/*{data &&
data.user_badges.map((userbadge) => (
  <img src={userbadge.badge.image} />
))}*/

//badgeData={data....}  V's old code
