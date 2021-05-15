import { shuffle } from "lodash";
import { AdditionProperty } from "../../components/stories/MultipleChoiceTypes";
import { Question, MCOption, MCModel, AnswerType } from "./question";
import { QuestionType } from "./questionTypes";
import { getRandomItemFromArray, getRndInteger } from "./random";

export function getRandomPropertyAdditionQuestion(min: number, max: number) {
    const randomProperty = getRndInteger(0, 2);
    if (randomProperty == 0) {
      return getRandomSentencePropertyQuestion(min, max, "+");
    } else if (randomProperty == 1) {
      return getRandomWordPropertyQuestion(min, max, "+");
    }
  }
  
  function getRandomWordPropertyQuestion(
    min: number,
    max: number,
    operator: string
  ): Question {
    // correct answers
  
    const a = getRndInteger(min, max);
    const b = getRndInteger(min, max);
    const commutativeOption = getCommutativeSentence(a, b, operator);
  

    const identityNum = getRndInteger(min, max);
    const identityOption = getIdentitySentence(identityNum, operator);
  
    const x = getRndInteger(min, max);
    const y = getRndInteger(min, max);
    const z = getRndInteger(min, max);
    const associativeOption = getAssociativeSentence(x, y, z, operator);
  
    // answer array chooser
  
    const correctAnswers = [commutativeOption, identityOption, associativeOption];
    const correctIndex = getRndInteger(0, correctAnswers.length);
    const finalCorrectAnswer = correctAnswers[correctIndex];
  
    const questionOption: MCOption = { text: finalCorrectAnswer, id: "a" };
  
    const questionModel = [questionOption];
  
    const modelProperty: MCModel = { options: questionModel };
  
    return {
      text: modelProperty.options[0].text,
      answer: "a",
      answerType: AnswerType.STRING,
      operator: operator,
      questionType: QuestionType.MULTIPLE_CHOICE_WORD,
      multipleChoice: modelProperty,
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
    operator: string
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
  
    return {
      text: text,
      answerType: AnswerType.STRING,
      answer: additionPropertyType,
      operator: operator,
      questionType: QuestionType.MULTIPLE_CHOICE_SENTENCE,
      multipleChoice: model,
    };
  }
  