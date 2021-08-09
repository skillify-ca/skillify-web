import React, { useEffect, useState } from "react";
import { generateQuestionForSkill } from "../../pages/api/questionGenerator";
import { QuestionType } from "../../pages/api/questionTypes";
import { getQuestionTypesForSkill, Skill } from "../../pages/api/skill";
import { Button } from "../ui/Button";
import Checkbox from "../ui/Checkbox";
import { QuestionTypeForSkill } from "./assignmentCreationForm";
import { generateAssignmentQuestions } from "./assignmentQuestionGenerator";

type assignmentQuestionsProps = {
  selectedQuestions: Skill[];
  selectedSkills: QuestionTypeForSkill[];
  setSelectedSkills: (selectedQuestions: QuestionTypeForSkill[]) => void;
  onClick: (grade: string) => void;
};

const AssignmentQuestions = ({
  selectedQuestions,
  selectedSkills,
  setSelectedSkills,
  onClick,
}: assignmentQuestionsProps) => {
  useEffect(() => {
    // initialize dropdowns
    const initialArray: QuestionTypeForSkill[] = [];
    const initialQuestionTypes: QuestionTypeForSkill[] = selectedQuestions.map(
      (skill) => {
        return {
          questionType: getQuestionTypesForSkill(skill)[0],
          skill: skill,
        };
      }
    );
    initialArray.push(...initialQuestionTypes);
    setSelectedSkills(initialArray);
  }, []);

  // just updates questiontype for the skill you changed in the array, not the other ones
  const onQuestionTypeChange = (
    newQuestionType: QuestionType,
    skill: Skill
  ) => {
    const updatedArray = selectedSkills.map((item) => {
      if (item.skill === skill) {
        return { questionType: newQuestionType, skill: skill };
      } else {
        return item;
      }
    });
    setSelectedSkills(updatedArray);
  };

  const getQuestionTypeForSkill = (skill) => {
    if (selectedSkills.length == 0) {
      return "";
    } else {
      return selectedSkills.filter((it) => it.skill === skill)[0].questionType;
    }
  };

  return (
    <div className="flex flex-col gap-8 w-full">
      {selectedQuestions.map((skill) => (
        <div>
          {" "}
          {skill}
          <select
            value={getQuestionTypeForSkill(skill)}
            onChange={(e) =>
              onQuestionTypeChange(e.target.value as QuestionType, skill)
            }
            multiple={false}
            className="border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
          >
            {getQuestionTypesForSkill(skill).map((questionType) => (
              <option>{questionType}</option>
            ))}
          </select>
        </div>
      ))}

      <Button
        backgroundColor="blue"
        label="Generate Worksheet"
        textColor="white"
        onClick={onClick}
      />
    </div>
  );
};

export default AssignmentQuestions;
