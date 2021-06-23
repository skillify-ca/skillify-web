import { getRandomNumbersQuestion } from "./questionGenerator";
import { Skill } from "./skill";
import { stringNumCalc } from "./questionGenerator";

test("test 1", async () => {
  // Arrange
  const num = [3, 2, 1];

  // Act
  const result = stringNumCalc(num);

  // Assert
  expect(result).toBe("Three Hundred Twenty One");
});

test("test 2", async () => {
  // Arrange
  const num = [1, 0, 0];

  // Act
  const result = stringNumCalc(num);

  // Assert
  expect(result).toBe("One Hundred  ");
});

test("test 3", async () => {
  // Arrange
  const num = [1, 0, 1];

  // Act
  const result = stringNumCalc(num);

  // Assert
  expect(result).toBe("One Hundred  One");
});

test("test 4", async () => {
  // Arrange
  const num = [1, 1, 1];

  // Act
  const result = stringNumCalc(num);

  // Assert
  expect(result).toBe("One Hundred Eleven ");
});

test("test 5", async () => {
  // Arrange
  const num = [1, 1, 0];

  // Act
  const result = stringNumCalc(num);

  // Assert
  expect(result).toBe("One Hundred Ten ");
});

test("test 6", async () => {
  // Arrange
  const num = [0, 1, 0];

  // Act
  const result = stringNumCalc(num);

  // Assert
  expect(result).toBe(" Ten ");
});

test("test 7", async () => {
  // Arrange
  const num = [9, 1, 0];

  // Act
  const result = stringNumCalc(num);

  // Assert
  expect(result).toBe("Nine Hundred Ten ");
});

test("test 8", async () => {
  // Arrange
  const num = [0, 0, 1];

  // Act
  const result = stringNumCalc(num);

  // Assert
  expect(result).toBe("  One");
});

test("test 9", async () => {
  // Arrange
  const num = [0, 2, 1];

  // Act
  const result = stringNumCalc(num);

  // Assert
  expect(result).toBe(" Twenty One");
});
