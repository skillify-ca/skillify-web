import { QuestionType } from "../../../questionTypes";
import { getRandomItemFromArray } from "../../../random";

export function getArrayMultiplicationQuestion(a: number, b: number): Question {
  let text = `${a} x ${b} =`;
  return {
    text: text,
    answer: (a * b).toString(),
    questionType: QuestionType.ARRAY_QUESTION,
    colour: getRandomItemFromArray([
      "red",
      "purple",
      "green",
      "yellow",
      "blue",
    ]),
  };
}
