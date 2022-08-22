import { generateQuestionForFinanceSkill } from "../labs/finance/questionGenerator";
import { generateQuestionForMath1Skill } from "../labs/math1/questionGenerator";
import { generateQuestionForMath2Skill } from "../labs/math2/questionGenerator";

export const generateMath1Questions = (skillId: number) => {
  let questions = [];
  // Each practice sessions only reinforces one skill as it is skill specific
  for (let index = 0; index < 5; index++) {
    questions.push(generateQuestionForMath1Skill(skillId));
  }
  return questions;
};

export const generateMath2Questions = (skillId: number) => {
  let questions = [];
  // Each practice sessions only reinforces one skill as it is skill specific
  for (let index = 0; index < 5; index++) {
    questions.push(generateQuestionForMath2Skill(skillId));
  }
  return questions;
};

export const generateFinanceQuestions = (skillId: number) => {
  let questions = [];
  // Each practice sessions only reinforces one skill as it is skill specific
  for (let index = 0; index < 5; index++) {
    questions.push(generateQuestionForFinanceSkill(skillId));
  }
  return questions;
};
