import { Question } from "../../question";
import { QuestionType } from "../../questionTypes";
import { Skill } from "../../skill";
import { randomize } from "../questionGenerators/binaryQuestionGenerator";
import { getRandomFinanceQuestion } from "./money/financeQuestionGenerator";

export const generateQuestionForFinanceSkill = (skill: Skill): Question => {
  // Financial Skills
  switch (skill) {
    case Skill.FINANCE_BUDGET:
      return getRandomFinanceQuestion();
    case Skill.FINANCE_UNIT_PRICES:
      let randomTotal = randomize(11, 100);
      let randomNumberOfObjects = randomize(1, 10);
      return {
        questionType: QuestionType.FINANCE_UNIT_PRICE_PROBLEM,
        text: "",
        answer: "",
        unitPriceModel: {
          total: randomTotal,
          numberOfObjects: randomNumberOfObjects,
        },
      };
  }
};
