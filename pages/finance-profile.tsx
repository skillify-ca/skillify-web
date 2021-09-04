import _, { min } from "lodash";
import React, { useState } from "react";
import { EndSession } from "../components/finance/EndSession";
import { RulesSession } from "../components/finance/RulesSession";
import { Stage } from "@react-three/drei";
import AssignmentSession from "../components/finance/AssignmentSession";
import { userId } from "../graphql/utils/constants";
import { FETCH_BADGE_ON_USERID } from "../graphql/fetchBadgeOnUserID";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { data } from "browserslist";
import { useQuery } from "@apollo/client";

enum STAGES {
  START,
  ASSIGNMENT,
  END,
}

const FinanceProfile = () => {
  const [stage, setStage] = useState(STAGES.START);

  const routeAssignment = () => {
    setStage(STAGES.ASSIGNMENT);
  };
  const routeEnd = () => {
    setStage(STAGES.END);
  };
  const routeStart = () => {
    setStage(STAGES.START);
  };

  let { data } = useQuery(FETCH_BADGE_ON_USERID, {
    variables: {
      userId: "116309327098433793664",
    },
  });

  return (
    <div>
      {" "}
      {data && JSON.stringify(data)}
      {stage === STAGES.START && data && (
        <RulesSession
          onClick={routeAssignment}
          badgeImage={data.user_badges.map((userbadge) => (
            <img src={userbadge.badge.image} />
          ))}
        />
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
