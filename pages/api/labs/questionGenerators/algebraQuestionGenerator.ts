import { HorizontalEquation } from "../../../../components/questionTypes/HorizontalEquation";
import { QuestionType } from "../../questionTypes";
import {
  getRndInteger,
  getRndTenthsDecimal,
  getRndHundredthsDecimal,
  getRandomItemFromArray,
} from "../../random";

export type AlgebraSolveQuestion = {
  questionType: QuestionType.ALGEBRA_SOLVE_VARIABLE;
  variableLetter: string;
  algebrasolveModel: AlgebraSolveModel;
  name: string;
  answer: string;
  text: string;
};

export type AlgebraSolveModel = {
  variableLetter: string;
  text: string;
  answer: string;
  name: string;
};

export function generateAlgebraQuestion(): AlgebraSolveQuestion {
  // TODO generate a question object
  return {
    questionType: QuestionType.ALGEBRA_SOLVE_VARIABLE,
    algebrasolveModel: {
      variableLetter: getRandomItemFromArray(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]),
      text: "Help solve for the unkown variable",
      name: "Vithusan",
      answer:  "6",
    },
    variableLetter: "x",
    text: "solve for x",
    answer: "7",
  }
}
