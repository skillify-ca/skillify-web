import "@testing-library/jest-dom/extend-expect";
import {
  getArrayMultiplicationQuestion,
  getRandomDivisionQuestion,
  getRandomDivisionQuestionTestPath,
} from "./questionGenerator";
import { QuestionType } from "./questionTypes";
import { Skill } from "./skill";
test("generate Array Multiplication question", async () => {
  // Arrange
  let a = 4;
  let b = 3;

  // Act
  const question = getArrayMultiplicationQuestion(a, b, Skill.MULTIPLICATION_5);

  // Assert
  expect(question.text).toBe("4 x 3 =");

  //Remainder Divison Tests
});
test("generate Array Multiplication question", async () => {
  // Arrange
  let a = 4;
  let b = 3;

  // Act
  const question = getRandomDivisionQuestionTestPath(
    a,
    b,
    Skill.MULTIPLICATION_5
  );

  // Assert
  expect(question.text).toBe("hello" || "Bye");

  //Remainder Divison Tests
});
test("Generate Division with remainder question", async () => {
  // Arrange
  let a = 40;
  let b = 3;

  // Act
  const question = getRandomDivisionQuestionTestPath(
    a,
    b,
    Skill.DIVISION_TWO_DIGIT_BY_ONE_DIGIT
  );

  // Assert
  expect(question.text).toBe("40 / 3 =");
  expect(question.answer).toBe("13,1");
  expect(question.questionType).toBe(QuestionType.HORIZONTAL_EQUATION);
});
test("Generate Division with remainder question", async () => {
  // Arrange
  let a = 40;
  let b = 4;

  // Act
  const question = getRandomDivisionQuestionTestPath(
    a,
    b,
    Skill.DIVISION_TWO_DIGIT_BY_ONE_DIGIT
  );

  // Assert
  expect(question.text).toBe("40 / 4 =");
  expect(question.answer).toBe("10,0");
  expect(question.questionType).toBe(QuestionType.HORIZONTAL_EQUATION);
});
