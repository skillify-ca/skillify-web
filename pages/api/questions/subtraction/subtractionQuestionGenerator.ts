import { QuestionType } from "../../questionTypes";
import { Skill } from "../../skill";
import { getRandomBinaryQuestion } from "../questionGenerator";

export function getRandomSubtractionQuestion(
  min: number,
  max: number,
  skill: Skill
) {
  const subtract = (a: number, b: number) => a - b;
  return getRandomBinaryQuestion(min, max, "-", subtract, skill);
}
