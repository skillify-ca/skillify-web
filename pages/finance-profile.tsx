import _, { min } from "lodash";
import React, { useState } from "react";
import { EndSession } from "../components/finance/EndSession";
import { RulesSession } from "../components/finance/RulesSession";
import { Stage } from "@react-three/drei";
import AssignmentSession from "../components/finance/AssignmentSession";

enum STAGES {
  START,
  ASSIGNMENT,
  END
}

const FinanceProfile = () => {

  const [stage, setStage] = useState(STAGES.START);

  const routeAssignment = () => { setStage(STAGES.ASSIGNMENT) }
  const routeEnd = () => { setStage(STAGES.END) }
  const routeStart = () => { setStage(STAGES.START) }

  return (
    <div>
      {stage === STAGES.START && <RulesSession onClick={routeAssignment} />}
      {stage === STAGES.ASSIGNMENT && <AssignmentSession onClick={routeEnd} />}
      {stage === STAGES.END && <EndSession onClick={routeStart} />}
    </div>
  )

}

export default FinanceProfile;
