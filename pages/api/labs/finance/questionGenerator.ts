import { Question } from "../../question";
import { QuestionType } from "../../questionTypes";
import { Skill } from "../../skill";
import { fruitsMap } from "../../WordProblemModelObjects";
import { randomize } from "../questionGenerators/binaryQuestionGenerator";
import { getRandomItemFromMap, nameSelector } from "../questionGenerators/wordProblemQuestion";
import { getRandomFinanceQuestion } from "./money/financeQuestionGenerator";

export const generateQuestionForFinanceSkill = (skill: Skill): Question => {
  // Financial Skills
  switch (skill) {
    case Skill.FINANCE_BUDGET:
      return getRandomFinanceQuestion();
    case Skill.FINANCE_UNIT_PRICES:
      const noun1 = getRandomItemFromMap(fruitsMap);
      let randomTotal = randomize(11, 100);
      let randomNumberOfObjects = randomize(1, 10);
      let name = nameSelector();
      let singularFruit = noun1.singleTitle;
      let pluralFruit = noun1.pluralTitle;
      let image = noun1.image;
      return {
        questionType: QuestionType.FINANCE_UNIT_PRICE_PROBLEM,
        answer: Math.floor(randomTotal / randomNumberOfObjects).toString(),
        text: "",
        unitPriceModel: {
          total: randomTotal,
          numberOfObjects: randomNumberOfObjects,
          name: name,
          singularFruit: singularFruit,
          pluralFruit: pluralFruit,
          image: image,
        },
      };
  }
};
