import React, { useEffect, useState } from "react";
import { QuestionType } from "../../pages/api/questionTypes";
import {
  getQuestionTypesForSkill,
  getSkillsForTopic,
  Skill,
  SkillDescription,
  Topic,
} from "../../pages/api/skill";
import { ItemTypes } from "../ticTacToe/ItemTypes";
import { Button } from "../ui/Button";
import Checkbox from "../ui/Checkbox";

export type QuestionTypeForSkill = {
  questionType: QuestionType;
  skill: Skill;
};

type assignmentCreationFormProps = {
  onClick: (grade: string) => void;
  selectedQuestions: Skill[];
  setSelectedQuestions: (selectedQuestions: Skill[]) => void;
};

const AssignmentCreationForm = ({
  onClick,
  selectedQuestions,
  setSelectedQuestions,
}: assignmentCreationFormProps) => {
  return (
    <div className="w-screen pt-4 pl-8 pr-8">
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col items-center bg-white shadow-lg gap-4 rounded-lg p-4">
          <p className="font-bold">Addition</p>
          {getSkillsForTopic(Topic.ADDITION).map((skill) => (
            <div>
              {SkillDescription(skill)}
              <Checkbox
                skill={skill}
                selectedQuestions={selectedQuestions}
                setSelectedQuestions={setSelectedQuestions}
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center bg-white shadow-lg gap-8 rounded-lg p-4">
          <p className="font-bold">Subtraction</p>
          {getSkillsForTopic(Topic.SUBTRACTION).map((skill) => (
            <div>
              {SkillDescription(skill)}
              <Checkbox
                skill={skill}
                selectedQuestions={selectedQuestions}
                setSelectedQuestions={setSelectedQuestions}
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center bg-white shadow-lg gap-8 rounded-lg p-4">
          <p className="font-bold">Multiplication</p>
        </div>
        <div className="flex flex-col items-center bg-white shadow-lg gap-8 rounded-lg p-4">
          <p className="font-bold">Division</p>
        </div>
      </div>
      <Button
        backgroundColor="blue"
        label="Generate Worksheet"
        textColor="white"
        onClick={onClick}
      />
    </div>
  );
};

export default AssignmentCreationForm;
