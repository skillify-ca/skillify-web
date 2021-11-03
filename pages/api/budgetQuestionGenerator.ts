import {
  Question,
  AnswerType,
  ItemCostModel,
} from "./question";
import { QuestionType } from "./questionTypes";
import { ItemDataTable } from '../../components/money/BudgetTableData';
import { getRndHundredthsDecimal } from './random';

export function generateBudgetQuestion(
  ): Question {
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