import { getRandomPropertyAdditionQuestion } from "../../questions/addition/additionPropertyQuestionGenerator";
import { Question } from "../../question";
import { QuestionType } from "../../questionTypes";
import { Skill } from "../../skill";
import { getRandomAdditionQuestion } from "../../questions/addition/additionQuestionGenerator";
import { getRandomDivisionQuestion } from "../../questions/division/divisionQuestionGenerator";
import { getRandomMultiplicationQuestion } from "../../questions/multiplication/multiplicationQuestionGenerator";
import { getRandomNumbersQuestion } from "../../questions/numbers/numbersQuestionGenerator";
import { getRandomSubtractionQuestion } from "../../questions/subtraction/subtractionQuestionGenerator";

export const generateQuestionForMath1Skill = (
  skill: Skill,
  questionType?: QuestionType
): Question => {
  // Addition skills
  switch (skill) {
    case Skill.ADDITION_SINGLE:
      return getRandomAdditionQuestion(1, 11, skill, questionType);
    case Skill.ADDITION_DOUBLE:
      return getRandomAdditionQuestion(10, 101, skill, questionType);
    case Skill.ADDITION_TRIPLE:
      return getRandomAdditionQuestion(100, 1001, skill, questionType);
    case Skill.ADDITION_PROPERTIES:
      return getRandomPropertyAdditionQuestion(1, 15, skill);
  }

  // Subtraction Skills
  switch (skill) {
    case Skill.SUBTRACTION_SINGLE:
      return getRandomSubtractionQuestion(2, 11, skill, questionType);
    case Skill.SUBTRACTION_DOUBLE:
      return getRandomSubtractionQuestion(10, 101, skill, questionType);
    case Skill.SUBTRACTION_TRIPLE:
      return getRandomSubtractionQuestion(100, 1001, skill, questionType);
  }

  // Multiplication Skills
  switch (skill) {
    case Skill.EQUAL_GROUP_10_ITEMS:
      return getRandomMultiplicationQuestion(1, 11, skill, questionType);
    case Skill.MULTIPLICATION_5:
      return getRandomMultiplicationQuestion(1, 6, skill, questionType);
    case Skill.MULTIPLICATION_10:
      return getRandomMultiplicationQuestion(6, 10, skill, questionType);
  }

  //All division questions min and maxs are in respect to the dividend
  // Division skills
  switch (skill) {
    case Skill.EQUAL_SHARING_8_ITEMS:
      return getRandomDivisionQuestion(1, 5, skill, questionType);
    case Skill.DIVIDE_12_EQUALLY:
      return getRandomDivisionQuestion(1, 6, skill, questionType);
    case Skill.DIVIDE_100:
      return getRandomDivisionQuestion(1, 11, skill, questionType);
  }

  // Numbers/Counting skills
  switch (skill) {
    case Skill.NUMBERS_50:
      return getRandomNumbersQuestion(1, 51, skill);
    case Skill.NUMBERS_200:
      return getRandomNumbersQuestion(1, 201, skill);
    case Skill.NUMBERS_1000:
      return getRandomNumbersQuestion(1, 1001, skill);
  }
};
