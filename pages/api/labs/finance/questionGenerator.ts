import { Question } from "../../question";
import { QuestionType } from "../../questionTypes";
import { Skill } from "../../skill";
import { getRandomFinanceQuestion } from "../../money/financeQuestionGenerator";

export const generateQuestionForFinanceSkill = (
  skill: Skill,
  questionType?: QuestionType
): Question => {
  // Financial Skills
  switch (skill) {
    case Skill.FINANCE_BUDGET:
      return getRandomFinanceQuestion();
  }
};
