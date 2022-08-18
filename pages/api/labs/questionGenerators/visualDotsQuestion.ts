import { QuestionType } from "../questionTypes";
import { getRndInteger } from "../random";

export type VisualDotsQuestion = {
  questionType: QuestionType.VISUAL_TYPE_PROBLEM;
  displayNum: number; //randomizes visualnumber type
  answer: string;
  operator: string;
  text: string;
};

export function generateVisualDotsQuestion() {
  let a = getRndInteger(1, 11);
  let b = getRndInteger(1, 11);
  let text = `${a} + ${b} =`;

  return {
    text: text,
    answer: (a + b).toString(),
    questionType: QuestionType.VISUAL_TYPE_PROBLEM,
  };
}
