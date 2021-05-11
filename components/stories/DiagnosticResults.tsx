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
    <>
      <div> Results</div>
      <div> {percentage}% </div>
      <div>
        {" "}
        {correctGuesses}/{index} Correct{" "}
      </div>
    </>
  );
};

export default DiagnosticResults;
