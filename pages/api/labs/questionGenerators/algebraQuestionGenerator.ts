import { QuestionType } from "../../questionTypes";
import {
  getRndInteger,
  getRndTenthsDecimal,
  getRndHundredthsDecimal,
  getRandomItemFromArray,
} from "../../random";
import { name } from "../../../api/names";
export type AlgebraSolveQuestion = {
  questionType: QuestionType.ALGEBRA_SOLVE_VARIABLE;
  variableLetter: string;
  algebrasolveModel: AlgebraSolveModel;
  personname: string;
  answer: string;
  text: string;
};

export type AlgebraSolveModel = {
  variableLetter: string;
  text: string;
  answer: string;
  personname: string;
};

// create helper function
// no inputs
// outputs two integers between 0 and 100
// ~m

export function generateAlgebraQuestion(): AlgebraSolveQuestion {
  // TODO generate a question object
  return {
    questionType: QuestionType.ALGEBRA_SOLVE_VARIABLE,
    variableLetter: getRandomItemFromArray(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]),
    algebrasolveModel: {
      variableLetter: "x",
      text: "Help solve for the unkown variable",
      answer:  "6",
      personname: getRandomItemFromArray(name),
    },
    personname: "asdf",
    answer: "7",
    text: "solve for x",
  }
}

console.log(name[0])
