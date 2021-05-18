import Link from "next/link";
import React from "react";
import {
  getResultForSkill,
  getSkillsForTopic,
} from "../../pages/api/diagnostic/diagnosticGrader";
import { Topic } from "../../pages/api/skill";
import { DiagnosticState } from "../../redux/diagnosticSlice";

type DiagnosticDataProps = {
  topic: Topic;
  results: DiagnosticState;
};

const DiagnosticData = ({ topic, results }: DiagnosticDataProps) => {
  const skills = getSkillsForTopic(topic);
  return (
    <>
      <p className="mb-12">
        Diagnostic Report : {topic && topic.charAt(0).toUpperCase() + topic.slice(1)}
      </p>
      <div className="flex justify-between w-1/4 border-b border-black p-2">
        <span> Question: </span>
        <span className="pr-6"> Guess: </span>
      </div>
      <Link href="/diagnostic">
        <button className="items-end bg-blue-500 rounded p-3 text-white text-sm">
          Take Diagnostic Again
        </button>
      </Link>
    </>
  );
};

export default DiagnosticData;
