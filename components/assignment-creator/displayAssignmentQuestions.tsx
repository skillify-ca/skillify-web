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
  assignmentSkills: Skill[];
  setAssignmentSkills: (skills: Skill[]) => void;
  questionTypes: QuestionType[];
  setQuestionTypes: (questionTypes: QuestionType[]) => void;
  questions: Question[];
  setQuestions: (questions: Question[]) => void;
  onSubmit: (grade: string) => void;
  onBackClick: () => void;
};

const DisplayAssignmentQuestions = ({
  assignmentSkills,
  setAssignmentSkills,
  questionTypes,
  setQuestionTypes,
  questions,
  setQuestions,
  onSubmit,
  onBackClick,
}: displayAssignmentQuestionsProps) => {
  useEffect(() => {
    // initialize dropdowns
    const initialQuestionTypes: QuestionType[] = assignmentSkills.map(
      (skill) => getQuestionTypesForSkill(skill)[0]
    );
    setQuestionTypes(initialQuestionTypes);

    const newQuestions = [];
    for (let i = 0; i < initialQuestionTypes.length; i++) {
      newQuestions.push(
        generateAssignmentQuestions(
          assignmentSkills[i],
          initialQuestionTypes[i]
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
    const updatedArray = assignmentSkills.map((item, i) => {
      if (i === index) {
        return newQuestionType;
      } else {
        return questionTypes[i];
      }
    });
    setQuestionTypes(updatedArray);

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
      <div className="p-4 flex justify-between bg-white shadow-lg sticky top-0">
        <Button
          onClick={onBackClick}
          label="Back"
          backgroundColor="white"
          textColor="blue-600"
        />
        <Button
          backgroundColor="blue"
          label="Generate Assignment"
          textColor="white"
          onClick={onSubmit}
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 p-4 gap-4">
        {questions.map((question, index) => (
          <div className="grid grid-cols-2 bg-blue-200 shadow-md p-4 gap-4">
            <div className="flex flex-col">
            <p className="font-bold">Question #{index + 1}:</p>
            <p className="text-xl">I can {SkillDescription(question.skill)}</p>
            </div>
            <div className="flex justify-end">
              <div className="">
                <select
                  value={questionTypes[index] && questionTypes[index]}
                  onChange={(e) =>
                    onQuestionTypeChange(
                      e.target.value as QuestionType,
                      question.skill,
                      index
                    )
                  }
                  multiple={false}
                  className="border border-gray-300 rounded-full text-gray-600 h-10 px-8 bg-white hover:border-gray-400 focus:outline-none appearance-none"
                >
                  {getQuestionTypesForSkill(question.skill).map(
                    (questionType) => (
                      <option>{questionType}</option>
                    )
                  )}
                </select>
              </div>
            </div>{" "}
            <div className="col-span-2">
              <QuestionSet
                questionData={questions}
                index={index}
                submitGuess={() => {}}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayAssignmentQuestions;
