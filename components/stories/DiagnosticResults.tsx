import Link from "next/link";
import React, { useRef, useState } from "react";
import { Button } from "./Button";
import ProgressRing from "./ProgressRing";

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
    <div className="flex flex-col items-center justify-around bg-white rounded-lg shadow-lg h-96 w-full sm:w-2/4 mt-8">
      <div className="text-2xl font-bold">Results</div>
      <ProgressRing percentage={percentage} radius={32} />
      <div className="text-xl">
        {correctGuesses}/{index} Correct{" "}
      </div>
      <Link href={"/diagnostic/conclusion"}>
        <Button backgroundColor="blue" textColor="white" label="Go To Report" />
      </Link>
    </div>
  );
};

export default DiagnosticResults;
