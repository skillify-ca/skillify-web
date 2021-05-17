import { HorizontalEquation } from "../../components/stories/HorizontalEquation";
import { AnswerType, Question } from "./question";
import { QuestionType } from "./questionTypes";
import { createWordProblemModel, WordProblemModel } from "./WordProblemModel";

const NUM_QUESTIONS = 5;

export enum Topic {
  NUMBERS = "Numbers",
  ADDITION = "Addition",
  SUBTRACTION = "Subtraction",
  MULTIPLICATION = "Multiplication",
  DIVISION = "Division",
}

export enum TestLength {
  SHORT,
  MEDIUM,
  LONG,
}

export enum Difficulty {
  NONE,
  EASY,
  MEDIUM,
  HARD,
}

export enum Skill {
  ADDITION_SINGLE = "Add one digit numbers",
  ADDITION_DOUBLE = "Add two digit numbers",
  ADDITION_TRIPLE = "Add three digit numbers",
  SUBTRACTION_SINGLE = "Subtract single digit numbers",
  SUBTRACTION_DOUBLE = "Subtract double digit numbers",
  SUBTRACTION_TRIPLE = "Subtract triple digit numbers",
  NUMBERS_50 = "Count and compare numbers up to 50",
  DIVIDE_12_EQUALLY = "Divide numbers up to 12 equally",
  DIVIDE_100 = "Divide numbers up to 100 equally",
  MULTIPLICATION_5 = "Multiply numbers up to 5x5",
  MULTIPLICATION_10 = "Multiply numbers up to 10x10",
}

export const generateQuestionsForDiagnostic = (
  testLength: TestLength,
  topics: Topic[]
) => {
  let questionsPerSection = 0;
  switch (testLength) {
    case TestLength.SHORT:
      questionsPerSection = 5;
      break;
    case TestLength.MEDIUM:
      questionsPerSection = 8;
      break;
    case TestLength.LONG:
      questionsPerSection = 10;
      break;
    default:
      questionsPerSection = 1;
  }
  let questions: Question[] = [];

  if (topics[0] == Topic.ADDITION) {
    topics.forEach((it) =>
      questions.push(
        ...generateQuestionsForTopic(
          it,
          questionsPerSection,
          Skill.ADDITION_SINGLE
        )
      )
    );
    topics.forEach((it) =>
      questions.push(
        ...generateQuestionsForTopic(
          it,
          questionsPerSection,
          Skill.ADDITION_DOUBLE
        )
      )
    );
    topics.forEach((it) =>
      questions.push(
        ...generateQuestionsForTopic(
          it,
          questionsPerSection,
          Skill.ADDITION_TRIPLE
        )
      )
    );
  } else if (topics[0] == Topic.SUBTRACTION) {
    topics.forEach((it) =>
      questions.push(
        ...generateQuestionsForTopic(
          it,
          questionsPerSection,
          Skill.SUBTRACTION_SINGLE
        )
      )
    );
    topics.forEach((it) =>
      questions.push(
        ...generateQuestionsForTopic(
          it,
          questionsPerSection,
          Skill.SUBTRACTION_DOUBLE
        )
      )
    );
    topics.forEach((it) =>
      questions.push(
        ...generateQuestionsForTopic(
          it,
          questionsPerSection,
          Skill.SUBTRACTION_TRIPLE
        )
      )
    );
  } else if (topics[0] == Topic.MULTIPLICATION) {
    topics.forEach((it) =>
      questions.push(
        ...generateQuestionsForTopic(
          it,
          questionsPerSection,
          Skill.MULTIPLICATION_5
          //this should be changed to multiply by equal groups later
        )
      )
    );
    topics.forEach((it) =>
      questions.push(
        ...generateQuestionsForTopic(
          it,
          questionsPerSection,
          Skill.MULTIPLICATION_5
        )
      )
    );
    topics.forEach((it) =>
      questions.push(
        ...generateQuestionsForTopic(
          it,
          questionsPerSection,
          Skill.MULTIPLICATION_10
        )
      )
    );
  } else {
    topics.forEach((it) =>
      questions.push(
        ...generateQuestionsForTopic(
          it,
          questionsPerSection,
          Skill.DIVIDE_12_EQUALLY
        )
      )
    );
    topics.forEach((it) =>
      questions.push(
        ...generateQuestionsForTopic(it, questionsPerSection, Skill.DIVIDE_100)
      )
    );
    topics.forEach((it) =>
      questions.push(
        ...generateQuestionsForTopic(it, questionsPerSection, Skill.DIVIDE_100)
      )
    );
  }
  return questions;
};

export const generateQuestions = (slug: string, currentLevel: number) => {
  if (slug != null) {
    if (slug.toLowerCase() == "numbers") {
      return generateQuestionsForTopic(
        Topic.NUMBERS,
        NUM_QUESTIONS,
        Skill.NUMBERS_50
      );
    } else if (slug.toLowerCase() == "subtraction") {
      return generateQuestionsForTopic(
        Topic.SUBTRACTION,
        NUM_QUESTIONS,
        Skill.SUBTRACTION_SINGLE
      );
    } else if (slug.toLowerCase() == "multiplication") {
      return generateQuestionsForTopic(
        Topic.MULTIPLICATION,
        NUM_QUESTIONS,
        Skill.MULTIPLICATION_10
      );
    } else if (slug.toLowerCase() == "division") {
      return generateQuestionsForTopic(
        Topic.DIVISION,
        NUM_QUESTIONS,
        Skill.DIVIDE_12_EQUALLY
      );
    } else {
      return generateQuestionsForTopic(
        Topic.ADDITION,
        NUM_QUESTIONS,
        Skill.ADDITION_SINGLE
      );
    }
  }
  return [];
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

const generateQuestionsForTopic = (
  topic: Topic,
  numberOfQuestions: number,
  digitDifficulty: Skill
) => {
  let questionGenerator: (min: number, max: number, skill: Skill) => Question;
  switch (topic) {
    case Topic.NUMBERS:
      questionGenerator = getRandomNumbersQuestion;
      break;
    case Topic.ADDITION:
      questionGenerator = getRandomAdditionQuestion;
      break;
    case Topic.SUBTRACTION:
      questionGenerator = getRandomSubtractionQuestion;
      break;
    case Topic.MULTIPLICATION:
      questionGenerator = getRandomMultiplicationQuestion;
      break;
    case Topic.DIVISION:
      questionGenerator = getRandomDivisionQuestion;
      break;
    default:
      questionGenerator = getRandomAdditionQuestion;
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
    skill: skill,
  };
}

// Get random number between min (inclusive) and max (exclusive)
export function getRndInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}
