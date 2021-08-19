import React, { useEffect, useState } from "react";
import { QuestionType } from "../../pages/api/questionTypes";
import {
  getSkillsForTopic,
  Skill,
  SkillDescription,
  Topic,
} from "../../pages/api/skill";
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
};

const AssignmentCreationForm = ({
  onClick,
  selectedQuestions,
  setSelectedQuestions,
}: assignmentCreationFormProps) => {
  console.log(selectedQuestions);
  return (
    <div className="w-screen pt-4 pl-8 pr-8">
      <div className="bg-gray-500  rounded-xl shadow-lg flex-col text-center p-8 mb-4">
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
            <div className="flex flex-row ">
              {SkillDescription(skill)}
              <Checkbox
                skill={skill}
                selectedQuestions={selectedQuestions}
                setSelectedQuestions={setSelectedQuestions}
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center bg-white shadow-lg gap-4 rounded-lg p-4">
          <p className="font-bold">Subtraction</p>
          {getSkillsForTopic(Topic.SUBTRACTION).map((skill) => (
            <div className="flex flex-row ">
              {SkillDescription(skill)}
              <Checkbox
                skill={skill}
                selectedQuestions={selectedQuestions}
                setSelectedQuestions={setSelectedQuestions}
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center bg-white shadow-lg gap-4 rounded-lg p-4">
          <p className="font-bold">Multiplication</p>
          {getSkillsForTopic(Topic.MULTIPLICATION).map((skill) => (
            <div className="flex flex-row ">
              {SkillDescription(skill)}
              <Checkbox
                skill={skill}
                selectedQuestions={selectedQuestions}
                setSelectedQuestions={setSelectedQuestions}
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center bg-white shadow-lg gap-4 rounded-lg p-4">
          <p className="font-bold">Division</p>
          {getSkillsForTopic(Topic.DIVISION).map((skill) => (
            <div className="flex flex-row ">
              {SkillDescription(skill)}
              <Checkbox
                skill={skill}
                selectedQuestions={selectedQuestions}
                setSelectedQuestions={setSelectedQuestions}
              />
            </div>
          ))}
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
