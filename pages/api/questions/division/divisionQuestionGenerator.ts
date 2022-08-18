import { Question } from "../../question";
import { QuestionType } from "../../questionTypes";
import { getRndInteger, getRndTenthsDecimal } from "../../random";
import { Skill } from "../../skill";

export function getRandomDivisionQuestion(
  min: number,
  max: number,
  skill: Skill
): Question {
  let a;
  let b;
  if (
    skill == Skill.DIVISION_TWO_DIGIT_BY_ONE_DIGIT ||
    skill == Skill.DIVISION_THREE_DIGIT_BY_ONE_DIGIT ||
    skill == Skill.DIVISION_THREE_DIGIT_BY_TWO_DIGIT ||
    skill == Skill.DIVISION_THREE_DIGIT_BY_TENTH
  ) {
    a = getRndInteger(1, 10);
    b = getRndInteger(min, max);
    if (skill == Skill.DIVISION_THREE_DIGIT_BY_TWO_DIGIT) {
      a = getRndInteger(10, 100);
    } else if (skill == Skill.DIVISION_THREE_DIGIT_BY_TENTH) {
      a = getRndTenthsDecimal(0.1, 0.9);
    }
  } else {
    a = getRndInteger(min, max);
    b = getRndInteger(min, max);
  }
  return getDivisionQuestion(a, b, skill);
}

export function getDivisionQuestion(
  a: number,
  b: number,
  skill: Skill
): Question {
  if (
    skill == Skill.DIVISION_TWO_DIGIT_BY_ONE_DIGIT ||
    skill == Skill.DIVISION_THREE_DIGIT_BY_ONE_DIGIT ||
    skill == Skill.DIVISION_THREE_DIGIT_BY_TWO_DIGIT ||
    skill == Skill.DIVISION_THREE_DIGIT_BY_TENTH
  ) {
    let type = QuestionType.LONG_DIVISION_PROBLEM;
    let quotient = Math.floor(b / a);
    let remainder = b % a;
    let answer;
    if (skill == Skill.DIVISION_THREE_DIGIT_BY_TENTH) {
      // Skill.DIVISION_THREE_DIGIT_BY_TENTH only allows for one QuestionType
      type = QuestionType.HORIZONTAL_EQUATION;
      //Answer only requires the quotient
      answer = `${quotient}`;
    } else {
      //Answer consists of both the quotient and remainder
      answer = `${quotient},${remainder}`;
    }

    const text = `${b} / ${a} =`;

    return {
      text: text,
      answer: answer,
      questionType: type,
      operator: "÷",
      skill: skill,
    };
  } else {
    const product = a * b;
    const text = `${product} / ${b} =`;
    const types = [
      QuestionType.LONG_DIVISION_PROBLEM,
      QuestionType.HORIZONTAL_EQUATION,
      QuestionType.BINARY_WORD_PROBLEM,
    ];

    return {
      text: text,
      answer: a.toString(),
      skill: skill,
    };
  }
}
