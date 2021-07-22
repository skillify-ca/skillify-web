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
      ];
    case Topic.SUBTRACTION:
      return [
        Skill.SUBTRACTION_SINGLE,
        Skill.SUBTRACTION_DOUBLE,
        Skill.SUBTRACTION_TRIPLE,
        Skill.SUBTRACTION_4_DIGIT,
        Skill.SUBTRACTION_TENTHS,
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
      ];
    case Topic.DIVISION:
      return [
        Skill.EQUAL_SHARING_8_ITEMS,
        Skill.DIVIDE_12_EQUALLY,
        Skill.DIVIDE_100,
        Skill.DIVISION_TWO_DIGIT_BY_ONE_DIGIT,
        Skill.DIVISION_THREE_DIGIT_BY_ONE_DIGIT,
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
    } else {
      return [Skill.ADDITION_4_DIGIT, Skill.ADDITION_TENTHS];
    }
  } else if (topic == Topic.SUBTRACTION) {
    if (grade == Grade.GRADE_1) {
      return [Skill.SUBTRACTION_SINGLE];
    } else if (grade == Grade.GRADE_2) {
      return [Skill.SUBTRACTION_DOUBLE];
    } else if (grade == Grade.GRADE_3) {
      return [Skill.SUBTRACTION_TRIPLE];
    } else {
      return [Skill.SUBTRACTION_4_DIGIT, Skill.SUBTRACTION_TENTHS];
    }
  } else if (topic == Topic.MULTIPLICATION) {
    if (grade == Grade.GRADE_1) {
      return [Skill.EQUAL_GROUP_10_ITEMS];
    } else if (grade == Grade.GRADE_2) {
      return [Skill.MULTIPLICATION_5];
    } else if (grade == Grade.GRADE_3) {
      return [Skill.MULTIPLICATION_10];
    } else {
      return [
        Skill.MULTIPLY_ONE_DIGIT_X_TWO_DIGIT,
        Skill.MULTIPLY_ONE_DIGIT_X_THREE_DIGIT,
        Skill.MULTIPLICATION_10_BY_DOUBLE_DIGIT,
        Skill.MULTIPLICATION_10_BY_TRIPLE_DIGIT,
      ];
    }
  } else if (topic == Topic.DIVISION) {
    if (grade == Grade.GRADE_1) {
      return [Skill.EQUAL_SHARING_8_ITEMS];
    } else if (grade == Grade.GRADE_2) {
      return [Skill.DIVIDE_12_EQUALLY];
    } else if (grade == Grade.GRADE_3) {
      return [Skill.DIVIDE_100];
    } else {
      return [
        Skill.DIVISION_TWO_DIGIT_BY_ONE_DIGIT,
        Skill.DIVISION_THREE_DIGIT_BY_ONE_DIGIT,
      ];
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
  }
}

type PracticeCardMetadata = {
  link: string;
};
const randomSkillSelector = () => {
  const randomSkillNumber = getRndInteger(0, Object.keys(Skill).length);
  let skill;
  switch (randomSkillNumber) {
    case 1:
      skill = Skill.ADDITION_SINGLE;
      break;
    case 2:
      skill = Skill.ADDITION_DOUBLE;
      break;
    case 3:
      skill = Skill.ADDITION_TRIPLE;
      break;
    case 4:
      skill = Skill.ADDITION_PROPERTIES;
      break;
    case 5:
      skill = Skill.ADDITION_4_DIGIT;
      break;
    case 6:
      skill = Skill.ADDITION_TENTHS;
      break;
    case 7:
      skill = Skill.SUBTRACTION_SINGLE;
      break;
    case 8:
      skill = Skill.SUBTRACTION_DOUBLE;
      break;
    case 9:
      skill = Skill.SUBTRACTION_TRIPLE;
      break;
    case 10:
      skill = Skill.SUBTRACTION_4_DIGIT;
      break;
    case 11:
      skill = Skill.SUBTRACTION_TENTHS;
      break;
    case 12:
      skill = Skill.MULTIPLICATION_5;
      break;
    case 13:
      skill = Skill.MULTIPLICATION_10;
      break;
    case 14:
      skill = Skill.MULTIPLICATION_10_BY_DOUBLE_DIGIT;
      break;
    case 15:
      skill = Skill.MULTIPLICATION_10_BY_TRIPLE_DIGIT;
      break;
    case 16:
      skill = Skill.MULTIPLY_ONE_DIGIT_X_TWO_DIGIT;
      break;
    case 17:
      skill = Skill.MULTIPLY_ONE_DIGIT_X_THREE_DIGIT;
      break;
    case 18:
      skill = Skill.DIVIDE_12_EQUALLY;
      break;
    case 19:
      skill = Skill.DIVIDE_100;
      break;
    case 20:
      skill = Skill.DIVISION_TWO_DIGIT_BY_ONE_DIGIT;
      break;
    case 21:
      skill = Skill.DIVISION_THREE_DIGIT_BY_ONE_DIGIT;
      break;
    case 22:
      skill = Skill.NUMBERS_50;
      break;
    case 23:
      skill = Skill.NUMBERS_200;
      break;
    case 24:
      skill = Skill.NUMBERS_1000;
      break;
  }
  return skill;
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
      return [
        {
          link: `multiplication/${skill}`,
        },
      ];
  }
  return [];
};
