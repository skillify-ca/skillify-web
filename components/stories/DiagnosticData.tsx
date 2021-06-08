import Link from "next/link";
import React from "react";
import {
  getGradesForSkill,
  getQuestionForSkill,
  countCorrectAns,
  EvidenceSummaryText,
} from "../../pages/api/diagnostic/diagnosticGrader";
import { Skill, SkillDescription, Topic } from "../../pages/api/skill";
import { DiagnosticState } from "../../redux/diagnosticSlice";

type DiagnosticDataProps = {
  skill: Skill;
  results: DiagnosticState;
};

const DiagnosticData = ({ skill, results }: DiagnosticDataProps) => {
  const getBackgroundColorForQuestion = (result: string) => {
    switch (result) {
      case "Incorrect":
        return "bg-red-100";
      case "Correct":
        return "bg-green-100";
      default:
        return "bg-white";
    }
  };

  return (
    <div className="p-2 flex flex-col gap-4 heropattern-piefactory-blue-100 bg-gray-100 h-screen">
      <p className="mb-2 text-center font-black text-xl">
        {SkillDescription(skill)}
      </p>
      <div className="flex flex-col items-center bg-white shadow-lg gap-8 rounded-lg p-4">
        <div className="flex flex-col gap-4 sm:max-w-2xl">
          <p>
            {EvidenceSummaryText(
              countCorrectAns(
                getGradesForSkill(skill, results).map((it) => it.grade)
              )
            )}
          </p>
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg grid grid-cols-2">
        <p className="p-4 font-bold border-b border-black"> Question: </p>
        <p className="p-4 font-bold border-b border-black"> Guess: </p>
        <div className="grid-cols-1">
          {getQuestionForSkill(skill, results).map((item) => (
            <p className="p-4 border-b border-black">{item}</p>
          ))}
        </div>
        <div>
          {getGradesForSkill(skill, results).map((it) => (
            <p
              className={`${getBackgroundColorForQuestion(
                it.grade
              )} p-4 border-b border-black`}
            >
              {`${it.guess} (${it.grade})`}
            </p>
          ))}
        </div>
      </div>
      <Link href="/diagnostic">
        <button className="items-end bg-blue-500 rounded p-3 text-white text-sm">
          Take Diagnostic Again
        </button>
      </Link>
      <div className="flex m-auto items-center max-w-screen-sm">
        <img src="/images/mathQuote.png"></img>
      </div>
    </div>
  );
};

export default DiagnosticData;
