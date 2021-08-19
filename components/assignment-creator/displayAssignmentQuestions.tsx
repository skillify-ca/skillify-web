import React, { useEffect, useState } from "react";
import { Question } from "../../pages/api/question";
import AssignmentQuestionSet from "../stories/AssignmentQuestionComponent";
import QuestionSet from "../stories/QuestionSet";
import { Button } from "../ui/Button";
import { QuestionTypeForSkill } from "./assignmentCreationForm";
import { generateAssignmentQuestions } from "./assignmentQuestionGenerator";

type displayAssignmentQuestionsProps = {
  selectedSkills: QuestionTypeForSkill[];
  questions: Question[];
  setQuestions: (questions: Question[]) => void;
  onSubmit: (grade: string) => void;
};

const DisplayAssignmentQuestions = ({
  selectedSkills,
  questions,
  setQuestions,
  onSubmit,
}: displayAssignmentQuestionsProps) => {
  useEffect(() => {
    const newQuestions = [];
    for (let i = 0; i < selectedSkills.length; i++) {
      newQuestions.push(
        generateAssignmentQuestions(
          selectedSkills[i].skill,
          selectedSkills[i].questionType
        )
      );
    }
    setQuestions(newQuestions);
  }, []);
  console.log(questions);
  return (
    <div className="">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 justify-center gap-8">
        {questions.map((question, index) => (
          <div>
            <p className="text-xl"> {question.skill}</p>
            <p> {question.questionType}</p>
            <QuestionSet questionData={questions} index={index} />
          </div>
        ))}
      </div>
      <div className="flex">
        <Button
          backgroundColor="blue"
          label="Generate Assignment"
          textColor="white"
          onClick={onSubmit}
        />
      </div>
    </div>
  );
};

export default DisplayAssignmentQuestions;
