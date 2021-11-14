import { generateQuestionForSkill } from "../questionGenerator";

export const generatePracticeQuestions = (skillId: number) => {
  let questions = [];
  // Each practice sessions only reinforces one skill as it is skill specific
  for (let index = 0; index < 5; index++) {
    questions.push(generateQuestionForSkill(skillId));
  }
  return questions;
};