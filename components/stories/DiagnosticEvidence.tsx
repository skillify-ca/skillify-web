import Link from "next/link";
import React from "react";
import { Question } from "../../pages/api/question";
import { Skill } from "../../pages/api/skill";
import { DiagnosticState } from "../../redux/diagnosticSlice";

const PASSING_GRADE = 0.8;

type DiagnosticEvidenceProps = {
  topic: string;
  results: DiagnosticState;
};

type QuestionGuess = {
  question: Question;
  guess: string;
};

const DiagnosticEvidence = ({ results }: DiagnosticEvidenceProps) => {
  const topic = "Division";

  const getSkillsForTopic = (topic: string) => {
    switch (topic) {
      case "Addition":
        return [
          Skill.ADDITION_SINGLE,
          Skill.ADDITION_DOUBLE,
          Skill.ADDITION_TRIPLE,
        ];
      case "Subtraction":
        return [
          Skill.SUBTRACTION_SINGLE,
          Skill.SUBTRACTION_DOUBLE,
          Skill.SUBTRACTION_TRIPLE,
        ];
      case "Multiplication":
        return [
          Skill.EQUAL_GROUP_10_ITEMS,
          Skill.MULTIPLICATION_5,
          Skill.MULTIPLICATION_10,
        ];
      case "Division":
        return [
          Skill.EQUAL_SHARING_8_ITEMS,
          Skill.DIVIDE_12_EQUALLY,
          Skill.DIVIDE_100,
        ];
    }
    return [];
  };
  const getResultForSkill = (skill: Skill) => {
    const questionsWithGuesses: QuestionGuess[] = results.questions.map(
      (it, index) => ({ question: it, guess: results.guessAns[index] })
    );
    const filteredQuestionsWithGuesses = questionsWithGuesses.filter(
      (it) => it.question.skill === skill
    );
    const correctGuesses = filteredQuestionsWithGuesses.filter(
      (it) => it.guess === "Correct"
    );
    if (
      correctGuesses.length / filteredQuestionsWithGuesses.length >
      PASSING_GRADE
    ) {
      return "Got it!";
    } else {
      return "Not yet";
    }
  };
  const skills = getSkillsForTopic(topic);
  return (
    <>
      <p className="mb-12"> {"topic"} </p>
      <div className="flex justify-between w-1/4 border-b border-black p-2">
        <span> I can... </span>
        <span className="pl-16"> Result </span>
      </div>
      <div className="flex justify-between flex-row w-1/4 p-2">
        <div>
          {skills.map((skill) => (
            <div>{skill}</div>
          ))}
        </div>
        <div>
          {skills.map((skill) => (
            <div>{getResultForSkill(skill)}</div>
          ))}
        </div>
      </div>
      <Link href="/diagnostic/data">
        <button className="mt-4 bg-blue-500 rounded p-3 text-white text-sm">
          Go To Data
        </button>
      </Link>
    </>
  );
};

export default DiagnosticEvidence;
