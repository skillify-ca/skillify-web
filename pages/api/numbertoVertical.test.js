import { numtoDigitsArr } from "./questions/questionGenerator";

test("test 1", async () => {
  // Arrange
  const num = "123";

  // Act
  const result = numtoDigitsArr(num);

  // Assert
  expect(result).toStrictEqual([1, 2, 3]);
});
