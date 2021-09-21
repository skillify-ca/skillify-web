import React, { useEffect, useState } from "react";
import BakeryInstructions from "../components/bakery/BakeryInstructions";
import BuildingABakeryA from "../components/bakery/BuildingABakeryA";
import BakersRack from "../components/bakery/BakersRack";

import BakingGma from "../components/bakery/BakingGma";
import BakersRackB from "../components/bakery/BakersRackB";

const BakeryPage = () => {
  return (
    <div className={"bg-white"}>
      <BakeryInstructions />
      <BuildingABakeryA />
      <BakersRack />
      <BakersRackB />
      <BakingGma />;
    </div>
  );
};

export default BakeryPage;
