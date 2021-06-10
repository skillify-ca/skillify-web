import React, { useEffect, useState } from "react";
import { Story, Meta } from "@storybook/react";
import { randomize } from "../../pages/api/questionGenerator";

const colourArr = ["pink", "green", "blue", "purple"];

const NumberLiteral = () => {
  let colourIndex = randomize(0, colourArr.length);
  let textColour = colourArr[colourIndex];

  return <div className={`text-4xl text-${textColour}-400 font-bold`}>1</div>;
};
export default NumberLiteral;
