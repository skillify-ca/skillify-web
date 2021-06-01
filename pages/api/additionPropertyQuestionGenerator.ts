import { shuffle } from "lodash";
import { AdditionProperty } from "../../components/stories/MultipleChoiceTypes";
import {
  Question,
  MCOption,
  MCModel,
  AnswerType,
  FillOption,
  fillBlankModel,
} from "./question";
import { Skill } from "./skill";
import { QuestionType } from "./questionTypes";
import { getRandomItemFromArray, getRndInteger } from "./random";
import { FillBlank } from "../../components/stories/FillBlank";

export function getRandomPropertyAdditionQuestion(
  min: number,
  max: number,
  skill: Skill
) {
  const randomProperty = getRndInteger(0, 3);
  if (randomProperty == 0) {
    return getRandomSentencePropertyQuestion(min, max, "+", skill);
  } else if (randomProperty == 1) {
    return getRandomWordPropertyQuestion(min, max, "+", skill);
  } else if (randomProperty == 2) {
    return getRandomFillBlankQuestion(min, max, "+", skill);
  }
}

export function getRandomFillBlankQuestion(
  min: number,
  max: number,
  operator: string,
  skill: Skill
): Question {
  const a = getRndInteger(min, max);
  const b = getRndInteger(min, max);
  const c = getRndInteger(min, max);

  return getFillBlankQuestion(a, b, c, operator, skill);
}

export function getFillBlankQuestion(
  a: number,
  b: number,
  c: number,
  operator: string,
  skill: Skill
) {
  const step1: FillOption = { text: getStep1(a, b, c, operator) };
  const step2: FillOption = { text: getStep2(a, b, c, operator) };
  const step3: FillOption = { text: getStep3(a, b, c, operator) };

  const fillArray: fillBlankModel = { options: [step1, step2, step3] };

  return {
    text: `Fill in the blanks using ${skill}`,
    answer: `${a},${a},${a + c},${a + c + b}`,
    answerType: AnswerType.NUMBER,
    operator: operator,
    questionType: QuestionType.FILL_IN_THE_BLANK_PROBLEM,
    skill: skill,
    fillInTheBlank: fillArray,
  };
}

function getStep1(a: number, b: number, c: number, operator: string) {
  return `${a} + ${b} + ${c} = ${b} + ${a} + ${c}`;
}

function getStep2(a: number, b: number, c: number, operator: string) {
  return `= ${b} + (${a} + ${c})`;
}

function getStep3(a: number, b: number, c: number, operator: string) {
  return `= ${b} + ${a + c}`;
}
function getRandomWordPropertyQuestion(
  min: number,
  max: number,
  operator: string,
  skill: Skill
): Question {
  // correct answers

  const a = getRndInteger(min, max);
  const b = getRndInteger(min, max);
  const commutativeOption: MCOption = {
    text: getCommutativeSentence(a, b, operator),
    id: "Commutative",
  };

  const identityNum = getRndInteger(min, max);
  const identityOption: MCOption = {
    text: getIdentitySentence(identityNum, operator),
    id: "Identity",
  };

  const x = getRndInteger(min, max);
  const y = getRndInteger(min, max);
  const z = getRndInteger(min, max);
  const associativeOption: MCOption = {
    text: getAssociativeSentence(x, y, z, operator),
    id: "Associative",
  };

  // answer array chooser

  const correctAnswers = [commutativeOption, identityOption, associativeOption];
  const correctIndex = getRndInteger(0, correctAnswers.length);
  const finalCorrectAnswer = correctAnswers[correctIndex];

  const questionOption: MCOption = {
    text: finalCorrectAnswer.text,
    id: finalCorrectAnswer.id,
  };

  const questionModel = [questionOption];

  const modelProperty: MCModel = { options: questionModel };

  return {
    text: modelProperty.options[0].text,
    answer: modelProperty.options[0].id,
    answerType: AnswerType.STRING,
    operator: operator,
    questionType: QuestionType.MULTIPLE_CHOICE_WORD,
    multipleChoice: modelProperty,
    skill: skill,
  };
}

// Returns sentences like: 2 + 3 = 3 + 2
function getCommutativeSentence(a: number, b: number, operator: string) {
  return `${Math.max(a, b)} ${operator} ${Math.min(a, b)} = ${Math.min(
    a,
    b
  )} ${operator} ${Math.max(a, b)}`;
}

// Returns sentences like: (2 + 3) + 4 = 2 + (3 + 4)
function getAssociativeSentence(
  x: number,
  y: number,
  z: number,
  operator: string
) {
  return `(${x} ${operator} ${y}) ${operator} ${z} = ${x} ${operator} (${y} ${operator} ${z})`;
}

// Returns setences like: 2 + 0 = 2
function getIdentitySentence(identityNum: number, operator: string) {
  return `${identityNum} ${operator} 0 = ${identityNum}`;
}

function getIncorrectSentence(
  a: number,
  b: number,
  x: number,
  y: number,
  z: number,
  identityNum: number,
  operator: string
) {
  // 2 + 3 = 2 + 3
  const wrongCommutativeSetence = `${Math.max(a, b)} ${operator} ${Math.min(
    a,
    b
  )} = ${Math.max(a, b)} ${operator} ${Math.min(a, b)}`;

  // (2 + 1) + 4 = 2 + 1 + 1
  const wrongAssociativeSentence = `(${x} ${operator} ${y}) ${operator} ${z} = (${x} ${operator} ${y}) ${operator} ${y}`;

  // 2 + 0 = 20
  const wrongIdentitySentence = `${identityNum} ${operator} 0 = ${identityNum}0`;

  const wrongSentences: string[] = [
    wrongCommutativeSetence,
    wrongAssociativeSentence,
    wrongIdentitySentence,
  ];

  return getRandomItemFromArray(wrongSentences);
}

function getRandomSentencePropertyQuestion(
  min: number,
  max: number,
  operator: string,
  skill: Skill
): Question {
  // correct answers

  const a = getRndInteger(min, max);
  const b = getRndInteger(min, max);
  const commutativeSentence = getCommutativeSentence(a, b, operator);

  // 2 + 0 = 2
  const identityNum = getRndInteger(min, max);
  const identitySentence = getIdentitySentence(identityNum, operator);

  // (2 + 3) + 4 = 2 + (3+4)
  const x = getRndInteger(min, max);
  const y = getRndInteger(min, max);
  const z = getRndInteger(min, max);
  const associativeSentence = getAssociativeSentence(x, y, z, operator);

  // wrong answers

  const incorrectSentence = getIncorrectSentence(
    a,
    b,
    x,
    y,
    z,
    identityNum,
    operator
  );

  // correct answer determiner
  const additionPropertyTypes = [
    AdditionProperty.ASSOCIATIVE,
    AdditionProperty.COMMUTATIVE,
    AdditionProperty.IDENTITY,
  ];
  const additionPropertyType = getRandomItemFromArray(additionPropertyTypes);
  const text = `Which equation shows the ${additionPropertyType} Property?`;

  // We include an option that represents each of the addition properties as well as an extra incorrect option
  const option1: MCOption = { text: commutativeSentence, id: "a" };
  const option2: MCOption = { text: identitySentence, id: "b" };
  const option3: MCOption = { text: associativeSentence, id: "c" };
  const option4: MCOption = { text: incorrectSentence, id: "d" };

  const optionarr = [option1, option2, option3, option4];

  const model: MCModel = { options: shuffle(optionarr) };

  let answer;
  switch (additionPropertyType) {
    case "Commutative":
      answer = option1.text;
      break;
    case "Identity":
      answer = option2.text;
      break;

    case "Associative":
      answer = option3.text;
      break;
  }

  return {
    text: text,
    answerType: AnswerType.STRING,
    answer: answer,
    operator: operator,
    questionType: QuestionType.MULTIPLE_CHOICE_SENTENCE,
    multipleChoice: model,
    skill: skill,
  };
}
