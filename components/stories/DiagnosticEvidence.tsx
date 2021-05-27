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
  let skillCount = 0;

  const countSkills = (result: Array<string>) => {
    for (let i = 0; i < result.length; i++)
      if (result[i] == "Got it!") {
        skillCount++;
      }
    return skillCount;
  };

  const getSummaryText = (topic: string) => {
    let proficiency = countSkills(
      skills.map((skill) => getResultForSkill(skill, results))
    );
    if (proficiency == 3) {
      return (
        <p>
          {" "}
          Excellent! Your child is confident with the material covered in the{" "}
          {topic} topic for their grade level! They are ready to start learning
          more and further challenge themselves.{" "}
        </p>
      );
    } else if (proficiency >= 1) {
      return (
        <p>
          {" "}
          Your child is on the right track! With some more practice, they will
          be able to do questions pertaining to all the {topic} topics below. Go
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
      <div className="flex flex-col items-center bg-white shadow-lg gap-8 rounded-lg p-4">
        <div className="flex flex-col gap-4 sm:max-w-2xl">
          <p> {getSummaryText(topic)} </p>
        </div>
      </div>
      <div className="bg-white p-4 shadow-lg rounded-lg">
        <p className="pb-4">
          Select a skill to view the questions your child did during the test
        </p>
        <div className="flex flex-col w-full">
          <div className="flex justify-between border-b border-black">
            <p className="p-4 font-bold"> I can... </p>
            <p className="p-4 font-bold"> Proficiency </p>
          </div>
          <div className="flex flex-col">
            {skills.map((skill) => (
              <Link href={"/diagnostic/data/".concat(skill.toString())}>
                <div
                  className={`${getBackgroundColorForTopic(
                    getResultForSkill(skill, results)
                  )} p-4 border-b border-black cursor-pointer hover:underline flex justify-between`}
                >
                  <p className={``}> {SkillDescription(skill)}</p>
                  <p className={``}>{getResultForSkill(skill, results)}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center bg-white shadow-lg gap-8 rounded-lg p-4">
        <div className="flex flex-col gap-4 sm:max-w-2xl">
          <p>
            {" "}
            For additional practice, print out the worksheet recommendations on
            the previous page and check out the Resources tab for math-based
            content aimed at helping parents make math more engaging and fun for
            their child.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DiagnosticEvidence;
