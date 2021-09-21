import React, { useEffect, useState } from "react";
import BakeryInstructions from "../components/bakery/BakeryInstructions";
import BuildingABakeryA from "../components/bakery/BuildingABakeryA";
import BakersRack from "../components/bakery/BakersRack";

import BakingGma from "../components/bakery/BakingGma";
import BakersRackB from "../components/bakery/BakersRackB";
import { STAGE } from "./games";
import { Button } from "../components/ui/Button";

export default function Bakery(props) {
  enum STAGE {
    BakeryInstructions,
    BuildingABakeryA,
    BakersRack,
    BakersRackB,
    BakingGma,
  }

  const [stage, setStage] = useState(STAGE.BakeryInstructions);
  const [monthlyRentQ1, setMonthlyRentQ1] = useState("");
  const [q1Correct, setQ1Correct] = useState("");

  const previousStage = () => {
    if (stage > STAGE.BakeryInstructions) {
      setStage(stage - 1);
    }
  };

  const nextStage = () => {
    if (stage < STAGE.BakingGma) {
      setStage(stage + 1);
    }
  };

  const getComponent = (stage: STAGE) => {
    if (stage == STAGE.BakeryInstructions) {
      return <BakeryInstructions />;
    } else if (stage == STAGE.BuildingABakeryA) {
      return (
        <BuildingABakeryA
          monthlyRentQ1={monthlyRentQ1}
          setMonthlyRentQ1={setMonthlyRentQ1}
          q1Correct={q1Correct}
          setQ1Correct={setQ1Correct}
        />
      );
    } else if (stage == STAGE.BakersRack) {
      return <BakersRack />;
    } else if (stage == STAGE.BakersRackB) {
      return <BakersRackB />;
    } else if (stage == STAGE.BakingGma) {
      return <BakingGma />;
    }
  };

  return (
    <div className={"bg-white"}>
      <div>{getComponent(stage)}</div>
      <div className="flex flex-row space-x-8 justify-center p-12">
        <Button
          backgroundColor="pink"
          textColor="white"
          label="Previous"
          onClick={previousStage}
        />

        <Button
          backgroundColor="pink"
          textColor="white"
          label="Next"
          onClick={nextStage}
        />
      </div>
    </div>
  );
}
