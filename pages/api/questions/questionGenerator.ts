import { shuffle } from "lodash";
import { getRandomPropertyAdditionQuestion } from "./addition/additionPropertyQuestionGenerator";
import { getRandomFinanceQuestion } from "../money/financeQuestionGenerator";
import { Question, AnswerType, MCOption } from "../question";
import { QuestionType } from "../questionTypes";
import {
  getRndInteger,
  getRndTenthsDecimal,
  getRndHundredthsDecimal,
} from "../random";
import { Skill } from "../skill";
import { createWordProblemModel } from "../WordProblemModel";
import { getRandomAdditionQuestion } from "./addition/additionQuestionGenerator";
import { getRandomDivisionQuestion } from "./division/divisionQuestionGenerator";
import { getRandomMultiplicationQuestion } from "./multiplication/multiplicationQuestionGenerator";
import { getRandomNumbersQuestion } from "./numbers/numbersQuestionGenerator";
import { getRandomSubtractionQuestion } from "./subtraction/subtractionQuestionGenerator";

export const generateQuestionForSkill = (
  skill: Skill,
  questionType?: QuestionType
): Question => {
  // Addition skills
  switch (skill) {
    case Skill.ADDITION_SINGLE:
      return getRandomAdditionQuestion(1, 11, skill, questionType);
    case Skill.ADDITION_DOUBLE:
      return getRandomAdditionQuestion(10, 101, skill, questionType);
    case Skill.ADDITION_TRIPLE:
      return getRandomAdditionQuestion(100, 1001, skill, questionType);
    case Skill.ADDITION_TENTHS:
      return getRandomAdditionQuestion(0.1, 0.9, skill, questionType);
    case Skill.ADDITION_4_DIGIT:
      return getRandomAdditionQuestion(1000, 10001, skill, questionType);
    case Skill.ADDITION_PROPERTIES:
      return getRandomPropertyAdditionQuestion(1, 15, skill);
    case Skill.ADDITION_5_DIGIT:
      return getRandomAdditionQuestion(10000, 100001, skill, questionType);
    case Skill.ADDITION_6_DIGIT:
      return getRandomAdditionQuestion(100000, 1000001, skill, questionType);
    case Skill.ADDITION_HUNDREDTHS:
      return getRandomAdditionQuestion(0.01, 0.99, skill, questionType);
  }

  switch (skill) {
    case Skill.NUMBERS_50:
      return getRandomNumbersQuestion(1, 51, skill);
    case Skill.NUMBERS_200:
      return getRandomNumbersQuestion(1, 201, skill);
    case Skill.NUMBERS_1000:
      return getRandomNumbersQuestion(1, 1001, skill);
    case Skill.SUBTRACTION_SINGLE:
      return getRandomSubtractionQuestion(2, 11, skill, questionType);
    case Skill.SUBTRACTION_DOUBLE:
      return getRandomSubtractionQuestion(10, 101, skill, questionType);
    case Skill.SUBTRACTION_TRIPLE:
      return getRandomSubtractionQuestion(100, 1001, skill, questionType);
    case Skill.SUBTRACTION_4_DIGIT:
      return getRandomSubtractionQuestion(1000, 10001, skill, questionType);
    case Skill.SUBTRACTION_TENTHS:
      return getRandomSubtractionQuestion(0.1, 0.9, skill, questionType);
    case Skill.SUBTRACTION_5_DIGIT:
      return getRandomSubtractionQuestion(10000, 100001, skill, questionType);
    case Skill.SUBTRACTION_6_DIGIT:
      return getRandomSubtractionQuestion(100000, 1000001, skill, questionType);
    case Skill.SUBTRACTION_HUNDREDTHS:
      return getRandomSubtractionQuestion(0.01, 0.99, skill, questionType);
    case Skill.EQUAL_GROUP_10_ITEMS:
      return getRandomMultiplicationQuestion(1, 11, skill, questionType);
    case Skill.MULTIPLICATION_5:
      return getRandomMultiplicationQuestion(1, 6, skill, questionType);
    case Skill.MULTIPLICATION_10:
      return getRandomMultiplicationQuestion(6, 10, skill, questionType);
    case Skill.MULTIPLY_ONE_DIGIT_X_TWO_DIGIT:
      return getRandomMultiplicationQuestion(10, 100, skill, questionType);
    case Skill.MULTIPLY_ONE_DIGIT_X_THREE_DIGIT:
      return getRandomMultiplicationQuestion(100, 1000, skill, questionType);
    case Skill.MULTIPLICATION_10_BY_DOUBLE_DIGIT:
      return getRandomMultiplicationQuestion(10, 100, skill, questionType);
    case Skill.MULTIPLICATION_10_BY_TRIPLE_DIGIT:
      return getRandomMultiplicationQuestion(100, 1000, skill, questionType);
    case Skill.MULTIPLY_TWO_DIGIT_BY_TWO_DIGIT:
      return getRandomMultiplicationQuestion(10, 100, skill, questionType);
    case Skill.MULTIPLY_TWO_DIGIT_BY_THREE_DIGIT:
      return getRandomMultiplicationQuestion(100, 1000, skill, questionType);
    case Skill.MULTIPLY_THREE_DIGIT_BY_TENTH:
      return getRandomMultiplicationQuestion(100, 1000, skill, questionType);
    case Skill.EQUAL_SHARING_8_ITEMS:
      return getRandomDivisionQuestion(1, 5, skill, questionType);
    case Skill.DIVIDE_12_EQUALLY:
      return getRandomDivisionQuestion(1, 6, skill, questionType);
    case Skill.DIVIDE_100:
      return getRandomDivisionQuestion(1, 11, skill, questionType);
    //All division questions min and maxs are in respect to the dividend
    case Skill.DIVISION_TWO_DIGIT_BY_ONE_DIGIT:
      return getRandomDivisionQuestion(10, 100, skill, questionType);
    case Skill.DIVISION_THREE_DIGIT_BY_ONE_DIGIT:
      return getRandomDivisionQuestion(100, 1000, skill, questionType);
    case Skill.DIVISION_THREE_DIGIT_BY_TWO_DIGIT:
      return getRandomDivisionQuestion(100, 1000, skill, questionType);
    case Skill.DIVISION_THREE_DIGIT_BY_TENTH:
      return getRandomDivisionQuestion(100, 1000, skill, questionType);
    case Skill.FINANCE_BUDGET:
      return getRandomFinanceQuestion();
    case Skill.FINANCE_UNIT_PRICES:
      return {
        questionType: QuestionType.FINANCE_UNIT_PRICE_PROBLEM,
        text: "",
        answer: "",
        answerType: AnswerType.STRING,
        unitPriceModel: {
          total: 55,
          numberOfObjects: 5,
        },
      };
  }
};

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
  skill: Skill,
  questionType?: QuestionType
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
  //Randomizes QuestionType
  let typeIndex = getRndInteger(0, types.length);
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
  const type = questionType ? questionType : types[typeIndex];
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
    const randomAns = randomize(0, 2);
    switch (randomAns) {
      case 0:
        text = `${Math.max(a, b)} ${operator} ${Math.min(
          a,
          b
        )} = ${answerFunction(Math.max(a, b), Math.min(a, b))}`;
        trueFalseAnswer = "true";
        break;
      case 1:
        let randomDisplacement = randomize(-2, 3);
        while (randomDisplacement == 0) {
          randomDisplacement = randomize(-2, 3);
        }
        text = `${Math.max(a, b)} ${operator} ${Math.min(a, b)} = ${
          answerFunction(Math.max(a, b), Math.min(a, b)) + randomDisplacement
        }`;
        trueFalseAnswer = "false";
        break;
    }
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
    answer: type === QuestionType.TRUE_OR_FALSE_PROBLEM ? trueFalseAnswer : ans,
    answerType:
      type === QuestionType.TRUE_OR_FALSE_PROBLEM
        ? AnswerType.BOOLEAN
        : AnswerType.NUMBER,
    questionType: type,
    operator: operator,
    wordProblem: wordProblemModel,
    multipleChoice: multipleChoiceModel,
    skill: skill,
  };
}
