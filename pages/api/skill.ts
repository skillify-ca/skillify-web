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
}

export const getSkillsForTopic = (topic: Topic): Skill[] => {
  switch (topic) {
    case Topic.ADDITION:
      return [
        Skill.ADDITION_SINGLE,
        Skill.ADDITION_DOUBLE,
        Skill.ADDITION_TRIPLE,
      ];
    case Topic.SUBTRACTION:
      return [
        Skill.SUBTRACTION_SINGLE,
        Skill.SUBTRACTION_DOUBLE,
        Skill.SUBTRACTION_TRIPLE,
      ];
    case Topic.MULTIPLICATION:
      return [
        Skill.EQUAL_GROUP_10_ITEMS,
        Skill.MULTIPLICATION_5,
        Skill.MULTIPLICATION_10,
      ];
    case Topic.DIVISION:
      return [
        Skill.EQUAL_SHARING_8_ITEMS,
        Skill.DIVIDE_12_EQUALLY,
        Skill.DIVIDE_100,
      ];
  }
  return [];
};

export const getSkillsForTopicGrade = (topic: Topic, grade: Grade): Skill[] => {
  if (topic == Topic.ADDITION) {
    if (grade == Grade.GRADE_1) {
      return [Skill.ADDITION_SINGLE];
    } else if (grade == Grade.GRADE_2) {
      return [Skill.ADDITION_DOUBLE];
    } else {
      return [Skill.ADDITION_TRIPLE];
    }
  } else if (topic == Topic.SUBTRACTION) {
    if (grade == Grade.GRADE_1) {
      return [Skill.SUBTRACTION_SINGLE];
    } else if (grade == Grade.GRADE_2) {
      return [Skill.SUBTRACTION_DOUBLE];
    } else {
      return [Skill.SUBTRACTION_TRIPLE];
    }
  } else if (topic == Topic.MULTIPLICATION) {
    if (grade == Grade.GRADE_1) {
      return [Skill.EQUAL_GROUP_10_ITEMS];
    } else if (grade == Grade.GRADE_2) {
      return [Skill.MULTIPLICATION_5];
    } else {
      return [Skill.MULTIPLICATION_10];
    }
  } else if (topic == Topic.DIVISION) {
    if (grade == Grade.GRADE_1) {
      return [Skill.EQUAL_SHARING_8_ITEMS];
    } else if (grade == Grade.GRADE_2) {
      return [Skill.DIVIDE_12_EQUALLY];
    } else {
      return [Skill.DIVIDE_100];
    }
  }
  return [];
};

export enum Skill {
  NUMBERS_50 = "count-50",
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
}

export function SkillDescription(skill: Skill) {
  if (skill == Skill.NUMBERS_50) {
    return "Count to 50";
  } else if (skill == Skill.ADDITION_SINGLE) {
    return "Add one digit numbers";
  } else if (skill == Skill.ADDITION_DOUBLE) {
    return "Add two digit numbers";
  } else if (skill == Skill.ADDITION_TRIPLE) {
    return "Add three digit numbers";
  } else if (skill == Skill.ADDITION_PROPERTIES) {
    return "Add using addition properties";
  } else if (skill == Skill.SUBTRACTION_SINGLE) {
    return "Subtract single digit numbers";
  } else if (skill == Skill.SUBTRACTION_DOUBLE) {
    return "Subtract double digit numbers";
  } else if (skill == Skill.SUBTRACTION_TRIPLE) {
    return "Subtract triple digit numbers";
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
  }
}

type DiagnosticState = {};

type ResourceMetadata = {
  link: string;
  practiceTitle?: string;
  imgSrc: string;
  confidenceRating: string;
};

// emoji confidence rating is hardcoded right now but won't be later
export const getPracticeCardForSkill = (skill: Skill): ResourceMetadata[] => {
  switch (skill) {
    case Skill.ADDITION_SINGLE:
      return [
        {
          link: "addition/single-digit",
          practiceTitle: "I Can Add Single Digit Numbers (Grade 1)",
          imgSrc:
            "https://www.broadwater.w-sussex.sch.uk/_data/site/20/pg/366/8.jpg",
          confidenceRating: "😄",
        },
      ];
    case Skill.ADDITION_DOUBLE:
      return [
        {
          link: "addition/double-digit",
          practiceTitle: "I Can Add Double Digit Numbers (Grade 2)",
          imgSrc:
            "https://raw.githubusercontent.com/qknow/images/gh-pages/primary/MATHS/CLASS%203/numbers%20and%20numerals/ADDTION%20-%202DIGITS.png",
          confidenceRating: "😐",
        },
      ];
    case Skill.ADDITION_TRIPLE:
      return [
        {
          link: "addition/triple-digit",
          practiceTitle: "I Can Add Triple Digit Numbers (Grade 3)",
          imgSrc:
            "https://raw.githubusercontent.com/qknow/images/gh-pages/primary/MATHS/CLASS%203/numbers%20and%20numerals/ADDTION%20-%203DIGITS1.png",
          confidenceRating: "❓",
        },
      ];
    case Skill.ADDITION_PROPERTIES:
      return [
        {
          link: "addition/propertiesC",
          practiceTitle: "Addition Properties (Grade 3)",
          imgSrc:
            "https://raw.githubusercontent.com/qknow/images/gh-pages/primary/MATHS/CLASS%203/numbers%20and%20numerals/ADDTION%20-%203DIGITS1.png",
          confidenceRating: "❓",
        },
      ];
    case Skill.SUBTRACTION_SINGLE:
      return [
        {
          link: "subtraction/single-digit",
          practiceTitle: "I Can Subtract Single Digit Numbers (Grade 1)",
          imgSrc: "/images/numberLineSub.png",
          confidenceRating: "😄",
        },
      ];
    case Skill.SUBTRACTION_DOUBLE: //we need pictures for the following cards
      return [
        {
          link: "subtraction/double-digit",
          practiceTitle: "I Can Subtract Double Digit Numbers (Grade 2)",
          imgSrc:
            "https://raw.githubusercontent.com/qknow/images/gh-pages/primary/MATHS/CLASS%203/numbers%20and%20numerals/ADDTION%20-%203DIGITS1.png",
          confidenceRating: "😐",
        },
      ];
    case Skill.SUBTRACTION_TRIPLE:
      return [
        {
          link: "subtraction/triple-digit",
          practiceTitle: "I Can Subtract Triple Digit Numbers (Grade 2)",
          imgSrc:
            "https://raw.githubusercontent.com/qknow/images/gh-pages/primary/MATHS/CLASS%203/numbers%20and%20numerals/ADDTION%20-%203DIGITS1.png",
          confidenceRating: "😐",
        },
      ];
    case Skill.EQUAL_SHARING_8_ITEMS:
      return [
        {
          link: "division/single-digit", //we should change this link
          practiceTitle: "I Can Equally Share Up to 12 (Grade 1)",
          imgSrc:
            "https://raw.githubusercontent.com/qknow/images/gh-pages/primary/MATHS/CLASS%203/numbers%20and%20numerals/ADDTION%20-%203DIGITS1.png",
          confidenceRating: "😐",
        },
      ];
    case Skill.DIVIDE_12_EQUALLY:
      return [
        {
          link: "division/single-digit", //we should change this link
          practiceTitle: "I Can Divide equally to 12 (Grade 2)",
          imgSrc:
            "https://raw.githubusercontent.com/qknow/images/gh-pages/primary/MATHS/CLASS%203/numbers%20and%20numerals/ADDTION%20-%203DIGITS1.png",
          confidenceRating: "😐",
        },
      ];
    case Skill.DIVIDE_100:
      return [
        {
          link: "division/single-digit", //we should change this link
          practiceTitle: "I Can Divide equally to 100 (Grade 3)",
          imgSrc:
            "https://raw.githubusercontent.com/qknow/images/gh-pages/primary/MATHS/CLASS%203/numbers%20and%20numerals/ADDTION%20-%203DIGITS1.png",
          confidenceRating: "😐",
        },
      ];
  }
  return [];
};
