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
  const [bakerySpaceQ2, setBackerySpaceQ2] = useState("");
  const [q2Correct, setQ2Correct] = useState("");
  const [numeratorQ3, setNumeratorQ3] = useState("");
  const [denominatorQ3, setDenominatorQ3] = useState("");
  const [q3Correct, setQ3Correct] = useState("");
  const [numeratorQ4, setNumeratorQ4] = useState("");
  const [denominatorQ4, setDenominatorQ4] = useState("");
  const [q4Correct, setQ4Correct] = useState("");
  const [cupNum1, setCupNum1] = useState("");
  const [cupDen1, setCupDen1] = useState("");

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
          bakerySpaceQ2={bakerySpaceQ2}
          setBakerySpaceQ2={setBackerySpaceQ2}
          q2Correct={q2Correct}
          setQ2Correct={setQ2Correct}
          numeratorQ3={numeratorQ3}
          setNumberatorQ3={setNumeratorQ3}
          denominatorQ3={denominatorQ3}
          setDenominatorQ3={setDenominatorQ3}
          q3Correct={q3Correct}
          setQ3Correct={setQ3Correct}
          numeratorQ4={numeratorQ4}
          setNumeratorQ4={setNumeratorQ4}
          denominatorQ4={denominatorQ4}
          setDenominatorQ4={setDenominatorQ4}
          q4Correct={q4Correct}
          setQ4Correct={setQ4Correct}
        />
      );
    } else if (stage == STAGE.BakersRack) {
      return (
        <BakersRack
          cupNum1={cupNum1}
          setCupNum1={setCupNum1}
          cupDen1={cupDen1}
          setCupDen1={setCupDen1}
        />
      );
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
