import Link from "next/link";
import React from "react";
import {
  getGradeLevelForTopic,
  getResultForSkill,
} from "../../pages/api/diagnostic/diagnosticGrader";
import { Skill, Topic } from "../../pages/api/skill";
import { DiagnosticState } from "../../redux/diagnosticSlice";
import {
  AdditionDoubleDigitWS,
  AdditionSingleDigitWS,
  AdditionTripleDigitWS,
  Division100WS,
  Division12EquallyWS,
  DivisionEqualSharing8WS,
  MultiplicationEqualGroup10WS,
  MultiplicationTo10WS,
  MultiplicationTo5WS,
  SubtractionDoubleDigitWS,
  SubtractionSingleDigitWS,
  SubtractionTripleDigitWS,
  Worksheet,
} from "./WorksheetsObj";
type DiagnosticConclusionProps = {
  results: DiagnosticState;
};

const DiagnosticConclusion = ({ results }: DiagnosticConclusionProps) => {
  const workSheets: Worksheet[] = results.questions.map((element) => {
    console.log(element.skill);
    let skills = element.skill;
    if (getResultForSkill(element.skill, results) === "Not yet") {
      switch (skills) {
        case Skill.ADDITION_SINGLE:
          return AdditionSingleDigitWS;
        case Skill.ADDITION_DOUBLE:
          return AdditionDoubleDigitWS;
        case Skill.ADDITION_TRIPLE:
          return AdditionTripleDigitWS;
        case Skill.SUBTRACTION_SINGLE:
          return SubtractionSingleDigitWS;
        case Skill.SUBTRACTION_DOUBLE:
          return SubtractionDoubleDigitWS;
        case Skill.SUBTRACTION_TRIPLE:
          return SubtractionTripleDigitWS;
        case Skill.MULTIPLICATION_5:
          return MultiplicationEqualGroup10WS;
        case Skill.MULTIPLICATION_10:
          return MultiplicationTo5WS;
        case Skill.EQUAL_GROUP_10_ITEMS:
          return MultiplicationTo10WS;
        case Skill.EQUAL_SHARING_8_ITEMS:
          return DivisionEqualSharing8WS;
        case Skill.DIVIDE_12_EQUALLY:
          return Division12EquallyWS;
        case Skill.DIVIDE_100:
          return Division100WS;
      }
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
          <Link href="/diagnostic/evidence/addition">
            <p className="border-green-400 border-2 mb-2">Addition</p>
          </Link>
          <Link href="/diagnostic/evidence/subtraction">
            <p className="border-green-400 border-2 mb-2">Subtraction</p>
          </Link>
          <Link href="/diagnostic/evidence/multiplication">
            <p className="border-green-400 border-2 mb-2">Multiplication</p>
          </Link>
          <Link href="/diagnostic/evidence/division">
            <p className="border-green-400 border-2 mb-2">Division</p>
          </Link>
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
