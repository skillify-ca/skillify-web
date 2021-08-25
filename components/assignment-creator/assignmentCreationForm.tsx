import { initial } from "lodash";
import React, { useEffect, useState } from "react";
import { QuestionType } from "../../pages/api/questionTypes";
import {
  getSkillId,
  getSkillsForTopic,
  getSkillsForTopicGrade,
  Grade,
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
  onClick: (questionCounts: QuestionCount[]) => void;
};

export type QuestionCount = {
  key: number;
  value: number;
};

const AssignmentCreationForm = ({
  onClick,
}: assignmentCreationFormProps) => {
  const unitData = [
    { title: "Addition", unit: Topic.ADDITION, backgroundColour: "bg-red-100" },
    {
      title: "Subtraction",
      unit: Topic.SUBTRACTION,
      backgroundColour: "bg-green-100",
    },
    {
      title: "Multiplication",
      unit: Topic.MULTIPLICATION,
      backgroundColour: "bg-blue-100",
    },
    {
      title: "Division",
      unit: Topic.DIVISION,
      backgroundColour: "bg-yellow-100",
    },
  ];
  const [grade, setGrade] = useState("Grade 3");
  const getInitialQuestionCounts = () => {
    const skills = Object.values(Skill).map((skill) => {
      return { key: getSkillId(skill), value: 0 };
    });

    return skills;
  };
  const [questionCounts, setQuestionCounts] = useState<QuestionCount[]>(
    getInitialQuestionCounts()
  );

  const onGradeChange = (e: any) => {
    setGrade(e.target.value);
  };

  const onQuestionCountChange = (skill: Skill, value: number) => {
    const newQuestionCounts = questionCounts.map((it) => {
      if (it.key === getSkillId(skill)) {
        return { key: it.key, value: value };
      } else {
        return it;
      }
    });
    console.log("OLD", questionCounts);
    console.log("NEW", newQuestionCounts);

    setQuestionCounts(newQuestionCounts);
  };

  const getTotalQuestionCount = () => {
    return questionCounts.map((it) => it.value).reduce((a, b) => a + b, 0);
  };

  return (
    <div className="">
      <div className="heropattern-jigsaw-blue-700 bg-blue-900 shadow-lg flex-col text-center p-8">
        <p className="text-5xl text-white">Assignment Generator</p>
        <p className="text-xl text-white">
          Create customizable assignments for your Google Classroom.
        </p>
      </div>
      <div className="gap-4 mb-4">
        <div className="flex flex-col gap-4 bg-white shadow-lg p-4">
          <div className="flex flex-col justify-center items-center">
            <p className="font-bold text-xl text-gray-700">Grade</p>
            <div className="flex flex-row items-center justify-center w-full gap-4">
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
                  value={grade}
                  onChange={onGradeChange}
                  className="border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
                >
                  <option>Grade 1</option>
                  <option>Grade 2</option>
                  <option>Grade 3</option>
                  <option>Grade 4</option>
                  <option>Grade 5</option>
                  <option>Grade 6</option>
                </select>
              </div>
            </div>
          </div>
          <p>
            Total Questions:{" "}
            <span className="font-semibold">{getTotalQuestionCount()}</span>{" "}
            (max 100)
          </p>
          <div className="grid grid-cols-2 gap-4">
            {unitData.map((it) => (
              <div className={`p-4 ${it.backgroundColour}`}>
                <p className="font-bold">{it.title}</p>
                <div className="flex flex-col gap-4">
                  {getSkillsForTopicGrade(it.unit, grade as Grade).map(
                    (skill) => (
                      <div className="w-full">
                        <label className="">
                          <p>I can {SkillDescription(skill)}</p>
                          <input
                            type={"number"}
                            className={"p-2 bg-gray-100 rounded-md w-full"}
                            value={
                              questionCounts.filter(
                                (it) => it.key === getSkillId(skill)
                              )[0].value
                            }
                            onChange={(e) =>
                              onQuestionCountChange(
                                skill,
                                Number.parseInt(e.target.value)
                              )
                            }
                          />
                        </label>
                      </div>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
      <Button
        backgroundColor="blue"
        label="Randomize Questions"
        textColor="white"
        onClick={e => onClick(questionCounts)}
      />
      </div>
    </div>
  );
};

export default AssignmentCreationForm;
