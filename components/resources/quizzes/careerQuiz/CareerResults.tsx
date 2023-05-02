import Link from "next/link";
import React from "react";
import { quizResultsData } from "../../../../pages/api/studentPortal/quizzes/careerQuiz/careerQuiz";
import ComputeResult from "../../../../pages/api/studentPortal/quizzes/careerQuiz/computeCareerResults";
import { Button } from "../../../ui/Button";
import SkillifyNavbar from "../shared/SkillifyNavbar";
import { QuizViewState } from "../shared/types";
type CareerResultsProps = {
  onBackClick: () => void;
  quizViewState: QuizViewState;
};
const CareerResults = ({ onBackClick, quizViewState }: CareerResultsProps) => {
  const preferredArray = quizViewState && ComputeResult(quizViewState);
  const quizResult = preferredArray && quizResultsData[preferredArray[0]];
  return (
    <div className="  w-full mx-auto ">
      <SkillifyNavbar hidden={false} onBackClick={onBackClick} />

      <div className="grid text-center justify-items-center">
        <div className="font-bold mt-4 text-2xl ">YOUR RESULTS</div>
        <div className=" text-lg font-semibolds ">
          Here are jobs in tech you’re compatible with.
        </div>
        <img
          src={quizResult && quizResult.src}
          alt={quizResult && quizResult.alt}
          className=" p-4 object-scalded-down  md:h-full md:w-1/4 "
        />
        <div className="mt-4 mx-4 text-2xl font-semibold ">
          Start your career with a Skillify coach today!
        </div>
        <div className="flex flex-col items-center space-y-4 py-4">
          <Link href="https://www.joinskillify.com/call">
            <Button label="Book a call" backgroundColor="yellow" />
          </Link>
          <Link href="https://www.skillify.ca">
            <Button label="Learn more" backgroundColor="blue" />
          </Link>
        </div>
        <div className="mx-4 md:w-full max-w-4xl md:mx-auto">
          Skillify Coding Academy coaches university graduates to start a career
          in tech. Book a free call with one of our expert coaches to discuss
          the best strategy plan for you.
        </div>
      </div>
    </div>
  );
};
CareerResults.getLayout = function getLayout(page) {
  return <div>{page}</div>;
};
export default CareerResults;
