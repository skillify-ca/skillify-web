import "@testing-library/jest-dom/extend-expect";
import { getArrayMultiplicationQuestion } from "./questionGenerator";
import { Skill } from "./skill";
test("generate Array Multiplication question", async () => {
    // Arrange
    let a = 4;
    let b = 3;
  
    // Act
    const question = getArrayMultiplicationQuestion(a, b, Skill.MULTIPLICATION_5);
  
    // Assert
    expect(question.image).toBe("/ArrayQ/3X4.png");
  });