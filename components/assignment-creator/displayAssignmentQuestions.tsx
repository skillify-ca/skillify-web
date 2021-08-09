import React, { useEffect, useState } from "react";
import { Question } from "../../pages/api/question";
import { Button } from "../ui/Button";
import { QuestionTypeForSkill } from "./assignmentCreationForm";
import { generateAssignmentQuestions } from "./assignmentQuestionGenerator";

type displayAssignmentQuestionsProps = {
  selectedSkills: QuestionTypeForSkill[];
};

const DisplayAssignmentQuestions = ({
  selectedSkills,
}: displayAssignmentQuestionsProps) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  useEffect(() => {
    const newQuestions = [];

    for (let i = 0; i < selectedSkills.length; i++) {
      console.log("selected question type:", selectedSkills[i].questionType);
      newQuestions.push(
        generateAssignmentQuestions(
          selectedSkills[i].skill,
          selectedSkills[i].questionType
        )
      );
    }
    setQuestions(newQuestions);
  }, []);

  console.log("questions:", questions);
  return (
    <div className="flex flex-col gap-8 w-full">
      {questions.map((question) => (
        <div>
          <p className="text-xl"> {question.skill}</p>
          <p> {question.questionType}</p>
        </div>
      ))}
      <Button
        backgroundColor="blue"
        label="Generate Worksheet"
        textColor="white"
      />
    </div>
  );
};

export default DisplayAssignmentQuestions;
