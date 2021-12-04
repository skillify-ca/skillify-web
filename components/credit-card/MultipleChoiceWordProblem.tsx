import React, { useState } from "react";
import { multiQuestionData } from "../../pages/api/credit-card/CCDCMultiData";
import { FinanceMultipleChoice } from "./FinanceMultipleChoice";

interface MultipleChoiceWordProps {
  multiQ1: string;
  setMultiQ1: (value: string) => void;
}

const MultipleChoiceWordProblem = ({
  multiQ1,
  setMultiQ1,
}: MultipleChoiceWordProps) => {
  return (
    <div className="">
      <div className="flex flex-col p-12 justify-center items-center">
        <h1 className="font-extrabold text-5xl md:text-8xl uppercase text-yellow-400">
          <span className="text-purple-500">Credit</span> &{" "}
          <span className="text-green-500">Debit</span>
        </h1>
        <h2 className="text-3xl md:text-4xl mb-1">Click on your answer</h2>
      </div>
      <div className="grid grid-none md:grid-cols-2">
        {multiQuestionData.map((item, index) => (
          <FinanceMultipleChoice
            key={index}
            question={item.question}
            options={item.options}
            value={multiQ1}
            setValue={setMultiQ1}
          />
        ))}
      </div>
    </div>
  );
};

export default MultipleChoiceWordProblem;
