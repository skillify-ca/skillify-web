import Link from "next/link";
import React from "react";
import {
  getResultForSkill,
  getGradedQuestionsForUnit,
} from "../../pages/api/diagnostic/diagnosticGrader";
import { Unit } from "../../pages/api/skill";
import { DiagnosticState } from "../../redux/diagnosticSlice";

type DiagnosticEvidenceProps = {
  unit: Unit;
  results: DiagnosticState;
  skillDescription: any; // TODO change this to a real type
};

const DiagnosticEvidence = ({
  unit,
  results,
  skillDescription,
}: DiagnosticEvidenceProps) => {
  let skillCount = 0;

  const countSkills = (result: Array<string>) => {
    for (let i = 0; i < result.length; i++)
      if (result[i] == "Got it!") {
        skillCount++;
      }
    return skillCount;
  };

  const getSummaryText = (unit: string) => {
    let proficiency = countSkills(
      skillDescription.diagnostic.map((skill) =>
        getResultForSkill(skill.description, results)
      )
    );
    if (proficiency == 3) {
      return (
        <p>
          {" "}
          Excellent! Your child is confident with the material covered in the{" "}
          {unit} unit for their grade level! They are ready to start learning
          more and further challenge themselves.{" "}
        </p>
      );
    } else if (proficiency >= 1) {
      return (
        <p>
          {" "}
          Your child is on the right track! With some more practice, they will
          be able to do questions pertaining to all the {unit} units below. Go
          over the questions with your child and have them re-do the ones they
          got wrong.{" "}
        </p>
      );
    } else {
      return (
        <p>
          {" "}
          Great effort! Go over the questions with your child and have them
          re-do the ones they got wrong. Once they feel more confident, have
          them re-take the diagnostic test to see their improvement.{" "}
        </p>
      );
    }
  };

  const getBackgroundColorForUnit = (result: string) => {
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
    <div className="p-8 flex flex-col gap-4 heropattern-piefactory-blue-100 bg-gray-100 h-screen">
      <p className="mb-2 text-center font-black text-xl">
        {unit && unit.charAt(0).toUpperCase() + unit.slice(1)}
      </p>
      <div className="flex flex-col items-center bg-white shadow-lg gap-8 rounded-lg p-4">
        <div className="flex flex-col gap-4 sm:max-w-3xl">
          <p> {getSummaryText(unit)} </p>
        </div>
      </div>

      <div className="bg-white p-4 shadow-lg rounded-lg">
        <p className="font-black text-center">Skills Tested </p>
        <div className="flex flex-col w-full">
          <div className="flex justify-between border-b border-black">
            <p className="p-4 font-bold"> I can... </p>
            <p className="p-4 font-bold"> Proficiency </p>
          </div>
          <div className="flex flex-col">
            {skillDescription.diagnostic
              .filter((skill, idx) => idx < 3)
              .map((skill, index) => (
                <div
                  className={`${getBackgroundColorForUnit(
                    getResultForSkill(skill, results)
                  )} p-4 border-b border-black flex justify-between`}
                >
                  <p className={``}>
                    {skillDescription.diagnostic[index].description}
                  </p>
                  <p className={``}>{getResultForSkill(skill, results)}</p>
                </div>
              ))}
          </div>
        </div>
      </div>

      <div className="p-2 flex flex-col gap-4 heropattern-piefactory-blue-100 bg-gray-100 h-screen w-full">
        <div className="bg-white p-4 rounded-lg">
          <div className="flex flex-col w-full">
            <p className="font-black text-center"> Questions Asked </p>
            <div className="flex justify-between border-b border-black">
              <p className="p-4 font-bold"> Question </p>
              <p className="p-4 font-bold"> Guess </p>
            </div>
            <div className="flex flex-col">
              {getGradedQuestionsForUnit(unit, results).map(
                (gradedQuestion) => (
                  <div
                    className={`p-4 border-b border-black flex justify-between`}
                  >
                    <p>{gradedQuestion.question.text}</p>
                    <p
                      className={`${getBackgroundColorForQuestion(
                        gradedQuestion.grade
                      )}`}
                    >
                      {`${gradedQuestion.guess} (${gradedQuestion.grade})`}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center bg-white shadow-lg gap-8 rounded-lg p-4">
        <div className="flex flex-col gap-4 sm:max-w-3xl">
          <p>
            {" "}
            For additional practice, print out the worksheet recommendations on
            the previous page and check out the Resources tab for math-based
            content aimed at helping parents make math more engaging and fun for
            their child.{" "}
          </p>
        </div>
      </div>
      <Link href="/diagnostic/conclusion">
        <button className="items-end bg-blue-500 rounded p-3 text-white text-sm">
          Take me Back to Conclusions
        </button>
      </Link>
      <div className="flex m-auto items-center max-w-screen-sm">
        <img src="/images/mathQuote.png"></img>
      </div>
    </div>
  );
};

export default DiagnosticEvidence;
