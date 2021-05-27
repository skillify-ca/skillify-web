import Link from "next/link";
import React from "react";
import { useState } from "react";
import {
  getGradeLevelForTopic,
  getResultForSkill,
} from "../../pages/api/diagnostic/diagnosticGrader";
import { Skill, Topic } from "../../pages/api/skill";
import { getWorkSheets } from "../../pages/worksheets";
import { DiagnosticState } from "../../redux/diagnosticSlice";
import { Button } from "./Button";
import { Input } from "./Input";
type DiagnosticConclusionProps = {
  results: DiagnosticState;
};

export const DiagnosticConclusion = ({
  results,
}: DiagnosticConclusionProps) => {

  let gradeLevel = 0;
  if (getGradeLevelForTopic(Topic.ADDITION, results) == "Grade 3") {
    gradeLevel = gradeLevel + 3;
  }
  if (getGradeLevelForTopic(Topic.ADDITION, results) == "Grade 2") {
    gradeLevel = gradeLevel + 2;
  }
  if (getGradeLevelForTopic(Topic.ADDITION, results) == "Grade 1") {
    gradeLevel = gradeLevel + 1;
  }
  if (getGradeLevelForTopic(Topic.DIVISION, results) == "Grade 3") {
    gradeLevel = gradeLevel + 3;
  }
  if (getGradeLevelForTopic(Topic.DIVISION, results) == "Grade 2") {
    gradeLevel = gradeLevel + 2;
  }
  if (getGradeLevelForTopic(Topic.DIVISION, results) == "Grade 1") {
    gradeLevel = gradeLevel + 1;
  }
  if (getGradeLevelForTopic(Topic.MULTIPLICATION, results) == "Grade 3") {
    gradeLevel = gradeLevel + 3;
  }
  if (getGradeLevelForTopic(Topic.MULTIPLICATION, results) == "Grade 2") {
    gradeLevel = gradeLevel + 2;
  }
  if (getGradeLevelForTopic(Topic.MULTIPLICATION, results) == "Grade 1") {
    gradeLevel = gradeLevel + 1;
  }
  if (getGradeLevelForTopic(Topic.SUBTRACTION, results) == "Grade 3") {
    gradeLevel = gradeLevel + 3;
  }
  if (getGradeLevelForTopic(Topic.SUBTRACTION, results) == "Grade 2") {
    gradeLevel = gradeLevel + 2;
  }
  if (getGradeLevelForTopic(Topic.SUBTRACTION, results) == "Grade 1") {
    gradeLevel = gradeLevel + 1;
  }
  gradeLevel = Math.round(gradeLevel / 4);

  const parse = (grades: string) => {
    const parts = grades.split(" ");
    return {
      first: parts[0],
      second: parts[1],
    };
  };
  const getBackgroundColorForTopic = (topic: Topic) => {
    const grade = getGradeLevelForTopic(topic, results);
    let resultGradeLevel = parseInt(parse(grade).second);
    let inputGradeLevel = parseInt(parse(results.grade).second);
    if (resultGradeLevel >= inputGradeLevel) {
      return "bg-green-100";
    } else if (inputGradeLevel - resultGradeLevel == 1) {
      return "bg-yellow-100";
    } else {
      return "bg-red-100";
    }
  };

  const getSummaryText = () => {
    let inputGradeLevel = parseInt(parse(results.grade).second);
    let difference = inputGradeLevel - gradeLevel;
    if (difference == 0) {
      return (
        "Amazing work! Your child has met the expectations of the Ontario grade " +
        inputGradeLevel +
        " curriculum. Encourage them to solve harder problems to keep them challenged."
      );
    } else if (difference < 0) {
      return (
        "Truly impressive! Not only has your child met Ontario grade " +
        inputGradeLevel +
        " curriculum but they have in fact exceeded expectations. Keep at the good work and welcome challeneges with open arms!"
      );
    } else if (difference == -1) {
      return (
        "Great work! Your child has nearly met the expectations of the Ontario grade " +
        inputGradeLevel +
        " curriculum. Provide them with supplemental resources to address their knowledge gaps."
      );
    } else {
      return (
        "Great effort! Your child requires extra practice to meet the expectations of the Ontario grade " +
        inputGradeLevel +
        " curriculum. Provide them with supplemental resources to address their knowledge gaps."
      );
    }
  };

  return (
    <div className="p-8 flex flex-col gap-4 heropattern-piefactory-blue-100 bg-gray-100">
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <p className="mb-8 text-center font-black text-xl">
          Math Champ Report Card
        </p>

        <p className="font-bold mb-2">
          {" "}
          {"Average Ontario Grade Level - Grade " + gradeLevel}{" "}
        </p>
        <p>{getSummaryText()}</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <p className="pb-4">Select a topic to get a detailed breakdown</p>
        <div className="grid grid-cols-2">
          <p className="p-4 font-bold border-b border-black"> Topic </p>
          <p className="p-4 font-bold border-b border-black"> Grade Level </p>
          <Link href="/diagnostic/evidence/addition">
            <p
              className={`${getBackgroundColorForTopic(
                Topic.ADDITION
              )} p-4 border-b border-black hover:underline cursor-pointer`}
            >
              Addition
            </p>
          </Link>
          <Link href="/diagnostic/evidence/addition">
            <p
              className={`${getBackgroundColorForTopic(
                Topic.ADDITION
              )} p-4 border-b border-black`}
            >
              {getGradeLevelForTopic(Topic.ADDITION, results)}
            </p>
          </Link>
          <Link href="/diagnostic/evidence/subtraction">
            <p
              className={`${getBackgroundColorForTopic(
                Topic.SUBTRACTION
              )} p-4 border-b border-black hover:underline cursor-pointer`}
            >
              Subtraction
            </p>
          </Link>
          <p
            className={`${getBackgroundColorForTopic(
              Topic.SUBTRACTION
            )} p-4 border-b border-black`}
          >
            {getGradeLevelForTopic(Topic.SUBTRACTION, results)}
          </p>
          <Link href="/diagnostic/evidence/multiplication">
            <p
              className={`${getBackgroundColorForTopic(
                Topic.MULTIPLICATION
              )} p-4 border-b border-black hover:underline cursor-pointer`}
            >
              Multiplication
            </p>
          </Link>
          <p
            className={`${getBackgroundColorForTopic(
              Topic.MULTIPLICATION
            )} p-4 border-b border-black`}
          >
            {getGradeLevelForTopic(Topic.MULTIPLICATION, results)}
          </p>

          <Link href="/diagnostic/evidence/division">
            <p
              className={`${getBackgroundColorForTopic(
                Topic.DIVISION
              )} p-4 border-b border-black hover:underline cursor-pointer`}
            >
              Division
            </p>
          </Link>
          <p
            className={`${getBackgroundColorForTopic(
              Topic.DIVISION
            )} p-4 border-b border-black`}
          >
            {getGradeLevelForTopic(Topic.DIVISION, results)}
          </p>
        </div>
      </div>
      <div className="flex flex-col bg-white p-4 shadow-lg rounded-lg">
        <p className="p-4 font-extrabold border-b border-black">
          Worksheet Recommendations
        </p>
        {getWorkSheets(results).map(
          (it) =>
            it && (
              <a className="text-blue-500 px-4" href={it.pdf} target="_blank">
                {it.title}
              </a>
            )
        )}
      </div>
      <div className="w-1/2 flex-row content-evenly"></div>
    </div>
  );
};

export default DiagnosticConclusion;
