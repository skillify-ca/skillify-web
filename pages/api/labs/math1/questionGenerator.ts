import { Question } from "../../question";
import { Skill } from "../../skill";
import { getRandomDivisionQuestion } from "../../questions/division/divisionQuestionGenerator";
import { QuestionType } from "../../questionTypes";
import { getRandomBinaryQuestion } from "../../questions/questionGenerator";

const DEFAULT_QUESTION_TYPES = [
  QuestionType.HORIZONTAL_EQUATION,
  QuestionType.BINARY_WORD_PROBLEM,
  QuestionType.VERTICAL_EQUATION,
  QuestionType.TRUE_OR_FALSE_PROBLEM,
  QuestionType.MULTIPLE_CHOICE,
];

export const generateQuestionForMath1Skill = (skill: Skill): Question => {
  // Addition skills
  switch (skill) {
    case Skill.ADDITION_SINGLE:
      const singleAdditionQuestionTypes = [
        ...DEFAULT_QUESTION_TYPES,
        QuestionType.VISUAL_TYPE_PROBLEM,
        QuestionType.VISUAL_TYPE_PROBLEM,
        QuestionType.VISUAL_TYPE_PROBLEM,
        QuestionType.VISUAL_TYPE_PROBLEM,
        QuestionType.VISUAL_TYPE_PROBLEM,
      ];
      return getRandomBinaryQuestion(
        1,
        11,
        "+",
        (a, b) => a + b,
        skill,
        singleAdditionQuestionTypes
      );
    case Skill.ADDITION_DOUBLE:
      return getRandomBinaryQuestion(
        10,
        101,
        "+",
        (a, b) => a + b,
        skill,
        DEFAULT_QUESTION_TYPES
      );
    case Skill.ADDITION_TRIPLE:
      return getRandomBinaryQuestion(
        100,
        1001,
        "+",
        (a, b) => a + b,
        skill,
        DEFAULT_QUESTION_TYPES
      );
  }

  // Subtraction Skills
  switch (skill) {
    case Skill.SUBTRACTION_SINGLE:
      return getRandomBinaryQuestion(
        2,
        11,
        "-",
        (a, b) => a - b,
        skill,
        DEFAULT_QUESTION_TYPES
      );
    case Skill.SUBTRACTION_DOUBLE:
      return getRandomBinaryQuestion(
        10,
        101,
        "-",
        (a, b) => a - b,
        skill,
        DEFAULT_QUESTION_TYPES
      );
    case Skill.SUBTRACTION_TRIPLE:
      return getRandomBinaryQuestion(
        100,
        1001,
        "-",
        (a, b) => a - b,
        skill,
        DEFAULT_QUESTION_TYPES
      );
  }

  const multiply = (a: number, b: number) => a * b;
  // Multiplication Skills
  switch (skill) {
    case Skill.EQUAL_GROUP_10_ITEMS:
      return getRandomBinaryQuestion(6, 10, "x", multiply, skill, [
        ...DEFAULT_QUESTION_TYPES,
        QuestionType.MULTIPLICATION_EQUAL_GROUPS,
        QuestionType.MULTIPLICATION_EQUAL_GROUPS,
        QuestionType.MULTIPLICATION_EQUAL_GROUPS,
        QuestionType.MULTIPLICATION_EQUAL_GROUPS,
        QuestionType.MULTIPLICATION_EQUAL_GROUPS,
      ]);
    case Skill.MULTIPLICATION_5:
      return getRandomBinaryQuestion(1, 6, "x", multiply, skill, [
        ...DEFAULT_QUESTION_TYPES,
        QuestionType.ARRAY_QUESTION,
        QuestionType.ARRAY_QUESTION,
        QuestionType.ARRAY_QUESTION,
        QuestionType.ARRAY_QUESTION,
        QuestionType.ARRAY_QUESTION,
      ]);
    case Skill.MULTIPLICATION_10:
      return getRandomBinaryQuestion(
        6,
        10,
        "x",
        multiply,
        skill,
        DEFAULT_QUESTION_TYPES
      );
  }

  //All division questions min and maxs are in respect to the dividend
  // Division skills
  switch (skill) {
    case Skill.EQUAL_SHARING_8_ITEMS:
      return getRandomDivisionQuestion(1, 5, skill);
    case Skill.DIVIDE_12_EQUALLY:
      return getRandomDivisionQuestion(1, 6, skill);
    case Skill.DIVIDE_100:
      return getRandomDivisionQuestion(1, 11, skill);
  }
};
