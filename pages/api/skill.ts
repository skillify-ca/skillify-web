import { QuestionTypeForSkill } from "../../components/assignment-creator/assignmentCreationForm";
import { generateQuestionForSkill } from "./questionGenerator";
import { QuestionType } from "./questionTypes";
import { getRndInteger } from "./random";

export enum Unit {
  NUMBERS = "numbers",
  ADDITION = "addition",
  SUBTRACTION = "subtraction",
  MULTIPLICATION = "multiplication",
  DIVISION = "division",
  FINANCE = "finance",
}

export const grades: Grade[] = [
  {title: "Grade 1", ordinal: 1},
  {title: "Grade 2", ordinal: 2},
  {title: "Grade 3", ordinal: 3},
  {title: "Grade 4", ordinal: 4},
  {title: "Grade 5", ordinal: 5},
  {title: "Grade 6", ordinal: 6},
]

export type Grade = {
  title: string;
  ordinal: number;
}

export type SkillData = {
  id: number;
  grade: number;
  description: string;
  unit: string;
  published: boolean;
};

export const EMOJI_MASTERY = 66;
export function getEmoji(emojiNum: number | null) {
  if (emojiNum === undefined) {
    console.error("Error getting emoji value.");
    return "⁉️";
  } else if (emojiNum === null) {
    return "❓";
  } else if (emojiNum >= 0 && emojiNum <= 33) {
    return "😔";
  } else if (emojiNum >= 34 && emojiNum <= EMOJI_MASTERY) {
    return "😐";
  } else {
    return "😄";
  }
}

export enum Skill {
  ADDITION_SINGLE = 1,
  ADDITION_DOUBLE = 2,
  ADDITION_TRIPLE = 3,
  ADDITION_PROPERTIES = 4,
  SUBTRACTION_SINGLE = 34,
  SUBTRACTION_DOUBLE = 35,
  SUBTRACTION_TRIPLE = 36,
  EQUAL_GROUP_10_ITEMS = 37,
  MULTIPLICATION_5 = 38,
  MULTIPLICATION_10 = 39,
  EQUAL_SHARING_8_ITEMS = 40,
  DIVIDE_12_EQUALLY = 41,
  DIVIDE_100 = 42,
  ADDITION_4_DIGIT = 43,
  ADDITION_TENTHS = 44,
  SUBTRACTION_4_DIGIT = 45,
  SUBTRACTION_TENTHS = 46,
  MULTIPLY_ONE_DIGIT_X_TWO_DIGIT = 51,
  MULTIPLY_ONE_DIGIT_X_THREE_DIGIT = 52,
  NUMBERS_50 = 53,
  NUMBERS_200 = 54,
  NUMBERS_1000 = 55,
  MULTIPLICATION_10_BY_DOUBLE_DIGIT = 47,
  MULTIPLICATION_10_BY_TRIPLE_DIGIT = 48,
  DIVISION_TWO_DIGIT_BY_ONE_DIGIT = 49,
  DIVISION_THREE_DIGIT_BY_ONE_DIGIT = 50,
  MULTIPLY_TWO_DIGIT_BY_TWO_DIGIT = 60,
  MULTIPLY_TWO_DIGIT_BY_THREE_DIGIT = 61,
  ADDITION_5_DIGIT = 56,
  ADDITION_HUNDREDTHS = 57,
  SUBTRACTION_5_DIGIT = 58,
  SUBTRACTION_HUNDREDTHS = 59,
  DIVISION_THREE_DIGIT_BY_TWO_DIGIT = 62,
  ADDITION_6_DIGIT = 63,
  SUBTRACTION_6_DIGIT = 64,
  MULTIPLY_THREE_DIGIT_BY_TENTH = 65,
  DIVISION_THREE_DIGIT_BY_TENTH = 66,
  FINANCE_BUDGET = 67,
}

export function getQuestionTypesForSkill(skill: Skill): QuestionType[] {
  if (skill == Skill.ADDITION_SINGLE) {
    return [
      QuestionType.HORIZONTAL_EQUATION,
      QuestionType.VERTICAL_EQUATION,
      QuestionType.BINARY_WORD_PROBLEM,
      QuestionType.TRUE_OR_FALSE_PROBLEM,
      QuestionType.MULTIPLE_CHOICE,
    ];
  } else if (skill == Skill.ADDITION_DOUBLE) {
    return [
      QuestionType.HORIZONTAL_EQUATION,
      QuestionType.VERTICAL_EQUATION,
      QuestionType.BINARY_WORD_PROBLEM,
      QuestionType.TRUE_OR_FALSE_PROBLEM,
      QuestionType.MULTIPLE_CHOICE,
    ];
  } else if (skill == Skill.ADDITION_TRIPLE) {
    return [
      QuestionType.HORIZONTAL_EQUATION,
      QuestionType.VERTICAL_EQUATION,
      QuestionType.BINARY_WORD_PROBLEM,
      QuestionType.TRUE_OR_FALSE_PROBLEM,
      QuestionType.MULTIPLE_CHOICE,
    ];
  } else if (skill == Skill.ADDITION_PROPERTIES) {
    return [QuestionType.MULTIPLE_CHOICE_WORD];
  } else if (skill == Skill.ADDITION_4_DIGIT) {
    return [
      QuestionType.HORIZONTAL_EQUATION,
      QuestionType.VERTICAL_EQUATION,
      QuestionType.BINARY_WORD_PROBLEM,
      QuestionType.TRUE_OR_FALSE_PROBLEM,
      QuestionType.MULTIPLE_CHOICE,
    ];
  } else if (skill == Skill.ADDITION_TENTHS) {
    return [QuestionType.HORIZONTAL_EQUATION, QuestionType.VERTICAL_EQUATION];
  } else if (skill == Skill.ADDITION_5_DIGIT) {
    return [
      QuestionType.HORIZONTAL_EQUATION,
      QuestionType.VERTICAL_EQUATION,
      QuestionType.BINARY_WORD_PROBLEM,
      QuestionType.TRUE_OR_FALSE_PROBLEM,
      QuestionType.MULTIPLE_CHOICE,
    ];
  } else if (skill == Skill.ADDITION_6_DIGIT) {
    return [
      QuestionType.HORIZONTAL_EQUATION,
      QuestionType.VERTICAL_EQUATION,
      QuestionType.BINARY_WORD_PROBLEM,
      QuestionType.TRUE_OR_FALSE_PROBLEM,
      QuestionType.MULTIPLE_CHOICE,
    ];
  } else if (skill == Skill.ADDITION_HUNDREDTHS) {
    return [QuestionType.HORIZONTAL_EQUATION, QuestionType.VERTICAL_EQUATION];
  } else if (skill == Skill.SUBTRACTION_SINGLE) {
    return [
      QuestionType.HORIZONTAL_EQUATION,
      QuestionType.VERTICAL_EQUATION,
      QuestionType.BINARY_WORD_PROBLEM,
      QuestionType.TRUE_OR_FALSE_PROBLEM,
      QuestionType.MULTIPLE_CHOICE,
    ];
  } else if (skill == Skill.SUBTRACTION_DOUBLE) {
    return [
      QuestionType.HORIZONTAL_EQUATION,
      QuestionType.VERTICAL_EQUATION,
      QuestionType.BINARY_WORD_PROBLEM,
      QuestionType.TRUE_OR_FALSE_PROBLEM,
      QuestionType.MULTIPLE_CHOICE,
    ];
  } else if (skill == Skill.SUBTRACTION_TRIPLE) {
    return [
      QuestionType.HORIZONTAL_EQUATION,
      QuestionType.VERTICAL_EQUATION,
      QuestionType.BINARY_WORD_PROBLEM,
      QuestionType.TRUE_OR_FALSE_PROBLEM,
      QuestionType.MULTIPLE_CHOICE,
    ];
  } else if (skill == Skill.SUBTRACTION_4_DIGIT) {
    return [
      QuestionType.HORIZONTAL_EQUATION,
      QuestionType.VERTICAL_EQUATION,
      QuestionType.BINARY_WORD_PROBLEM,
      QuestionType.TRUE_OR_FALSE_PROBLEM,
      QuestionType.MULTIPLE_CHOICE,
    ];
  } else if (skill == Skill.SUBTRACTION_5_DIGIT) {
    return [
      QuestionType.HORIZONTAL_EQUATION,
      QuestionType.VERTICAL_EQUATION,
      QuestionType.BINARY_WORD_PROBLEM,
      QuestionType.TRUE_OR_FALSE_PROBLEM,
      QuestionType.MULTIPLE_CHOICE,
    ];
  } else if (Skill.SUBTRACTION_6_DIGIT) {
    return [
      QuestionType.HORIZONTAL_EQUATION,
      QuestionType.VERTICAL_EQUATION,
      QuestionType.BINARY_WORD_PROBLEM,
      QuestionType.TRUE_OR_FALSE_PROBLEM,
      QuestionType.MULTIPLE_CHOICE,
    ];
  } else if (skill == Skill.SUBTRACTION_TENTHS) {
    return [QuestionType.HORIZONTAL_EQUATION, QuestionType.VERTICAL_EQUATION];
  } else if (skill == Skill.SUBTRACTION_HUNDREDTHS) {
    return [QuestionType.HORIZONTAL_EQUATION, QuestionType.VERTICAL_EQUATION];
  } else if (skill == Skill.EQUAL_GROUP_10_ITEMS) {
    return [QuestionType.MULTIPLICATION_EQUAL_GROUPS];
  } else if (skill == Skill.MULTIPLICATION_5) {
    return [
      QuestionType.HORIZONTAL_EQUATION,
      QuestionType.VERTICAL_EQUATION,
      QuestionType.ARRAY_QUESTION,
    ];
  } else if (skill == Skill.MULTIPLICATION_10) {
    return [
      QuestionType.HORIZONTAL_EQUATION,
      QuestionType.VERTICAL_EQUATION,
      QuestionType.BINARY_WORD_PROBLEM,
      QuestionType.TRUE_OR_FALSE_PROBLEM,
      QuestionType.MULTIPLE_CHOICE,
    ];
  } else if (skill == Skill.MULTIPLY_ONE_DIGIT_X_TWO_DIGIT) {
    return [
      QuestionType.HORIZONTAL_EQUATION,
      QuestionType.VERTICAL_EQUATION,
      QuestionType.BINARY_WORD_PROBLEM,
      QuestionType.TRUE_OR_FALSE_PROBLEM,
      QuestionType.MULTIPLE_CHOICE,
    ];
  } else if (skill == Skill.MULTIPLY_ONE_DIGIT_X_THREE_DIGIT) {
    return [
      QuestionType.HORIZONTAL_EQUATION,
      QuestionType.VERTICAL_EQUATION,
      QuestionType.BINARY_WORD_PROBLEM,
      QuestionType.TRUE_OR_FALSE_PROBLEM,
      QuestionType.MULTIPLE_CHOICE,
    ];
  } else if (skill == Skill.MULTIPLICATION_10_BY_DOUBLE_DIGIT) {
    return [
      QuestionType.HORIZONTAL_EQUATION,
      QuestionType.VERTICAL_EQUATION,
      QuestionType.BINARY_WORD_PROBLEM,
      QuestionType.TRUE_OR_FALSE_PROBLEM,
      QuestionType.MULTIPLE_CHOICE,
    ];
  } else if (skill == Skill.MULTIPLICATION_10_BY_TRIPLE_DIGIT) {
    return [
      QuestionType.HORIZONTAL_EQUATION,
      QuestionType.VERTICAL_EQUATION,
      QuestionType.BINARY_WORD_PROBLEM,
      QuestionType.TRUE_OR_FALSE_PROBLEM,
      QuestionType.MULTIPLE_CHOICE,
    ];
  } else if (skill == Skill.MULTIPLY_TWO_DIGIT_BY_TWO_DIGIT) {
    return [
      QuestionType.HORIZONTAL_EQUATION,
      QuestionType.VERTICAL_EQUATION,
      QuestionType.BINARY_WORD_PROBLEM,
      QuestionType.TRUE_OR_FALSE_PROBLEM,
      QuestionType.MULTIPLE_CHOICE,
    ];
  } else if (skill == Skill.MULTIPLY_THREE_DIGIT_BY_TENTH) {
    return [
      QuestionType.HORIZONTAL_EQUATION,
      QuestionType.VERTICAL_EQUATION,
      QuestionType.BINARY_WORD_PROBLEM,
      QuestionType.TRUE_OR_FALSE_PROBLEM,
      QuestionType.MULTIPLE_CHOICE,
    ];
  } else if (skill == Skill.MULTIPLY_TWO_DIGIT_BY_THREE_DIGIT) {
    return [
      QuestionType.HORIZONTAL_EQUATION,
      QuestionType.VERTICAL_EQUATION,
      QuestionType.BINARY_WORD_PROBLEM,
      QuestionType.TRUE_OR_FALSE_PROBLEM,
      QuestionType.MULTIPLE_CHOICE,
    ];
  } else if (skill == Skill.EQUAL_SHARING_8_ITEMS) {
    return [
      QuestionType.HORIZONTAL_EQUATION,
      QuestionType.LONG_DIVISION_PROBLEM,
      QuestionType.BINARY_WORD_PROBLEM,
    ];
  } else if (skill == Skill.DIVIDE_12_EQUALLY) {
    return [
      QuestionType.HORIZONTAL_EQUATION,
      QuestionType.LONG_DIVISION_PROBLEM,
      QuestionType.BINARY_WORD_PROBLEM,
    ];
  } else if (skill == Skill.DIVIDE_100) {
    return [
      QuestionType.HORIZONTAL_EQUATION,
      QuestionType.LONG_DIVISION_PROBLEM,
      QuestionType.BINARY_WORD_PROBLEM,
    ];
  } else if (skill == Skill.DIVISION_TWO_DIGIT_BY_ONE_DIGIT) {
    return [QuestionType.LONG_DIVISION_PROBLEM];
  } else if (skill == Skill.DIVISION_THREE_DIGIT_BY_ONE_DIGIT) {
    return [QuestionType.LONG_DIVISION_PROBLEM];
  } else if (skill == Skill.DIVISION_THREE_DIGIT_BY_TWO_DIGIT) {
    return [QuestionType.LONG_DIVISION_PROBLEM];
  } else if (skill == Skill.DIVISION_THREE_DIGIT_BY_TENTH) {
    return [QuestionType.LONG_DIVISION_PROBLEM];
  } else if (skill == Skill.FINANCE_BUDGET) {
    return [
      QuestionType.FINANCE_BUDGET_TABLE_PROBLEM,
      QuestionType.FINANCE_TIP_PROBLEM,
      QuestionType.FINANCE_BALANCE_BUDGET_PROBLEM,
    ];
  } else {
    return [QuestionType.HORIZONTAL_EQUATION, QuestionType.VERTICAL_EQUATION];
  }
}

type PracticeCardMetadata = {
  link: string;
};
const randomSkillSelector = () => {
  const randomSkillNumber = getRndInteger(1, 24);
  switch (randomSkillNumber) {
    case 1:
      return Skill.ADDITION_SINGLE;
    case 2:
      return Skill.ADDITION_DOUBLE;
    case 3:
      return Skill.ADDITION_TRIPLE;
    case 4:
      return Skill.ADDITION_PROPERTIES;
    case 5:
      return Skill.ADDITION_4_DIGIT;
    case 6:
      return Skill.ADDITION_TENTHS;
    case 7:
      return Skill.SUBTRACTION_SINGLE;
    case 8:
      return Skill.SUBTRACTION_DOUBLE;
    case 9:
      return Skill.SUBTRACTION_TRIPLE;
    case 10:
      return Skill.SUBTRACTION_4_DIGIT;
    case 11:
      return Skill.SUBTRACTION_TENTHS;
    case 12:
      return Skill.MULTIPLICATION_5;
    case 13:
      return Skill.MULTIPLICATION_10;
    case 14:
      return Skill.MULTIPLICATION_10_BY_DOUBLE_DIGIT;
    case 15:
      return Skill.MULTIPLICATION_10_BY_TRIPLE_DIGIT;
    case 16:
      return Skill.MULTIPLY_ONE_DIGIT_X_TWO_DIGIT;
    case 17:
      return Skill.MULTIPLY_ONE_DIGIT_X_THREE_DIGIT;
    case 18:
      return Skill.DIVIDE_12_EQUALLY;
    case 19:
      return Skill.DIVIDE_100;
    case 20:
      return Skill.DIVISION_TWO_DIGIT_BY_ONE_DIGIT;
    case 21:
      return Skill.DIVISION_THREE_DIGIT_BY_ONE_DIGIT;
    case 22:
      return Skill.NUMBERS_50;
    case 23:
      return Skill.NUMBERS_200;
    case 24:
      return Skill.NUMBERS_1000;
    case 25:
      return Skill.FINANCE_BUDGET;
  }
};
export const questionSetGenerator = (quantity: number) => {
  let questions = [];
  for (let index = 0; index < quantity; index++) {
    questions.push(generateQuestionForSkill(randomSkillSelector()));
  }
  return questions;
};
