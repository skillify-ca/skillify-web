import { createWordProblemModel } from "./WordProblemModel";
import { QuestionType } from "./questionTypes";
import { AnswerType, Question } from "./question";
import { Topic } from "./questionGenerator";
import { tweleveMap } from "./factorsOfTwelveMap";
import { getRndInteger } from "./random";
import { getRandomPropertyAdditionQuestion } from "./additionPropertyQuestionGenerator";
import { Skill } from "./questionGenerator";

const NUM_QUESTIONS = 5;

const generateQuestionsForTopic = (
  digitDifficulty: Skill,
  numberOfQuestions: number,
  operator: Topic
) => {
  let questionGenerator: (min: number, max: number, skill: Skill) => Question;
  switch (operator) {
    case Topic.SUBTRACTION:
      questionGenerator = getRandomSubtractionQuestion;
      break;
    case Topic.ADDITION:
      questionGenerator = getRandomAdditionQuestion;
      break;
    case Topic.MULTIPLICATION:
      questionGenerator = getRandomMultiplicationQuestion;
      break;
    default:
      console.log("ERROR");
  }
  const res = [];
  for (let i = 0; i < numberOfQuestions; i++) {
    let min = 1;
    let max = 10;
    if (digitDifficulty == Skill.ADDITION_DOUBLE) {
      min = 11;
      max = 100;
    } else if (digitDifficulty == Skill.ADDITION_TRIPLE) {
      min = 101;
      max = 1000;
    } else if (digitDifficulty == Skill.MULTIPLICATION_10) {
      max = 11;
    } else if (digitDifficulty == Skill.MULTIPLICATION_5) {
      max = 6;
    } else if (digitDifficulty == Skill.DIVIDE_100) {
      min = 9;
      max = 101;
    } else if (digitDifficulty == Skill.DIVIDE_12_EQUALLY) {
      max = 13;
    }
    res.push(questionGenerator(min, max, digitDifficulty));
  }
  return res;
};

export const generateAdditionPropertyQuestions = () => {
  const res = [];
  for (let i = 0; i < NUM_QUESTIONS; ++i) {
    let min = 1;
    let max = 15;
    res.push(
      getRandomPropertyAdditionQuestion(min, max, Skill.ADDITION_SINGLE)
    );
  }
  return res;
};

export const generateAdditionQuestions = (difficulty: Skill) => {
  if (difficulty != null) {
    const digitDifficulty = difficulty;
    return generateQuestionsForTopic(
      digitDifficulty,
      NUM_QUESTIONS,
      Topic.ADDITION
    );
  }
  return [];
};
export const generateSubtractionQuestions = (slug: Skill) => {
  if (slug != null) {
    const digitDifficulty = slug;
    return generateQuestionsForTopic(
      digitDifficulty,
      NUM_QUESTIONS,
      Topic.SUBTRACTION
    );
  }
  return [];
};
export const generateMultiplicationQuestions = (slug: Skill) => {
  if (slug != null) {
    const digitDifficulty = slug;
    return generateQuestionsForTopic(
      digitDifficulty,
      NUM_QUESTIONS,
      Topic.MULTIPLICATION
    );
  }
  return [];
};
export const generateDivisionQuestions = (slug: Skill) => {
  if (slug != null) {
    const digitDifficulty = slug;
    return generateQuestionsForTopic(
      digitDifficulty,
      NUM_QUESTIONS,
      Topic.DIVISION
    );
  }
  return [];
};

function getRandomAdditionQuestion(min: number, max: number, skill: Skill) {
  const add = (a: number, b: number) => a + b;
  return getRandomBinaryQuestion(min, max, "+", add, skill);
}

function getRandomSubtractionQuestion(min: number, max: number, skill: Skill) {
  const subtract = (a: number, b: number) => a - b;
  return getRandomBinaryQuestion(min, max, "-", subtract, skill);
}
function getRandomMultiplicationQuestion(
  min: number,
  max: number,
  skill: Skill
) {
  const multiply = (a: number, b: number) => a * b;

  return getRandomBinaryQuestion(min, max, "x", multiply, skill);
}
function getRandomDivisionQuestion(min: number, max: number, digitDifficulty) {
  const a = getRndInteger(min, max);
  let b = getRndInteger(min, max);
  let text;
  if (digitDifficulty == "12_items_equally") {
    let factor;
    factor = Object.keys(tweleveMap[a]);
    b = getRndInteger(1, factor.length);
    text = `${a} / ${b} =`;
  } else {
    const product = a * b;
    text = `${product} / ${b} =`;
  }

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
  };
}

function getRandomBinaryQuestion(
  min: number,
  max: number,
  operator: string,
  answerFunction: (a: number, b: number) => number,
  skill: Skill
): Question {
  const a = getRndInteger(min, max);
  let b = getRndInteger(min, max);
  const text = `${Math.max(a, b)} ${operator} ${Math.min(a, b)} =`;
  const types = [
    QuestionType.VERTICAL_EQUATION,
    QuestionType.HORIZONTAL_EQUATION,
    QuestionType.BINARY_WORD_PROBLEM,
    QuestionType.TRUE_OR_FALSE_PROBLEM,
  ];
  const typeIndex = getRndInteger(0, types.length);
  const type = types[typeIndex];
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
