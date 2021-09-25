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
  const [cupNum1Correct, setCupNum1Correct] = useState("");
  const [cupDen1Correct, setCupDen1Correct] = useState("");
  const [cupNum2, setCupNum2] = useState("");
  const [cupDen2, setCupDen2] = useState("");
  const [cupNum2Correct, setCupNum2Correct] = useState("");
  const [cupDen2Correct, setCupDen2Correct] = useState("");
  const [breadNum1, setBreadNum1] = useState("");
  const [breadDen1, setBreadDen1] = useState("");
  const [breadNum2, setBreadNum2] = useState("");
  const [breadDen2, setBreadDen2] = useState("");
  const [pieNum1, setPieNum1] = useState("");
  const [pieDen1, setPieDen1] = useState("");
  const [pieNum2, setPieNum2] = useState("");
  const [pieDen2, setPieDen2] = useState("");
  const [brownNum2, setBrownNum2] = useState("");
  const [brownDen2, setBrownDen2] = useState("");
  const [cakeNum2, setCakeNum2] = useState("");
  const [cakeDen2, setCakeDen2] = useState("");
  const [cookNum2, setCookNum2] = useState("");
  const [cookDen2, setCookDen2] = useState("");
  const [piePlusBread, setPiePlusBread] = useState("");
  const [piePlusBreadNum, setPiePlusBreadNum] = useState("");
  const [piePlusBreadDen, setPiePlusBreadDen] = useState("");
  const [cupPlusCook, setCupPlusCook] = useState("");
  const [cupPlusCookNum, setCupPlusCookNum] = useState("");
  const [cupPlusCookDen, setCupPlusCookDen] = useState("");
  const [browPlusCake, setBrowPlusCake] = useState("");
  const [browPlusCakeNum, setBrowPlusCakeNum] = useState("");
  const [browPlusCakeDen, setBrowPlusCakeDen] = useState("");
  const [piePlusCook, setPiePlusCook] = useState("");
  const [piePlusCookNum, setPiePlusCookNum] = useState("");
  const [piePlusCookDen, setPiePlusCookDen] = useState("");

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
          cupNum1Correct={cupNum1Correct}
          setCupNum1Correct={setCupNum1Correct}
          cupDen1Correct={cupDen1Correct}
          setCupDen1Correct={setCupDen1Correct}
          cupNum2={cupNum2}
          setCupNum2={setCupNum2}
          cupDen2={cupDen2}
          setCupDen2={setCupDen2}
          cupNum2Correct={cupNum2Correct}
          setCupNum2Correct={setCupNum2Correct}
          cupDen2Correct={cupDen2Correct}
          setCupDen2Correct={setCupDen2Correct}
          breadNum1={breadNum1}
          setBreadNum1={setBreadNum1}
          breadDen1={breadDen1}
          setBreadDen1={setBreadDen1}
          breadNum2={breadNum2}
          setBreadNum2={setBreadNum2}
          breadDen2={breadDen2}
          setBreadDen2={setBreadDen2}
          pieNum1={pieNum1}
          setPieNum1={setPieNum1}
          pieDen1={pieDen1}
          setPieDen1={setPieDen1}
          pieNum2={pieNum2}
          setPieNum2={setPieNum2}
          pieDen2={pieDen2}
          setPieDen2={setPieDen2}
          brownNum2={brownNum2}
          setBrownNum2={setBrownNum2}
          brownDen2={brownDen2}
          setBrownDen2={setBrownDen2}
          cakeNum2={cakeNum2}
          setCakeNum2={setCakeNum2}
          cakeDen2={cakeDen2}
          setCakeDen2={setCakeDen2}
          cookNum2={cookNum2}
          setCookNum2={setCookNum2}
          cookDen2={cookDen2}
          setCookDen2={setCookDen2}
        />
      );
    } else if (stage == STAGE.BakersRackB) {
      return (
        <BakersRackB
          piePlusBread={piePlusBread}
          setPiePlusBread={setPiePlusBread}
          piePlusBreadNum={piePlusBreadNum}
          setPiePlusBreadNum={setPiePlusBreadNum}
          piePlusBreadDen={piePlusBreadDen}
          setPiePlusBreadDen={setPiePlusBreadDen}
          cupPlusCook={cupPlusCook}
          setCupPlusCook={setCupPlusCook}
          cupPlusCookNum={cupPlusCookNum}
          setCupPlusCookNum={setCupPlusCookNum}
          cupPlusCookDen={cupPlusCookDen}
          setCupPlusCookDen={setCupPlusCookDen}
          browPlusCake={browPlusCake}
          setBrowPlusCake={setBrowPlusCake}
          browPlusCakeNum={browPlusCakeNum}
          setBrowPlusCakeNum={setBrowPlusCakeNum}
          browPlusCakeDen={browPlusCakeDen}
          setBrowPlusCakeDen={setBrowPlusCakeDen}
          piePlusCook={piePlusCook}
          setPiePlusCook={setPiePlusCook}
          piePlusCookNum={piePlusCookNum}
          setPiePlusCookNum={setPiePlusCookNum}
          piePlusCookDen={piePlusCookDen}
          setPiePlusCookDen={setPiePlusCookDen}
        />
      );
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
