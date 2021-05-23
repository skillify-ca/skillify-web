import Link from "next/link";
import React from "react";
import {
  getAnswerForSkill,
  getQuestionForSkill,
  getSkillsForTopic,
} from "../../pages/api/diagnostic/diagnosticGrader";
import { Skill, SkillDescription, Topic } from "../../pages/api/skill";
import { DiagnosticState } from "../../redux/diagnosticSlice";

type DiagnosticDataProps = {
  skill: Skill;
  results: DiagnosticState;
};

const DiagnosticData = ({ skill, results }: DiagnosticDataProps) => {
  const getBackgroundColorForTopic = (result: string) => {
    const skillLevel = result;
    switch (skillLevel) {
      case "Incorrect":
        return "bg-red-100";
      case "Correct":
        return "bg-green-100";
      default:
        return "bg-white";
    }
  };

  return (
    <div className="p-8 flex flex-col gap-4 heropattern-piefactory-blue-100 bg-gray-100 h-screen">
      <p className="mb-2 text-center font-black text-xl">
        {SkillDescription(skill)}
      </p>
      <div className="bg-white p-4 rounded-lg grid grid-cols-2">
        <p className="p-4 font-bold border-b border-black"> Question: </p>
        <p className="p-4 font-bold border-b border-black"> Guess: </p>

        <div className="grid-cols-1">
          {getQuestionForSkill(skill, results).map((item) => (
            <p className="p-4 border-b border-black">{item}</p>
          ))}
        </div>
        <div>
          {getAnswerForSkill(skill, results).map((item) => (
            <p
              className={`${getBackgroundColorForTopic(
                item
              )} p-4 border-b border-black`}
            >
              {item}
            </p>
          ))}
        </div>
      </div>
      <Link href="/diagnostic">
        <button className="items-end bg-blue-500 rounded p-3 text-white text-sm">
          Take Diagnostic Again
        </button>
      </Link>
    </div>
  );
};

export default DiagnosticData;
