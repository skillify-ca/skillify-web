import { QuestionType } from "../../questionTypes";
import { Skill } from "../../skill";

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
  return {
    text: `${Math.max(firstNumber, secondNumber)} ${operator} ${Math.min(
      firstNumber,
      secondNumber
    )} =`,
    answer: calculateAnswer(skill, answerFunction, firstNumber, secondNumber),
    questionType: QuestionType.VERTICAL_EQUATION,
    operator: operator,
  };
}

function calculateAnswer(skill, answerFunction, a, b) {
  if (skill == Skill.DIVISION_THREE_DIGIT_BY_TENTH) {
    return answerFunction(Math.max(a, b), Math.min(a, b)).toFixed(1);
  } else {
    return answerFunction(Math.max(a, b), Math.min(a, b)).toString();
  }
}
