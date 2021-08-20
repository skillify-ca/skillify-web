import { generateQuestionForSkill } from "./questionGenerator";
import { getRndInteger } from "./random";

export enum Topic {
  NUMBERS = "numbers",
  ADDITION = "addition",
  SUBTRACTION = "subtraction",
  MULTIPLICATION = "multiplication",
  DIVISION = "division",
}

export enum Grade {
  GRADE_1 = "Grade 1",
  GRADE_2 = "Grade 2",
  GRADE_3 = "Grade 3",
  GRADE_4 = "Grade 4",
  GRADE_5 = "Grade 5",
  GRADE_6 = "Grade 6",
}

export const getSkillsForTopic = (topic: Topic): Skill[] => {
  switch (topic) {
    case Topic.ADDITION:
      return [
        Skill.ADDITION_SINGLE,
        Skill.ADDITION_DOUBLE,
        Skill.ADDITION_TRIPLE,
        Skill.ADDITION_4_DIGIT,
        Skill.ADDITION_TENTHS,
        Skill.ADDITION_5_DIGIT,
        Skill.ADDITION_HUNDREDTHS,
      ];
    case Topic.SUBTRACTION:
      return [
        Skill.SUBTRACTION_SINGLE,
        Skill.SUBTRACTION_DOUBLE,
        Skill.SUBTRACTION_TRIPLE,
        Skill.SUBTRACTION_4_DIGIT,
        Skill.SUBTRACTION_TENTHS,
        Skill.SUBTRACTION_5_DIGIT,
        Skill.SUBTRACTION_HUNDREDTHS,
      ];
    case Topic.MULTIPLICATION:
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
    case Topic.DIVISION:
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

export const getSkillsForTopicGrade = (topic: Topic, grade: Grade): Skill[] => {
  if (topic == Topic.NUMBERS) {
    if (grade == Grade.GRADE_1) {
      return [Skill.NUMBERS_50];
    } else if (grade == Grade.GRADE_2) {
      return [Skill.NUMBERS_200];
    } else {
      return [Skill.NUMBERS_1000];
    }
  } else if (topic == Topic.ADDITION) {
    if (grade == Grade.GRADE_1) {
      return [Skill.ADDITION_SINGLE];
    } else if (grade == Grade.GRADE_2) {
      return [Skill.ADDITION_DOUBLE];
    } else if (grade == Grade.GRADE_3) {
      return [Skill.ADDITION_TRIPLE, Skill.ADDITION_PROPERTIES];
    } else if (grade == Grade.GRADE_4) {
      return [Skill.ADDITION_4_DIGIT, Skill.ADDITION_TENTHS];
    } else if (grade == Grade.GRADE_5) {
      return [Skill.ADDITION_5_DIGIT, Skill.ADDITION_HUNDREDTHS];
    } else {
      return [Skill.ADDITION_6_DIGIT];
    }
  } else if (topic == Topic.SUBTRACTION) {
    if (grade == Grade.GRADE_1) {
      return [Skill.SUBTRACTION_SINGLE];
    } else if (grade == Grade.GRADE_2) {
      return [Skill.SUBTRACTION_DOUBLE];
    } else if (grade == Grade.GRADE_3) {
      return [Skill.SUBTRACTION_TRIPLE];
    } else if (grade == Grade.GRADE_4) {
      return [Skill.SUBTRACTION_4_DIGIT, Skill.SUBTRACTION_TENTHS];
    } else if (grade == Grade.GRADE_5) {
      return [Skill.SUBTRACTION_5_DIGIT, Skill.SUBTRACTION_HUNDREDTHS];
    } else {
      return [Skill.SUBTRACTION_6_DIGIT];
    }
  } else if (topic == Topic.MULTIPLICATION) {
    if (grade == Grade.GRADE_1) {
      return [Skill.EQUAL_GROUP_10_ITEMS];
    } else if (grade == Grade.GRADE_2) {
      return [Skill.MULTIPLICATION_5];
    } else if (grade == Grade.GRADE_3) {
      return [Skill.MULTIPLICATION_10];
    } else if (grade == Grade.GRADE_4) {
      return [
        Skill.MULTIPLY_ONE_DIGIT_X_TWO_DIGIT,
        Skill.MULTIPLY_ONE_DIGIT_X_THREE_DIGIT,
        Skill.MULTIPLICATION_10_BY_DOUBLE_DIGIT,
        Skill.MULTIPLICATION_10_BY_TRIPLE_DIGIT,
      ];
    } else if (grade == Grade.GRADE_5) {
      return [
        Skill.MULTIPLY_TWO_DIGIT_BY_TWO_DIGIT,
        Skill.MULTIPLY_TWO_DIGIT_BY_THREE_DIGIT,
      ];
    } else {
      return [Skill.MULTIPLY_THREE_DIGIT_BY_TENTH];
    }
  } else if (topic == Topic.DIVISION) {
    if (grade == Grade.GRADE_1) {
      return [Skill.EQUAL_SHARING_8_ITEMS];
    } else if (grade == Grade.GRADE_2) {
      return [Skill.DIVIDE_12_EQUALLY];
    } else if (grade == Grade.GRADE_3) {
      return [Skill.DIVIDE_100];
    } else if (grade == Grade.GRADE_4) {
      return [
        Skill.DIVISION_TWO_DIGIT_BY_ONE_DIGIT,
        Skill.DIVISION_THREE_DIGIT_BY_ONE_DIGIT,
      ];
    } else if (grade == Grade.GRADE_5) {
      return [Skill.DIVISION_THREE_DIGIT_BY_TWO_DIGIT];
    } else {
      return [Skill.DIVISION_THREE_DIGIT_BY_TENTH];
    }
  }
  return [];
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

export function SkillDescription(skill: Skill) {
  if (skill == Skill.NUMBERS_50) {
    return "Count to 50";
  } else if (skill == Skill.NUMBERS_200) {
    return "Count to 200";
  } else if (skill == Skill.NUMBERS_1000) {
    return "Count to 1000";
  } else if (skill == Skill.ADDITION_SINGLE) {
    return "Add one digit numbers";
  } else if (skill == Skill.ADDITION_DOUBLE) {
    return "Add two digit numbers";
  } else if (skill == Skill.ADDITION_TRIPLE) {
    return "Add three digit numbers";
  } else if (skill == Skill.ADDITION_PROPERTIES) {
    return "Add using addition properties";
  } else if (skill == Skill.ADDITION_4_DIGIT) {
    return "Add four digit numbers";
  } else if (skill == Skill.ADDITION_TENTHS) {
    return "Add tenths together";
  } else if (skill == Skill.SUBTRACTION_SINGLE) {
    return "Subtract single digit numbers";
  } else if (skill == Skill.SUBTRACTION_DOUBLE) {
    return "Subtract double digit numbers";
  } else if (skill == Skill.SUBTRACTION_TRIPLE) {
    return "Subtract triple digit numbers";
  } else if (skill == Skill.SUBTRACTION_4_DIGIT) {
    return "Subtract four digit numbers";
  } else if (skill == Skill.SUBTRACTION_TENTHS) {
    return "Subtract tenths from each other";
  } else if (skill == Skill.EQUAL_GROUP_10_ITEMS) {
    return "Identify total items in equal groups";
  } else if (skill == Skill.MULTIPLICATION_5) {
    return "Multiply numbers up to 5x5";
  } else if (skill == Skill.MULTIPLICATION_10) {
    return "Multiply numbers up to 10x10";
  } else if (skill == Skill.EQUAL_SHARING_8_ITEMS) {
    return "Share up to 8 items equally";
  } else if (skill == Skill.DIVIDE_12_EQUALLY) {
    return "Divide numbers up to 12 equally";
  } else if (skill == Skill.DIVIDE_100) {
    return "Divide numbers up to 100 equally";
  } else if (skill == Skill.MULTIPLY_ONE_DIGIT_X_TWO_DIGIT) {
    return "Multiply single digit numbers with double digit numbers";
  } else if (skill == Skill.MULTIPLY_ONE_DIGIT_X_THREE_DIGIT) {
    return "Multiply single digit numbers with triple digit numbers";
  } else if (skill == Skill.MULTIPLICATION_10_BY_DOUBLE_DIGIT) {
    return "Multiply double digit numbers with 10";
  } else if (skill == Skill.MULTIPLICATION_10_BY_TRIPLE_DIGIT) {
    return "Multiply triple digit numbers with 10";
  } else if (skill == Skill.DIVISION_TWO_DIGIT_BY_ONE_DIGIT) {
    return "Divide double digit numbers by single digit numbers";
  } else if (skill == Skill.DIVISION_THREE_DIGIT_BY_ONE_DIGIT) {
    return "Divide triple digit numbers by single digit numbers";
  } else if (skill == Skill.MULTIPLY_TWO_DIGIT_BY_TWO_DIGIT) {
    return "Multiply double digit numbers with double digit numbers";
  } else if (skill == Skill.MULTIPLY_TWO_DIGIT_BY_THREE_DIGIT) {
    return "Multiply double digit numbers with triple digit numbers";
  } else if (skill == Skill.ADDITION_5_DIGIT) {
    return "Add five digit numbers";
  } else if (skill == Skill.ADDITION_HUNDREDTHS) {
    return "Add hundreths together";
  } else if (skill == Skill.SUBTRACTION_5_DIGIT) {
    return "Subtract five digit numbers";
  } else if (skill == Skill.SUBTRACTION_HUNDREDTHS) {
    return "Subtract hundreths together";
  } else if (skill == Skill.DIVISION_THREE_DIGIT_BY_TWO_DIGIT) {
    return "Divide triple digit numbers by double digit numbers";
  } else if (skill == Skill.ADDITION_6_DIGIT) {
    return "Add six digit numbers together";
  } else if (skill == Skill.SUBTRACTION_6_DIGIT) {
    return "Subtract six digit numbers together";
  } else if (skill == Skill.MULTIPLY_THREE_DIGIT_BY_TENTH) {
    return "Multiply triple digit numbers by tenths";
  } else if (skill == Skill.DIVISION_THREE_DIGIT_BY_TENTH) {
    return "Divide triple digit numbers by tenths";
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

// emoji confidence rating is hardcoded right now but won't be later
export const getPracticeCardForSkill = (
  skill: Skill
): PracticeCardMetadata[] => {
  switch (skill) {
    case Skill.NUMBERS_50:
    case Skill.NUMBERS_200:
    case Skill.NUMBERS_1000:
      return [
        {
          link: `numbers/${skill}`,
        },
      ];
    case Skill.ADDITION_SINGLE:
    case Skill.ADDITION_DOUBLE:
    case Skill.ADDITION_TRIPLE:
    case Skill.ADDITION_PROPERTIES:
    case Skill.ADDITION_4_DIGIT:
    case Skill.ADDITION_TENTHS:
    case Skill.ADDITION_5_DIGIT:
    case Skill.ADDITION_HUNDREDTHS:
    case Skill.ADDITION_6_DIGIT:
      return [
        {
          link: `addition/${skill}`,
        },
      ];
    case Skill.SUBTRACTION_SINGLE:
    case Skill.SUBTRACTION_DOUBLE:
    case Skill.SUBTRACTION_TRIPLE:
    case Skill.SUBTRACTION_4_DIGIT:
    case Skill.SUBTRACTION_TENTHS:
    case Skill.SUBTRACTION_5_DIGIT:
    case Skill.SUBTRACTION_HUNDREDTHS:
    case Skill.SUBTRACTION_6_DIGIT:
      return [
        {
          link: `subtraction/${skill}`,
        },
      ];
    case Skill.EQUAL_SHARING_8_ITEMS:
    case Skill.DIVIDE_12_EQUALLY:
    case Skill.DIVIDE_100:
    case Skill.DIVISION_TWO_DIGIT_BY_ONE_DIGIT:
    case Skill.DIVISION_THREE_DIGIT_BY_ONE_DIGIT:
    case Skill.DIVISION_THREE_DIGIT_BY_TWO_DIGIT:
    case Skill.DIVISION_THREE_DIGIT_BY_TENTH:
      return [
        {
          link: `division/${skill}`,
        },
      ];

    case Skill.EQUAL_GROUP_10_ITEMS:
    case Skill.MULTIPLICATION_5:
    case Skill.MULTIPLICATION_10:
    case Skill.MULTIPLY_ONE_DIGIT_X_TWO_DIGIT:
    case Skill.MULTIPLY_ONE_DIGIT_X_THREE_DIGIT:
    case Skill.MULTIPLICATION_10_BY_DOUBLE_DIGIT:
    case Skill.MULTIPLICATION_10_BY_TRIPLE_DIGIT:
    case Skill.MULTIPLY_TWO_DIGIT_BY_TWO_DIGIT:
    case Skill.MULTIPLY_TWO_DIGIT_BY_THREE_DIGIT:
    case Skill.MULTIPLY_THREE_DIGIT_BY_TENTH:
      return [
        {
          link: `multiplication/${skill}`,
        },
      ];
  }
};
