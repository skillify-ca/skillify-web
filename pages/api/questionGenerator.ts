import { tweleveMap } from "./factorsOfTwelveMap";
import { Question, AnswerType } from "./question";
import { QuestionType } from "./questionTypes";
import { getRndInteger } from "./random";
import { createWordProblemModel } from "./WordProblemModel";

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
  ADDITION_ONE_DIGIT = "Add one digit numbers",
  ADDITION_TWO_DIGIT = "Add two digit numbers",
  ADDITION_THREE_DIGIT = "Add three digit numbers",
}

export const generateQuestionsForDiagnostic = (testLength: TestLength, topics: Topic[]) => {
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

	if(topics[0]==Topic.ADDITION || topics[0]==Topic.SUBTRACTION ){
		topics.forEach((it) => questions.push(...generateQuestionsForTopic(it, Difficulty.EASY, questionsPerSection, "single-digit")));
		topics.forEach((it) => questions.push(...generateQuestionsForTopic(it, Difficulty.MEDIUM, questionsPerSection, "double-digit")));
		topics.forEach((it) => questions.push(...generateQuestionsForTopic(it, Difficulty.HARD, questionsPerSection, "triple-digit")));
		
	} else if(topics[0]==Topic.MULTIPLICATION) {
		topics.forEach((it) => questions.push(...generateQuestionsForTopic(it, Difficulty.EASY, questionsPerSection, "single-digit")));
		topics.forEach((it) => questions.push(...generateQuestionsForTopic(it, Difficulty.MEDIUM, questionsPerSection, "upto_5X5")));
		topics.forEach((it) => questions.push(...generateQuestionsForTopic(it, Difficulty.HARD, questionsPerSection, "upto_10X10")));
	} else {
		topics.forEach((it) => questions.push(...generateQuestionsForTopic(it, Difficulty.EASY, questionsPerSection, "single-digit")));
		topics.forEach((it) => questions.push(...generateQuestionsForTopic(it, Difficulty.MEDIUM, questionsPerSection, "12_items_equally")));
		topics.forEach((it) => questions.push(...generateQuestionsForTopic(it, Difficulty.HARD, questionsPerSection, "upto_100_divide_10")));
	}
	return questions;
};

export const generateQuestions = (slug: string, currentLevel: number) => {
	if (slug != null) {
		if (slug.toLowerCase() == 'numbers') {
			return generateQuestionsForTopic(Topic.NUMBERS, currentLevel, NUM_QUESTIONS, "single-digit");
		}else if (slug.toLowerCase() == 'subtraction') {
			return generateQuestionsForTopic(Topic.SUBTRACTION, currentLevel, NUM_QUESTIONS, "single-digit");
		}else if (slug.toLowerCase() == 'multiplication'){
			return generateQuestionsForTopic(Topic.MULTIPLICATION, currentLevel, NUM_QUESTIONS, "single-digit");
		}else if (slug.toLowerCase() == 'division'){
			return generateQuestionsForTopic(Topic.DIVISION, currentLevel, NUM_QUESTIONS, "single-digit");
		}else {
			return generateQuestionsForTopic(Topic.ADDITION, currentLevel, NUM_QUESTIONS, "single-digit");
		}
	}
	return [];

};
function getRandomNumbersQuestion(min: number, max: number): Question {
  const a = getRndInteger(min, max);
  const b = getRndInteger(min, max);
  const text = `Which is bigger ${a} or ${b}?`;

  return {
    text: text,
    answer: Math.max(a, b).toString(),
    answerType: AnswerType.NUMBER,
    questionType: QuestionType.COMPARISON_WORD_PROBLEM,
  };
}

const generateQuestionsForTopic = (topic: Topic, currentLevel: Difficulty, numberOfQuestions: number, digitDifficulty: string) => {
	let questionGenerator: (min: number, max: number) => Question;
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
		if (digitDifficulty == "double-digit") {
			min = 11;
			max = 100;
		} else if (digitDifficulty == "upto_5X5") {
			max = 6;
		} else if (digitDifficulty ==  "upto_10X10") {
			max = 11;
		} else if (digitDifficulty == "triple-digit") {
			min = 101;
			max = 1000;
		} else if (digitDifficulty == "upto_100_divide_10") {
			min = 9;
			max = 101;
		} else if (digitDifficulty == "12_items_equally") {
			max = 13;
		}
		res.push(questionGenerator(min, max));
	}
  	return res;
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
  const multiply = (a: number, b: number) => a * b;
  return getRandomBinaryQuestion(min, max, "x", multiply);
}
function getRandomDivisionQuestion(min: number, max: number): Question {
  const a = getRndInteger(min, max);
  let b;
  let text;
  if (max == 12) {
    let factor;
    factor = Object.keys(tweleveMap[a]);
    b = getRndInteger(1, factor.length);
    text = `${a} / ${b} =`;
  } else {
    b = getRndInteger(min, max);
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
