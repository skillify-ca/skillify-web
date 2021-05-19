import Link from "next/link";
import React from "react";
import {
  getResultForSkill,
  getSkillsForTopic,
} from "../../pages/api/diagnostic/diagnosticGrader";
import { Topic } from "../../pages/api/skill";
import { DiagnosticState } from "../../redux/diagnosticSlice";

type DiagnosticEvidenceProps = {
  topic: Topic;
  results: DiagnosticState;
};

const DiagnosticEvidence = ({ topic, results }: DiagnosticEvidenceProps) => {
  const skills = getSkillsForTopic(topic);

  return (
    <>
      <p className="mb-12">
        {topic && topic.charAt(0).toUpperCase() + topic.slice(1)}
      </p>
      <div className="flex justify-between sm:w-1/4 border-b border-black p-2">
        <span> I can... </span>
        <span className="pl-16"> Result </span>
      </div>
      <div className="flex justify-between flex-row sm:w-1/4 p-2">
        <div>
          {skills.map((skill) => (
            <div>
              {" "}
              <Link href={"/diagnostic/data/".concat(skill.toString())}>
                {skill}
              </Link>
            </div>
          ))}
        </div>
        <div>
          {skills.map((skill) => (
            <div>{getResultForSkill(skill, results)}</div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DiagnosticEvidence;
