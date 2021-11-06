import { Skill, Unit } from "../skill";

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
        Skill.ADDITION_6_DIGIT,
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
        Skill.SUBTRACTION_6_DIGIT,
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
        Skill.MULTIPLY_THREE_DIGIT_BY_TENTH,
      ];
    case Unit.DIVISION:
      return [
        Skill.EQUAL_SHARING_8_ITEMS,
        Skill.DIVIDE_12_EQUALLY,
        Skill.DIVIDE_100,
        Skill.DIVISION_TWO_DIGIT_BY_ONE_DIGIT,
        Skill.DIVISION_THREE_DIGIT_BY_ONE_DIGIT,
        Skill.DIVISION_THREE_DIGIT_BY_TWO_DIGIT,
        Skill.DIVISION_THREE_DIGIT_BY_TENTH,
      ];
    case Unit.FINANCE:
      return [Skill.FINANCE_BUDGET];
  }
  return [];
};
