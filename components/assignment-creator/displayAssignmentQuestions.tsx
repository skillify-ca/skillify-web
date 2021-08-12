import React, { useEffect, useState } from "react";
import { Question } from "../../pages/api/question";
import AssignmentQuestionSet from "../stories/AssignmentQuestionComponent";
import QuestionSet from "../stories/QuestionSet";
import { Button } from "../ui/Button";
import { QuestionTypeForSkill } from "./assignmentCreationForm";
import { generateAssignmentQuestions } from "./assignmentQuestionGenerator";

type displayAssignmentQuestionsProps = {
  selectedSkills: QuestionTypeForSkill[];
};

const DisplayAssignmentQuestions = ({
  selectedSkills,
}: displayAssignmentQuestionsProps) => {
  console.log(selectedSkills);
  const [questions, setQuestions] = useState<Question[]>([]);
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

  const displayQuestions = (questions: Question[]) => {
    for (let i = 0; i < questions.length; i++) {
      console.log(i);
      return (
        <div>
          {" "}
          hi <AssignmentQuestionSet questionData={questions} index={i} />{" "}
        </div>
      );
    }
  };

  return (
    <div className="flex flex-col gap-8 w-full">
      {questions.map((question, index) => (
        <div>
          <p className="text-xl"> {question.skill}</p>
          <p> {question.questionType}</p>
          <AssignmentQuestionSet questionData={questions} index={index} />
        </div>
      ))}

      {/* <AssignmentQuestionSet questionData={questions} index={1} />
      <AssignmentQuestionSet questionData={questions} index={2} />
      <AssignmentQuestionSet questionData={questions} index={3} />
      <AssignmentQuestionSet questionData={questions} index={4} />
      <AssignmentQuestionSet questionData={questions} index={5} /> */}

      <Button
        backgroundColor="blue"
        label="Generate Worksheet"
        textColor="white"
      />
    </div>
  );
};

export default DisplayAssignmentQuestions;
