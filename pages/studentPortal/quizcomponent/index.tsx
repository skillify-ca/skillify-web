import React from "react";
import ProgressBar from "./progressbar";
import SkillSelection from "./skillselection";

const QuizComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center place-content-center w-full px-4 py-8">
      <ProgressBar progress={50} />

      <div className="p-4 flex flex-col items-center space-y-2 ">
        <h1 className="text-2xl font-bold text-center">
          What industries are you interested in working?
        </h1>

        <p className="">Select 1-3 choices</p>
      </div>

      <SkillSelection
        selections={["One", "Two", "Three", "Four", "Five", "Six", "Seven"]}
      />
    </div>
  );
};

export default QuizComponent;
