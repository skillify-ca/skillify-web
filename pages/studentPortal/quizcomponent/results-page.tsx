import React from "react";
import { Button } from "../../../components/ui/Button";
import ProgressBar from "./ProgressBar";

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
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold mr-2">
          1
        </div>
        <div className="text-black-600 font-bold">
          Learn the fundamentals of coding
        </div>
      </div>
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full bg-indigo-500 flex items-center justify-center text-white font-bold mr-2">
          2
        </div>
        <div className="text-black-600 font-bold">
          Work on group projects with a team
        </div>
      </div>
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center text-black font-bold mr-2">
          3
        </div>
        <div className="text-black-600 font-bold">
          Network with expert mentors in the industry
        </div>
      </div>
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full bg-blue-800 flex items-center justify-center text-white font-bold mr-2">
          4
        </div>
        <div className="text-black-600 font-bold">
          Ace coding interviews and get hired
        </div>
      </div>
      <Button label="View results" className="w-full" />
    </div>
  );
};

export default ResultsPage;
