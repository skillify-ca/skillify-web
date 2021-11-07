import {
  Question,
  AnswerType,
} from "../question";
import { QuestionType } from "../questionTypes";
import { PersonData } from "./personData";

export function getBalanceBudgetQuestion(
  person: PersonData,
  ):Question {
    return {
      text: person.name,
      answer: person.month,
      answerType:AnswerType.STRING,
      questionType:QuestionType.FINANCE_BALANCE_BUDGET_PROBLEM,
    };
  }

  /** 
   * Things to do
   * 
   * add up all income
   * calculate net = totalincome - totalexpense
   * (should be >= zero)
   * 
   * How do you ref properties from an array within an array?
   * 
   *  */