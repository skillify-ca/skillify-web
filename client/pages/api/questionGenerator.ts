import { AnswerType, Question } from "./question";
import { QuestionType } from "./questionTypes";
import { getRndInteger } from "./random";
import { createWordProblemModel } from "./WordProblemModel";
import { Skill } from "./skill";
import { ArrayQMap, createArrayImage } from "./ArrayQMap";
import { getRandomPropertyAdditionQuestion } from "./additionPropertyQuestionGenerator";
import { tweleveMap } from "./factorsOfTwelveMap";

export const generateQuestionForSkill = (skill: Skill): Question => {
  switch (skill) {
    case Skill.NUMBERS_50:
      return getRandomNumbersQuestion(1, 51, skill);
    case Skill.ADDITION_SINGLE:
      return getRandomAdditionQuestion(1, 11, skill);
    case Skill.ADDITION_DOUBLE:
      return getRandomAdditionQuestion(10, 101, skill);
    case Skill.ADDITION_TRIPLE:
      return getRandomAdditionQuestion(100, 1001, skill);
    case Skill.ADDITION_PROPERTIES:
      return getRandomPropertyAdditionQuestion(1, 15, skill);
    case Skill.SUBTRACTION_SINGLE:
      return getRandomSubtractionQuestion(1, 11, skill);
    case Skill.SUBTRACTION_DOUBLE:
      return getRandomSubtractionQuestion(10, 101, skill);
    case Skill.SUBTRACTION_TRIPLE:
      return getRandomSubtractionQuestion(100, 1001, skill);
    case Skill.EQUAL_GROUP_10_ITEMS:
      return getRandomMultiplicationQuestion(1, 11, skill);
    case Skill.MULTIPLICATION_5:
      return getRandomMultiplicationQuestion(1, 6, skill);
    case Skill.MULTIPLICATION_10:
      return getRandomMultiplicationQuestion(6, 10, skill);
    case Skill.EQUAL_SHARING_8_ITEMS:
      return getRandomDivisionQuestion(1, 5, skill);
    case Skill.DIVIDE_12_EQUALLY:
      return getRandomDivisionQuestion(1, 13, skill);
    case Skill.DIVIDE_100:
      return getRandomDivisionQuestion(1, 11, skill);
  }
};

function getRandomNumbersQuestion(
  min: number,
  max: number,
  skill: Skill
): Question {
  const a = getRndInteger(min, max);
  const b = getRndInteger(min, max);
  const text = `Which is bigger ${a} or ${b}?`;

  return {
    text: text,
    answer: Math.max(a, b).toString(),
    answerType: AnswerType.NUMBER,
    questionType: QuestionType.COMPARISON_WORD_PROBLEM,
    skill: skill,
  };
}
function getRandomAdditionQuestion(min: number, max: number, skill: Skill) {
  const add = (a: number, b: number) => a + b;
  return getRandomBinaryQuestion(min, max, "+", add, skill);
}
function getRandomSubtractionQuestion(min: number, max: number, skill: Skill) {
  const subtract = (a: number, b: number) => a - b;
  return getRandomBinaryQuestion(min, max, "-", subtract, skill);
}
export function getArrayMultiplicationQuestion(
  a: number,
  b: number,
  skill: Skill
): Question {
  let text = `${a} x ${b} =`;
  return {
    text: text,
    answer: (a * b).toString(),
    answerType: AnswerType.NUMBER,
    questionType: QuestionType.ARRAY_QUESTION,
    operator: "x",
    skill: skill,
  };
}
export function getMultiplicationEqualGroups(
  a: number,
  b: number,
  skill: Skill
): Question {
  let text = `${a} x ${b} =`;
  return {
    text: text,
    answer: (a * b).toString(),
    answerType: AnswerType.NUMBER,
    questionType: QuestionType.MULTIPLICATION_EQUAL_GROUPS,
    operator: "x",
    skill: skill,
  };
}
function getRandomMultiplicationQuestion(
  min: number,
  max: number,
  skill: Skill
) {
  const multiply = (a: number, b: number) => a * b;
  const randomPick = getRndInteger(0, 2);
  if (skill == Skill.MULTIPLICATION_5 && randomPick === 1) {
    const a = getRndInteger(1, 6);
    const b = getRndInteger(1, 6);
    return getArrayMultiplicationQuestion(a, b, skill);
  } else if (skill == Skill.EQUAL_GROUP_10_ITEMS) {
    const a = getRndInteger(1, 7);
    const b = getRndInteger(1, 11);
    return getMultiplicationEqualGroups(a, b, skill);
  }

  return getRandomBinaryQuestion(min, max, "x", multiply, skill);
}
function getRandomDivisionQuestion(
  min: number,
  max: number,
  skill: Skill
): Question {
  const a = getRndInteger(min, max);
  const b = getRndInteger(min, max);
  const product = a * b;

  const text = `${product} / ${b} =`;
  const types = [
    QuestionType.LONG_DIVISION_PROBLEM,
    QuestionType.HORIZONTAL_EQUATION,
    QuestionType.BINARY_WORD_PROBLEM,
  ];
  const type = types[getRndInteger(0, types.length)];
  let wordProblemModel;
  if (type == QuestionType.BINARY_WORD_PROBLEM) {
    wordProblemModel = createWordProblemModel("÷");
  }
  return {
    text: text,
    answer: a.toString(),
    answerType: AnswerType.NUMBER,
    questionType: type,
    operator: "÷",
    wordProblem: wordProblemModel,
    skill: skill,
  };
}

function getRandomBinaryQuestion(
  min: number,
  max: number,
  operator: string,
  answerFunction: (a: number, b: number) => number,
  skill: Skill
): Question {
  const types = [
    QuestionType.HORIZONTAL_EQUATION,
    QuestionType.BINARY_WORD_PROBLEM,
    QuestionType.VERTICAL_EQUATION,
    QuestionType.TRUE_OR_FALSE_PROBLEM,
  ];
  let typeIndex = getRndInteger(0, types.length);
  const a = getRndInteger(min, max);
  const b = getRndInteger(min, max);
  let text;
  const type = types[typeIndex];
  text = `${Math.max(a, b)} ${operator} ${Math.min(a, b)} =`;
  let wordProblemModel;
  //condition for if it is wordProblem
  if (type === QuestionType.BINARY_WORD_PROBLEM) {
    wordProblemModel = createWordProblemModel(operator);
  }

  return {
    text: text,
    answer: answerFunction(Math.max(a, b), Math.min(a, b)).toString(),
    answerType:
      type === QuestionType.TRUE_OR_FALSE_PROBLEM
        ? AnswerType.BOOLEAN
        : AnswerType.NUMBER,
    questionType: type,
    operator: operator,
    wordProblem: wordProblemModel,
    skill: skill,
  };
}
