import {
  Question,
  AnswerType,
  ItemCostModel,
} from "./question";
import { QuestionType } from "./questionTypes";
import { ItemDataTable } from '../../components/money/BudgetTableData';
import { getRndHundredthsDecimal, getRndInteger } from './random';
import { person } from "../../components/money/BalanceBudgetData";

export function getRandomFinanceQuestion(

): Question {
  const types = [
    QuestionType.FINANCE_BUDGET_TABLE_PROBLEM,
    QuestionType.FINANCE_TIP_PROBLEM,
    QuestionType.FINANCE_BALANCE_BUDGET_PROBLEM,
  ];
  /** Cycle through QuestionTypes */
  let questionIndex = getRndInteger(0, types.length);
  let type = types[questionIndex];

  if (type === QuestionType.FINANCE_TIP_PROBLEM) {
    let tip = getRndInteger(10, 20);
    let bill = getRndHundredthsDecimal(50, 100);
    return getTipQuestion(tip, bill);

  } else if (type === QuestionType.FINANCE_BUDGET_TABLE_PROBLEM) {
    let tape = getRndHundredthsDecimal(2,3);
    let bulb = getRndHundredthsDecimal(2,3);
    return getBudgetQuestion(tape, bulb);
  
  } else if (type === QuestionType.FINANCE_BALANCE_BUDGET_PROBLEM) {
    return getBalanceBudgetQuestion();
  }

}

function getBudgetQuestion(
  tape: number,
  bulb: number,
):Question {
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
    questionType:QuestionType.FINANCE_BUDGET_TABLE_PROBLEM,
    budgetCostModel:PriceCostTable,

  };
}

function getTipQuestion(
  tip: number,
  bill:number,
): Question {
  const percent = tip / 100;
  return {
    text: tip.toString(),
    answer: Math.round(bill * percent).toString(),
    answerType:AnswerType.STRING,
    questionType:QuestionType.FINANCE_TIP_PROBLEM,
    displayNum: bill,
  };
}

function getBalanceBudgetQuestion(

):Question {
  const names = [
    "Miranda",
    "Vivian",
    "Tiana",
    "Destiny"
  ];
  let nameIndex = getRndInteger(0, names.length);
  let name = names[nameIndex];
  return {
    text: name,
    answer: name,
    answerType:AnswerType.STRING,
    questionType:QuestionType.FINANCE_BALANCE_BUDGET_PROBLEM,
  };
}