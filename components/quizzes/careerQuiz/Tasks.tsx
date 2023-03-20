import React from "react";
import { Button } from "../../ui/Button";
import ProgressBar from "../progressbar";
import SkillifyNavbar from "../SkillifyNavbar";
import SkillSelection from "../SkillSelection";

type TasksProps = {
  onNextClick: () => void;
  onBackClick: () => void;
};

const Tasks = ({ onNextClick, onBackClick }: TasksProps) => {
  return (
    <div className="w-full  space-y-4">
      <SkillifyNavbar hidden={false} onBackClick={onBackClick} />
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
        <Button backgroundColor="yellow" label="Next" onClick={onNextClick} />{" "}
      </div>
    </div>
  );
};

export default Tasks;
Tasks.getLayout = function getLayout(page) {
  return <div>{page}</div>;
};
