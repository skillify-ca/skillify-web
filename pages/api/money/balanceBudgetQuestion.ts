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
    person.totalExpenses = 0;
    person.totalIncome = 0;

    person.totalExpenses = person.expenses.reduce((total, expense) => {
      return total + expense.cost
    }, 0);
    person.totalIncome = person.income.reduce((total, income) => {
      return total + income.cost
    }, 0);
    /** 
     * The question asks how much the person needs to earn to balance their budget
     * isCorrect if (total income == total expense) && (total income - total expense == 0)
     * the answer is the difference
     */
    answer = person.totalExpenses - person.totalIncome;

    return {
      text: person.name,
      answer: answer.toString(),
      answerType:AnswerType.STRING,
      questionType:QuestionType.FINANCE_BALANCE_BUDGET_PROBLEM,
      personDataModel: person
    };
  }