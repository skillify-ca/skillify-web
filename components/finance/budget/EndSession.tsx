import React, { ReactNode } from "react";
import { Button } from "../../ui/Button";
import useWindowSize from "../../../hooks/UseWindowSizeHook";
import Confetti from "react-confetti";
import Link from "next/link";

export interface EndSessionProps {
  onClick: () => void;
}

export const EndSession = ({ onClick }: EndSessionProps) => {
  const { width, height } = useWindowSize();

  return (
    <div className="min-h-screen pt-64 bg-white max-w-screen">
      <Confetti width={width} height={height} />

      <div className="pb-5 text-center">
        <p className="pb-5 text-5xl">GREAT JOB!</p>
        <p>
          The more money you have left over, the more you can save for your
          future!
        </p>
      </div>
      <div className="flex justify-center flex-nowrap">
        <div className="pr-5">
          <Button
            label="Play Again"
            backgroundColor="green"
            textColor="white"
            onClick={(e) => onClick()}
          />
        </div>
        <div>
          <Link href="/practice">
            <Button label="Go Home" backgroundColor="green" textColor="white" />
          </Link>
        </div>
      </div>
    </div>
  );
};
