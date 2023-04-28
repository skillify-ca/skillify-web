import React, { useState } from "react";
import { EducationState } from "../../../../pages/resources/quizzes/careerQuiz";
import { Button } from "../../../ui/Button";
import SkillifyNavbar from "../shared/SkillifyNavbar";

export type EduBackgroundProps = {
  onNextClick: () => void;
  onBackClick: () => void;
  educationState: EducationState;
  setEducationState: (educationState: EducationState) => void;
};

export enum EducationLevel {
  BLANK = "",
  NA = "N/A",
  HighSchoolDiploma = "High School Diploma",
  GED = "GED",
  UndergraduateDegree = "Undergraduate Degree",
  PostgraduateDegree = "Postgraduate Degree",
  PHD = "PHD",
}

const EducationBackground = ({
  onNextClick,
  onBackClick,
  educationState,
  setEducationState,
}: EduBackgroundProps) => {
  const handleInputChange = (
    name,
    event:
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { value } = event.target;
    setEducationState({ ...educationState, [name]: value });
  };
  const [showExperienceInput, setShowExperienceInput] = useState(false);
  const isFormValid = educationState.education;
  const handleEducationLevelChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedValue = event;
    handleInputChange("education", selectedValue);
    switch (selectedValue.target.value) {
      case EducationLevel.NA:
      case EducationLevel.HighSchoolDiploma:
      case EducationLevel.GED:
        setShowExperienceInput(true);
        break;
      default:
        setShowExperienceInput(false);
        break;
    }
  };
  return (
    <div className="">
      <SkillifyNavbar hidden={false} onBackClick={onBackClick} />

      <div className="flex flex-col items-center text-center  mx-4  mt-4">
        <h1 className="text-2xl font-semibold ">
          Select your highest level of education.
        </h1>
      </div>
      <div className="text-lg text-left mx-8 md:w-full max-w-xl  md:mx-auto">
        <label htmlFor="education-select">Education</label>
        <select
          id="education-select"
          value={educationState.education || ""}
          onChange={handleEducationLevelChange}
          className=" border  w-full border-gray-500 rounded-lg "
        >
          {Object.values(EducationLevel).map((educationLevel) => (
            <option key={educationLevel} value={educationLevel}>
              {educationLevel}
            </option>
          ))}
        </select>
        <div>
          <div>
            {educationState.education &&
              educationState.education !== EducationLevel.NA &&
              educationState.education !== EducationLevel.HighSchoolDiploma &&
              educationState.education !== EducationLevel.GED && (
                <div className="text-left">
                  <div className="text-left mt-2">
                    <label htmlFor="institution">Institution</label>{" "}
                    <input
                      type="text"
                      name="institution"
                      id="institution"
                      onChange={(e) => handleInputChange("institution", e)}
                      className="border w-full border-gray-500 rounded-lg px-10"
                    />
                  </div>
                </div>
              )}
          </div>
          <div>
            {educationState.education &&
              educationState.education !== EducationLevel.NA &&
              educationState.education !== EducationLevel.HighSchoolDiploma &&
              educationState.education !== EducationLevel.GED && (
                <div className="text-left mt-2">
                  <label htmlFor="degree" className="font-medium">
                    Field of study
                  </label>
                  <input
                    type="text"
                    name="degree"
                    id="degree"
                    onChange={(e) => handleInputChange("degree", e)}
                    className="shadow  w-full appearance-none border border-gray-500 rounded-lg px-10"
                  />
                </div>
              )}
            {showExperienceInput && (
              <div className="">
                <div className="text-left mt-4 ">
                  Do you have experience coding?
                </div>
                <textarea
                  onChange={(e) => handleInputChange("experience", e)}
                  className="w-full border border-gray-500 rounded-lg  px-10 resize-none"
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="py-8 flex place-content-center">
        <Button
          backgroundColor="yellow"
          label="Next"
          onClick={isFormValid ? onNextClick : undefined}
          disabled={!isFormValid}
        />{" "}
      </div>
    </div>
  );
};

export default EducationBackground;
