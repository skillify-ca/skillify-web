import { Question } from "../../question";
import { QuestionType } from "../../questionTypes";
import { Skill } from "../../skill";
import { fruitsMap, animalsMap } from "../../WordProblemModelObjects";
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
    case Skill.FINANCE_SALES_TAX:
      const noun2 = getRandomItemFromMap(animalsMap);
      let randomNumber = randomize(2,20);
      let taxRate = Math.floor(Math.random() * 19) + 1;
      let price = (randomize(1,20)+ randomize(1,100)*0.01).toFixed(2);
      let personName = nameSelector();
      let multipleAnimals = noun2.pluralTitle;
      let image1 = noun2.image;
      return {
        questionType: QuestionType.FINANCE_SALES_TAX_PROBLEM,
        answer: (Math.round(100*(randomNumber*price*(taxRate/100)))/100).toString(),
        text: "",
        salesTaxModel: {
          numberOfToys: randomNumber,
          taxRate: taxRate,
          price: price,
          personName: personName,
          multipleAnimals: multipleAnimals,
          image1: image1,
        },
      };
    case Skill.FINANCE_COMMISSIONS:
      let _personName = nameSelector();
      let _commission = Math.floor(Math.random() * 19) + 1;
      let _price =  Math.floor((Math.random() * 10000) + 1);
      let _numberOfSales = Math.floor((Math.random() * 10) + 1);

      return {
        questionType: QuestionType.FINANCE_COMMISSION_PROBLEM,
        // ranodmly generated values & the correct answer to the problem go here
        commisionModel: {
          personName: _personName,
          commission: _commission,
          price: _price,
          numberOfSales: _numberOfSales,
          image1: image1,
        },
        // numberOfSales*price*(commission/100)
        // answer: (Math.round(100*(randomNumber*price*(taxRate/100)))/100).toString(),
        answer: (_numberOfSales*_price*(_commission/100)).toFixed(2).toString(),
        text: "",
      };

  }
};
