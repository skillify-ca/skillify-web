import { AnswerType, MCOption, Question } from "./question";
import { QuestionType } from "./questionTypes";
import {
  getRndHundredthsDecimal,
  getRndInteger,
  getRndTenthsDecimal,
} from "./random";
import { createWordProblemModel } from "./WordProblemModel";
import { Skill } from "./skill";
import { getRandomPropertyAdditionQuestion } from "./additionPropertyQuestionGenerator";
import { shuffle } from "lodash";
import { getRandomFinanceQuestion } from "./financeQuestionGenerator";

export const generateQuestionForSkill = (
  skill: Skill,
  questionType?: QuestionType
): Question => {
  switch (skill) {
    case Skill.NUMBERS_50:
      return getRandomNumbersQuestion(1, 51, skill);
    case Skill.NUMBERS_200:
      return getRandomNumbersQuestion(1, 201, skill);
    case Skill.NUMBERS_1000:
      return getRandomNumbersQuestion(1, 1001, skill);
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
      return getRandomMultiplicationQuestion(100, 1000, skill, questionType)
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
      return getRandomDivisionQuestion(100, 1000, skill, questionType)
    case Skill.FINANCE_BUDGET:
      return getRandomFinanceQuestion();
  }
};

export function getRandomNumbersQuestion(
  min: number,
  max: number,
  skill: Skill
): Question {
  console.log(skill);
  const types = [
    QuestionType.PATTERN_COUNT_BLANKS_PROBLEM,
    QuestionType.WORD_TO_HORIZONTAL_DIGITS,
    QuestionType.NUM_TO_VERITCAL_DIGITS,
    QuestionType.VERTICAL_DIGITS_TO_NUM,
    QuestionType.PATTERN_COUNT_BLANKS_PROBLEM,

    // QuestionType.COMPARISON_WORD_PROBLEM,
  ];
  let typeIndex = getRndInteger(0, types.length);
  let type = types[typeIndex];
  const a = getRndInteger(min, max);
  const b = getRndInteger(min, max);
  let text;
  let answer;
  let startNum = getRndInteger(a, b);

  if (skill == Skill.NUMBERS_50) {
    const typeArr = [
      QuestionType.PATTERN_COUNT_BLANKS_PROBLEM,
      QuestionType.COMPARISON_NUMBER_PROBLEM,
    ];
    let typeIndex = getRndInteger(0, typeArr.length);
    type = typeArr[typeIndex];
  }

  if (type == QuestionType.PATTERN_COUNT_BLANKS_PROBLEM) {
    let patternTypes = ["FORWARDS", "BACKWARDS"];
    let patternIndex = getRndInteger(0, patternTypes.length);
    let displayPattern = patternTypes[patternIndex];
    let patternNum = getRndInteger(1, 10);

    // prevents negative numbers appearing in pattern
    if (displayPattern == "BACKWARDS" && startNum - 3 * patternNum < 0) {
      displayPattern = "FORWARDS";
    }

    //

    text = `Count ${displayPattern} by ${patternNum} from ${startNum}`;
    if (displayPattern == "FORWARDS") {
      answer = `${startNum},${startNum + patternNum},${startNum + patternNum * 2
        },${startNum + patternNum * 3}`;
    } else {
      answer = `${startNum},${startNum - patternNum},${startNum - patternNum * 2
        },${startNum - patternNum * 3}`;
    }
  } else if (type == QuestionType.WORD_TO_HORIZONTAL_DIGITS) {
    if (skill == Skill.NUMBERS_200) {
      answer = [
        getRndInteger(0, 2),
        getRndInteger(0, 10),
        getRndInteger(0, 10),
      ];
    } else if ((skill = Skill.NUMBERS_1000)) {
      answer = [
        getRndInteger(0, 10),
        getRndInteger(0, 10),
        getRndInteger(0, 10),
      ];
    }
    text = stringNumCalc(answer);
  } else if (type == QuestionType.NUM_TO_VERITCAL_DIGITS) {
    if (skill == Skill.NUMBERS_200) {
      text = getRndInteger(0, 201).toString();
      answer = numtoDigitsArr(text);
    } else if ((skill = Skill.NUMBERS_1000)) {
      text = getRndInteger(0, 1001).toString();
      answer = numtoDigitsArr(text);
    }
  } else if (type == QuestionType.VERTICAL_DIGITS_TO_NUM) {
    if (skill == Skill.NUMBERS_200) {
      answer = [
        getRndInteger(0, 2),
        getRndInteger(0, 10),
        getRndInteger(0, 10),
      ];
    } else if ((skill = Skill.NUMBERS_1000)) {
      answer = [
        getRndInteger(0, 10),
        getRndInteger(0, 10),
        getRndInteger(0, 10),
      ];
      text = answer.join("");
    }
  } else if (type == QuestionType.COMPARISON_NUMBER_PROBLEM) {
    answer = Math.max(a, b);
    text = `${a},${b}`;
  }

  return {
    text: text,
    answer: answer.toString(),
    answerType:
      type == QuestionType.COMPARISON_NUMBER_PROBLEM
        ? AnswerType.STRING
        : AnswerType.ARRAY,
    questionType: type,
    skill: skill,
    arrayAns: answer,
    placeholder: startNum.toString(),
  };
}

//converts number as a string into an array of numbers

export function numtoDigitsArr(answer: string): number[] {
  const len = answer.length;
  let numArr = [];
  for (let i = 0; i < len; ++i) {
    numArr[i] = parseInt(answer[i]);
  }
  return numArr;
}

export function stringNumCalc(answer: number[]): string {
  const onesColWord = [
    "Zero",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
  ];

  const tensColWord = [
    [
      "Eleven",
      "Twelve",
      "Thirteen",
      "Fourteen",
      "Fifteen",
      "Sixteen",
      "Seventeen",
      "Eighteen",
      "Nineteen",
    ],
    "Ten",
    "Twenty",
    "Thirty",
    "Fourty",
    "Fifty",
    "Sixty",
    "Seventy",
    "Eighty",
    "Ninety",
  ];

  const hundredsColWord = [
    "one hundred",
    "two hundred",
    "three hundred",
    "four hundred",
    "five hundred",
    "six hundred",
    "seven hundred",
    "eight hundred",
    "nine hundred",
  ];

  const thousandscolWord = [
    "one thousand",
    "two thousand",
    "three thousand",
    "four thousand",
    "five thousand",
    "six thousand",
    "seven thousand",
    "eight thousand",
    "nine thousand",
  ];

  let hundredsString;
  let tensString;
  let onesString;

  if (answer[0] == 0) {
    hundredsString = "";
  } else {
    hundredsString = onesColWord[answer[0]] + " " + "Hundred";
  }

  if (tensString == null) {
    if (answer[1] == 0) {
      tensString = "";
    } else if (answer[1] == 1) {
      if (answer[2] == 0) {
        tensString = tensColWord[1];
        onesString = "";
      } else {
        tensString = tensColWord[0][answer[2] - 1];
        onesString = "";
      }
    } else {
      tensString = tensColWord[answer[1]];
    }
  }
  if (onesString == null) {
    if (answer[2] == 0) {
      onesString = "";
    } else {
      onesString = onesColWord[answer[2]];
    }
  }
  return hundredsString + " " + tensString + " " + onesString;
}
export function getRandomAdditionQuestion(
  min: number,
  max: number,
  skill: Skill,
  questionType?: QuestionType
) {
  let rndQuestionType = getRndInteger(0, 2);
  //Conditional for visual question types to be generated
  //Visual number types are only applied to Grade 1 Addition questions
  if (rndQuestionType == 0 && skill == Skill.ADDITION_SINGLE) {
    let a = getRndInteger(min, max);
    let b = getRndInteger(min, max);
    let text = `${a} + ${b} =`;

    return {
      text: text,
      answer: (a + b).toString(),
      answerType: AnswerType.STRING,
      questionType: questionType
        ? questionType
        : QuestionType.VISUAL_TYPE_PROBLEM,
      operator: "+",
      skill: skill,
      displayNum: getRndInteger(0, 3),
    };
  }
  //This function can be used to determine the sum of the two numbers passed in as arguments
  const add = (a: number, b: number) => a + b;
  return getRandomBinaryQuestion(min, max, "+", add, skill, questionType);
}

function getRandomSubtractionQuestion(
  min: number,
  max: number,
  skill: Skill,
  questionType?: QuestionType
) {
  const subtract = (a: number, b: number) => a - b;
  return getRandomBinaryQuestion(min, max, "-", subtract, skill, questionType);
}
export function getArrayMultiplicationQuestion(
  a: number,
  b: number,
  skill: Skill
): Question {
  let text = `${a} x ${b} =`;
  return {
    text: text,
    answer: (a * b).toString(),
    answerType: AnswerType.NUMBER,
    questionType: QuestionType.ARRAY_QUESTION,
    operator: "x",
    skill: skill,
  };
}
export function getMultiplicationEqualGroups(
  a: number,
  b: number,
  skill: Skill
): Question {
  let text = `${a} x ${b} =`;
  return {
    text: text,
    answer: `${a} groups of ${b}`,
    answerType: AnswerType.NUMBER,
    questionType: QuestionType.MULTIPLICATION_EQUAL_GROUPS,
    operator: "x",
    skill: skill,
  };
}

function getRandomMultiplicationQuestion(
  min: number,
  max: number,
  skill: Skill,
  questionType?: QuestionType
) {
  //This function can be used to determine the product of the two numbers passed in as arguments
  const multiply = (a: number, b: number) => a * b;
  let randomPick = getRndInteger(0, 2);
  if (questionType === QuestionType.ARRAY_QUESTION) {
    randomPick = 1;
  }
  //Conditional to generate Array Multiplication questions
  if (skill == Skill.MULTIPLICATION_5 && randomPick === 1) {
    const a = getRndInteger(1, 6);
    const b = getRndInteger(1, 6);
    return getArrayMultiplicationQuestion(a, b, skill);
    //Conditional to generate Equal Groups Multiplication questions
  } else if (skill == Skill.EQUAL_GROUP_10_ITEMS) {
    const a = getRndInteger(1, 7);
    const b = getRndInteger(1, 11);
    return getMultiplicationEqualGroups(a, b, skill);
  }
  return getRandomBinaryQuestion(min, max, "x", multiply, skill, questionType);
}

export function getRandomDivisionQuestion(
  min: number,
  max: number,
  skill: Skill,
  questionType?: QuestionType
): Question {
  let a;
  let b;
  if (
    skill == Skill.DIVISION_TWO_DIGIT_BY_ONE_DIGIT ||
    skill == Skill.DIVISION_THREE_DIGIT_BY_ONE_DIGIT ||
    skill == Skill.DIVISION_THREE_DIGIT_BY_TWO_DIGIT ||
    skill == Skill.DIVISION_THREE_DIGIT_BY_TENTH
  ) {
    a = getRndInteger(1, 10);
    b = getRndInteger(min, max);
    if (skill == Skill.DIVISION_THREE_DIGIT_BY_TWO_DIGIT) {
      a = getRndInteger(10, 100);
    } else if (skill == Skill.DIVISION_THREE_DIGIT_BY_TENTH) {
      a = getRndTenthsDecimal(0.1, 0.9);
    }
  } else {
    a = getRndInteger(min, max);
    b = getRndInteger(min, max);
  }
  return getDivisionQuestion(a, b, skill, questionType);
}

export function getDivisionQuestion(
  a: number,
  b: number,
  skill: Skill,
  questionType?: QuestionType
): Question {
  if (
    skill == Skill.DIVISION_TWO_DIGIT_BY_ONE_DIGIT ||
    skill == Skill.DIVISION_THREE_DIGIT_BY_ONE_DIGIT ||
    skill == Skill.DIVISION_THREE_DIGIT_BY_TWO_DIGIT ||
    skill == Skill.DIVISION_THREE_DIGIT_BY_TENTH
  ) {
    let type = QuestionType.LONG_DIVISION_PROBLEM;
    let quotient = Math.floor(b / a);
    let remainder = b % a;
    let answer;
    if (skill == Skill.DIVISION_THREE_DIGIT_BY_TENTH) {
      // Skill.DIVISION_THREE_DIGIT_BY_TENTH only allows for one QuestionType
      type = QuestionType.HORIZONTAL_EQUATION;
      //Answer only requires the quotient
      answer = `${quotient}`;
    } else {
      //Answer consists of both the quotient and remainder
      answer = `${quotient},${remainder}`;
    }

    const text = `${b} / ${a} =`;

    return {
      text: text,
      answer: answer,
      answerType: AnswerType.STRING,
      questionType: type,
      operator: "÷",
      skill: skill,
    };
  } else {
    const product = a * b;
    const text = `${product} / ${b} =`;
    const types = [
      QuestionType.LONG_DIVISION_PROBLEM,
      QuestionType.HORIZONTAL_EQUATION,
      QuestionType.BINARY_WORD_PROBLEM,
    ];
    const type = types[getRndInteger(0, types.length)];
    //undefined unless the QuestionType is BINARY_WORD_PROBLEM
    let wordProblemModel;

    if (
      type == QuestionType.BINARY_WORD_PROBLEM ||
      questionType === QuestionType.BINARY_WORD_PROBLEM
    ) {
      wordProblemModel = createWordProblemModel("÷");
    }
    return {
      text: text,
      answer: a.toString(),
      answerType: AnswerType.NUMBER,
      questionType: questionType ? questionType : type,
      operator: "÷",
      wordProblem: wordProblemModel,
      skill: skill,
    };
  }
}
export function randomize(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}

//function is used to generate addition, subtraction, and multiplication questions
function getRandomBinaryQuestion(
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
        text = `${Math.max(a, b)} ${operator} ${Math.min(a, b)} = ${answerFunction(Math.max(a, b), Math.min(a, b)) + randomDisplacement
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
