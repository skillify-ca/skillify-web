import { useRouter } from "next/router";
import React from "react";
import NumberedCircles from "../../components/quizzes/NumberedCircles";
import ProgressBar from "../../components/quizzes/ProgressBar";
import QuizNavbar from "../../components/quizzes/QuizNavbar";
import { Button } from "../../components/ui/Button";

const Blueprint = () => {
  const router = useRouter();
  return (
    <div className="w-full  space-y-4">
      <QuizNavbar></QuizNavbar>
      <div className="w-full mb-4 text-center">
        <div className="w-full h-2 bg-black-600 px-4 rounded-lg mb-2">
          <ProgressBar progress={100} />
        </div>
        <div className="font-bold mt-8 text-2xl text-black-600 mb-2">
          The Skillify Blueprint
        </div>
      </div>
      <div className="grid grid-cols-[1fr_3fr] md:grid-cols-[1fr_7fr]">
        <div className="grid grid-cols-1 ml-8">
          <NumberedCircles />
        </div>
        <div className="grid grid-cols-1 mx-4 mr-16  space-y-8 md:space-y-12  md:mt-2">
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
      <div className="grid py-8 place-items-center">
        <Button
          label="View results"
          onClick={() => router.push("/careerQuiz/results")}
          backgroundColor="yellow"
        />
      </div>
    </div>
  );
};

Blueprint.getLayout = function getLayout(page) {
  return <div>{page}</div>;
};
export default Blueprint;
