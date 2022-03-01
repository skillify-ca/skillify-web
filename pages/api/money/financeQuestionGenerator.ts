import { Question } from "../question";
import { QuestionType } from "../questionTypes";
import { getRndHundredthsDecimal, getRndInteger } from "../random";

import { getTipQuestion } from "./tipQuestion";
import { getBudgetQuestion } from "./budgetQuestion";
import { getBalanceBudgetQuestion } from "./balanceBudgetQuestion";
import { personDataTable } from "../../../components/finance/money/BalanceBudgetData";

export function getRandomFinanceQuestion(): Question {
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
    let tape = getRndHundredthsDecimal(2, 3);
    let bulb = getRndHundredthsDecimal(2, 3);
    return getBudgetQuestion(tape, bulb);
  } else if (type === QuestionType.FINANCE_BALANCE_BUDGET_PROBLEM) {
    let personIndex = getRndInteger(0, personDataTable.length);
    let person = personDataTable[personIndex];
    return getBalanceBudgetQuestion(person);
  }
}
