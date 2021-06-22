import { getRandomNumbersQuestion } from "./questionGenerator";
import { Skill } from "./skill";

test("Horizontal Test", async () => {
  // Act
  const question = getRandomNumbersQuestion(1, 201, Skill.NUMBERS_200);
  const question2 = getRandomNumbersQuestion(
    5,
    5,
    3,
    "+",
    Skill.ADDITION_PROPERTIES
  );

  // Assert
  expect(question.arrayAns.length).toBe(3);
  expect(question.arrayAns == null).toBe(false);
});
//   expect(question.fillInTheBlank.options[2].text).toBe("= 11 + 22");
// });

//`${a} + ${b} + ${c} = ${b} + ${a} + ${c}`
//`= ${b} + ${a + c}
