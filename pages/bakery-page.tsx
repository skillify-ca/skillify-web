import React, { useEffect, useState } from "react";
import BakeryInstructions from "../components/bakery/BakeryInstructions";
import BuildingABakeryA from "../components/bakery/BuildingABakeryA";
import BakersRack from "../components/bakery/BakersRack";

const BakeryPage = () => {
  return (
    <div className={"bg-white"}>
      <BakeryInstructions />
      <BuildingABakeryA />
      <BakersRack />;
    </div>
  );
};

export default BakeryPage;
