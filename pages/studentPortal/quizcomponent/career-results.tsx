import React from "react";
import { Button } from "../../../components/ui/Button";
import QuizNavbar from "./quiznavbar";

const Career_Results = () => {
  return (
    <div className="grid  w-full mx-auto text-center justify-items-center">
      <QuizNavbar></QuizNavbar>
      <div className="font-bold mt-4 text-2xl ">YOUR RESULTS</div>
      <div className=" text-lg font-semibolds ">
        Here are jobs in tech you’re compatible with. Click on a career to learn
        more!
      </div>
      <img
        src="/images/software-engineer.png"
        alt="Software Engineer"
        className=" p-4 rounded-[40px]  md:h-60 md:w-80 "
      />
      <div className="mt-4 mx-4 text-2xl font-semibold ">
        Start your career with a Skillify coach today!
      </div>
      <div className="flex flex-col items-center space-y-4 py-4">
        <Button label="Book a call" />
        <Button label="Learn more" backgroundColor="blue" />
      </div>
      <div className="mx-4">
        Skillify Coding Academy coaches university graduates to start a career
        in tech. Book a free call with one of our expert coaches to discuss the
        best strategy plan for you.
      </div>
    </div>
  );
};

export default Career_Results;