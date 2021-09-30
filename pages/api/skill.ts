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

export enum Grade {
  GRADE_1 = "Grade 1",
  GRADE_2 = "Grade 2",
  GRADE_3 = "Grade 3",
  GRADE_4 = "Grade 4",
  GRADE_5 = "Grade 5",
  GRADE_6 = "Grade 6",
}

export const getSkillsForUnit = (unit: Unit): Skill[] => {
  switch (unit) {
    case Unit.ADDITION:
      return [
        Skill.ADDITION_SINGLE,
        Skill.ADDITION_DOUBLE,
        Skill.ADDITION_TRIPLE,
        Skill.ADDITION_4_DIGIT,
        Skill.ADDITION_TENTHS,
        Skill.ADDITION_5_DIGIT,
        Skill.ADDITION_HUNDREDTHS,
      ];
    case Unit.SUBTRACTION:
      return [
        Skill.SUBTRACTION_SINGLE,
        Skill.SUBTRACTION_DOUBLE,
        Skill.SUBTRACTION_TRIPLE,
        Skill.SUBTRACTION_4_DIGIT,
        Skill.SUBTRACTION_TENTHS,
        Skill.SUBTRACTION_5_DIGIT,
        Skill.SUBTRACTION_HUNDREDTHS,
      ];
    case Unit.MULTIPLICATION:
      return [
        Skill.EQUAL_GROUP_10_ITEMS,
        Skill.MULTIPLICATION_5,
        Skill.MULTIPLICATION_10,
        Skill.MULTIPLY_ONE_DIGIT_X_TWO_DIGIT,
        Skill.MULTIPLY_ONE_DIGIT_X_THREE_DIGIT,
        Skill.MULTIPLICATION_10_BY_DOUBLE_DIGIT,
        Skill.MULTIPLICATION_10_BY_TRIPLE_DIGIT,
        Skill.MULTIPLY_TWO_DIGIT_BY_TWO_DIGIT,
        Skill.MULTIPLY_TWO_DIGIT_BY_THREE_DIGIT,
      ];
    case Unit.DIVISION:
      return [
        Skill.EQUAL_SHARING_8_ITEMS,
        Skill.DIVIDE_12_EQUALLY,
        Skill.DIVIDE_100,
        Skill.DIVISION_TWO_DIGIT_BY_ONE_DIGIT,
        Skill.DIVISION_THREE_DIGIT_BY_ONE_DIGIT,
        Skill.DIVISION_THREE_DIGIT_BY_TWO_DIGIT,
      ];
  }
  return [];
};

export const EMOJI_MASTERY = 66;
export function getEmoji(emojiNum: number | null) {
  if (emojiNum == null) {
    return "❓";
  } else if (emojiNum >= 0 && emojiNum <= 33) {
    return "😔";
  } else if (emojiNum >= 34 && emojiNum <= EMOJI_MASTERY) {
    return "😐";
  } else {
    return "😄";
  }
}
//SkillIds must match the ids found in the Skills table on Hasura
export function getSkillId(skill: Skill) {
  switch (skill) {
    case Skill.ADDITION_SINGLE:
      return 1;
    case Skill.ADDITION_DOUBLE:
      return 2;
    case Skill.ADDITION_TRIPLE:
      return 3;
    case Skill.ADDITION_PROPERTIES:
      return 4;
    case Skill.SUBTRACTION_SINGLE:
      return 34;
    case Skill.SUBTRACTION_DOUBLE:
      return 35;
    case Skill.SUBTRACTION_TRIPLE:
      return 36;
    case Skill.EQUAL_GROUP_10_ITEMS:
      return 37;
    case Skill.MULTIPLICATION_5:
      return 38;
    case Skill.MULTIPLICATION_10:
      return 39;
    case Skill.EQUAL_SHARING_8_ITEMS:
      return 40;
    case Skill.DIVIDE_12_EQUALLY:
      return 41;
    case Skill.DIVIDE_100:
      return 42;
    case Skill.ADDITION_4_DIGIT:
      return 43;
    case Skill.ADDITION_TENTHS:
      return 44;
    case Skill.SUBTRACTION_4_DIGIT:
      return 45;
    case Skill.SUBTRACTION_TENTHS:
      return 46;
    case Skill.MULTIPLY_ONE_DIGIT_X_TWO_DIGIT:
      return 51;
    case Skill.MULTIPLY_ONE_DIGIT_X_THREE_DIGIT:
      return 52;
    case Skill.MULTIPLICATION_10_BY_DOUBLE_DIGIT:
      return 47;
    case Skill.MULTIPLICATION_10_BY_TRIPLE_DIGIT:
      return 48;
    case Skill.DIVISION_TWO_DIGIT_BY_ONE_DIGIT:
      return 49;
    case Skill.DIVISION_THREE_DIGIT_BY_ONE_DIGIT:
      return 50;
    case Skill.NUMBERS_50:
      return 53;
    case Skill.NUMBERS_200:
      return 54;
    case Skill.NUMBERS_1000:
      return 55;
    case Skill.ADDITION_5_DIGIT:
      return 56;
    case Skill.ADDITION_HUNDREDTHS:
      return 57;
    case Skill.SUBTRACTION_5_DIGIT:
      return 58;
    case Skill.SUBTRACTION_HUNDREDTHS:
      return 59;
    case Skill.MULTIPLY_TWO_DIGIT_BY_TWO_DIGIT:
      return 60;
    case Skill.MULTIPLY_TWO_DIGIT_BY_THREE_DIGIT:
      return 61;
    case Skill.DIVISION_THREE_DIGIT_BY_TWO_DIGIT:
      return 62;
    case Skill.ADDITION_6_DIGIT:
      return 63;
    case Skill.SUBTRACTION_6_DIGIT:
      return 64;
    case Skill.MULTIPLY_THREE_DIGIT_BY_TENTH:
      return 65;
    case Skill.DIVISION_THREE_DIGIT_BY_TENTH:
      return 66;
  }
}

export const getSkillFromId = (skillId: number) => {
  switch (skillId) {
    case 1:
      return Skill.ADDITION_SINGLE;
    case 2:
      return Skill.ADDITION_DOUBLE;
    case 3:
      return Skill.ADDITION_TRIPLE;
    case 4:
      return Skill.ADDITION_PROPERTIES;
    case 34:
      return Skill.SUBTRACTION_SINGLE;
    case 35:
      return Skill.SUBTRACTION_DOUBLE;
    case 36:
      return Skill.SUBTRACTION_TRIPLE;
    case 37:
      return Skill.EQUAL_GROUP_10_ITEMS;
    case 38:
      return Skill.MULTIPLICATION_5;
    case 39:
      return Skill.MULTIPLICATION_10;
    case 40:
      return Skill.EQUAL_SHARING_8_ITEMS;
    case 41:
      return Skill.DIVIDE_12_EQUALLY;
    case 42:
      return Skill.DIVIDE_100;
    case 43:
      return Skill.ADDITION_4_DIGIT;
    case 44:
      return Skill.ADDITION_TENTHS;
    case 45:
      return Skill.SUBTRACTION_4_DIGIT;
    case 46:
      return Skill.SUBTRACTION_TENTHS;
    case 51:
      return Skill.MULTIPLY_ONE_DIGIT_X_TWO_DIGIT;
    case 52:
      return Skill.MULTIPLY_ONE_DIGIT_X_THREE_DIGIT;
    case 47:
      return Skill.MULTIPLICATION_10_BY_DOUBLE_DIGIT;
    case 48:
      return Skill.MULTIPLICATION_10_BY_TRIPLE_DIGIT;
    case 49:
      return Skill.DIVISION_TWO_DIGIT_BY_ONE_DIGIT;
    case 50:
      return Skill.DIVISION_THREE_DIGIT_BY_ONE_DIGIT;
    case 53:
      return Skill.NUMBERS_50;
    case 54:
      return Skill.NUMBERS_200;
    case 55:
      return Skill.NUMBERS_1000;
    case 56:
      return Skill.ADDITION_5_DIGIT;
    case 57:
      return Skill.ADDITION_HUNDREDTHS;
    case 58:
      return Skill.SUBTRACTION_5_DIGIT;
    case 59:
      return Skill.SUBTRACTION_HUNDREDTHS;
    case 60:
      return Skill.MULTIPLY_TWO_DIGIT_BY_TWO_DIGIT;
    case 61:
      return Skill.MULTIPLY_TWO_DIGIT_BY_THREE_DIGIT;
    case 62:
      return Skill.DIVISION_THREE_DIGIT_BY_TWO_DIGIT;
    case 63:
      return Skill.ADDITION_6_DIGIT;
    case 64:
      return Skill.SUBTRACTION_6_DIGIT;
    case 65:
      return Skill.MULTIPLY_THREE_DIGIT_BY_TENTH;
    case 66:
      return Skill.DIVISION_THREE_DIGIT_BY_TENTH;
  }
};

export enum Skill {
  NUMBERS_50 = "count-50",
  NUMBERS_200 = "count-200",
  NUMBERS_1000 = "count-1000",
  ADDITION_SINGLE = "add-one-digit",
  ADDITION_DOUBLE = "add-two-digit",
  ADDITION_TRIPLE = "add-three-digit",
  ADDITION_PROPERTIES = "addition-properties",
  SUBTRACTION_SINGLE = "subtract-single-digit",
  SUBTRACTION_DOUBLE = "subtract-double-digit",
  SUBTRACTION_TRIPLE = "subtract-triple-digit",
  EQUAL_GROUP_10_ITEMS = "total-items-equal-groups",
  MULTIPLICATION_5 = "multiply-5x5",
  MULTIPLICATION_10 = "multiply-10x10",
  EQUAL_SHARING_8_ITEMS = "share-8-equally",
  DIVIDE_12_EQUALLY = "divide-12-equally",
  DIVIDE_100 = "divide-100-equally",
  ADDITION_4_DIGIT = "add-four-digit",
  ADDITION_TENTHS = "add-tenths",
  SUBTRACTION_4_DIGIT = "subtract-four-digit",
  SUBTRACTION_TENTHS = "subtract-tenths",
  MULTIPLY_ONE_DIGIT_X_TWO_DIGIT = "multiply-single-and-double-digit",
  MULTIPLY_ONE_DIGIT_X_THREE_DIGIT = "multiply-single-and-triple-digit",
  MULTIPLICATION_10_BY_DOUBLE_DIGIT = "multiply-double-digit-by-10",
  MULTIPLICATION_10_BY_TRIPLE_DIGIT = "multiply-triple-digit-by-10",
  DIVISION_TWO_DIGIT_BY_ONE_DIGIT = "divide-double-digit-by-single-digit",
  DIVISION_THREE_DIGIT_BY_ONE_DIGIT = "divide-triple-digit-by-single-digit",
  MULTIPLY_TWO_DIGIT_BY_TWO_DIGIT = "multiply-double-and-double-digit",
  MULTIPLY_TWO_DIGIT_BY_THREE_DIGIT = "multiply-double-and-triple-digit",
  ADDITION_5_DIGIT = "add-five-digit",
  ADDITION_HUNDREDTHS = "add-hundredths",
  SUBTRACTION_5_DIGIT = "subtract-five-digit",
  SUBTRACTION_HUNDREDTHS = "subtract-hundredths",
  DIVISION_THREE_DIGIT_BY_TWO_DIGIT = "divide-triple-digit-by-double-digit",
  ADDITION_6_DIGIT = "add-six-digit",
  SUBTRACTION_6_DIGIT = "subtract-six-digit",
  MULTIPLY_THREE_DIGIT_BY_TENTH = "multiply-triple-digit-by-tenths",
  DIVISION_THREE_DIGIT_BY_TENTH = "divide-triple-digit-by-tenths",
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
  }
};
export const questionSetGenerator = (quantity: number) => {
  let questions = [];
  for (let index = 0; index < quantity; index++) {
    questions.push(generateQuestionForSkill(randomSkillSelector()));
  }
  return questions;
};
