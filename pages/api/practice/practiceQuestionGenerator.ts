import { generateQuestionForSkill } from "../questionGenerator";
import { Skill, Topic } from "../skill";

export const generatePracticeQuestions = (topic: string, skillStr: string) => {
  let skill: Skill;
  if (topic == "numbers") {
    skill = Skill.NUMBERS_50;
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
    }
  } else if (topic == "division") {
    switch (skillStr) {
      case "share-8-equally": // we should rename this from single-digit to something else
        skill = Skill.EQUAL_SHARING_8_ITEMS;
        break;
      case "divide-12-equally":
        skill = Skill.DIVIDE_12_EQUALLY;
        break;
      case "divide-100-equally":
        skill = Skill.DIVIDE_100;
        break;
    }
  }

  let questions = [];
  for (let index = 0; index < 5; index++) {
    questions.push(generateQuestionForSkill(skill));
  }
  return questions;
};
