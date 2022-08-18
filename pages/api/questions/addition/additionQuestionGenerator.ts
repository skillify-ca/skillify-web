import { Question } from "../../question";
import { QuestionType } from "../../questionTypes";
import { getRndInteger } from "../../random";
import { Skill } from "../../skill";
import { getRandomBinaryQuestion } from "../questionGenerator";

export function getRandomAdditionQuestion(
  min: number,
  max: number,
  skill: Skill
): Question {
  let rndQuestionType = getRndInteger(0, 2);
  //Conditional for visual question types to be generated
  //Visual number types are only applied to Grade 1 Addition questions
  if (rndQuestionType == 0 && skill == Skill.ADDITION_SINGLE) {
    let a = getRndInteger(min, max);
    let b = getRndInteger(min, max);
    let text = `${a} + ${b} =`;

    return {
      text: text,
      answer: (a + b).toString(),
      questionType: QuestionType.VISUAL_TYPE_PROBLEM,
      operator: "+",
      displayNum: getRndInteger(0, 3),
    };
  }
  //This function can be used to determine the sum of the two numbers passed in as arguments
  const add = (a: number, b: number) => a + b;
  return getRandomBinaryQuestion(min, max, "+", add, skill);
}
