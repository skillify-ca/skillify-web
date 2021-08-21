import { generateQuestionForSkill } from "./questionGenerator";
import { getRndInteger } from "./random";

export enum Topic {
  NUMBERS = "numbers",
  ADDITION = "addition",
  SUBTRACTION = "subtraction",
  MULTIPLICATION = "multiplication",
  DIVISION = "division",
}

type UnitGroup = {
  [grade: number]: Unit;
};

// export enum Grade {
//   GRADE_1 = "Grade 1",
//   GRADE_2 = "Grade 2",
//   GRADE_3 = "Grade 3",
//   GRADE_4 = "Grade 4",
//   GRADE_5 = "Grade 5",
//   GRADE_6 = "Grade 6",
// }

interface Skill {
  id: number;
  description: string;
}

export interface Unit {
  id: string;
  skills: Skill[];
}
export interface Grade {
  name: string;
  units: Unit[];
}

const gradeOneAddition: Unit = {
  id: "grade-1-addition",
  skills: [Skill.ADDITION_SINGLE],
};
const gradeTwoAddition: Unit = {
  id: "grade-2-addition",
  skills: [Skill.ADDITION_DOUBLE],
};
const gradeThreeAddition: Unit = {
  id: "grade-3-addition",
  skills: [Skill.ADDITION_TRIPLE, Skill.ADDITION_PROPERTIES],
};

// Returns skill id matching hasura
export const getPrimaryDiagnosticSkillsForTopic = (topic: Topic): number[] => {
  switch (topic) {
    case Topic.ADDITION:
      return [1, 2, 3];
    case Topic.SUBTRACTION:
      return [34, 35, 36];
    case Topic.MULTIPLICATION:
      return [37, 38, 39];
    case Topic.DIVISION:
      return [40, 41, 42];
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

type PracticeCardMetadata = {
  link: string;
};
const randomSkillSelector = () => {
  // TODO fetch all skills
  // Pick a random one skill
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
