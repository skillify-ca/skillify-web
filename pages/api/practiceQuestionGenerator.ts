import { createWordProblemModel, WordProblemModel } from "./WordProblemModel";
import { QuestionType } from "./questionTypes";
import { Topic } from "./questionGenerator";
import { subtract } from "lodash";


const NUM_QUESTIONS = 5;


export type FlashcardQuestion = {
  text: String;
  answer: number;
};

export type Question = {
  text: string;
  answer: number;
  questionType: QuestionType;
  operator?: string;
  wordProblem?: WordProblemModel;
};

const generateQuestionsForTopic = (digitDifficulty: string, numberOfQuestions: number, operator: Topic) => {
  let questionGenerator: (min: number, max: number) => FlashcardQuestion;
  switch (operator){
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
      console.log('ERROR');
  }
  const res = [];
  for (let i = 0; i < numberOfQuestions; i++) {
      let min = 1;
      let max = 10;
      if (digitDifficulty == "double-digit") {
          min = 11;
          max = 100;
      } else if (digitDifficulty == "triple-digit") {
          min = 101;
          max = 1000;
      }
    res.push(questionGenerator(min, max));
  }
  return res;
};

export const generateAdditionQuestions = (
  difficulty: string,
) => {
  if (difficulty != null) {
    const digitDifficulty = difficulty;
    return generateQuestionsForTopic(digitDifficulty, NUM_QUESTIONS, Topic.ADDITION);
  }
  return [];
};
export const generateSubtractionQuestions = (
  slug: string,
) => {
  if (slug != null) {
    const digitDifficulty = slug;
    return generateQuestionsForTopic(digitDifficulty, NUM_QUESTIONS, Topic.SUBTRACTION);
  }
  return [];
};
export const generateMultiplicationQuestions = (
  slug: string,
) => {
  if (slug != null) {
    const digitDifficulty = slug;
    return generateQuestionsForTopic(digitDifficulty, NUM_QUESTIONS, Topic.MULTIPLICATION);
  }
  return [];
};

function getRandomAdditionQuestion(min: number, max: number) {
  const add = (a: number, b: number) => a + b;
  return getRandomBinaryQuestion(min, max, "+", add);
}

function getRandomSubtractionQuestion(min: number, max: number) {
  const subtract = (a: number, b: number) => a - b;
  return getRandomBinaryQuestion(min, max, "-", subtract);
}
function getRandomMultiplicationQuestion(min: number, max: number) {
  const subtract = (a: number, b: number) => a - b;
  return getRandomBinaryQuestion(min, max, "-", subtract);
}

function getRandomBinaryQuestion(
  min: number,
  max: number,
  operator: string,
  answerFunction: (a: number, b: number) => number
): Question {
  const a = getRndInteger(min, max);
  const b = getRndInteger(min, max);

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
    answer: answerFunction(Math.max(a, b), Math.min(a, b)),
    questionType: type,
    operator: operator,
    wordProblem: wordProblemModel,
  };
}

// Get random number between min (inclusive) and max (exclusive)
export function getRndInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}
