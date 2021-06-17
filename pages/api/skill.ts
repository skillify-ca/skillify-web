export enum Topic {
  NUMBERS = "numbers",
  ADDITION = "addition",
  SUBTRACTION = "subtraction",
  MULTIPLICATION = "multiplication",
  DIVISION = "division",
}

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
