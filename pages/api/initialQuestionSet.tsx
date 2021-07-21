import React, { useEffect, useRef, useState } from "react";

import { getRndInteger } from "./random";
import { Skill } from "./skill";
import { generateQuestionForSkill } from "./questionGenerator";
import { AnswerType, Question } from "./question";
import { QuestionType } from "./questionTypes";

const intialQuestionSet = () => {
  const [index, setIndex] = useState(0);
  const [nextQuestionButton, setNextQuestionButton] = useState(false);
  const [continueButton, setContinueButton] = useState(false);
  const [questionData, setQuestionData] = useState<Question[]>([
    {
      text: "",
      answer: "",
      answerType: AnswerType.NUMBER,
      questionType: QuestionType.HORIZONTAL_EQUATION,
      skill: Skill.ADDITION_SINGLE,
    },
  ]);
  const randomSkillSelector = () => {
    const randomSkillNumber = getRndInteger(0, Object.keys(Skill).length);
    let skill;
    switch (randomSkillNumber) {
      case 1:
        skill = Skill.ADDITION_SINGLE;
        break;
      case 2:
        skill = Skill.ADDITION_DOUBLE;
        break;
      case 3:
        skill = Skill.ADDITION_TRIPLE;
        break;
      case 4:
        skill = Skill.ADDITION_PROPERTIES;
        break;
      case 5:
        skill = Skill.ADDITION_4_DIGIT;
        break;
      case 6:
        skill = Skill.ADDITION_TENTHS;
        break;
      case 7:
        skill = Skill.SUBTRACTION_SINGLE;
        break;
      case 8:
        skill = Skill.SUBTRACTION_DOUBLE;
        break;
      case 9:
        skill = Skill.SUBTRACTION_TRIPLE;
        break;
      case 10:
        skill = Skill.SUBTRACTION_4_DIGIT;
        break;
      case 11:
        skill = Skill.SUBTRACTION_TENTHS;
        break;
      case 12:
        skill = Skill.MULTIPLICATION_5;
        break;
      case 13:
        skill = Skill.MULTIPLICATION_10;
        break;
      case 14:
        skill = Skill.MULTIPLICATION_10_BY_DOUBLE_DIGIT;
        break;
      case 15:
        skill = Skill.MULTIPLICATION_10_BY_TRIPLE_DIGIT;
        break;
      case 16:
        skill = Skill.MULTIPLY_ONE_DIGIT_X_TWO_DIGIT;
        break;
      case 17:
        skill = Skill.MULTIPLY_ONE_DIGIT_X_THREE_DIGIT;
        break;
      case 18:
        skill = Skill.DIVIDE_12_EQUALLY;
        break;
      case 19:
        skill = Skill.DIVIDE_100;
        break;
      case 20:
        skill = Skill.DIVISION_TWO_DIGIT_BY_ONE_DIGIT;
        break;
      case 21:
        skill = Skill.DIVISION_THREE_DIGIT_BY_ONE_DIGIT;
        break;
      case 22:
        skill = Skill.NUMBERS_50;
        break;
      case 23:
        skill = Skill.NUMBERS_200;
        break;
      case 24:
        skill = Skill.NUMBERS_1000;
        break;
    }
    return skill;
  };
  const questionSetGenerator = () => {
    let questions = [];
    for (let index = 0; index < 5; index++) {
      questions.push(generateQuestionForSkill(randomSkillSelector()));
    }
    return questions;
  };

  useEffect(() => {
    setQuestionData(questionSetGenerator());
  }, []);

  return (
    <div>
      {" "}
      {questionData.map((it) => (
        <p>{it.text}</p>
      ))}{" "}
    </div>
  );
};
export async function getStaticProps({ params }) {
  return {
    props: {
      slug: params.slug,
      skill: params.skill,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: "addition", skill: "add-one-digit" } },
      { params: { slug: "addition", skill: "add-two-digit" } },
      { params: { slug: "addition", skill: "add-three-digit" } },
      { params: { slug: "addition", skill: "addition-properties" } },
      { params: { slug: "subtraction", skill: "subtract-single-digit" } },
      { params: { slug: "subtraction", skill: "subtract-double-digit" } },
      { params: { slug: "subtraction", skill: "subtract-triple-digit" } },
      { params: { slug: "multiplication", skill: "total-items-equal-groups" } },
      { params: { slug: "multiplication", skill: "multiply-5x5" } },
      { params: { slug: "multiplication", skill: "multiply-10x10" } },
      { params: { slug: "division", skill: "share-8-equally" } },
      { params: { slug: "division", skill: "divide-12-equally" } },
      { params: { slug: "division", skill: "divide-100-equally" } },
    ],
    fallback: true,
  };
}

export default intialQuestionSet;
