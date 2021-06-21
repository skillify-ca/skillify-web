import { Skill } from "../skill";
import { generateQuestionForSkill } from "../questionGenerator";

const NUM_QUESTIONS = 5;

export const generateQuestions = (slug: string, currentLevel: number) => {
  if (slug != null) {
    if (slug.toLowerCase() == "numbers") {
      return generateQuestionsForSkill(NUM_QUESTIONS, Skill.NUMBERS_50);
    } else if (slug.toLowerCase() == "addition") {
      let skill;
      switch (currentLevel) {
        case 1:
          skill = Skill.ADDITION_SINGLE;
          break;
        case 2:
          skill = Skill.ADDITION_DOUBLE;
          break;
        case 3:
          skill = Skill.ADDITION_TRIPLE;
          break;
      }
      return generateQuestionsForSkill(NUM_QUESTIONS, skill);
    } else if (slug.toLowerCase() == "subtraction") {
      let skill;
      switch (currentLevel) {
        case 1:
          skill = Skill.SUBTRACTION_SINGLE;
          break;
        case 2:
          skill = Skill.SUBTRACTION_DOUBLE;
          break;
        case 3:
          skill = Skill.SUBTRACTION_TRIPLE;
          break;
      }
      return generateQuestionsForSkill(NUM_QUESTIONS, skill);
    } else if (slug.toLowerCase() == "multiplication") {
      let skill;
      switch (currentLevel) {
        case 1:
          skill = Skill.EQUAL_GROUP_10_ITEMS;
          break;
        case 2:
          skill = Skill.MULTIPLICATION_5;
          break;
        case 3:
          skill = Skill.MULTIPLICATION_10;
          break;
      }
      return generateQuestionsForSkill(NUM_QUESTIONS, skill);
    } else if (slug.toLowerCase() == "division") {
      let skill;
      switch (currentLevel) {
        case 1:
          skill = Skill.EQUAL_SHARING_8_ITEMS;
          break;
        case 2:
          skill = Skill.DIVIDE_12_EQUALLY;
          break;
        case 3:
          skill = Skill.DIVIDE_100;
          break;
      }
      return generateQuestionsForSkill(NUM_QUESTIONS, skill);
    }
  }
  return [];
};
function generateQuestionsForSkill(numberOfQuestions: number, skill: Skill) {
  let questions = [];
  for (let index = 0; index < numberOfQuestions; index++) {
    questions.push(generateQuestionForSkill(skill));
  }
  return questions;
}
