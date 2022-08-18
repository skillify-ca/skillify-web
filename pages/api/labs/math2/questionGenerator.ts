import { Question } from "../../question";
import { Skill } from "../../skill";
import { getRandomDivisionQuestion } from "../../questions/division/divisionQuestionGenerator";
import { QuestionType } from "../../questionTypes";
import { getRandomBinaryQuestion } from "../../questions/questionGenerator";
import { getRndInteger, getRandomItemFromArray } from "../../random";
import { generateHorizontalEquationQuestion } from "../questionGenerators/horizontalEquationQuestion";
import { generateLongDivisionQuestion } from "../questionGenerators/longDivisionQuestion";
import { generateWordProblemQuestion } from "../questionGenerators/wordProblemQuestion";

const DEFAULT_QUESTIONT_TYPES = [
  QuestionType.HORIZONTAL_EQUATION,
  QuestionType.BINARY_WORD_PROBLEM,
  QuestionType.VERTICAL_EQUATION,
  QuestionType.TRUE_OR_FALSE_PROBLEM,
  QuestionType.MULTIPLE_CHOICE,
];

const MINIMUM_QUESTION_TYPES = [
  QuestionType.HORIZONTAL_EQUATION,
  QuestionType.VERTICAL_EQUATION,
];

export const generateQuestionForMath2Skill = (skill: Skill): Question => {
  // Addition skills
  switch (skill) {
    case Skill.ADDITION_TENTHS:
      return getRandomBinaryQuestion(
        0.1,
        0.9,
        "+",
        (a, b) => (a + b).toFixed(1),
        skill,
        MINIMUM_QUESTION_TYPES
      );
    case Skill.ADDITION_4_DIGIT:
      return getRandomBinaryQuestion(
        1000,
        10001,
        "+",
        (a, b) => a + b,
        skill,
        DEFAULT_QUESTIONT_TYPES
      );
    case Skill.ADDITION_5_DIGIT:
      return getRandomBinaryQuestion(
        10000,
        100001,
        "+",
        (a, b) => a + b,
        skill,
        DEFAULT_QUESTIONT_TYPES
      );
    case Skill.ADDITION_6_DIGIT:
      return getRandomBinaryQuestion(
        100000,
        1000001,
        "+",
        (a, b) => a + b,
        skill,
        DEFAULT_QUESTIONT_TYPES
      );
    case Skill.ADDITION_HUNDREDTHS:
      return getRandomBinaryQuestion(
        0.01,
        0.99,
        "+",
        (a, b) => (a + b).toFixed(2),
        skill,
        MINIMUM_QUESTION_TYPES
      );
  }

  // Subtraction Skills
  switch (skill) {
    case Skill.SUBTRACTION_4_DIGIT:
      return getRandomBinaryQuestion(
        1000,
        10001,
        "-",
        (a, b) => a - b,
        skill,
        DEFAULT_QUESTIONT_TYPES
      );
    case Skill.SUBTRACTION_TENTHS:
      return getRandomBinaryQuestion(
        0.1,
        0.9,
        "-",
        (a, b) => (a + b).toFixed(1),
        skill,
        MINIMUM_QUESTION_TYPES
      );
    case Skill.SUBTRACTION_5_DIGIT:
      return getRandomBinaryQuestion(
        10000,
        100001,
        "-",
        (a, b) => a - b,
        skill,
        DEFAULT_QUESTIONT_TYPES
      );
    case Skill.SUBTRACTION_6_DIGIT:
      return getRandomBinaryQuestion(
        100000,
        1000001,
        "-",
        (a, b) => a - b,
        skill,
        DEFAULT_QUESTIONT_TYPES
      );
    case Skill.SUBTRACTION_HUNDREDTHS:
      return getRandomBinaryQuestion(
        0.01,
        0.99,
        "-",
        (a, b) => (a + b).toFixed(2),
        skill,
        MINIMUM_QUESTION_TYPES
      );
  }

  // Multiplication Skills
  switch (skill) {
    case Skill.MULTIPLY_ONE_DIGIT_X_TWO_DIGIT:
      return getRandomBinaryQuestion(
        10,
        100,
        "X",
        (a, b) => a * b,
        skill,
        MINIMUM_QUESTION_TYPES
      );

    case Skill.MULTIPLY_ONE_DIGIT_X_THREE_DIGIT:
      return getRandomBinaryQuestion(
        100,
        1000,
        "X",
        (a, b) => a * b,
        skill,
        MINIMUM_QUESTION_TYPES
      );
    case Skill.MULTIPLICATION_10_BY_DOUBLE_DIGIT:
      return getRandomBinaryQuestion(
        10,
        100,
        "X",
        (a, b) => a * b,
        skill,
        MINIMUM_QUESTION_TYPES
      );
    case Skill.MULTIPLICATION_10_BY_TRIPLE_DIGIT:
      return getRandomBinaryQuestion(
        100,
        1000,
        "X",
        (a, b) => a * b,
        skill,
        MINIMUM_QUESTION_TYPES
      );
    case Skill.MULTIPLY_TWO_DIGIT_BY_TWO_DIGIT:
      return getRandomBinaryQuestion(
        10,
        100,
        "X",
        (a, b) => a * b,
        skill,
        MINIMUM_QUESTION_TYPES
      );
    case Skill.MULTIPLY_TWO_DIGIT_BY_THREE_DIGIT:
      return getRandomBinaryQuestion(
        100,
        1000,
        "X",
        (a, b) => a * b,
        skill,
        MINIMUM_QUESTION_TYPES
      );
    case Skill.MULTIPLY_THREE_DIGIT_BY_TENTH:
      return getRandomBinaryQuestion(
        100,
        1000,
        "X",
        (a, b) => (a + b).toFixed(1),
        skill,
        MINIMUM_QUESTION_TYPES
      );
  }

  // Division skills
  switch (skill) {
    //All division questions min and maxs are in respect to the dividend
    case Skill.DIVISION_TWO_DIGIT_BY_ONE_DIGIT:
      return getRandomDivisionQuestion(10, 100, skill);
    case Skill.DIVISION_THREE_DIGIT_BY_ONE_DIGIT:
      return getRandomDivisionQuestion(100, 1000, skill);
    case Skill.DIVISION_THREE_DIGIT_BY_TWO_DIGIT:
      return getRandomDivisionQuestion(100, 1000, skill);
    case Skill.DIVISION_THREE_DIGIT_BY_TENTH:
      return getRandomDivisionQuestion(100, 1000, skill);
  }
};

function getRandomDivisionQuestion(
  min: number,
  max: number,
  skill: Skill
): Question {
  const a = getRndInteger(min, max);
  const b = getRndInteger(min, max);
  const product = a * b;
  const types = [
    QuestionType.LONG_DIVISION_PROBLEM,
    QuestionType.HORIZONTAL_EQUATION,
    QuestionType.BINARY_WORD_PROBLEM,
  ];
  const type = getRandomItemFromArray(types);

  switch (type) {
    case QuestionType.LONG_DIVISION_PROBLEM:
      return generateLongDivisionQuestion(a, b);
    case QuestionType.HORIZONTAL_EQUATION:
      return generateHorizontalEquationQuestion(
        product,
        b,
        "÷",
        (x, y) => Math.floor(x / y),
        skill
      );
    case QuestionType.BINARY_WORD_PROBLEM:
      return generateWordProblemQuestion(product, b, "÷", (x, y) =>
        Math.floor(x / y)
      );
  }
}
