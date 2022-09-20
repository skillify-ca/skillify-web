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
  variableProblem: string;
  algebraSolveModel: AlgebraSolveModel;
  text: string;
  answer: string;
  personName: string;
};

type algebraObject = {
  algebraProblem: string;
  algebraSolution: string;
}

export function algebrahelper():algebraObject{
let problemtype = getRandomItemFromArray(["-", "+", "/", "x"]);
const a = getRndInteger(1,50);
const b = getRndInteger(1,50);
const d = a + getRndInteger(1,50);
const e = getRndInteger(2,10)
const f = getRndInteger(1,10)
const g = getRndInteger(2,10)*e
  if(problemtype == "+") {
    const problem: algebraObject = {
      algebraProblem: " " + problemtype + " " + a.toString() + " = " + d.toString(),
      algebraSolution:(d-a).toString(),
    }
    return problem;
  }else if(problemtype == "-"){
    const problem: algebraObject = {
      algebraProblem: " " + problemtype + " " + a.toString() + " = " + b.toString(),
      algebraSolution: (b+a).toString(),
    }
    return problem;
  }else if(problemtype == "/"){
    const problem: algebraObject = {
      algebraProblem: "  " + problemtype + " " + e.toString() + " = " + f.toString(),
      algebraSolution: (e*f).toString(),
    }
    return problem;
  }else{
    const problem: algebraObject = {
      algebraProblem: "  " + problemtype + " " + e.toString() + " = " + g.toString(),
      algebraSolution: (g/e).toString(),
    }
    return problem;
  }
}


export type AlgebraSolveModel = {
  variableLetter: string;
  variableProblem: string;
  text: string;
  answer: string;
  personName: string;
};

export function generateAlgebraQuestion(): AlgebraSolveQuestion {
  let algebraproblem = algebrahelper()
  return {
    questionType: QuestionType.ALGEBRA_SOLVE_VARIABLE,
    variableLetter: " ",
    variableProblem: "x",
    algebraSolveModel: {
      variableLetter: getRandomItemFromArray([
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "m",
        "n",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
      ]),
      variableProblem: algebraproblem.algebraProblem,
      text: "",
      answer: algebraproblem.algebraSolution,
      personName: getRandomItemFromArray(name),
    },
    personName: "",
    answer: algebraproblem.algebraSolution,
    text: "",
  };
}
