import React, { useEffect, useState } from "react";
import { Story, Meta } from "@storybook/react";
import { randomize } from "../../pages/api/questionGenerator";

export interface TenFrameProp {
  num: number;
}

const colourArr = ["pink", "green", "blue", "purple"];

export const NumberLiteral: React.FC<TenFrameProp> = ({ num, ...props }) => {
  const [colour, setColour] = useState("black");
  let colourIndex;
  useEffect(() => {
    colourIndex = randomize(0, colourArr.length);
    setColour(colourArr[colourIndex]);
  }, []);

  return <div className={`text-4xl text-${colour}-400 font-bold`}>{num}</div>;
};
export default NumberLiteral;
