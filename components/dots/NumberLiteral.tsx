import React, { useEffect, useState } from "react";
import { randomize } from "../questionTypes/MultipleChoiceSentence";

export interface NumberLiteralProp {
  num: number;
}

const colourArr = ["pink", "green", "blue", "purple"];

export const NumberLiteral: React.FC<NumberLiteralProp> = ({
  num,
  ...props
}) => {
  const [colour, setColour] = useState("black");
  let colourIndex;
  useEffect(() => {
    colourIndex = randomize(0, colourArr.length);
    setColour(colourArr[colourIndex]);
  }, []);

  return <div className={`text-4xl text-${colour}-400 font-bold`}>{num}</div>;
};
export default NumberLiteral;
