import {
  Question,
  AnswerType,
} from "./question";
import { QuestionType } from "./questionTypes";

export function generateBudgetQuestion(): Question {

  const question: Question = {
    text: "6",
    answer: "2",
    answerType:AnswerType.STRING,
    questionType:QuestionType.FINANCE_PROBLEM,
  };


  return question;
}


