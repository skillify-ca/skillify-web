import { generateHorizontalEquationQuestion } from "../../labs/questionGenerators/horizontalEquationQuestion";
import { generateLongDivisionQuestion } from "../../labs/questionGenerators/longDivisionQuestion";
import { generateWordProblemQuestion } from "../../labs/questionGenerators/wordProblemQuestion";
import { Question } from "../../question";
import { QuestionType } from "../../questionTypes";
import {
  getRandomItemFromArray,
  getRndInteger,
  getRndTenthsDecimal,
} from "../../random";
import { Skill } from "../../skill";

export function getRandomDivisionQuestion(
  min: number,
  max: number,
  skill: Skill
): Question {
  const a = getRndInteger(min, max);
  const b = getRndInteger(min, max);
  const product = a * b;
  const types = [
    QuestionType.LONG_DIVISION_PROBLEM,
    QuestionType.HORIZONTAL_EQUATION,
    QuestionType.BINARY_WORD_PROBLEM,
  ];
  const type = getRandomItemFromArray(types);

  switch (type) {
    case QuestionType.LONG_DIVISION_PROBLEM:
      return generateLongDivisionQuestion(a, b);
    case QuestionType.HORIZONTAL_EQUATION:
      return generateHorizontalEquationQuestion(
        product,
        b,
        "÷",
        (x, y) => Math.floor(x / y),
        skill
      );
    case QuestionType.BINARY_WORD_PROBLEM:
      return generateWordProblemQuestion(product, b, "÷", (x, y) =>
        Math.floor(x / y)
      );
  }
}
