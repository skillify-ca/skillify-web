import {
  Question,
  AnswerType,
  ItemCostModel,
} from "./question";
import { QuestionType } from "./questionTypes";
import { ItemDataTable } from '../../components/money/BudgetTableData';
import { getRndHundredthsDecimal, getRndInteger } from './random';

export function getRndBudgetQuestion(
  questionType?: QuestionType
): Question {
  const types = [
    QuestionType.FINANCE_PROBLEM,
    QuestionType.FINANCE_TIP_PROBLEM
  ];
  let questionIndex = getRndInteger(0, types.length);
  if (questionType === QuestionType.FINANCE_TIP_PROBLEM) {
    questionIndex = 1;
  }

  if (questionIndex = 1) {
    return getTipQuestion();
  } else {
    return getBudgetQuestion();
  }
}

export function getBudgetQuestion(

):Question {
  let tape = getRndHundredthsDecimal(2,3);
  let bulb = getRndHundredthsDecimal(2,3);
  let total = tape + bulb;
  let budget = 5;

  let answer = budget >= total ? "Yes" : "No";

  const PriceCostTable:ItemCostModel[] = ItemDataTable.map((item) => {
    if (item.title === "Roll of Electrical Tape") {
      return {title: item.title, cost: tape}
  
    } else if (item.title ==="Light Bulb") {
      return {title: item.title, cost: bulb}
    } else {
      return {title: item.title, cost: getRndHundredthsDecimal(0,5)}
    }
  })
  
  return {
    text: budget.toString(),
    answer: answer.toString(),
    answerType:AnswerType.STRING,
    questionType:QuestionType.FINANCE_PROBLEM,
    budgetCostModel:PriceCostTable,

  };
}

export function getTipQuestion(

): Question {
  let tip = getRndInteger(5, 20);
  let bill = getRndHundredthsDecimal(50, 100);

  return {
    text: tip.toString(),
    answer: (tip * bill).toString(),
    answerType:AnswerType.STRING,
    questionType:QuestionType.FINANCE_TIP_PROBLEM,

  };
}