import { QuestionType } from "../../questionTypes";

export type LongDivisionQuestion = {
  questionType: QuestionType.LONG_DIVISION_PROBLEM;
  text: string;
  answer: string;
};
export function generateLongDivisionQuestion(a, b): LongDivisionQuestion {
  const product = a * b;
  const text = `${product} / ${b} =`;
  return {
    questionType: QuestionType.LONG_DIVISION_PROBLEM,
    text: text,
    answer: a.toString(),
  };
}
