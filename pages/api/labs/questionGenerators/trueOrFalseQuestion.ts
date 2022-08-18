import { QuestionType } from "../../questionTypes";
import { getRandomItemFromArray } from "../../random";

export type TrueOrFalseQuestion = {
  questionType: QuestionType.TRUE_OR_FALSE_PROBLEM;
  text: string;
  answer: boolean;
};

export function generateTrueOrFalseQuestion(
  firstNumber: number,
  secondNumber: number,
  operator: string,
  answerFunction: (x: number, y: number) => number
): TrueOrFalseQuestion {
  const biggerNumber = Math.max(firstNumber, secondNumber);
  const smallerNumber = Math.min(firstNumber, secondNumber);

  const isAnswerTrue = getRandomItemFromArray([true, false]);
  if (isAnswerTrue) {
    const text = `${biggerNumber} ${operator} ${smallerNumber} = ${answerFunction(
      biggerNumber,
      smallerNumber
    )}`;
    return {
      questionType: QuestionType.TRUE_OR_FALSE_PROBLEM,
      text,
      answer: isAnswerTrue,
    };
  } else {
    let randomDisplacement = getRandomItemFromArray([-2, -1, 1, 2, 3]);
    const text = `${biggerNumber} ${operator} ${smallerNumber} = ${
      answerFunction(biggerNumber, smallerNumber) + randomDisplacement
    }`;
    return {
      questionType: QuestionType.TRUE_OR_FALSE_PROBLEM,
      text,
      answer: isAnswerTrue,
    };
  }
}
