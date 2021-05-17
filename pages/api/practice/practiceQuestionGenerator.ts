import { generateQuestionForSkill } from "../questionGenerator";
import { Skill, Topic } from "../skill";

export const generatePracticeQuestions = (topic: string, skillStr: string) => {
  let skill: Skill;
  if (topic == "addition") {
    switch (skillStr) {
      case "single-digit":
        skill = Skill.ADDITION_SINGLE;
        break;
      case "double-digit":
        skill = Skill.ADDITION_DOUBLE;
        break;
      case "triple-digit":
        skill = Skill.ADDITION_TRIPLE;
        break;
      case "properties":
        skill = Skill.ADDITION_PROPERTIES;
        break;
    }
  } else if (topic == "subtraction") {
    switch (skillStr) {
      case "single-digit":
        skill = Skill.SUBTRACTION_SINGLE;
        break;
      case "double-digit":
        skill = Skill.SUBTRACTION_DOUBLE;
        break;
      case "triple-digit":
        skill = Skill.SUBTRACTION_TRIPLE;
        break;
    }
  } else if (topic == "multiplication") {
    switch (skillStr) {
      case "single-digit":
        skill = Skill.MULTIPLICATION_5;
        break;
      case "double-digit":
        skill = Skill.MULTIPLICATION_10;
        break;
    }
  } else if (topic == "division") {
    switch (skillStr) {
      case "single-digit":
        skill = Skill.DIVIDE_12_EQUALLY;
        break;
      case "double-digit":
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
