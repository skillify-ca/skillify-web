import {
  Question,
  AnswerType,
} from "../question";
import { QuestionType } from "../questionTypes";
import { PersonData } from "./personData";

export function getBalanceBudgetQuestion(
  person: PersonData,
  ):Question {
    let answer = 0;
    person.expenses.map((expense) => {
      answer += expense.cost;
    })
    return {
      text: person.name,
      answer: answer.toString(),
      answerType:AnswerType.STRING,
      questionType:QuestionType.FINANCE_BALANCE_BUDGET_PROBLEM,
      personDataModel: person
    };
  }