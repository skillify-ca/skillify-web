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

  function Outline({ session }: OutlineProps) {
    let { loading, data } = useQuery(FETCH_BADGE_ON_USERID, {
      variables: {
        userID: userId(session),
      },
    });
  }

  return (
    <div>
      {stage === STAGES.START && <RulesSession onClick={routeAssignment} />}
      {stage === STAGES.ASSIGNMENT && <AssignmentSession onClick={routeEnd} />}
      {stage === STAGES.END && <EndSession onClick={routeStart} />}
    </div>
  );
};

export default FinanceProfile;

/*export default function Outline({ session }: OutlineProps) {
  let { loading, data } = useQuery(FETCH_USER_PROFILE, {
    variables: {
      userId: userId(session),
    },
  });*/ //add this below the return. Do it on the parent, create a variable and pass it into the stages page
