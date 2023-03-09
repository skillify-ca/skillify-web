import React from "react";
import { Button } from "../../../components/ui/Button";
import ProgressBar from "./ProgressBar";
import NumberedCircles from "./results/numberedcircles";

const ResultsPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full max-w-4xl mx-auto p-4">
      <div className="w-full mb-4 text-center">
        <div className="w-full h-2 bg-black-600 rounded-lg mb-2">
          <ProgressBar progress={100} />
        </div>
        <div className="font-bold mt-8 text-2xl text-black-600 mb-2">
          The Skillify Blueprint
        </div>
      </div>
      <div className="grid grid-cols-[1fr_3fr]">
        <div className="grid grid-cols-1">
          <NumberedCircles />
        </div>
        <div className="grid grid-cols-1 ">
          <div className="text-black-600 font-bold ">
            Learn the fundamentals of coding
          </div>
          <div className="text-black-600 font-bold">
            Work on group projects with a team
          </div>
          <div className="text-black-600 font-bold">
            Network with expert mentors in the industry
          </div>
          <div className="text-black-600 font-bold ">
            Ace coding interviews and get hired
          </div>
        </div>
      </div>
      <Button label="View results" />
    </div>
  );
};

export default ResultsPage;
