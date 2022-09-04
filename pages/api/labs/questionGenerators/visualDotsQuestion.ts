import { Question } from "../../question";
import { QuestionType } from "../../questionTypes";
import { getRndInteger } from "../../random";

export type VisualDotsQuestion = {
  questionType: QuestionType.VISUAL_TYPE_PROBLEM;
  displayNum: number; //randomizes visualnumber type
  answer: string;
  text: string;
};

export function generateVisualDotsQuestion(): VisualDotsQuestion {
  let a = getRndInteger(1, 11);
  let b = getRndInteger(1, 11);
  let dotMode = getRndInteger(0, 3);
  let text = `${a} + ${b} =`;

  return {
    text: text,
    answer: (a + b).toString(),
    questionType: QuestionType.VISUAL_TYPE_PROBLEM,
    displayNum: dotMode,
  };
}
