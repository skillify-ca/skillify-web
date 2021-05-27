import Link from "next/link";
import React from "react";
import { useState } from "react";
import {
  getCalculatedGrade,
  getGradeLevelForTopic,
  getResultForSkill,
  getSummaryText,
} from "../../pages/api/diagnostic/diagnosticGrader";
import { Skill, Topic } from "../../pages/api/skill";
import { getWorkSheets } from "../../pages/api/worksheets";
import { DiagnosticState } from "../../redux/diagnosticSlice";
import { Button } from "./Button";
import { Input } from "./Input";
type DiagnosticConclusionProps = {
  results: DiagnosticState;
};

export const DiagnosticConclusion = ({
  results,
}: DiagnosticConclusionProps) => {
  const gradeLevel = getCalculatedGrade(results);

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

  const [practiceButtonEnabled, setPracticeButtonEnabled] = useState(true);
  const notifyPracticeSignup = async () => {
    setPracticeButtonEnabled(false);
    const url = "api/notifications?product=practice";
    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify({
        email: results.email,
      }),
    };
    await fetch(url, options);
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
        <p>
          {getSummaryText(gradeLevel, parseInt(parse(results.grade).second))}
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
      <div className="bg-white shadow-lg rounded-lg w-full p-4">
        <div className="flex flex-col gap-4">
          <p className="font-bold">Practice Tracker</p>
          <p className="">
            Our practice tracker will be launching soon! Your child will get
            access to thousands of engaging math questions and you'll receive
            weekly reports on their practice. Click below to be notified when we
            go live. 
          </p>
          <div className="bg-white flex sm:flex-row gap-4 items-center rounded-lg">
            <Button
              disabled={!practiceButtonEnabled}
              backgroundColor="blue"
              textColor="white"
              label="Notify Me"
              onClick={notifyPracticeSignup}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiagnosticConclusion;
