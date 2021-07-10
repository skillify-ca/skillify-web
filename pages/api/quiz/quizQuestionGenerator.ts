import { Skill } from "../skill";
import { generateQuestionForSkill } from "../questionGenerator";

const NUM_QUESTIONS = 5;

export const generateQuestions = (
  slug: string,
  currentLevel: number,
  numberOfQuestions: number = NUM_QUESTIONS
) => {
  if (slug != null) {
    let skill;
    if (slug.toLowerCase() == "numbers") {
      switch (currentLevel) {
        case 1:
          skill = Skill.NUMBERS_50;
          break;
        case 2:
          skill = Skill.NUMBERS_200;
          break;
        case 3:
          skill = Skill.NUMBERS_1000;
          break;
      }
      return generateQuestionsForSkill(numberOfQuestions, skill);
    } else if (slug.toLowerCase() == "addition") {
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
      return generateQuestionsForSkill(numberOfQuestions, skill);
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
      return generateQuestionsForSkill(numberOfQuestions, skill);
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
      return generateQuestionsForSkill(numberOfQuestions, skill);
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
      return generateQuestionsForSkill(numberOfQuestions, skill);
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
