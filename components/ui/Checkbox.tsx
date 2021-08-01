import React, { useState } from "react";
import { Skill } from "../../pages/api/skill";

export interface CheckboxProps {
  skill: Skill;
  selectedQuestions: string[];
  setSelectedQuestions: (selectedQuestions: string[]) => void;
}

const Checkbox = ({
  skill,
  selectedQuestions,
  setSelectedQuestions,
}: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(false);
  const toggleChange = (skill: Skill, isChecked: boolean) => {
    if (isChecked) {
      const updatedArray = selectedQuestions.filter((item) => item != skill);
      setSelectedQuestions(updatedArray);
    } else {
      selectedQuestions.push(skill);
      setSelectedQuestions(selectedQuestions);
    }
    setIsChecked(!isChecked);
  };
  return (
    <input
      type="checkbox"
      className="ml-2"
      onChange={() => toggleChange(skill, isChecked)}
    />
  );
};

export default Checkbox;
