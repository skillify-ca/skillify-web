import { Question } from "../../pages/api/question";
import { generateQuestionForSkill } from "../../pages/api/questionGenerator";
import { QuestionType } from "../../pages/api/questionTypes";
import { Skill } from "../../pages/api/skill";

export const generateAssignmentQuestions = (
  skillStr: string,
  questionType?: QuestionType
): Question => {
  let skill: Skill;
  if (skillStr == "add-one-digit") {
    skill = Skill.ADDITION_SINGLE;
  } else if (skillStr == "add-two-digit") {
    skill = Skill.ADDITION_DOUBLE;
  } else if (skillStr == "add-three-digit") {
    skill = Skill.ADDITION_TRIPLE;
  } else if (skillStr == "addition-properties") {
    skill = Skill.ADDITION_PROPERTIES;
  } else if (skillStr == "add-four-digit") {
    skill = Skill.ADDITION_4_DIGIT;
  } else if (skillStr == "add-four-digit") {
    skill = Skill.ADDITION_4_DIGIT;
  } else if (skillStr == "add-tenths") {
    skill = Skill.ADDITION_TENTHS;
  } else if (skillStr == "add-five-digit") {
    skill = Skill.ADDITION_5_DIGIT;
  } else if (skillStr == "add-tenths") {
    skill = Skill.ADDITION_TENTHS;
  } else if (skillStr == "add-hundredths") {
    skill = Skill.ADDITION_HUNDREDTHS;
  } else if (skillStr == "subtract-single-digit") {
    skill = Skill.SUBTRACTION_SINGLE;
  } else if (skillStr == "subtract-double-digit") {
    skill = Skill.SUBTRACTION_DOUBLE;
  } else if (skillStr == "subtract-triple-digit") {
    skill = Skill.SUBTRACTION_TRIPLE;
  } else if (skillStr == "subtract-four-digit") {
    skill = Skill.SUBTRACTION_4_DIGIT;
  } else if (skillStr == "subtract-tenths") {
    skill = Skill.SUBTRACTION_TENTHS;
  } else if (skillStr == "subtract-five-digit") {
    skill = Skill.SUBTRACTION_5_DIGIT;
  } else if (skillStr == "subtract-hundredths") {
    skill = Skill.SUBTRACTION_HUNDREDTHS;
  } else if (skillStr == "total-items-equal-groups") {
    skill = Skill.EQUAL_GROUP_10_ITEMS;
  } else if (skillStr == "multiply-5x5") {
    skill = Skill.MULTIPLICATION_5;
  } else if (skillStr == "multiply-10x10") {
    skill = Skill.MULTIPLICATION_10;
  } else if (skillStr == "multiply-single-and-double-digit") {
    skill = Skill.MULTIPLY_ONE_DIGIT_X_TWO_DIGIT;
  } else if (skillStr == "multiply-single-and-triple-digit") {
    skill = Skill.MULTIPLY_ONE_DIGIT_X_THREE_DIGIT;
  } else if (skillStr == "multiply-double-digit-by-10") {
    skill = Skill.MULTIPLICATION_10_BY_DOUBLE_DIGIT;
  } else if (skillStr == "multiply-triple-digit-by-10") {
    skill = Skill.MULTIPLICATION_10_BY_TRIPLE_DIGIT;
  } else if (skillStr == "multiply-double-and-double-digit") {
    skill = Skill.MULTIPLY_TWO_DIGIT_BY_TWO_DIGIT;
  } else if (skillStr == "multiply-double-and-triple-digit") {
    skill = Skill.MULTIPLY_TWO_DIGIT_BY_THREE_DIGIT;
  } else if (skillStr == "share-8-equally") {
    skill = Skill.EQUAL_SHARING_8_ITEMS;
  } else if (skillStr == "divide-12-equally") {
    skill = Skill.DIVIDE_12_EQUALLY;
  } else if (skillStr == "divide-100-equally") {
    skill = Skill.DIVIDE_100;
  } else if (skillStr == "divide-double-digit-by-single-digit") {
    skill = Skill.DIVISION_TWO_DIGIT_BY_ONE_DIGIT;
  } else if (skillStr == "divide-triple-digit-by-single-digit") {
    skill = Skill.DIVISION_THREE_DIGIT_BY_ONE_DIGIT;
  } else if (skillStr == "divide-triple-digit-by-double-digit") {
    skill = Skill.DIVISION_THREE_DIGIT_BY_TWO_DIGIT;
  }

  let question = generateQuestionForSkill(skill, questionType);
  return question;
};
