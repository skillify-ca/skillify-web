import {
  Question,
  AnswerType,
} from "./question";
import { QuestionType } from "./questionTypes";
import { ItemDataTable } from '../../components/money/BudgetTableData';
import { getRndHundredthsDecimal } from './random';

export function generateBudgetQuestion(
  ): Question {
  let tape = getRndHundredthsDecimal(2,3);
  let bulb = getRndHundredthsDecimal(2,3);
  let answer = tape + bulb;
  let budget = 5;

  ItemDataTable.map((item) => {
    if (item.item === "Roll of Electrical Tape") {
      return item.cost = tape;
  
    } else if (item.item ==="Light Bulb") {
      return item.cost = bulb;
    } else {
      item.cost = getRndHundredthsDecimal(0,5);
    }
  })
  console.table(ItemDataTable);
  console.log(answer);
  return {
    text: budget.toString(),
    answer: answer.toString(),
    answerType:AnswerType.STRING,
    questionType:QuestionType.FINANCE_PROBLEM,

  };
}