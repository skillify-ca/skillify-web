export enum Unit {
  NUMBERS = "numbers",
  ADDITION = "addition",
  SUBTRACTION = "subtraction",
  MULTIPLICATION = "multiplication",
  DIVISION = "division",
  FINANCE = "finance",
}

export const grades: Grade[] = [
  { title: "Grade 1", ordinal: 1 },
  { title: "Grade 2", ordinal: 2 },
  { title: "Grade 3", ordinal: 3 },
  { title: "Grade 4", ordinal: 4 },
  { title: "Grade 5", ordinal: 5 },
  { title: "Grade 6", ordinal: 6 },
];

export type Grade = {
  title: string;
  ordinal: number;
};

export type SkillData = {
  id: number;
  courseId: string;
  level: number;
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
  FINANCE_UNIT_PRICES = 101,
  FINANCE_SALES_TAX = 103,
  FINANCE_COMMISSIONS = 102,
  FINANCE_SIMPLE_INTEREST = 105,
  ALGEBRA_SOLVE_VARIABLE = 130,
}
