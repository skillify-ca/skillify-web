import { createWordProblemModel, WordProblemModel } from "./WordProblemModel";
import { QuestionType } from "./questionTypes";
import { AnswerType, Question } from "./question";
import { Topic } from "./questionGenerator";
import { MCModel, MCOption } from "./question";
import { shuffle, StringNullableChain } from "lodash";
import { AdditionProperty } from "../../components/stories/MultipleChoiceTypes";
import { tweleveMap } from "./factorsOfTwelveMap";

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
    } else if (digitDifficulty == "upto_5X5") {
      min = 1;
      max = 6;
    } else if (digitDifficulty == "triple-digit") {
      min = 101;
      max = 1000;
    } else if (digitDifficulty == "upto_100_divide_10") {
      max = 11;
    } else if (digitDifficulty == "12_items_equally") {
      max = 13;
    }
    if (operator === Topic.DIVISION) {
      res.push(getRandomDivisionQuestion(min, max, digitDifficulty));
    } else {
      res.push(questionGenerator(min, max));
    }
  }
  return res;
};

export const generateAdditionPropertyQuestions = () => {
  const res = [];
  for (let i = 0; i < NUM_QUESTIONS; ++i) {
    let min = 1;
    let max = 15;
    res.push(getRandomPropertyAdditionQuestion(min, max));
  }
  return res;
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
  const multiplication = (a: number, b: number) => a * b;
  return getRandomBinaryQuestion(min, max, "x", multiplication);
}
function getRandomDivisionQuestion(min: number, max: number, digitDifficulty) {
  const a = getRndInteger(min, max);
  let b = getRndInteger(min, max);
  if (digitDifficulty == "12_items_equally") {
    let factor;
    factor = Object.keys(tweleveMap[a]);
    b = getRndInteger(1, factor.length);
  }
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
  };
}

function getRandomBinaryQuestion(
  min: number,
  max: number,
  operator: string,
  answerFunction: (a: number, b: number) => number
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
  
  const additionPropertyTypes = [
    AdditionProperty.ASSOCIATIVE,
    AdditionProperty.COMMUTATIVE,
    AdditionProperty.IDENTITY,
  ];
  const typeIndex = getRndInteger(0, additionPropertyTypes.length);
  const additionPropertyType = additionPropertyTypes[typeIndex];
  const text = `Which equation shows the ${additionPropertyType} Property?`;

  const identitynum = getRndInteger(min, max);
  const x = getRndInteger(min, max);
  const y = getRndInteger(min, max);
  const z = getRndInteger(min, max);

  // correct answers

  const commutativeOption = `${Math.max(a, b)} ${operator} ${Math.min(
    a,
    b
  )} = ${Math.min(a, b)} ${operator} ${Math.max(a, b)}`;

  const identityOption = `${identitynum} ${operator} 0 = ${identitynum}`;

  const associativeOption = `(${x} ${operator} ${y}) ${operator} ${z} = ${x} ${operator} (${y} ${operator} ${z})`;

  // wrong answers

  const wrongCommutativeOption = `${Math.max(a, b)} ${operator} ${Math.min(
    a,
    b
  )} = ${Math.max(a, b)} ${operator} ${Math.min(a, b)}`;

  const wrongAssociativeOption = `(${x} ${operator} ${y}) ${operator} ${z} = (${x} ${operator} ${y}) ${operator} ${y}`;

  const wrongIdentityOption = `${identitynum} ${operator} 0 = ${identitynum}0`;

  const wrongOptions: string[] = [
    wrongCommutativeOption,
    wrongAssociativeOption,
    wrongIdentityOption,
  ];

  const wrongIndex = getRndInteger(0, wrongOptions.length);

  const wrongDisplay = wrongOptions[wrongIndex];

  const questionArr: string[] = [
    commutativeOption,
    identityOption,
    associativeOption,
    wrongDisplay,
  ];

  const option1: MCOption = { text: questionArr[0], id: "a" };
  const option2: MCOption = { text: questionArr[1], id: "b" };
  const option3: MCOption = { text: questionArr[2], id: "c" };
  const option4: MCOption = { text: questionArr[3], id: "d" };

  const optionarr = [option1, option2, option3, option4];

  const model: MCModel = { options: shuffle(optionarr) };

  return {
    text: text,
    answerType: AnswerType.STRING,
    answer: additionPropertyType,
    operator: operator,
    questionType: QuestionType.MULTIPLE_CHOICE,
    multipleChoice: model,
  };
}
