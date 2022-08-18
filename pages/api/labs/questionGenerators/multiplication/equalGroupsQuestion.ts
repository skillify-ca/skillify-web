import { QuestionType } from "../../questionTypes";
import { getRndInteger } from "../../random";

export function getMultiplicationEqualGroups(a: number, b: number): Question {
  let text = `${a} x ${b} =`;
  return {
    text: text,
    answer: `${a} groups of ${b}`,
    questionType: QuestionType.MULTIPLICATION_EQUAL_GROUPS,
    colour: getRndInteger(0, 3) as 0 | 1 | 2 | 3,
  };
}
