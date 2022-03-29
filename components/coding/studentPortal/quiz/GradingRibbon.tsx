import React from "react";
import MCOption from "./MCOption";

export type GradingRibbonProps = {
  correct: boolean;
  answer: string;
};

export default function GradingRibbon({ correct, answer }: GradingRibbonProps) {
  return (
    <div
      className={`grid w-full grid-cols-12 h-36 ${
        correct ? "bg-bulbasaur-200" : "bg-moltres-200"
      }`}
    >
      <div className="flex items-center col-span-3 pl-24">
        {correct ? (
          <img className="w-24" src="/images/coding/quiz/correct.svg" />
        ) : (
          <img className="w-24" src="/images/coding/quiz/incorrect.svg" />
        )}
      </div>
      <div
        className={`flex flex-col justify-center col-span-9 ${
          correct ? "text-bulbasaur-500" : "text-moltres-500"
        }`}
      >
        <h3 className="text-3xl font-bold">
          {correct ? "Great job!" : "Nice try!"}{" "}
        </h3>
        {!correct && <p className="">{"Answer: " + answer}</p>}
      </div>
    </div>
  );
}
