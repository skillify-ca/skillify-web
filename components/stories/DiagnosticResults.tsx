import React, { useRef, useState } from "react";

type DiagnosticResultsProps = {
  correctGuesses: number;
  index: number;
};

const DiagnosticResults = ({
  correctGuesses,
  index,
}: DiagnosticResultsProps) => {
  const percentage = Math.round((correctGuesses / index) * 100);
  return (
    <div className="flex flex-col items-center bg-white w-2/4 bg-auto p-16">
      <div className="text-lg font-medium mb-16">Results</div>
      <div className="items-center bg-gray-300 p-12 rounded-full mb-4 text-2xl">
        {" "}
        {percentage}%{" "}
      </div>
      <div className="text-lg mb-16">
        {" "}
        {correctGuesses}/{index} Correct{" "}
      </div>
      <button className="items-end bg-blue-500 rounded p-3 text-white text-sm">
        Go To Report
      </button>
    </div>
  );
};

export default DiagnosticResults;
