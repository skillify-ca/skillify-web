import { Button } from "../../../components/ui/Button";
//import QuizNavbar from "./quiznavbar";
import React from "react";

const LangResults = () => {
  return (
    <div className="flex flex-col w-full max-w-4xl mx-auto text-center md:mr-12">
      <div className="mt-4 text-2xl font-bold text-black-600">YOUR RESULTS</div>
      <div className="text-lg font-semibolds">
        The first coding language you should learn is...
      </div>
      <img
        src={"/images/quiz/languages-quiz/javascript.png"}
        alt="JavaScript"
        className="w-64 mt-8"
      />
      <div className="mx-4 mt-4 text-2xl font-semibold">
        Start your career with a Skillify coach today!
      </div>
      <div className="flex flex-col items-center py-4 space-y-4">
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
export default LangResults;
