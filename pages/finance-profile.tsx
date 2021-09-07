import _, { min } from "lodash";
import React, { useState } from "react";
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
import { UNLOCK_BADGE } from "/Users/brianlee/Documents/GitHub/math/graphql/unlockBadge";

enum STAGES {
  START,
  ASSIGNMENT,
  END,
}

const FinanceProfile = () => {
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
      userId: userId(session) /*"116309327098433793664"*/,
      badgeId: 50,
      badgeId2: 44,
    },
  });

  return (
    <div>
      {" "}
      {stage === STAGES.START && data && (
        <RulesSession onClick={routeAssignment} badgeImage={data} />
      )}
      {stage === STAGES.ASSIGNMENT && <AssignmentSession onClick={routeEnd} />}
      {stage === STAGES.END && <EndSession onClick={routeStart} />}
    </div>
  );
};

export default FinanceProfile;
/*{data &&
data.user_badges.map((userbadge) => (
  <img src={userbadge.badge.image} />
))}*/

//badgeImage={data....}  V's old code
