import { Question } from "../../pages/api/question";
import { generateQuestionForSkill } from "../../pages/api/questionGenerator";
import { QuestionType } from "../../pages/api/questionTypes";
import { Skill } from "../../pages/api/skill";

export const generateAssignmentQuestions = (
  skill: Skill,
  questionType?: QuestionType
): Question => {
  let question = generateQuestionForSkill(skill, questionType);
  return question;
};
