import { getRandomNumbersQuestion } from "./questionGenerator";
import { Skill } from "./skill";

test("Count Sequence Blanks", async () => {
  // Act
  const question = getRandomNumbersQuestion(
    40,
    100,

    Skill.NUMBERS_50
  );
  //   const test1 = getRandomNumbersQuestion(40, 100, Skill.NUMBERS_50);

  // Assert
  //   expect(test1.answer).toBe("");
  //   expect(question.fillInTheBlank.options[2].text).toBe("= 11 + 22");
});

//`${a} + ${b} + ${c} = ${b} + ${a} + ${c}`
//`= ${b} + ${a + c}
