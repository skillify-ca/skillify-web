import { Question } from "../../question";
import { QuestionType } from "../../questionTypes";
import { Skill } from "../../skill";
import { getRandomAdditionQuestion } from "../../questions/addition/additionQuestionGenerator";
import { getRandomDivisionQuestion } from "../../questions/division/divisionQuestionGenerator";
import { getRandomMultiplicationQuestion } from "../../questions/multiplication/multiplicationQuestionGenerator";
import { getRandomSubtractionQuestion } from "../../questions/subtraction/subtractionQuestionGenerator";

export const generateQuestionForMath2Skill = (
  skill: Skill,
  questionType?: QuestionType
): Question => {
  // Addition skills
  switch (skill) {
    case Skill.ADDITION_TENTHS:
      return getRandomAdditionQuestion(0.1, 0.9, skill, questionType);
    case Skill.ADDITION_4_DIGIT:
      return getRandomAdditionQuestion(1000, 10001, skill, questionType);
    case Skill.ADDITION_5_DIGIT:
      return getRandomAdditionQuestion(10000, 100001, skill, questionType);
    case Skill.ADDITION_6_DIGIT:
      return getRandomAdditionQuestion(100000, 1000001, skill, questionType);
    case Skill.ADDITION_HUNDREDTHS:
      return getRandomAdditionQuestion(0.01, 0.99, skill, questionType);
  }

  // Subtraction Skills
  switch (skill) {
    case Skill.SUBTRACTION_4_DIGIT:
      return getRandomSubtractionQuestion(1000, 10001, skill, questionType);
    case Skill.SUBTRACTION_TENTHS:
      return getRandomSubtractionQuestion(0.1, 0.9, skill, questionType);
    case Skill.SUBTRACTION_5_DIGIT:
      return getRandomSubtractionQuestion(10000, 100001, skill, questionType);
    case Skill.SUBTRACTION_6_DIGIT:
      return getRandomSubtractionQuestion(100000, 1000001, skill, questionType);
    case Skill.SUBTRACTION_HUNDREDTHS:
      return getRandomSubtractionQuestion(0.01, 0.99, skill, questionType);
  }

  // Multiplication Skills
  switch (skill) {
    case Skill.MULTIPLY_ONE_DIGIT_X_TWO_DIGIT:
      return getRandomMultiplicationQuestion(10, 100, skill, questionType);
    case Skill.MULTIPLY_ONE_DIGIT_X_THREE_DIGIT:
      return getRandomMultiplicationQuestion(100, 1000, skill, questionType);
    case Skill.MULTIPLICATION_10_BY_DOUBLE_DIGIT:
      return getRandomMultiplicationQuestion(10, 100, skill, questionType);
    case Skill.MULTIPLICATION_10_BY_TRIPLE_DIGIT:
      return getRandomMultiplicationQuestion(100, 1000, skill, questionType);
    case Skill.MULTIPLY_TWO_DIGIT_BY_TWO_DIGIT:
      return getRandomMultiplicationQuestion(10, 100, skill, questionType);
    case Skill.MULTIPLY_TWO_DIGIT_BY_THREE_DIGIT:
      return getRandomMultiplicationQuestion(100, 1000, skill, questionType);
    case Skill.MULTIPLY_THREE_DIGIT_BY_TENTH:
      return getRandomMultiplicationQuestion(100, 1000, skill, questionType);
  }

  // Division skills
  switch (skill) {
    //All division questions min and maxs are in respect to the dividend
    case Skill.DIVISION_TWO_DIGIT_BY_ONE_DIGIT:
      return getRandomDivisionQuestion(10, 100, skill, questionType);
    case Skill.DIVISION_THREE_DIGIT_BY_ONE_DIGIT:
      return getRandomDivisionQuestion(100, 1000, skill, questionType);
    case Skill.DIVISION_THREE_DIGIT_BY_TWO_DIGIT:
      return getRandomDivisionQuestion(100, 1000, skill, questionType);
    case Skill.DIVISION_THREE_DIGIT_BY_TENTH:
      return getRandomDivisionQuestion(100, 1000, skill, questionType);
  }
};
