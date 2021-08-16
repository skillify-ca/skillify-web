import { getRandomNumbersQuestion } from "./questionGenerator";
import { Skill } from "./skill";

test("Comparison Number", async () => {
  // Act
  const question = getRandomNumbersQuestion(
    40,
    100,

    Skill.NUMBERS_50
  );
});
