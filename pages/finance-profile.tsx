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
export interface badgeImageProp {
  badgeImage: [];
  setBadgeImage: (badgeImage: []) => void;
}

const FinanceProfile = ({
  badgeImage,
  setBadgeImage,
}: badgeImageProp) => {
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

  const badgeImageIs = () => {
    {
      badgeImage={data.userbadges.map((userbadge) => <img src={userbadge.badge.image} />)};
    }
  };

  let { data } = useQuery(FETCH_BADGE_ON_USERID, {
    variables: {
      userId: "116309327098433793664",
    },
  });

  return (
    <div>
      {data &&
        data.user_badges.map((userbadge) => (
          <img src={userbadge.badge.image} />
        ))}
      {stage === STAGES.START && data && (
        <RulesSession
          onClick={() => {
            routeAssignment;
            badgeImageIs;
          }}
        />
      )}
      {stage === STAGES.ASSIGNMENT && <AssignmentSession onClick={routeEnd} />}
      {stage === STAGES.END && <EndSession onClick={routeStart} />}
    </div>
  );
};

export default FinanceProfile;
//badgeImage={data....}  V's old code
