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
      let noun1 = getRandomItemFromMap(fruitsMap);
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
      case Skill.FINANCE_SALES_TAX:
        let noun2 = getRandomItemFromMap(fruitsMap);
        let randomNumber = randomize(1,20);
        let taxRate = Math.floor(Math.random() * 19) + 1;
        let personName = nameSelector();
        let oneFruit = noun2.singleTitle;
        let multipleFruit = noun2.pluralTitle;
        let image2 = noun2.image;
        return {
          questionType: QuestionType.FINANCE_SALES_TAX_PROBLEM,
          answer: (randomNumber*taxRate).toString(),
          text: "",
          salesTaxModel: {
            personName: personName,
            oneFruit: oneFruit,
            multipleFruit: multipleFruit,
            image2: image,
          },
        };
  }
};
