import { getRandomNumbersQuestion } from "./questionGenerator";
import { Skill } from "./skill";
import { wrongAnsGenerator } from "./questionGenerator";

test("test 1", async () => {
  // Arrange
  const realAns = 0;
  const wrongArr = [-2, -1, 0];

  // Act
  const result = wrongAnsGenerator(realAns, wrongArr);

  // Assert
  expect(result).toBe(0);
});
