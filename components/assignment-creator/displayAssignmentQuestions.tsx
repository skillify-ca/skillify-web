import React, { useEffect, useState } from "react";
import { Question } from "../../pages/api/question";
import { QuestionType } from "../../pages/api/questionTypes";
import { getRandomItemFromArray } from "../../pages/api/random";
import {
  getQuestionTypesForSkill,
  getSkillId,
  Skill,
} from "../../pages/api/skill";
import { FetchDescriptionAndSkillData } from "../../pages/assignment-creator";
import QuestionSet from "../stories/QuestionSet";
import { Button } from "../ui/Button";
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
  data: FetchDescriptionAndSkillData;
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
  data,
}: displayAssignmentQuestionsProps) => {
  useEffect(() => {
    // initialize dropdowns
    const initialQuestionTypes: QuestionType[] = assignmentSkills.map((skill) =>
      getRandomItemFromArray(getQuestionTypesForSkill(skill))
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

  const refreshQuestion = (index) => {
    const newQuestions: Question[] = questions.map((it, i) => {
      if (index === i) {
        return generateAssignmentQuestions(
          assignmentSkills[i],
          questionTypes[i]
        );
      } else {
        return it;
      }
    });
    setQuestions(newQuestions);
  };

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
          <div className="flex flex-col gap-4 bg-blue-200 p-4">
            <div className="flex flex-col items-center">
              <p className="font-bold">Question #{index + 1}:</p>
              <p className="text-lg">
                I can 
                {
                  data.skills.find(
                    (element) => element.id === getSkillId(question.skill)
                  ).description
                }
              </p>
            </div>
            <div className="flex justify-between items-center">
              <div id="dropdown" className="flex flex-col">
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
                    value={questionTypes[index] && questionTypes[index]}
                    onChange={(e) =>
                      onQuestionTypeChange(
                        e.target.value as QuestionType,
                        question.skill,
                        index
                      )
                    }
                    multiple={false}
                    className="border border-gray-300 rounded-full text-gray-600 h-10 px-4 bg-white hover:border-gray-400 focus:outline-none appearance-none"
                  >
                    {getQuestionTypesForSkill(question.skill).map(
                      (questionType) => (
                        <option>{questionType}</option>
                      )
                    )}
                  </select>
                </div>
              </div>
              <div
                onClick={(e) => refreshQuestion(index)}
                className="cursor-pointer p-2 rounded-xl text-white bg-blue-600 hover:bg-blue-700"
              >
                <div className="flex gap-4 items-center">
                  <p>Refresh</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>{" "}
            <QuestionSet
              isReadOnly={true}
              questionData={questions}
              index={index}
              submitGuess={() => {}}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayAssignmentQuestions;
