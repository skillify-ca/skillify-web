import Link from "next/link";
import React from "react";
import { Button } from "../ui/Button";
import ProgressRing from "../ui/ProgressRing";

type DiagnosticResultsProps = {
  correctGuesses: number;
  numberOfQuestions: number;
};

const DiagnosticResults = ({
  correctGuesses,
  numberOfQuestions,
}: DiagnosticResultsProps) => {
  const percentage = Math.round((correctGuesses / numberOfQuestions) * 100);
  return (
    <div className="flex flex-col items-center justify-around bg-white rounded-lg shadow-lg h-96 w-full sm:w-2/4 mt-8">
      <div className="text-2xl font-bold">Results</div>
      <ProgressRing percentage={percentage} radius={24} />
      <div className="text-xl">
        {correctGuesses}/{numberOfQuestions} Correct{" "}
      </div>
      <Link href={"/diagnostic/conclusion"}>
        <Button backgroundColor="blue" textColor="white" label="Go To Report" />
      </Link>
    </div>
  );
};

export default DiagnosticResults;
