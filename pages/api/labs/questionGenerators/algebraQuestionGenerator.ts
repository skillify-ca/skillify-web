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


// Ask coach how to declare 
export function algebrahelper():list{
let problemtype = getRandomItemFromArray(["-", "+", "/", "*"]);
const a = getRndInteger(1,50);
const b = getRndInteger(1,50);
const d = a + getRndInteger(1,50);
const e = getRndInteger(2,10)
const f = getRndInteger(1,10)
const g = getRndInteger(2,10)*e
  if(problemtype == "+") {
    const problem = [" " + problemtype + " " + a.toString() + " = " + d.toString(),(d-a).toString()];
    return problem;
  }else if(problemtype == "-"){
    const problem = [" " + problemtype + " " + a.toString() + " = " + b.toString(),(b+a).toString()];
    return problem;
  }else if(problemtype == "/"){
    const problem = ["  " + problemtype + " " + e.toString() + " = " + f.toString(),(e*f).toString()];
    return problem;
  }else{
    const problem = ["  " + problemtype + " " + e.toString() + " = " + g.toString(),(g/e).toString()];
    return problem;
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
  let algebraproblem = algebrahelper()
  return {
    questionType: QuestionType.ALGEBRA_SOLVE_VARIABLE,
    variableLetter: " ",
    variableproblem: "x",
    algebrasolveModel: {
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
      variableproblem: algebraproblem[0],
      text: "",
      answer: algebraproblem[1],
      personname: getRandomItemFromArray(name),
    },
    personname: "",
    answer: algebraproblem[1],
    text: "",
  };
}

console.log(name[0]);
