import React, { useState } from "react";
import { Button } from "../../../ui/Button";
import SkillifyNavbar from "../shared/SkillifyNavbar";

export type EduBackgroundProps = {
  onNextClick: () => void;
  onBackClick: () => void;
  setDegree: React.Dispatch<React.SetStateAction<string>>;
  setInstitution: React.Dispatch<React.SetStateAction<string>>;
  setExperience: React.Dispatch<React.SetStateAction<string>>;
  selectedEducationLevel: EducationLevel;
  setEducation: React.Dispatch<React.SetStateAction<string>>;
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
  setInstitution,
  setDegree,
  setEducation,
  selectedEducationLevel,
  setExperience,
}: EduBackgroundProps) => {
  const [showExperienceInput, setShowExperienceInput] = useState(false);
  const isFormValid = selectedEducationLevel;
  const handleEducationLevelChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedValue = event.target.value;
    setEducation(selectedValue as EducationLevel);
    switch (selectedValue) {
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
          What level of education have you received?
        </h1>
        <p className="text-lg font-medium px-4">
          Select your highest level of education.
        </p>
        <div className="text-lg text-left">
          <label htmlFor="education-select">Education</label>

          <select
            id="education-select"
            value={selectedEducationLevel || ""}
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
            {selectedEducationLevel &&
              selectedEducationLevel !== EducationLevel.NA &&
              selectedEducationLevel !== EducationLevel.HighSchoolDiploma &&
              selectedEducationLevel !== EducationLevel.GED && (
                <div className="text-left">
                  <div className="text-left mt-2">
                    <label htmlFor="institution">Institution</label>{" "}
                    <input
                      type="text"
                      name="institution"
                      id="institution"
                      onChange={(e) => setInstitution(e.target.value)}
                      className="border w-full border-gray-500 rounded-lg px-10"
                    />
                  </div>
                </div>
              )}
          </div>
          <div>
            {selectedEducationLevel &&
              selectedEducationLevel !== EducationLevel.NA &&
              selectedEducationLevel !== EducationLevel.HighSchoolDiploma &&
              selectedEducationLevel !== EducationLevel.GED && (
                <div className="text-left mt-2">
                  <label htmlFor="degree" className="font-medium">
                    Field of study
                  </label>
                  <input
                    type="text"
                    name="degree"
                    id="degree"
                    onChange={(e) => setDegree(e.target.value)}
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
                  onChange={(e) => setExperience(e.target.value)}
                  className="w-full border border-gray-500 rounded-lg  px-10 resize-none"
                />
              </div>
            )}
          </div>
        </div>
        <div className="py-8">
          <Button
            backgroundColor="yellow"
            label="Next"
            onClick={isFormValid ? onNextClick : undefined}
            disabled={!isFormValid}
          />{" "}
        </div>
      </div>
    </div>
  );
};

EducationBackground.getLayout = function getLayout(page) {
  return <div>{page}</div>;
};

export default EducationBackground;
