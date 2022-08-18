import { Question } from "../../question";
import { QuestionType } from "../../questionTypes";
import { getRandomItemFromArray, getRndInteger } from "../../random";
import { Skill } from "../../skill";
import { getRandomBinaryQuestion } from "../questionGenerator";

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
export function getMultiplicationEqualGroups(a: number, b: number): Question {
  let text = `${a} x ${b} =`;
  return {
    text: text,
    answer: `${a} groups of ${b}`,
    questionType: QuestionType.MULTIPLICATION_EQUAL_GROUPS,
    colour: getRndInteger(0, 3) as 0 | 1 | 2 | 3,
  };
}

export function getRandomMultiplicationQuestion(
  min: number,
  max: number,
  skill: Skill
) {
  //This function can be used to determine the product of the two numbers passed in as arguments
  const multiply = (a: number, b: number) => a * b;
  let randomPick = getRndInteger(0, 2);

  //Conditional to generate Array Multiplication questions
  if (skill == Skill.MULTIPLICATION_5 && randomPick === 1) {
    const a = getRndInteger(1, 6);
    const b = getRndInteger(1, 6);
    return getArrayMultiplicationQuestion(a, b);
    //Conditional to generate Equal Groups Multiplication questions
  } else if (skill == Skill.EQUAL_GROUP_10_ITEMS) {
    const a = getRndInteger(1, 7);
    const b = getRndInteger(1, 11);
    return getMultiplicationEqualGroups(a, b);
  }
  return getRandomBinaryQuestion(min, max, "x", multiply, skill);
}
