import { generateQuestionForSkill } from "../questionGenerator";
import { getSkillFromId } from "../skill";

export const generatePracticeQuestions = (skillId: number) => {
  let questions = [];
  const skill = getSkillFromId(skillId);
  // Each practice sessions only reinforces one skill as it is skill specific
  for (let index = 0; index < 5; index++) {
    questions.push(generateQuestionForSkill(skill));
  }
  return questions;
};
