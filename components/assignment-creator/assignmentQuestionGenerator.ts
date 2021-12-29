import { Question } from "../../pages/api/question";
import { generateQuestionForSkill } from "../../pages/api/questions/questionGenerator";
import { QuestionType } from "../../pages/api/questionTypes";

export const generateAssignmentQuestions = (
  skillId: number,
  questionType?: QuestionType
): Question => {
  let question = generateQuestionForSkill(skillId, questionType);
  return question;
};
