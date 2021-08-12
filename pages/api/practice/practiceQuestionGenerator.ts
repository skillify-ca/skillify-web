import { generateQuestionForSkill } from "../questionGenerator";
import { Skill, Topic } from "../skill";

export const generatePracticeQuestions = (topic: string, skillStr: string) => {
  let skill: Skill;
  if (topic == "numbers") {
    switch (skillStr) {
      case "count-50":
        skill = Skill.NUMBERS_50;
        break;
      case "count-200":
        skill = Skill.NUMBERS_200;
        break;
      case "count-1000":
        skill = Skill.NUMBERS_1000;
        break;
    }
  } else if (topic == "addition") {
    switch (skillStr) {
      case "add-one-digit":
        skill = Skill.ADDITION_SINGLE;
        break;
      case "add-two-digit":
        skill = Skill.ADDITION_DOUBLE;
        break;
      case "add-three-digit":
        skill = Skill.ADDITION_TRIPLE;
        break;
      case "addition-properties":
        skill = Skill.ADDITION_PROPERTIES;
        break;
      case "add-four-digit":
        skill = Skill.ADDITION_4_DIGIT;
        break;
      case "add-tenths":
        skill = Skill.ADDITION_TENTHS;
        break;
      case "add-five-digit":
        skill = Skill.ADDITION_5_DIGIT;
        break;
      case "add-hundredths":
        skill = Skill.ADDITION_HUNDREDTHS;
        break;
      case "add-six-digit":
        skill = Skill.ADDITION_6_DIGIT;
        break;
    }
  } else if (topic == "subtraction") {
    switch (skillStr) {
      case "subtract-single-digit":
        skill = Skill.SUBTRACTION_SINGLE;
        break;
      case "subtract-double-digit":
        skill = Skill.SUBTRACTION_DOUBLE;
        break;
      case "subtract-triple-digit":
        skill = Skill.SUBTRACTION_TRIPLE;
        break;
      case "subtract-four-digit":
        skill = Skill.SUBTRACTION_4_DIGIT;
        break;
      case "subtract-tenths":
        skill = Skill.SUBTRACTION_TENTHS;
        break;
      case "subtract-five-digit":
        skill = Skill.SUBTRACTION_5_DIGIT;
        break;
      case "subtract-hundredths":
        skill = Skill.SUBTRACTION_HUNDREDTHS;
        break;
      case "subtract-six-digit":
        skill = Skill.SUBTRACTION_6_DIGIT;
        break;
    }
  } else if (topic == "multiplication") {
    switch (skillStr) {
      case "total-items-equal-groups":
        skill = Skill.EQUAL_GROUP_10_ITEMS;
        break;
      case "multiply-5x5":
        skill = Skill.MULTIPLICATION_5;
        break;
      case "multiply-10x10":
        skill = Skill.MULTIPLICATION_10;
        break;
      case "multiply-single-and-double-digit":
        skill = Skill.MULTIPLY_ONE_DIGIT_X_TWO_DIGIT;
        break;
      case "multiply-single-and-triple-digit":
        skill = Skill.MULTIPLY_ONE_DIGIT_X_THREE_DIGIT;
        break;
      case "multiply-double-digit-by-10":
        skill = Skill.MULTIPLICATION_10_BY_DOUBLE_DIGIT;
        break;
      case "multiply-triple-digit-by-10":
        skill = Skill.MULTIPLICATION_10_BY_TRIPLE_DIGIT;
        break;
      case "multiply-double-and-double-digit":
        skill = Skill.MULTIPLY_TWO_DIGIT_BY_TWO_DIGIT;
        break;
      case "multiply-double-and-triple-digit":
        skill = Skill.MULTIPLY_TWO_DIGIT_BY_THREE_DIGIT;
        break;
      case "multiply-triple-digit-by-tenths":
        skill = Skill.MULTIPLY_THREE_DIGIT_BY_TENTH;
        break;
    }
  } else if (topic == "division") {
    switch (skillStr) {
      case "share-8-equally":
        skill = Skill.EQUAL_SHARING_8_ITEMS;
        break;
      case "divide-12-equally":
        skill = Skill.DIVIDE_12_EQUALLY;
        break;
      case "divide-100-equally":
        skill = Skill.DIVIDE_100;
        break;
      case "divide-double-digit-by-single-digit":
        skill = Skill.DIVISION_TWO_DIGIT_BY_ONE_DIGIT;
        break;
      case "divide-triple-digit-by-single-digit":
        skill = Skill.DIVISION_THREE_DIGIT_BY_ONE_DIGIT;
        break;
      case "divide-triple-digit-by-double-digit":
        skill = Skill.DIVISION_THREE_DIGIT_BY_TWO_DIGIT;
        break;
      case "divide-triple-digit-by-tenths":
        skill = Skill.DIVISION_THREE_DIGIT_BY_TENTH;
        break;
    }
  }

  let questions = [];
  for (let index = 0; index < 5; index++) {
    questions.push(generateQuestionForSkill(skill));
  }
  return questions;
};
