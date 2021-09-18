import React, { useEffect, useState } from "react";
import BakeryInstructions from "../components/bakery/BakeryInstructions";
import BuildingABakeryA from "../components/bakery/BuildingABakeryA";

const BakeryPage = () => {
  return (
    <div className={"bg-white"}>
      <BakeryInstructions />
      <BuildingABakeryA />;
    </div>
  );
};

export default BakeryPage;
