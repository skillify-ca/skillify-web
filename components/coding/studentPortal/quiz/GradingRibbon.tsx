import React from "react";
import MCOption from "./MCOption";

export type GradingRibbonProps = {};

export default function GradingRibbon({}: GradingRibbonProps) {
  return (
    <div className="grid w-full grid-cols-12 h-36 bg-moltres-200">
      <div className="flex items-center col-span-3 pl-24">
        <img className="w-24" src="/images/coding/quiz/incorrect.svg" />
      </div>
      <div className="flex flex-col justify-center col-span-9 text-moltres-500">
        <h3 className="text-3xl font-bold">Correct Solution: </h3>
        <p className="">Answer</p>
      </div>
    </div>
  );
}
