import { createWordProblemModel, WordProblemModel } from "./WordProblemModel";
import { QuestionType } from "./questionTypes";
import { AnswerType, Question } from "./question";
import { Topic } from "./questionGenerator";
import { MCModel, MCOption } from "./question";
import { shuffle, StringNullableChain } from "lodash";
import { AdditionProperty } from "../../components/stories/MultipleChoiceTypes";

const NUM_QUESTIONS = 5;

const generateQuestionsForTopic = (
  digitDifficulty: string,
  numberOfQuestions: number,
  operator: Topic
) => {
  let questionGenerator: (min: number, max: number) => Question;
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
    case Topic.DIVISION:
      questionGenerator = getRandomDivisionQuestion;
      break;
    default:
      console.log("ERROR");
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

const generatePropertyQuestionsforTopic = (
  numberofQuestions: number,
  operator: Topic
) => {
  let questionPropertyGenerator: (min: number, max: number) => Question;
  switch (operator) {
    case Topic.ADDITIONPROPERTIES:
      questionPropertyGenerator = getRandomPropertyAdditionQuestion;
      break;
    default:
      console.log("ERROR");
  }
  const res = [];
  for (let i = 0; i < numberofQuestions; ++i) {
    let min = 1;
    let max = 15;
    res.push(questionPropertyGenerator(min, max));
  }
  return res;
};

export const generateAdditionPropertyQuestions = (slug: string) => {
  if (slug != null) {
    return generatePropertyQuestionsforTopic(
      NUM_QUESTIONS,
      Topic.ADDITIONPROPERTIES
    );
  }
  return [];
};

export const generateAdditionQuestions = (difficulty: string) => {
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
export const generateSubtractionQuestions = (slug: string) => {
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
export const generateMultiplicationQuestions = (slug: string) => {
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
export const generateDivisionQuestions = (slug: string) => {
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
  return getRandomBinaryQuestion(min, max, "x", subtract);
}
function getRandomDivisionQuestion(min: number, max: number) {
  const subtract = (a: number, b: number) => a - b;
  return getRandomBinaryQuestion(min, max, "/", subtract);
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
    answer: answerFunction(Math.max(a, b), Math.min(a, b)).toString(),
    answerType:
      type === QuestionType.TRUE_OR_FALSE_PROBLEM
        ? AnswerType.BOOLEAN
        : AnswerType.NUMBER,
    questionType: type,
    operator: operator,
    wordProblem: wordProblemModel,
  };
}

// Get random number between min (inclusive) and max (exclusive)
export function getRndInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomPropertyAdditionQuestion(min: number, max: number) {
  return getRandomPropertyQuestion(min, max, "+");
}
function getRandomPropertyQuestion(
  min: number,
  max: number,
  operator: string
): Question {
  const a = getRndInteger(min, max);
  const b = getRndInteger(min, max);
  const text = "Which equation shows the Associative Property?";
  const additionPropertyTypes = [
    AdditionProperty.ASSOCIATIVE,
    AdditionProperty.COMMUTATIVE,
    AdditionProperty.IDENTITY,
  ];
  const typeIndex = getRndInteger(0, additionPropertyTypes.length);
  const additionPropertyType = additionPropertyTypes[typeIndex];

  const identitynum = getRndInteger(min, max);
  const x = getRndInteger(min, max);
  const y = getRndInteger(min, max);
  const z = getRndInteger(min, max);

  const questionArr: string[] = [
    `${Math.max(a, b)} ${operator} ${Math.min(a, b)} = ${Math.min(
      a,
      b
    )} ${operator} ${Math.max(a, b)}`,
    `${identitynum} ${operator} 0 = ${identitynum}`,
    `${Math.max(a, b)} ${operator} ${Math.min(a, b)} = ${Math.max(
      a,
      b
    )} ${operator} ${Math.min(a, b)}`,
    `(${x} ${operator} ${y}) ${operator} ${z} = ${x} ${operator} (${y} ${operator} ${z})`,
  ];
  
  const option1: MCOption = {text: questionArr[0], id: "a"};
  const option2: MCOption = {text: questionArr[1], id: "b"};
  const option3: MCOption = {text: questionArr[2], id: "c"};
  const option4: MCOption = {text: questionArr[3], id: "d"};
  

  const MCanswer = option1.id;

  const optionarr = [
    option1, option2, option3, option4,
  ];

  const model: MCModel = {options: (shuffle(optionarr))};
  

  return {
    text: text,
    answerType: AnswerType.STRING,
    answer: MCanswer,
    operator: operator,
    questionType: QuestionType.MULTIPLE_CHOICE,
    multiplechoice: model,

  };
}
