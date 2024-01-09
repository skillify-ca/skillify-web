import React, { useEffect, useState } from "react";
import Initial from "../../components/quoteCalculator/Initial";
import Selections from "../../components/quoteCalculator/Selections";
enum Stages {
  Initial,
  Selections,
}

export default function Quote() {
  const [stage, setStage] = useState<Stages>(Stages.Initial);

  // Function to switch between stages
  const handleStartClick = () => {
    setStage((prevStage) => prevStage + 1);
  };

  useEffect(() => {
    console.log(stage);
  }, [stage]);

  switch (stage) {
    case Stages.Initial:
      return (
        <div>
          <Initial handleClick={handleStartClick} />
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
