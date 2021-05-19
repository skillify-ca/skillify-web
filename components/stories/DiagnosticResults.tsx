import Link from "next/link";
import React, { useRef, useState } from "react";
import { Button } from "./Button";

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
      <div className="text-2xl font-bold mb-16">Results</div>
      <div className=" bg-gray-300 h-32 w-32 flex items-center justify-center rounded-full mb-4 text-2xl">
        {" "}
        {percentage}%{" "}
      </div>
      <div className="text-lg mb-16">
        {" "}
        {correctGuesses}/{index} Correct{" "}
      </div>
      <Link href={"/diagnostic/conclusion"}>
        <Button
          backgroundColor="blue"
          textColor="white"
          label="Go To Report"
        />
      </Link>
    </div>
  );
};

export default DiagnosticResults;
