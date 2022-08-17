import { getBinaryQuestion } from "../questions/questionGenerator";
import { QuestionType } from "../questionTypes";
import { Skill } from "../skill";

export type VerticalEquationQuestion = {
  questionType: QuestionType.VERTICAL_EQUATION;
  text: string;
  answer: string;
  operator: string;
};

export function generateVerticalEquationQuestion(
  firstNumber: number,
  secondNumber: number,
  operator: string,
  answerFunction: (x: number, y: number) => number,
  skill: Skill
): VerticalEquationQuestion {
  return getBinaryQuestion(
    firstNumber,
    secondNumber,
    operator,
    QuestionType.VERTICAL_EQUATION,
    answerFunction,
    skill
  ) as VerticalEquationQuestion;
}
