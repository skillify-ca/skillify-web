import { useRouter } from "next/router";
import React from "react";
import ProgressBar from "../../components/quizzes/progressbar";
import QuizNavbar from "../../components/quizzes/quiznavbar";
import SkillSelection from "../../components/quizzes/skillselection";
import { Button } from "../../components/ui/Button";
const TasksComponent = () => {
  const router = useRouter();

  return (
    <div className="w-full  space-y-4">
      <QuizNavbar />
      <div className="px-4 flex flex-col items-center">
        <ProgressBar progress={85} />
        <div className=" flex flex-col items-center py-4">
          <h1 className="text-2xl font-bold text-center mx-8">
            What tasks would you prefer at work?
          </h1>

          <p className="text-lg font-medium px-4 ">Select 1-3 choices</p>
        </div>
        <SkillSelection
          selections={[
            "Coordinate the launch of a product",
            "Analyze social media campaigns",
            "Find was to automate processes",
            "Find trends in data",
            "Study how people use apps",
            "Build a company's brand",
            "Lead a project from start to finish",
            "Spot patterns in data",
            "Write code to solve problems",
          ]}
        />
        <Button
          backgroundColor="yellow"
          label="Next"
          onClick={() => router.push("/careerQuiz/blueprint")}
        />{" "}
      </div>
    </div>
  );
};

export default TasksComponent;
TasksComponent.getLayout = function getLayout(page) {
  return <div>{page}</div>;
};
