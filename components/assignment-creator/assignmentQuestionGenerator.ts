import { generateQuestionForSkill } from "../../pages/api/questionGenerator";
import { Skill } from "../../pages/api/skill";

export const generateAssignmentQuestions = (skillStr: string) => {
  let skill: Skill;
  if (skillStr == "add-one-digit") {
    skill = Skill.ADDITION_SINGLE;
  } else if (skillStr == "add-two-digit") {
    skill = Skill.ADDITION_DOUBLE;
  } else if (skillStr == "add-three-digit") {
    skill = Skill.ADDITION_TRIPLE;
  } else if (skillStr == "add-three-digit") {
    skill = Skill.ADDITION_TRIPLE;
  } else {
    skill = Skill.SUBTRACTION_SINGLE;
  }
  const question = generateQuestionForSkill(skill).text;
  return question;
};
