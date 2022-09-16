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
  variableproblem: string;
  algebrasolveModel: AlgebraSolveModel;
  text: string;
  answer: string;
  personname: string;
};

// Ask coach how to do this properly
let a = getRndInteger(1,50);
let b = getRndInteger(1,50);
let d = a + getRndInteger(1,50);
let e = getRndInteger(1,10)
let f = getRndInteger(1,10)
let g = getRndInteger(1,10)*e

// Ask coach how to declare 
export function algebrahelper(): string {
  let problemtype = getRandomItemFromArray(["-", "+", "/", "*"]);
  if(problemtype == "+") {
    const problem = " " + problemtype + " " + a.toString() + " = " + d.toString();
    return problem
  }else if(problemtype == "-"){
    const problem = " " + problemtype + " " + a.toString() + " = " + b.toString();
    return problem
  }else if(problemtype == "/"){
    const problem = " " + problemtype + " " + e.toString() + " = " + f.toString();
    return problem
  }else{
    const problem = " " + problemtype + " " + e.toString() + " = " + g.toString();
    return problem
  }
}

export type AlgebraSolveModel = {
  variableLetter: string;
  variableproblem: string;
  text: string;
  answer: string;
  personname: string;
};



export function generateAlgebraQuestion(): AlgebraSolveQuestion {
  // TODO generate a question object
  return {
    questionType: QuestionType.ALGEBRA_SOLVE_VARIABLE,
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
      "l",
      "m",
      "n",
      "o",
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
    variableproblem: "x",
    algebrasolveModel: {
      variableLetter: "x",
      variableproblem: algebrahelper(),
      text: "Help solve for the unknown variable",
      answer: "6",
      personname: getRandomItemFromArray(name),
    },
    personname: "",
    answer: "",
    text: "",
  };
}

console.log(name[0]);
