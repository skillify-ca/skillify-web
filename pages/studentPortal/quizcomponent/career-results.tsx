import React from "react";
import { Button } from "../../../components/ui/Button";
import QuizNavbar from "./quiznavbar";
import SoftwareEngineer from "./software-engineer.png";

const Career_Results = () => {
  return (
    <div className="flex flex-col w-full max-w-4xl mx-auto md:mr-12 text-center">
      <QuizNavbar />
      <div className="font-bold mt-4 text-2xl text-black-600">YOUR RESULTS</div>
      <div className=" text-lg font-semibolds ">
        Here are jobs in tech you’re compatible with. Click on a career to learn
        more!
      </div>
      <img src={SoftwareEngineer} alt="Software Engineer" className="mt-8" />
      <div className="mt-4 mx-4 text-2xl font-semibold">
        Start your career with a Skillify coach today!
      </div>
      <div className="flex flex-col items-center space-y-4 py-4">
        <Button label="Book a call" />
        <Button label="Learn more" backgroundColor="blue" />
      </div>
      <div>
        Skillify Coding Academy coaches university graduates to start a career
        in tech. Book a free call with one of our expert coaches to discuss the
        best strategy plan for you.
      </div>
    </div>
  );
};

export default Career_Results;
