import { QuestionType } from "../../questionTypes";

export type AlgebraSolveQuestion = {
  questionType: QuestionType.ALGEBRA_SOLVE_VARIABLE;
  algebrasolveModel: AlgebraSolveModel;
  answer: string;
  text: string;
};

export type AlgebraSolveModel = {
  variableLetter: string;
  text: string;
  answer: string;
};

export function generateAlgebraQuestion(): AlgebraSolveQuestion {
  // TODO generate a question object
  return null;
}
