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
  const [grade, setGrade] = useState(1);
  const onGradeChange = (e: any) => {
    setGrade(e.target.value);
  };

  if (isChecked && grade > 1) {
    for (let i = 1; i < grade; i++) {
      selectedQuestions.push(skill);
      setSelectedQuestions(selectedQuestions);
    }
  }

  // console.log(selectedQuestions);

  return (
    <div>
      <input
        type="checkbox"
        className="ml-2"
        onChange={() => toggleChange(skill, isChecked)}
      />
      {isChecked ? (
        <select
          value={grade}
          onChange={onGradeChange}
          className="border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      ) : (
        ""
      )}
    </div>
  );
};

export default Checkbox;
