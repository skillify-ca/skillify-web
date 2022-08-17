import { shuffle } from "lodash";
import { Question, AnswerType, MCOption } from "../question";
import { generateTrueOrFalseQuestion } from "../questionGenerators/trueOrFalseQuestion";
import { generateVerticalEquationQuestion } from "../questionGenerators/verticalEquationQuestion";
import { QuestionType } from "../questionTypes";
import {
  getRndInteger,
  getRndTenthsDecimal,
  getRndHundredthsDecimal,
  getRandomItemFromArray,
} from "../random";
import { Skill } from "../skill";
import { createWordProblemModel } from "../WordProblemModel";

//converts number as a string into an array of numbers
export function randomize(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}

//function is used to generate addition, subtraction, and multiplication questions
export function getRandomBinaryQuestion(
  min: number,
  max: number,
  operator: string,
  answerFunction: (a: number, b: number) => number,
  skill: Skill
): Question {
  //Default possible Question Types
  let types = [
    QuestionType.HORIZONTAL_EQUATION,
    QuestionType.BINARY_WORD_PROBLEM,
    QuestionType.VERTICAL_EQUATION,
    QuestionType.TRUE_OR_FALSE_PROBLEM,
    QuestionType.MULTIPLE_CHOICE,
  ];

  //Temporarily Disables True and False, MC, and Word Problems for Grade 4 and above for Add and Subtract units
  //TODO Redesign the logic for MC Question generator and T or F Questions
  if (
    skill == Skill.ADDITION_TENTHS ||
    skill == Skill.SUBTRACTION_TENTHS ||
    skill == Skill.SUBTRACTION_HUNDREDTHS ||
    skill == Skill.ADDITION_HUNDREDTHS ||
    skill == Skill.MULTIPLY_THREE_DIGIT_BY_TENTH
  ) {
    //Binary Word problems don't make much sense for deciaml word problems
    types = [QuestionType.HORIZONTAL_EQUATION, QuestionType.VERTICAL_EQUATION];
  }

  const type = getRandomItemFromArray(types);

  let a = getRndInteger(min, max);
  let b = getRndInteger(min, max);
  if (skill == Skill.MULTIPLY_THREE_DIGIT_BY_TENTH) {
    b = getRndTenthsDecimal(0.1, 0.9);
  }
  if (skill == Skill.ADDITION_TENTHS || skill == Skill.SUBTRACTION_TENTHS) {
    a = getRndTenthsDecimal(min, max);
    b = getRndTenthsDecimal(min, max);
  } else if (
    skill == Skill.ADDITION_HUNDREDTHS ||
    skill == Skill.SUBTRACTION_HUNDREDTHS
  ) {
    a = getRndHundredthsDecimal(min, max);
    b = getRndHundredthsDecimal(min, max);
  } else if (skill == Skill.MULTIPLICATION_10_BY_DOUBLE_DIGIT) {
    a = 10;
    b = getRndInteger(min, max);
  } else if (skill == Skill.MULTIPLICATION_10_BY_TRIPLE_DIGIT) {
    a = 10;
    b = getRndInteger(min, max);
  } else if (skill == Skill.MULTIPLY_ONE_DIGIT_X_TWO_DIGIT) {
    a = getRndInteger(1, 10);
    b = getRndInteger(min, max);
  } else if (skill == Skill.MULTIPLY_ONE_DIGIT_X_THREE_DIGIT) {
    a = getRndInteger(1, 10);
    b = getRndInteger(min, max);
  } else if (skill == Skill.MULTIPLY_TWO_DIGIT_BY_THREE_DIGIT) {
    a = getRndInteger(10, 100);
    b = getRndInteger(min, max);
  }

  if (type === QuestionType.VERTICAL_EQUATION) {
    return generateVerticalEquationQuestion(
      a,
      b,
      operator,
      answerFunction,
      skill
    );
  }
  return getBinaryQuestion(a, b, operator, type, answerFunction, skill);
}

export function getBinaryQuestion(
  a: number,
  b: number,
  operator: string,
  questionType: QuestionType,
  answerFunction: (a: number, b: number) => number,
  skill: Skill
): Question {
  let text;
  let trueFalseAnswer: string;
  const type = questionType;
  let multipleChoiceModel;

  // T or F Question generation logic
  if (type === QuestionType.TRUE_OR_FALSE_PROBLEM) {
    return generateTrueOrFalseQuestion(a, b, operator, answerFunction);
  } // MC question Generation logic
  else if (type === QuestionType.MULTIPLE_CHOICE) {
    if (a < b) {
      let temp = a;
      a = b;
      b = temp;
    }

    let realAns = answerFunction(a, b);
    let wrongArr = [-2, -1, 1, 2];
    let wrongIndexA = randomize(0, wrongArr.length);
    let wrongA = wrongArr[wrongIndexA] + realAns;
    wrongArr.splice(wrongIndexA, 1);
    let wrongIndexB = randomize(0, wrongArr.length);
    let wrongB = wrongArr[wrongIndexB] + realAns;

    text = `${a} ${operator} ${b}`;

    const option1: MCOption = { text: wrongA.toString(), id: "a" };
    const option2: MCOption = { text: wrongB.toString(), id: "b" };
    const option3: MCOption = { text: realAns.toString(), id: "c" };

    const optionArr = [option1, option2, option3];
    multipleChoiceModel = { options: shuffle(optionArr) };
  } else {
    text = `${Math.max(a, b)} ${operator} ${Math.min(a, b)} =`;
  }

  let wordProblemModel;
  //condition for if it is wordProblem
  if (type === QuestionType.BINARY_WORD_PROBLEM) {
    wordProblemModel = createWordProblemModel(operator);
  }
  let ans;
  if (skill == Skill.ADDITION_TENTHS || skill == Skill.SUBTRACTION_TENTHS) {
    ans = answerFunction(Math.max(a, b), Math.min(a, b)).toFixed(1);
  } else if (
    skill == Skill.SUBTRACTION_HUNDREDTHS ||
    skill == Skill.ADDITION_HUNDREDTHS
  ) {
    ans = answerFunction(Math.max(a, b), Math.min(a, b)).toFixed(2);
  } else if (
    skill == Skill.MULTIPLY_THREE_DIGIT_BY_TENTH ||
    skill == Skill.DIVISION_THREE_DIGIT_BY_TENTH
  ) {
    ans = answerFunction(Math.max(a, b), Math.min(a, b)).toFixed(1);
  } else {
    ans = answerFunction(Math.max(a, b), Math.min(a, b)).toString();
  }

  return {
    text: text,
    answer: ans,
    answerType: AnswerType.NUMBER,
    questionType: type,
    operator: operator,
    wordProblem: wordProblemModel,
    multipleChoice: multipleChoiceModel,
    skill: skill,
  };
}
