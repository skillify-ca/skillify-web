import React, { useEffect, useState } from "react";
import BakeryInstructions from "../components/bakery/BakeryInstructions";
import BuildingABakeryA from "../components/bakery/BuildingABakeryA";
import BakersRack from "../components/bakery/BakersRack";

import BakingGma from "../components/bakery/BakingGma";


const BakeryPage = () => {
  return (
    <div className={"bg-white"}>
      <BakeryInstructions />
      <BuildingABakeryA />


      <BakersRack />
      <BakingGma />;

    </div>
  );
};

export default BakeryPage;
