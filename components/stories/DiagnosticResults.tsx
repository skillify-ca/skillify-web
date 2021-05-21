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

  // className="ring-blue-900  rounded-full ring-8 ring-offset-2 w-32 h-32 mb-8 "
  return (
    <div className="flex flex-col items-center bg-white w-full sm:w-3/4 p-16">
      <div className="text-2xl font-bold mb-12">Results</div>
      <ProgressRing percentage={percentage} />
      <div className="text-xl mb-12">
        {" "}
        {correctGuesses}/{index} Correct{" "}
      </div>
      <Link href={"/diagnostic/conclusion"}>
        <Button backgroundColor="blue" textColor="white" label="Go To Report" />
      </Link>
    </div>
  );
};

export default DiagnosticResults;
