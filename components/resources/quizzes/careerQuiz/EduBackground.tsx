import React from "react";
import { Button } from "../../../ui/Button";
import ProgressBar from "../shared/Progress";
import SkillifyNavbar from "../shared/SkillifyNavbar";
type EduBackgroundProps = {
  onNextClick: () => void;
  onBackClick: () => void;
};
const EducationBackground = ({
  onNextClick,
  onBackClick,
}: EduBackgroundProps) => {
  return (
    <div className="">
      <SkillifyNavbar hidden={false} onBackClick={onBackClick} />

      <div className="flex flex-col items-center px-8">
        {" "}
        <ProgressBar progress={15} />
      </div>
      <div className="flex flex-col items-center text-center mt-4">
        <h1 className="text-2xl font-semibold">
          What is your educational background?
        </h1>
        <p className="text-lg font-medium px-4 ">Fill in the blanks</p>
        <div className="text-lg text-left space-y-2">
          <div>
            <h3>Institution</h3>{" "}
            <input
              type="text"
              name="institution"
              className="shadow appearance-none border border-gray-500 rounded-lg px-6"
            ></input>
          </div>
          <div>
            <h3>Degree</h3>{" "}
            <input
              type="text"
              name="degree"
              className="shadow appearance-none border border-gray-500 rounded-lg px-6"
            ></input>
          </div>
        </div>
        <div className="py-8">
          <Button backgroundColor="yellow" label="Next" onClick={onNextClick} />
        </div>
      </div>
    </div>
  );
};
EducationBackground.getLayout = function getLayout(page) {
  return <div>{page}</div>;
};

export default EducationBackground;
