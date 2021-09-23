import Link from "next/link";
import React from "react";
import { useState } from "react";
import {
  getCalculatedGrade,
  getGradeLevelForTopic,
  getSummaryText,
} from "../../pages/api/diagnostic/diagnosticGrader";
import { Topic } from "../../pages/api/skill";
import { getWorkSheets } from "../../pages/api/worksheets";
import { DiagnosticState } from "../../redux/diagnosticSlice";

type DiagnosticConclusionProps = {
  results: DiagnosticState;
};

export const DiagnosticConclusion = ({
  results,
}: DiagnosticConclusionProps) => {
  const gradeLevel = getCalculatedGrade(results);
  const badgeSelector = (grade: number) => {
    switch (grade) {
      case 0:
        //lavan's gonna get a badge for JK/SK
        return "/images/JKSKBadge.png";
      case 1:
        return "/images/grade1Badge.png";
      case 2:
        return "/images/grade2Badge.png";
      case 3:
        return "/images/grade3Badge.png";
    }
  };

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
    if (grade == "JK/SK") {
      resultGradeLevel = 0;
    }
    let inputGradeLevel = parseInt(parse(results.grade).second);
    if (resultGradeLevel >= inputGradeLevel) {
      return "bg-green-100";
    } else if (inputGradeLevel - resultGradeLevel == 1) {
      return "bg-yellow-100";
    } else {
      return "bg-red-100";
    }
  };
  const [practiceButtonEnabled, setPracticeButtonEnabled] = useState(true);
  const notifyPracticeSignup = async () => {
    setPracticeButtonEnabled(false);
    const url =
      "https://math-app-1.herokuapp.com/notifications?product=practice";
    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify({
        email: results.email,
        name: results.name,
      }),
    };
    await fetch(url, options);
  };

  let displayGrade = gradeLevel.toString();
  if (gradeLevel == 0) {
    displayGrade = "JK/SK";
  }

  let displayName = results.name;
  if (displayName == "") {
    displayName = "Your Child";
  }

  return (
    <div className="p-8 flex flex-col gap-4 heropattern-piefactory-blue-100 bg-gray-100">
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <p className="mb-4 text-center font-black text-xl">
          Math Champ Report Card
        </p>
        <div className=" flex flex-row object-contain justify-center">
          <img className="max-h-24 mb-4 mr-4" src={badgeSelector(gradeLevel)} />
          <p className="text-lg font-semibold mt-8 ">
            {" "}
            Average Ontario Grade Level - {displayGrade}{" "}
          </p>
        </div>

        <p>
          {getSummaryText(
            gradeLevel,
            parseInt(parse(results.grade).second),
            results.name
          )}
        </p>
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
              )} p-4 border-b border-black sm:no-underline underline hover:underline cursor-pointer`}
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
              )} p-4 border-b border-black sm:no-underline underline hover:underline cursor-pointer`}
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
              )} p-4 border-b border-black sm:no-underline underline hover:underline cursor-pointer`}
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
              )} p-4 border-b border-black sm:no-underline underline hover:underline cursor-pointer`}
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
      <div className="flex flex-col bg-white shadow-lg rounded-lg p-4">
        <div className="flex flex-col gap-4">
          <p className="font-bold"> {displayName}'s Personalized Worksheets </p>
          <p className="mb-4">
            Stay ahead of your child’s development with these worksheets curated
            by Math Champ specifically for your child, based on their diagnostic
            test scores.
          </p>
        </div>
        {getWorkSheets(results).map(
          (it) =>
            it && (
              <a
                className="text-blue-500 px-4 hover:underline cursor-pointer"
                href={it.pdf}
                target="_blank"
              >
                {it.title}
              </a>
            )
        )}
      </div>
      <div className="bg-white shadow-lg rounded-lg">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-around">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            <span className="block">Ready to improve your math?</span>
            <span className="block text-blue-600">Get started today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="/practice"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Get started
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiagnosticConclusion;
