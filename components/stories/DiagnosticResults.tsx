import React, { useRef, useState } from "react";

type DiagnosticResultsProps = {
  correctGuesses: number;
  index: number;
  onClick: () => void;
};

const DiagnosticResults = ({
  correctGuesses,
  index,
  onClick,
}: DiagnosticResultsProps) => {
  const percentage = Math.round((correctGuesses / index) * 100);
  return (
    <div className="flex flex-col items-center bg-white w-2/4 bg-auto p-16">
      <div className="text-lg font-medium mb-16">Results</div>
      <div className=" bg-gray-300 h-32 w-32 flex items-center justify-center rounded-full mb-4 text-2xl">
        {" "}
        {percentage}%{" "}
      </div>
      <div className="text-lg mb-16">
        {" "}
        {correctGuesses}/{index} Correct{" "}
      </div>
      <button
        className="items-end bg-blue-500 rounded p-3 text-white text-sm"
        onClick={(e) => onClick()}
      >
        Go To Report
      </button>
    </div>
  );
};

export default DiagnosticResults;
