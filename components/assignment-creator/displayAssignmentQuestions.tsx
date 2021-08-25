import React, { useEffect, useState } from "react";
import { Question } from "../../pages/api/question";
import { QuestionType } from "../../pages/api/questionTypes";
import {
  getQuestionTypesForSkill,
  Skill,
  SkillDescription,
} from "../../pages/api/skill";
import QuestionSet from "../stories/QuestionSet";
import { Button } from "../ui/Button";
import { QuestionTypeForSkill } from "./assignmentCreationForm";
import { generateAssignmentQuestions } from "./assignmentQuestionGenerator";

type displayAssignmentQuestionsProps = {
  selectedSkills: QuestionTypeForSkill[];
  setSelectedSkills: (selectedQuestions: QuestionTypeForSkill[]) => void;
  questions: Question[];
  setQuestions: (questions: Question[]) => void;
  onSubmit: (grade: string) => void;
};

const DisplayAssignmentQuestions = ({
  selectedSkills,
  setSelectedSkills,
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

  // just updates questiontype for the skill you changed in the array, not the other ones
  const onQuestionTypeChange = (
    newQuestionType: QuestionType,
    skill: Skill,
    index: number
  ) => {
    const updatedArray = selectedSkills.map((item) => {
      if (item.id === index) {
        return { questionType: newQuestionType, skill: skill, id: index };
      } else {
        return item;
      }
    });
    console.log("updatedArray", updatedArray);

    setSelectedSkills(updatedArray);

    const newQuestions = questions.map((it, i) => {
      if (i === index) {
        return generateAssignmentQuestions(skill, newQuestionType);
      } else {
        return it;
      }
    });
    setQuestions(newQuestions);
  };
  return (
    <div className="">
      <div className="flex flex-col p-4 gap-4">
        {questions.map((question, index) => (
          <div>
            <p className="text-xl">I can {SkillDescription(question.skill)}</p>
            <div className="relative inline-flex">
              <svg
                className="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 412 232"
              >
                <path
                  d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
                  fill="#648299"
                  fill-rule="nonzero"
                />
              </svg>
              <select
                value={
                  selectedSkills[index] && selectedSkills[index].questionType
                }
                onChange={(e) =>
                  onQuestionTypeChange(
                    e.target.value as QuestionType,
                    question.skill,
                    index
                  )
                }
                multiple={false}
                className="border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
              >
                {getQuestionTypesForSkill(question.skill).map(
                  (questionType) => (
                    <option>{questionType}</option>
                  )
                )}
              </select>
            </div>
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
