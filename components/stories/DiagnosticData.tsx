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
  return (
    <div>
      <p className="mb-12">{SkillDescription(skill)}</p>
      <div className="flex justify-between w-1/4 border-b border-black p-2">
        <span> Question: </span>
        <span className="pl-4"> Guess: </span>
      </div>
      <div className="flex flex-row justify-between w-1/4 ml-4">
        <div>
          {getQuestionForSkill(skill, results).map((item) => (
            <div>{item}</div>
          ))}
        </div>
        <div>
          {getAnswerForSkill(skill, results).map((item) => (
            <div>{item}</div>
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
