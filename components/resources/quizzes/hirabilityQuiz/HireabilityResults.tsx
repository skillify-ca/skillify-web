import Link from "next/link";
import React from "react";
import { Button } from "../../../ui/Button";
import SkillifyNavbar from "../shared/SkillifyNavbar";
import { QuizViewState } from "../shared/types";
type HireabilityQuizProps = {
  onBackClick: () => void;
  quizViewState: QuizViewState;
};
const HireabilityQuiz = ({
  onBackClick,
  quizViewState,
}: HireabilityQuizProps) => {
  return (
    (<div className="  w-full mx-auto ">
      <SkillifyNavbar hidden={false} onBackClick={onBackClick} />
      <div className="grid text-center justify-items-center">
        <div className="font-bold mt-4 text-2xl ">HIREABILITY SCORE</div>
        <div className="text-lg font-semibolds flex">
          <div>Your score is&nbsp; </div>{" "}
          <div className="text-blue-700 font-bold">good</div>
        </div>
        <img
          src="/images/hireability-quiz/score80.png"
          className=" p-4  md:h-full md:w-1/4 "
        />
        <div className=" mx-4 text-xl ">
          An ideal score of 100 means you are ready to apply for jobs in [the
          role user has selected].
        </div>
        <div className="font-bold mt-4 text-2xl ">
          How to improve your score
        </div>
        <div className=" mx-4 text-xl ">[areas for improvement]</div>
        <div className="font-bold mt-4 py-4 text-2xl ">
          Book a free consultation with a Skillify coach to learn how you can
          improve your score!
        </div>

        <div className="flex flex-col items-center space-y-4 py-4">
          <Link href="https://www.joinskillify.com/call" legacyBehavior>
            <Button label="Book a call" backgroundColor="yellow" />
          </Link>
          <Link href="https://www.skillify.ca" legacyBehavior>
            <Button label="Learn more" backgroundColor="blue" />
          </Link>
        </div>
        <div className="mx-4 md:w-full max-w-4xl md:mx-auto">
          Skillify Coding Academy coaches university graduates to learn coding
          and start a career in tech. Our experienced instructors provide
          personalized mentorship that will accelerate your growth by 10x!
        </div>
      </div>
    </div>)
  );
};
HireabilityQuiz.getLayout = function getLayout(page) {
  return <div>{page}</div>;
};
export default HireabilityQuiz;
