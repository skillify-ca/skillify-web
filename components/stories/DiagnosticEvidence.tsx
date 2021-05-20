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

  const getBackgroundColorForTopic = (result: string) => {
    const skillLevel = result;
    switch (skillLevel) {
      case "Not yet":
        return "bg-red-100";
      case "Got it!":
        return "bg-green-100";
      default:
        return "bg-blue-100";
    }
  };

  return (
    <div className="p-8 flex flex-col gap-4 heropattern-piefactory-blue-100 bg-gray-100 h-screen">
      <p className="mb-2 text-center font-black text-xl">
        {topic && topic.charAt(0).toUpperCase() + topic.slice(1)}
      </p>
      <div className="bg-white p-4 shadow-lg rounded-lg">
        <p className="pb-4">
          Select a skill to view the questions your child did during the test
        </p>

        <div className="grid grid-cols-2">
          <p className="p-4 font-bold border-b border-black"> I can... </p>
          <p className="p-4 font-bold border-b border-black"> Proficiency </p>

          <div className="grid-cols-1">
            {skills.map((skill) => (
              <Link href={"/diagnostic/data/".concat(skill.toString())}>
                <p
                  className={`${getBackgroundColorForTopic(
                    getResultForSkill(skill, results)
                  )} p-4 border-b border-black cursor-pointer hover:underline`}
                >
                  {" "}
                  {SkillDescription(skill)}
                </p>
              </Link>
            ))}
          </div>
          <div className="grid-cols-2">
            {skills.map((skill) => (
              <p
                className={`${getBackgroundColorForTopic(
                  getResultForSkill(skill, results)
                )} p-4 border-b border-black`}
              >
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
