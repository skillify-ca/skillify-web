import React, { useEffect, useState } from "react";
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
  const isFormValid = educationState.education;

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
  useEffect(() => {
    if (
      educationState.education == "N/A" ||
      educationState.education == "GED" ||
      educationState.education == "High School Diploma"
    ) {
      setShowExperienceInput(true);
    }
  }, [isFormValid]);

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

      <div className="flex flex-col items-center mx-4 mt-4 text-center">
        <h1 className="text-2xl font-semibold ">
          Select your highest level of education.
        </h1>
      </div>
      <div className="max-w-xl mx-8 text-lg text-left md:w-full md:mx-auto">
        <label htmlFor="education-select">Education</label>
        <select
          id="education-select"
          value={educationState.education || ""}
          onChange={handleEducationLevelChange}
          className="w-full p-2 border border-gray-500 rounded-lg "
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
                  <div className="mt-2 text-left">
                    <label htmlFor="institution">Institution</label>{" "}
                    <input
                      type="text"
                      name="institution"
                      id="institution"
                      value={educationState.institution}
                      onChange={(e) => handleInputChange("institution", e)}
                      className="w-full p-4 border border-gray-500 rounded-lg"
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
                <div className="mt-2 text-left">
                  <label htmlFor="degree" className="font-medium">
                    Field of study
                  </label>
                  <input
                    type="text"
                    name="degree"
                    value={educationState.degree}
                    id="degree"
                    onChange={(e) => handleInputChange("degree", e)}
                    className="w-full px-4 border border-gray-500 rounded-lg shadow appearance-none"
                  />
                </div>
              )}
            {showExperienceInput && (
              <div className="">
                <div className="mt-4 text-left ">
                  Do you have experience coding?
                </div>
                <textarea
                  onChange={(e) => handleInputChange("experience", e)}
                  className="w-full px-4 border border-gray-500 rounded-lg resize-none"
                  value={educationState.experience}
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex py-8 place-content-center">
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
