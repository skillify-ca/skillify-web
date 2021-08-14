import "@testing-library/jest-dom/extend-expect";
import {
  getArrayMultiplicationQuestion,
  getRandomDivisionQuestion,
  getDivisionQuestion,
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
test("If we generate Two digit by One digit Divison where divisor is 1 then quotient should equal the dividend with no remainder", async () => {
  // Arrange
  let a = 1;
  let b = 11;

  // Act
  const question = getDivisionQuestion(
    a,
    b,
    Skill.DIVISION_TWO_DIGIT_BY_ONE_DIGIT
  );

  // Assert
  expect(question.text).toBe("11 / 1 =");
  expect(question.answer).toBe("11,0");
  expect(question.questionType).toBe(QuestionType.LONG_DIVISION_PROBLEM);
});
test("If we generate Two digit by One digit Divison where division is uneven then there should be a quoitient and a whole number remainder", async () => {
  // Arrange
  let a = 3;
  let b = 40;

  // Act
  const question = getDivisionQuestion(
    a,
    b,
    Skill.DIVISION_TWO_DIGIT_BY_ONE_DIGIT
  );

  // Assert
  expect(question.text).toBe("40 / 3 =");
  expect(question.answer).toBe("13,1");

  expect(question.questionType).toBe(QuestionType.LONG_DIVISION_PROBLEM);
});
test("If we generate Two digit by One digit Divison question where division is uneven then there should be a quoitient and a whole number remainder", async () => {
  // Arrange
  let a = 5;
  let b = 99;

  // Act
  const question = getDivisionQuestion(
    a,
    b,
    Skill.DIVISION_TWO_DIGIT_BY_ONE_DIGIT
  );

  // Assert
  expect(question.text).toBe("99 / 5 =");
  expect(question.answer).toBe("19,4");
  expect(question.questionType).toBe(QuestionType.LONG_DIVISION_PROBLEM);
});
test("If we generate a Two Digit by One Digit Division question where the divisor evenly divides the dividend then the remainder is expected to be 0", async () => {
  // Arrange
  let a = 4;
  let b = 40;

  // Act
  const question = getDivisionQuestion(
    a,
    b,
    Skill.DIVISION_TWO_DIGIT_BY_ONE_DIGIT
  );

  // Assert
  expect(question.text).toBe("40 / 4 =");
  expect(question.answer).toBe("10,0");
  expect(question.questionType).toBe(QuestionType.LONG_DIVISION_PROBLEM);
});

test("If we generate a Three Digit by One Digit Division question where the divisor evenly divides the dividend then the remainder is expected to be 0", async () => {
  // Arrange
  let a = 10;
  let b = 900;

  // Act
  const question = getDivisionQuestion(
    a,
    b,
    Skill.DIVISION_THREE_DIGIT_BY_ONE_DIGIT
  );

  // Assert
  expect(question.text).toBe("900 / 10 =");
  expect(question.answer).toBe("90,0");
  expect(question.questionType).toBe(QuestionType.LONG_DIVISION_PROBLEM);
});
test("If we generate Three digit by One digit Divison question where division is uneven then there should be a quoitient and a whole number remainder", async () => {
  // Arrange
  let a = 2;
  let b = 883;

  // Act
  const question = getDivisionQuestion(
    a,
    b,
    Skill.DIVISION_THREE_DIGIT_BY_ONE_DIGIT
  );

  // Assert
  expect(question.text).toBe("883 / 2 =");
  expect(question.answer).toBe("441,1");

  expect(question.questionType).toBe(QuestionType.LONG_DIVISION_PROBLEM);
});
test("If we generate Three digit by One digit Divison where division is uneven then there should be a quoitient and a whole number remainder", async () => {
  // Arrange
  let a = 7;
  let b = 457;

  // Act
  const question = getDivisionQuestion(
    a,
    b,
    Skill.DIVISION_THREE_DIGIT_BY_ONE_DIGIT
  );

  // Assert
  expect(question.text).toBe("457 / 7 =");
  expect(question.answer).toBe("65,2");

  expect(question.questionType).toBe(QuestionType.LONG_DIVISION_PROBLEM);
});

test("If we generate Three digit by One digit Divison where divisor is 1 then quotient should equal the dividend with no remainder", async () => {
  // Arrange
  let a = 1;
  let b = 144;

  // Act
  const question = getDivisionQuestion(
    a,
    b,
    Skill.DIVISION_THREE_DIGIT_BY_ONE_DIGIT
  );

  // Assert
  expect(question.text).toBe("144 / 1 =");
  expect(question.answer).toBe("144,0");
  expect(question.questionType).toBe(QuestionType.LONG_DIVISION_PROBLEM);

  //Remainder Divison Tests
});

test("If we generate a Three digit by Two digit Divison question where division is uneven then there should be a positive remainder and quotient", async () => {
  // Arrange
  let a = 16;
  let b = 683;

  // Act
  const question = getDivisionQuestion(
    a,
    b,
    Skill.DIVISION_THREE_DIGIT_BY_TWO_DIGIT
  );

  // Assert
  expect(question.text).toBe("683 / 16 =");
  expect(question.answer).toBe("42,11");
  expect(question.questionType).toBe(QuestionType.LONG_DIVISION_PROBLEM);
});

test("If we generate a Three digit by Two digit Divison question where division is uneven then there should be a positive remainder and quotient", async () => {
  // Arrange
  let a = 99;
  let b = 100;

  // Act
  const question = getDivisionQuestion(
    a,
    b,
    Skill.DIVISION_THREE_DIGIT_BY_TWO_DIGIT
  );

  // Assert
  expect(question.text).toBe("100 / 99 =");
  expect(question.answer).toBe("1,1");
  expect(question.questionType).toBe(QuestionType.LONG_DIVISION_PROBLEM);
});

test("If we generate a Three digit by Two digit Divison question where division is uneven then there should be a positive remainder and quotient", async () => {
  // Arrange
  let a = 10;
  let b = 999;

  // Act
  const question = getDivisionQuestion(
    a,
    b,
    Skill.DIVISION_THREE_DIGIT_BY_TWO_DIGIT
  );

  // Assert
  expect(question.text).toBe("999 / 10 =");
  expect(question.answer).toBe("99,9");
  expect(question.questionType).toBe(QuestionType.LONG_DIVISION_PROBLEM);
});
test("If we generate a Three digit by Two digit Divison question where division is uneven then there should be a positive remainder and quotient", async () => {
  // Arrange
  let a = 99;
  let b = 999;

  // Act
  const question = getDivisionQuestion(
    a,
    b,
    Skill.DIVISION_THREE_DIGIT_BY_TWO_DIGIT
  );

  // Assert
  expect(question.text).toBe("999 / 99 =");
  expect(question.answer).toBe("10,9");
  expect(question.questionType).toBe(QuestionType.LONG_DIVISION_PROBLEM);
});
