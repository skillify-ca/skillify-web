import Link from "next/link";
import React from "react";
import {
  getResultForSkill,
  getSkillsForTopic,
} from "../../pages/api/diagnostic/diagnosticGrader";
import { SkillDescription, Topic } from "../../pages/api/skill";
import { DiagnosticState } from "../../redux/diagnosticSlice";

type DiagnosticEvidenceProps = {
  topic: Topic;
  results: DiagnosticState;
};

const DiagnosticEvidence = ({ topic, results }: DiagnosticEvidenceProps) => {
  const skills = getSkillsForTopic(topic);
  return (
    <div className="p-8 flex flex-col gap-4 heropattern-piefactory-blue-300 bg-blue-200">
      <p className="mb-2 text-center font-black text-xl">
        {topic && topic.charAt(0).toUpperCase() + topic.slice(1)}
      </p>
      <div className="bg-white p-4 rounded-lg">
        <p className="pb-4">Select a topic to get a detailed breakdown</p>

        <div className="grid grid-cols-2">
          <p className="p-4 font-bold border-b border-black"> I can... </p>
          <p className="p-4 font-bold border-b border-black"> Proficiency </p>

          <div className="grid-cols-1">
            {skills.map((skill) => (
              <p className="bg-red-100 p-4 border-b border-black">
                {" "}
                <Link href={"/diagnostic/data/".concat(skill.toString())}>
                  {SkillDescription(skill)}
                </Link>
              </p>
            ))}
          </div>
          <div className="grid-cols-2">
            {skills.map((skill) => (
              <p className="bg-red-100 p-4 border-b border-black">
                {getResultForSkill(skill, results)}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiagnosticEvidence;
