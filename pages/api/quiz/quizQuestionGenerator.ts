import { Skill } from "../skill";
import { generateQuestionForSkill } from "../questionGenerator";

const NUM_QUESTIONS = 20;

export const generateQuestions = (
  slug: string,
  currentLevel: number,
  numberOfQuestions: number = NUM_QUESTIONS
) => {
  if (slug != null) {
    let skill = [];
    if (slug.toLowerCase() == "numbers") {
      switch (currentLevel) {
        case 1:
          skill = [Skill.NUMBERS_50];
          break;
        case 2:
          skill = [Skill.NUMBERS_200];
          break;
        case 3:
          skill = [Skill.NUMBERS_1000];
          break;
      }
      return generateQuestionsForSkillArr(numberOfQuestions, skill);
    } else if (slug.toLowerCase() == "addition") {
      switch (currentLevel) {
        case 1:
          skill = [Skill.ADDITION_SINGLE];
          break;
        case 2:
          skill = [Skill.ADDITION_DOUBLE];
          break;
        case 3:
          skill = [Skill.ADDITION_TRIPLE, Skill.ADDITION_PROPERTIES];
          break;
        case 4:
          skill = [Skill.ADDITION_4_DIGIT, Skill.ADDITION_TENTHS];
          break;
        case 5:
          skill = [Skill.SUBTRACTION_5_DIGIT, Skill.ADDITION_HUNDREDTHS];
          break;
      }
      return generateQuestionsForSkillArr(numberOfQuestions, skill);
    } else if (slug.toLowerCase() == "subtraction") {
      let skill;
      switch (currentLevel) {
        case 1:
          skill = [Skill.SUBTRACTION_SINGLE];
          break;
        case 2:
          skill = [Skill.SUBTRACTION_DOUBLE];
          break;
        case 3:
          skill = [Skill.SUBTRACTION_TRIPLE];
          break;
        case 4:
          skill = [Skill.SUBTRACTION_4_DIGIT, Skill.SUBTRACTION_TENTHS];
          break;
        case 5:
          skill = [Skill.SUBTRACTION_5_DIGIT, Skill.SUBTRACTION_HUNDREDTHS];
      }
      return generateQuestionsForSkillArr(numberOfQuestions, skill);
    } else if (slug.toLowerCase() == "multiplication") {
      let skill;
      switch (currentLevel) {
        case 1:
          skill = [Skill.EQUAL_GROUP_10_ITEMS];
          break;
        case 2:
          skill = [Skill.MULTIPLICATION_5];
          break;
        case 3:
          skill = [Skill.MULTIPLICATION_10];
          break;
        case 4:
          skill = [
            Skill.MULTIPLY_ONE_DIGIT_X_TWO_DIGIT,
            Skill.MULTIPLICATION_10_BY_TRIPLE_DIGIT,
            Skill.MULTIPLICATION_10_BY_DOUBLE_DIGIT,
            Skill.MULTIPLY_ONE_DIGIT_X_THREE_DIGIT,
          ];
          break;
        case 5:
          skill = [
            Skill.MULTIPLY_TWO_DIGIT_BY_TWO_DIGIT,
            Skill.MULTIPLY_TWO_DIGIT_BY_THREE_DIGIT,
          ];
          break;
      }
      return generateQuestionsForSkillArr(numberOfQuestions, skill);
    } else if (slug.toLowerCase() == "division") {
      let skill;
      switch (currentLevel) {
        case 1:
          skill = [Skill.EQUAL_SHARING_8_ITEMS];
          break;
        case 2:
          skill = [Skill.DIVIDE_12_EQUALLY];
          break;
        case 3:
          skill = [Skill.DIVIDE_100];
          break;
        case 4:
          skill = [
            Skill.DIVISION_TWO_DIGIT_BY_ONE_DIGIT,
            Skill.DIVISION_THREE_DIGIT_BY_ONE_DIGIT,
          ];
          break;
        case 5:
          skill = [Skill.DIVISION_THREE_DIGIT_BY_TWO_DIGIT];
      }
      return generateQuestionsForSkillArr(numberOfQuestions, skill);
    }
  }
  return [];
};
function generateQuestionsForSkillArr(
  numberofQuestions: number,
  skills: Skill[]
) {
  const questionsPerSkill = numberofQuestions / skills.length;
  let questions = [];
  skills.forEach((element) => {
    for (let index = 0; index < questionsPerSkill; index++) {
      questions.push(generateQuestionForSkill(element));
    }
  });
  return questions;
}
