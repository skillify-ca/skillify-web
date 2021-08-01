import React, { useState } from "react";
import { generateQuestionForSkill } from "../../pages/api/questionGenerator";
import {
  getSkillsForTopic,
  getSkillsForTopicGrade,
  Grade,
  Skill,
  SkillDescription,
  Topic,
} from "../../pages/api/skill";
import { Button } from "../ui/Button";
import Checkbox from "../ui/Checkbox";
import { generateAssignmentQuestions } from "./assignmentQuestionGenerator";

type assignmentQuestionsProps = {
  selectedQuestions: Skill[];
};

const AssignmentQuestions = ({
  selectedQuestions,
}: assignmentQuestionsProps) => {
  return (
    <div className="flex flex-col gap-8 w-full">
      <p>
        {" "}
        {selectedQuestions.map((skill) => (
          <div> {generateAssignmentQuestions(skill)} </div>
        ))}{" "}
      </p>
      <Button
        backgroundColor="blue"
        label="Generate Worksheet"
        textColor="white"
      />
    </div>
  );
};

export default AssignmentQuestions;
