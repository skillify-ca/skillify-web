import { useRouter } from "next/router";
import React from "react";
import { Button } from "../../ui/Button";
import ProgressBar from "../ProgressBar";
import QuizNavbar from "../QuizNavbar";
import SkillSelection from "../SkillSelection";

type SkillsProps = {
  onNextClick: () => void;
  onBackClick: () => void;
};
const Skills = ({ onNextClick, onBackClick }: SkillsProps) => {
  const router = useRouter();

  return (
    <div className="w-full  space-y-4">
      <QuizNavbar />
      <div className="px-4 flex flex-col items-center">
        <ProgressBar progress={60} />
        <div className="flex flex-col items-center  py-4 ">
          <h1 className="text-2xl font-bold text-center">
            What are your strongest skills?
          </h1>
          <p className="text-lg font-medium px-4 ">Select 1-3 choices</p>
        </div>

        <SkillSelection
          selections={[
            "Writing code",
            "Drawing",
            "Design",
            "Writing",
            "Leading a team",
            "Organization",
            "Public speaking",
            "Time Management",
            "Math",
            "Analyzing data",
            "Critical thinking",
            "Planning",
          ]}
        />
        <Button backgroundColor="yellow" label="Next" onClick={onNextClick} />
      </div>{" "}
    </div>
  );
};

Skills.getLayout = function getLayout(page) {
  return <div>{page}</div>;
};
export default Skills;