import { AnswerType, MCOption, Question } from "./question";
import { QuestionType } from "./questionTypes";
import { getRndDecimal, getRndInteger } from "./random";
import { createWordProblemModel } from "./WordProblemModel";
import { Skill } from "./skill";
import { getRandomPropertyAdditionQuestion } from "./additionPropertyQuestionGenerator";
import { shuffle } from "lodash";

export const generateQuestionForSkill = (skill: Skill): Question => {
  switch (skill) {
    case Skill.NUMBERS_50:
      return getRandomNumbersQuestion(1, 51, skill);
    case Skill.NUMBERS_200:
      return getRandomNumbersQuestion(1, 201, skill);
    case Skill.NUMBERS_1000:
      return getRandomNumbersQuestion(1, 1001, skill);
    case Skill.ADDITION_SINGLE:
      return getRandomAdditionQuestion(1, 11, skill);
    case Skill.ADDITION_DOUBLE:
      return getRandomAdditionQuestion(10, 101, skill);
    case Skill.ADDITION_TRIPLE:
      return getRandomAdditionQuestion(100, 1001, skill);
    case Skill.ADDITION_TENTHS:
      return getRandomAdditionQuestion(0.1, 0.9, skill);
    case Skill.ADDITION_4_DIGIT:
      return getRandomAdditionQuestion(1000, 10001, skill);
    case Skill.ADDITION_PROPERTIES:
      return getRandomPropertyAdditionQuestion(1, 15, skill);
    case Skill.SUBTRACTION_SINGLE:
      return getRandomSubtractionQuestion(2, 11, skill);
    case Skill.SUBTRACTION_DOUBLE:
      return getRandomSubtractionQuestion(10, 101, skill);
    case Skill.SUBTRACTION_TRIPLE:
      return getRandomSubtractionQuestion(100, 1001, skill);
    case Skill.SUBTRACTION_4_DIGIT:
      return getRandomSubtractionQuestion(1000, 10001, skill);
    case Skill.SUBTRACTION_TENTHS:
      return getRandomSubtractionQuestion(0.1, 0.9, skill);
    case Skill.EQUAL_GROUP_10_ITEMS:
      return getRandomMultiplicationQuestion(1, 11, skill);
    case Skill.MULTIPLICATION_5:
      return getRandomMultiplicationQuestion(1, 6, skill);
    case Skill.MULTIPLICATION_10:
      return getRandomMultiplicationQuestion(6, 10, skill);
    case Skill.MULTIPLY_ONE_DIGIT_X_TWO_DIGIT:
      return getRandomMultiplicationQuestion(10, 100, skill);
    case Skill.MULTIPLY_ONE_DIGIT_X_THREE_DIGIT:
      return getRandomMultiplicationQuestion(100, 1000, skill);
    case Skill.MULTIPLICATION_10_BY_DOUBLE_DIGIT:
      return getRandomMultiplicationQuestion(10, 100, skill);
    case Skill.MULTIPLICATION_10_BY_TRIPLE_DIGIT:
      return getRandomMultiplicationQuestion(100, 1000, skill);
    case Skill.EQUAL_SHARING_8_ITEMS:
      return getRandomDivisionQuestion(1, 5, skill);
    case Skill.DIVIDE_12_EQUALLY:
      return getRandomDivisionQuestion(1, 13, skill);
    case Skill.DIVIDE_100:
      return getRandomDivisionQuestion(1, 11, skill);
    case Skill.DIVISION_TWO_DIGIT_BY_ONE_DIGIT:
      return getRandomDivisionQuestion(10, 100, skill);
    case Skill.DIVISION_THREE_DIGIT_BY_ONE_DIGIT:
      return getRandomDivisionQuestion(100, 1000, skill);
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
    type = QuestionType.PATTERN_COUNT_BLANKS_PROBLEM;
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

    text = `Count ${displayPattern} by ${patternNum} from ${startNum}`;
    if (displayPattern == "FORWARDS") {
      answer = `${startNum},${startNum + patternNum},${
        startNum + patternNum * 2
      },${startNum + patternNum * 3}`;
    } else {
      answer = `${startNum},${startNum - patternNum},${
        startNum - patternNum * 2
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
  }

  return {
    text: text,
    answer: answer.toString(),
    answerType:
      type == QuestionType.COMPARISON_WORD_PROBLEM
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
  skill: Skill
) {
  let rndQuestionType = getRndInteger(0, 2);
  if (rndQuestionType > 0 && skill == Skill.ADDITION_SINGLE) {
    let a = getRndInteger(min, max);
    let b = getRndInteger(min, max);
    let text = `${a} + ${b} =`;

    return {
      text: text,
      answer: (a + b).toString(),
      answerType: AnswerType.STRING,
      questionType: QuestionType.VISUAL_TYPE_PROBLEM,
      operator: "+",
      skill: skill,
      displayNum: getRndInteger(0, 3),
    };
  }
  const add = (a: number, b: number) => a + b;
  return getRandomBinaryQuestion(min, max, "+", add, skill);
}
function getRandomSubtractionQuestion(min: number, max: number, skill: Skill) {
  const subtract = (a: number, b: number) => a - b;
  return getRandomBinaryQuestion(min, max, "-", subtract, skill);
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
    answer: (a * b).toString(),
    answerType: AnswerType.NUMBER,
    questionType: QuestionType.MULTIPLICATION_EQUAL_GROUPS,
    operator: "x",
    skill: skill,
  };
}
function getRandomMultiplicationQuestion(
  min: number,
  max: number,
  skill: Skill
) {
  const multiply = (a: number, b: number) => a * b;
  const randomPick = getRndInteger(0, 2);
  if (skill == Skill.MULTIPLICATION_5 && randomPick === 1) {
    const a = getRndInteger(1, 6);
    const b = getRndInteger(1, 6);
    return getArrayMultiplicationQuestion(a, b, skill);
  } else if (skill == Skill.EQUAL_GROUP_10_ITEMS) {
    const a = getRndInteger(1, 7);
    const b = getRndInteger(1, 11);
    return getMultiplicationEqualGroups(a, b, skill);
  }
  return getRandomBinaryQuestion(min, max, "x", multiply, skill);
}
function getRandomDivisionQuestion(
  min: number,
  max: number,
  skill: Skill
): Question {
  if (
    skill == Skill.DIVISION_TWO_DIGIT_BY_ONE_DIGIT ||
    skill == Skill.DIVISION_THREE_DIGIT_BY_ONE_DIGIT
  ) {
    const a = getRndInteger(1, 10);
    let b = 0;
    if (skill == Skill.DIVISION_TWO_DIGIT_BY_ONE_DIGIT) {
      b = getRndInteger(10, 100);
    } else {
      b = getRndInteger(100, 1000);
    }
    const type = QuestionType.LONG_DIVISION_PROBLEM;
    const text = `${b} / ${a} =`;
    let quotient = Math.floor(b / a);
    let remainder = b % a;
    const answer = `${quotient},${remainder}`;
    return {
      text: text,
      answer: answer,
      answerType: AnswerType.STRING,
      questionType: type,
      operator: "÷",
      skill: skill,
    };
  }

  const a = getRndInteger(min, max);
  const b = getRndInteger(min, max);
  const product = a * b;

  const text = `${product} / ${b} =`;
  const types = [
    QuestionType.LONG_DIVISION_PROBLEM,
    QuestionType.HORIZONTAL_EQUATION,
    QuestionType.BINARY_WORD_PROBLEM,
  ];
  const type = types[getRndInteger(0, types.length)];
  let wordProblemModel;

  if (type == QuestionType.BINARY_WORD_PROBLEM) {
    wordProblemModel = createWordProblemModel("÷");
  }
  return {
    text: text,
    answer: a.toString(),
    answerType: AnswerType.NUMBER,
    questionType: type,
    operator: "÷",
    wordProblem: wordProblemModel,
    skill: skill,
  };
}
export function randomize(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomBinaryQuestion(
  min: number,
  max: number,
  operator: string,
  answerFunction: (a: number, b: number) => number,
  skill: Skill
): Question {
  let types = [
    QuestionType.HORIZONTAL_EQUATION,
    QuestionType.BINARY_WORD_PROBLEM,
    QuestionType.VERTICAL_EQUATION,
    QuestionType.TRUE_OR_FALSE_PROBLEM,
    QuestionType.MULTIPLE_CHOICE,
  ];
  //Temporarily Disables True ann False, MC, and Word Problems for G4 Add and Subtract
  //TODO Redesign the logic for MC Question generator and T or F Questions
  if (skill == Skill.ADDITION_TENTHS || skill == Skill.SUBTRACTION_TENTHS) {
    types = [QuestionType.HORIZONTAL_EQUATION, QuestionType.VERTICAL_EQUATION];
  }
  let typeIndex = getRndInteger(0, types.length);
  let a = getRndInteger(min, max);
  let b = getRndInteger(min, max);
  if (skill == Skill.ADDITION_TENTHS || skill == Skill.SUBTRACTION_TENTHS) {
    a = getRndDecimal(min, max);
    b = getRndDecimal(min, max);
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
  }
  let text;
  let trueFalseAnswer;
  const type = types[typeIndex];
  let multipleChoiceModel;

  if (type === QuestionType.TRUE_OR_FALSE_PROBLEM) {
    const randomAns = randomize(0, 2);
    switch (randomAns) {
      case 0:
        text = `${Math.max(a, b)} ${operator} ${Math.min(
          a,
          b
        )} = ${answerFunction(Math.max(a, b), Math.min(a, b))}`;
        trueFalseAnswer = true;
        break;
      case 1:
        let randomDisplacement = randomize(-2, 3);
        while (randomDisplacement == 0) {
          randomDisplacement = randomize(-2, 3);
        }
        text = `${Math.max(a, b)} ${operator} ${Math.min(a, b)} = ${
          answerFunction(Math.max(a, b), Math.min(a, b)) + randomDisplacement
        }`;
        trueFalseAnswer = false;
        break;
    }
  } else if (type === QuestionType.MULTIPLE_CHOICE) {
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

  return {
    text: text,
    answer:
      type === QuestionType.TRUE_OR_FALSE_PROBLEM
        ? trueFalseAnswer
        : answerFunction(Math.max(a, b), Math.min(a, b)).toString(),
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
