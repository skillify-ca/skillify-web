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
  id?: number;
};

type assignmentCreationFormProps = {
  onClick: (grade: string) => void;
  selectedQuestions: Skill[];
  setSelectedQuestions: (selectedQuestions: Skill[]) => void;
  // numberOfQuestions: [];
  // setNumberOfQuestions: (numberOfQuestions: []) => void;
};

const AssignmentCreationForm = ({
  onClick,
  selectedQuestions,
  setSelectedQuestions,
}: assignmentCreationFormProps) => {
  console.log(selectedQuestions);
  return (
    <div className="w-screen pt-4 pl-8 pr-8">
      <div className="bg-gray-500  rounded-xl shadow-lg flex-col text-center p-8">
        <p className="text-5xl text-white">Assignment Generator</p>
        <p className="text-xl text-white">
          Take your child’s learning to the next level with excellent math
          resources that you can incorporate in your child's everyday life.
        </p>
      </div>
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
