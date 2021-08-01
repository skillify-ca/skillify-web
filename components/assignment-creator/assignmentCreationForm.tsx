import React, { useState } from "react";
import {
  getSkillsForTopic,
  Skill,
  SkillDescription,
  Topic,
} from "../../pages/api/skill";
import { Button } from "../ui/Button";
import Checkbox from "../ui/Checkbox";

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
    <div className="flex flex-col gap-8 w-full">
      <div className="flex flex-col items-center bg-white shadow-lg gap-8 rounded-lg p-4">
        <div className="flex flex-col gap-8">
          <div>
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

            <p className="font-bold">Multiplication</p>
            {getSkillsForTopic(Topic.MULTIPLICATION).map((skill) => (
              <div>
                {SkillDescription(skill)}
                <Checkbox
                  skill={skill}
                  selectedQuestions={selectedQuestions}
                  setSelectedQuestions={setSelectedQuestions}
                />
              </div>
            ))}

            <p className="font-bold">Division</p>
            {getSkillsForTopic(Topic.DIVISION).map((skill) => (
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
