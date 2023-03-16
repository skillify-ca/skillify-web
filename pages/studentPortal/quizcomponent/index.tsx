import React from "react";
import QuizNavbar from "../../../components/quizzes/QuizNavbar";
import ProgressBar from "./progressbar";
import SkillSelection from "./skillselection";
const QuizComponent = () => {
  return (
    <div className="flex flex-col w-full px-4">
      <QuizNavbar />
      <ProgressBar progress={50} />

      <div className="p-4 flex flex-col items-center space-y-2 py-8">
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
