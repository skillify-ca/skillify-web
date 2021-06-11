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
    <div className="w-full">
      <div className="flex flex-row justify-between">
        <div>
          {getQuestionForSkill(skill, results).map((item) => (
            <p className="">{item}</p>
          ))}
        </div>
        <div>
          {getGradesForSkill(skill, results).map((it) => (
            <p className={`${getBackgroundColorForQuestion(it.grade)}`}>
              {`${it.guess} (${it.grade})`}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiagnosticData;
