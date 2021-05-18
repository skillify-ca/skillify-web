import {
  getFillBlankQuestion,
  getRandomFillBlankQuestion,
} from "./additionPropertyQuestionGenerator";
import { Skill } from "./skill";

test("Fill in the Blanks test", async () => {
  // Act
  const question = getFillBlankQuestion(
    10,
    11,
    12,
    "+",
    Skill.ADDITION_PROPERTIES
  );
  const test1 = getFillBlankQuestion(5, 5, 3, "+", Skill.ADDITION_PROPERTIES);

  // Assert
  expect(question.fillInTheBlank.options[0].text).toBe(
    "10 + 11 + 12 = 11 + 10 + 12"
  );
  expect(question.fillInTheBlank.options[2].text).toBe("= 11 + 22");
});

//`${a} + ${b} + ${c} = ${b} + ${a} + ${c}`
//`= ${b} + ${a + c}
