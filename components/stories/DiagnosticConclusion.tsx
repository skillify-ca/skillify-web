import Link from "next/link";
import React from "react";
import {
  getGradeLevelForTopic,
  getResultForSkill,
} from "../../pages/api/diagnostic/diagnosticGrader";
import { Topic, Skill } from "../../pages/api/skill";
import { DiagnosticState } from "../../redux/diagnosticSlice";
import {
  AdditionWS,
  DivisionWS,
  MultiplicationWS,
  SubtractionWS,
  Worksheet,
} from "./WorksheetsObj";
type DiagnosticConclusionProps = {
  results: DiagnosticState;
};

const DiagnosticConclusion = ({ results }: DiagnosticConclusionProps) => {
  const workSheets: Worksheet[] = results.questions.map((element) => {
    console.log(element);
    if (getResultForSkill(element.skill, results) === "Not yet") {
      return AdditionWS;
    }
  });
  return (
    <div>
      <p className="mb-2 text-center font-black"> Conclusion </p>
      <p> Report Card - Ontario Curriculum</p>
      <p className="mb-2"> Average Grade Level - Grade 3 </p>
      <div className="flex justify-between border-b border-black p-2">
        <span> Topic: </span>
        <span className="pr-4"> Grade Level: </span>
      </div>
      <div className="flex flex-row justify-between p-2">
        <div>
          <p className="border-green-400 border-2 mb-2">Addition</p>
          <p className="border-green-400 border-2 mb-2">Subtraction</p>
          <p className="border-green-400 border-2 mb-2">Multiplication</p>
          <p className="border-green-400 border-2 mb-2">Division</p>
        </div>
        <div>
          <div>
            <p className="border-blue-500 border-2 mb-2">
              {getGradeLevelForTopic(Topic.ADDITION, results)}
            </p>
            <p className="border-blue-500 border-2 mb-2">
              {getGradeLevelForTopic(Topic.SUBTRACTION, results)}
            </p>
            <p className="border-blue-500 border-2 mb-2">
              {getGradeLevelForTopic(Topic.MULTIPLICATION, results)}
            </p>
            <p className="border-blue-500 border-2 mb-2">
              {getGradeLevelForTopic(Topic.DIVISION, results)}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <span className="font-extrabold border-b border-black">
          Worksheet Recommendations
        </span>
        {workSheets.map((it) => (
          <a
            className="text-blue-500 border-2 mb-2"
            href={it.link}
            target="_blank"
          >
            {it.title}
          </a>
        ))}
      </div>
      <div className="w-1/2 flex-row content-evenly">
        <Link href="/diagnostic/evidence">
          <button className="items-end bg-blue-500 rounded p-3 text-white text-sm">
            See Evidence
          </button>
        </Link>
        <Link href="/">
          <button className="items-end bg-green-500 rounded p-3 text-white text-sm">
            Let's Practice
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DiagnosticConclusion;
