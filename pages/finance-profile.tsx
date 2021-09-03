import _, { min } from "lodash";
import React, { useEffect, useState } from "react";
import { EndSession } from "../components/finance/EndSession";
import { RulesSession } from "../components/finance/RulesSession";
import { Stage } from "@react-three/drei";
import AssignmentSession from "../components/finance/AssignmentSession";
import { FinanceProfileType, financialProfileData } from "./api/finance/profile";
import { getRndInteger } from "./api/random";

enum STAGES {
  START,
  ASSIGNMENT,
  END
}

const FinanceProfile = () => {

  const [profileData, setProfileData] = useState<FinanceProfileType>()

  useEffect(() => {
    const randomProfile = getRndInteger(0, 12);
    setProfileData(financialProfileData[randomProfile]);
  }, []);

  const [stage, setStage] = useState(STAGES.START);

  const routeAssignment = () => { setStage(STAGES.ASSIGNMENT) }
  const routeEnd = () => { setStage(STAGES.END) }
  const routeStart = () => { setStage(STAGES.START) }

  return (
    <div>
      {stage === STAGES.START &&
        <RulesSession
          profileData={profileData}
          setProfileData={setProfileData}
          onClick={routeAssignment}
        />}
      {stage === STAGES.ASSIGNMENT &&
        <AssignmentSession
          profileData={profileData}
          onClick={routeEnd}
        />}
      {stage === STAGES.END && <EndSession onClick={routeStart} />}
    </div>
  )

}

export default FinanceProfile;
