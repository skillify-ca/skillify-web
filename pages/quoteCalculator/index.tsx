import React, { useState } from "react";
import Initial from "../../components/quoteCalculator/Initial";
import Selections from "../../components/quoteCalculator/Selections";
enum Stages {
  Initial = "initial",
  Selections = "selections",
}

export default function Quote() {
  const [stage, setStage] = useState<Stages>(Stages.Initial);

  // Function to switch between stages
  const handleStageChange = (newStage: Stages) => {
    const nextStage = Stages.Selections;
    setStage(nextStage);
  };

  switch (stage) {
    case Stages.Initial:
      return (
        <div>
          <Initial onNextClick={() => handleStageChange(Stages.Selections)} />
        </div>
      );
    case Stages.Selections:
      return (
        <div>
          <Selections />
        </div>
      );
    default:
      return null;
  }
}

Quote.getLayout = function getLayout(page) {
  return <div className=" theme-default">{page}</div>;
};
