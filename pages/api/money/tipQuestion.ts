import {
  Question,
  AnswerType,
} from "../question";
import { QuestionType } from "../questionTypes";

export function getTipQuestion(
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