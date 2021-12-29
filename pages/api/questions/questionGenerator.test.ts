import "@testing-library/jest-dom/extend-expect";
import { QuestionType } from "../questionTypes";
import { Skill } from "../skill";
import { getDivisionQuestion } from "./division/divisionQuestionGenerator";
import { getArrayMultiplicationQuestion } from "./multiplication/multiplicationQuestionGenerator";
import { getBinaryQuestion } from "./questionGenerator";
test("generate Array Multiplication question", async () => {
  // Arrange
  let a = 4;
  let b = 3;

  // Act
  const question = getArrayMultiplicationQuestion(a, b, Skill.MULTIPLICATION_5);

  // Assert
  expect(question.text).toBe("4 x 3 =");
});
//Division with Remainder Tests
/* Skill.DIVISION_TWO_DIGIT_BY_ONE_DIGIT Tests */
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

/* Skill.DIVISION_THREE_DIGIT_BY_ONE_DIGIT Tests*/
test("If we generate a Three Digit by One Digit Division question where the divisor evenly divides the dividend then the remainder is expected to be 0", async () => {
  // Arrange
  let a = 5;
  let b = 900;

  // Act
  const question = getDivisionQuestion(
    a,
    b,
    Skill.DIVISION_THREE_DIGIT_BY_ONE_DIGIT
  );

  // Assert
  expect(question.text).toBe("900 / 5 =");
  expect(question.answer).toBe("180,0");
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
});
/* Skill.DIVISION_THREE_DIGIT_BY_TWO_DIGIT Tests*/
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

//Decimal Skills Tests
/* Skill.SUBTRACTION_TENTHS */
const add = (a: number, b: number) => a + b;
const subtract = (a: number, b: number) => a - b;
const multiply = (a: number, b: number) => a * b;

test("If we genrate an addition tenths question with the lowest possible edge case the answer should result in 0.0", async () => {
  // Arrange
  let a = 0.1;
  let b = 0.1;

  // Act
  const question = getBinaryQuestion(
    a,
    b,
    "-",
    QuestionType.VERTICAL_EQUATION,
    subtract,
    Skill.SUBTRACTION_TENTHS
  );

  // Assert
  expect(question.text).toBe("0.1 - 0.1 =");
  expect(question.answer).toBe("0.0");
});
test("If we genrate an addition tenths question with the highest possible edge case input the answer should result in 0.0", async () => {
  // Arrange
  let a = 0.9;
  let b = 0.9;

  // Act
  const question = getBinaryQuestion(
    a,
    b,
    "-",
    QuestionType.VERTICAL_EQUATION,
    subtract,
    Skill.SUBTRACTION_TENTHS
  );

  // Assert
  expect(question.text).toBe("0.9 - 0.9 =");
  expect(question.answer).toBe("0.0");
});
test("If we genrate a subtraction tenths question the highest possible output should be 0.8", async () => {
  // Arrange
  let a = 0.7;
  let b = 0.3;

  // Act
  const question = getBinaryQuestion(
    a,
    b,
    "-",
    QuestionType.HORIZONTAL_EQUATION,
    subtract,
    Skill.SUBTRACTION_TENTHS
  );

  // Assert
  expect(question.text).toBe("0.7 - 0.3 =");
  expect(question.answer).toBe("0.4");
});
test("If we genrate a subtraction tenths question with the inputs of 0.3 and 0.1 the out answer should be 0.2", async () => {
  // Arrange
  let a = 0.1;
  let b = 0.3;

  // Act
  const question = getBinaryQuestion(
    a,
    b,
    "-",
    QuestionType.HORIZONTAL_EQUATION,
    subtract,
    Skill.SUBTRACTION_TENTHS
  );

  // Assert
  expect(question.text).toBe("0.3 - 0.1 =");
  expect(question.answer).toBe("0.2");
});
test("If we generate an subtraction tenths question that inputs 0.4 and 0.5 that output question answer should be 0.9 ", async () => {
  // Arrange
  let a = 0.5;
  let b = 0.6;

  // Act
  const question = getBinaryQuestion(
    a,
    b,
    "-",
    QuestionType.HORIZONTAL_EQUATION,
    subtract,
    Skill.SUBTRACTION_TENTHS
  );

  // Assert
  expect(question.text).toBe("0.6 - 0.5 =");
  expect(question.answer).toBe("0.1");
});

/* Skill.ADDITION_TENTHS */

test("If we genrate an addition tenths question with the lowest possible edge case (0.1) the answer should result in 0.2", async () => {
  // Arrange
  let a = 0.1;
  let b = 0.1;

  // Act
  const question = getBinaryQuestion(
    a,
    b,
    "+",
    QuestionType.VERTICAL_EQUATION,
    add,
    Skill.ADDITION_TENTHS
  );

  // Assert
  expect(question.text).toBe("0.1 + 0.1 =");
  expect(question.answer).toBe("0.2");
});
test("If we genrate an addition tenths question with the highest possible edge case input (0.9) the answer should result in 1.8", async () => {
  // Arrange
  let a = 0.9;
  let b = 0.9;

  // Act
  const question = getBinaryQuestion(
    a,
    b,
    "+",
    QuestionType.VERTICAL_EQUATION,
    add,
    Skill.ADDITION_TENTHS
  );

  // Assert
  expect(question.text).toBe("0.9 + 0.9 =");
  expect(question.answer).toBe("1.8");
});
test("If we genrate an addition tenths question that equals 1 then the answer should be displayed as 1.0", async () => {
  // Arrange
  let a = 0.7;
  let b = 0.3;

  // Act
  const question = getBinaryQuestion(
    a,
    b,
    "+",
    QuestionType.HORIZONTAL_EQUATION,
    add,
    Skill.ADDITION_TENTHS
  );

  // Assert
  expect(question.text).toBe("0.7 + 0.3 =");
  expect(question.answer).toBe("1.0");
});
test("If we genrate an addition tenths question that equals 1 then the answer should be displayed as 1.0", async () => {
  // Arrange
  let a = 0.5;
  let b = 0.5;

  // Act
  const question = getBinaryQuestion(
    a,
    b,
    "+",
    QuestionType.HORIZONTAL_EQUATION,
    add,
    Skill.ADDITION_TENTHS
  );

  // Assert
  expect(question.text).toBe("0.5 + 0.5 =");
  expect(question.answer).toBe("1.0");
});
test("If we genrate an addition tenths question that uses the highest (0.9) and lowest (0.1) possible values the answer should result in 1.0", async () => {
  // Arrange
  let a = 0.1;
  let b = 0.9;

  // Act
  const question = getBinaryQuestion(
    a,
    b,
    "+",
    QuestionType.HORIZONTAL_EQUATION,
    add,
    Skill.ADDITION_TENTHS
  );

  // Assert
  expect(question.text).toBe("0.9 + 0.1 =");
  expect(question.answer).toBe("1.0");
});

/* Skill.ADDITION_HUNDREDTHS */
test("If we genrate an addition hundredths question with the lowest possible edge case input (0.01) the answer should result in 0.02", async () => {
  // Arrange
  let a = 0.01;
  let b = 0.01;

  // Act
  const question = getBinaryQuestion(
    a,
    b,
    "+",
    QuestionType.VERTICAL_EQUATION,
    add,
    Skill.ADDITION_HUNDREDTHS
  );

  // Assert
  expect(question.text).toBe("0.01 + 0.01 =");
  expect(question.answer).toBe("0.02");
});
test("If we genrate an addition hundredths question with the highest possible edge case input (0.99) the answer should result in 1.98", async () => {
  // Arrange
  let a = 0.99;
  let b = 0.99;

  // Act
  const question = getBinaryQuestion(
    a,
    b,
    "+",
    QuestionType.VERTICAL_EQUATION,
    add,
    Skill.ADDITION_HUNDREDTHS
  );

  // Assert
  expect(question.text).toBe("0.99 + 0.99 =");
  expect(question.answer).toBe("1.98");
});
test("If we genrate an addition hundredths question that equals 1 then the answer should be displayed as 1.00", async () => {
  // Arrange
  let a = 0.45;
  let b = 0.55;

  // Act
  const question = getBinaryQuestion(
    a,
    b,
    "+",
    QuestionType.HORIZONTAL_EQUATION,
    add,
    Skill.ADDITION_HUNDREDTHS
  );

  // Assert
  expect(question.text).toBe("0.55 + 0.45 =");
  expect(question.answer).toBe("1.00");
});
test("If we genrate an addition hundredths question that equals 1 then the answer should be displayed as 1.00", async () => {
  // Arrange
  let a = 0.76;
  let b = 0.24;

  // Act
  const question = getBinaryQuestion(
    a,
    b,
    "+",
    QuestionType.HORIZONTAL_EQUATION,
    add,
    Skill.ADDITION_HUNDREDTHS
  );

  // Assert
  expect(question.text).toBe("0.76 + 0.24 =");
  expect(question.answer).toBe("1.00");
});
test("If we genrate an addition hundredths question that uses the highest(0.99) and lowest(0.01) possible values the answer should result in 1.00", async () => {
  // Arrange
  let a = 0.01;
  let b = 0.99;

  // Act
  const question = getBinaryQuestion(
    a,
    b,
    "+",
    QuestionType.HORIZONTAL_EQUATION,
    add,
    Skill.ADDITION_HUNDREDTHS
  );

  // Assert
  expect(question.text).toBe("0.99 + 0.01 =");
  expect(question.answer).toBe("1.00");
});

/* Skill.SUBTRACTION_HUNDREDTHS */

test("If we genrate an addition tenths question with the lowest possible edge case input (0.01) the answer should result in 0.00", async () => {
  // Arrange
  let a = 0.01;
  let b = 0.01;

  // Act
  const question = getBinaryQuestion(
    a,
    b,
    "-",
    QuestionType.VERTICAL_EQUATION,
    subtract,
    Skill.SUBTRACTION_HUNDREDTHS
  );

  // Assert
  expect(question.text).toBe("0.01 - 0.01 =");
  expect(question.answer).toBe("0.00");
});
test("If we genrate an addition hundredths question with the highest possible edge case input(0.99) the answer should result in 0.00", async () => {
  // Arrange
  let a = 0.99;
  let b = 0.99;

  // Act
  const question = getBinaryQuestion(
    a,
    b,
    "-",
    QuestionType.VERTICAL_EQUATION,
    subtract,
    Skill.SUBTRACTION_HUNDREDTHS
  );

  // Assert
  expect(question.text).toBe("0.99 - 0.99 =");
  expect(question.answer).toBe("0.00");
});
test("If we genrate a subtraction hundredths question the highest possible value for a (0.99) and the lowest possible value for b (0.01)output should be 0.98", async () => {
  // Arrange
  let a = 0.99;
  let b = 0.01;

  // Act
  const question = getBinaryQuestion(
    a,
    b,
    "-",
    QuestionType.HORIZONTAL_EQUATION,
    subtract,
    Skill.SUBTRACTION_HUNDREDTHS
  );

  // Assert
  expect(question.text).toBe("0.99 - 0.01 =");
  expect(question.answer).toBe("0.98");
});
test("If we genrate a subtraction hundredths question with the inputs of 0.87 and 0.56 the out answer should be 0.31", async () => {
  // Arrange
  let a = 0.87;
  let b = 0.56;

  // Act
  const question = getBinaryQuestion(
    a,
    b,
    "-",
    QuestionType.HORIZONTAL_EQUATION,
    subtract,
    Skill.SUBTRACTION_HUNDREDTHS
  );

  // Assert
  expect(question.text).toBe("0.87 - 0.56 =");
  expect(question.answer).toBe("0.31");
});
test("If we generate an subtraction hundredths question that inputs 0.44 and 0.43 that output question answer should be 0.01 ", async () => {
  // Arrange
  let a = 0.44;
  let b = 0.43;

  // Act
  const question = getBinaryQuestion(
    a,
    b,
    "-",
    QuestionType.HORIZONTAL_EQUATION,
    subtract,
    Skill.SUBTRACTION_HUNDREDTHS
  );

  // Assert
  expect(question.text).toBe("0.44 - 0.43 =");
  expect(question.answer).toBe("0.01");
});

/* Skill.DIVISION_THREE_DIGIT_BY_TENTH */
test("If a Division Question with the lowest possible dividend value of 100 and the lowest possible divisor of 0.1 is generated the answer for the question should be 10000", async () => {
  // Arrange
  let a = 0.01;
  let b = 100;

  // Act
  const question = getDivisionQuestion(
    a,
    b,
    Skill.DIVISION_THREE_DIGIT_BY_TENTH
  );

  // Assert
  expect(question.text).toBe("100 / 0.01 =");
  expect(question.answer).toBe("10000");
  expect(question.questionType).toBe(QuestionType.HORIZONTAL_EQUATION);
});
test("If a Division Question with the highest possible dividend value of 999 and the divisor of 0.1 is generated the answer for the question should be 9990", async () => {
  // Arrange
  let a = 0.1;
  let b = 999;

  // Act
  const question = getDivisionQuestion(
    a,
    b,
    Skill.DIVISION_THREE_DIGIT_BY_TENTH
  );

  // Assert
  expect(question.text).toBe("999 / 0.1 =");
  expect(question.answer).toBe("9990");

  expect(question.questionType).toBe(QuestionType.HORIZONTAL_EQUATION);
});
test("If a Division Question with the lowest possible dividend value of 100 and the highest possible divisor of 0.9 is generated the answer for the question should be 111", async () => {
  // Arrange
  let a = 0.9;
  let b = 100;

  // Act
  const question = getDivisionQuestion(
    a,
    b,
    Skill.DIVISION_THREE_DIGIT_BY_TENTH
  );

  // Assert
  expect(question.text).toBe("100 / 0.9 =");
  expect(question.answer).toBe("111");
  expect(question.questionType).toBe(QuestionType.HORIZONTAL_EQUATION);
});
test("If a Division Question with the highest possible dividend value of 999 and the hisghest possible divisor of 0.9 is generated the answer for the question should be 1100", async () => {
  // Arrange
  let a = 0.9;
  let b = 999;

  // Act
  const question = getDivisionQuestion(
    a,
    b,
    Skill.DIVISION_THREE_DIGIT_BY_TENTH
  );

  // Assert
  expect(question.text).toBe("999 / 0.9 =");
  expect(question.answer).toBe("1110");
  expect(question.questionType).toBe(QuestionType.HORIZONTAL_EQUATION);
});

test("If a Division Question with the dividend value of 600 and the divisor of 0.5 is generated the answer for the question should be 1200", async () => {
  // Arrange
  let a = 0.5;
  let b = 600;

  // Act
  const question = getDivisionQuestion(
    a,
    b,
    Skill.DIVISION_THREE_DIGIT_BY_TENTH
  );

  // Assert
  expect(question.text).toBe("600 / 0.5 =");
  expect(question.answer).toBe("1200");
  expect(question.questionType).toBe(QuestionType.HORIZONTAL_EQUATION);
});
test("If a Division Question with the dividend value of 883 and the divisor of 0.2 is generated the answer for the question should be 4415", async () => {
  // Arrange
  let a = 0.2;
  let b = 883;

  // Act
  const question = getDivisionQuestion(
    a,
    b,
    Skill.DIVISION_THREE_DIGIT_BY_TENTH
  );

  // Assert
  expect(question.text).toBe("883 / 0.2 =");
  expect(question.answer).toBe("4415");

  expect(question.questionType).toBe(QuestionType.HORIZONTAL_EQUATION);
});
test("If a Division Question with the dividend value of 200 and the divisor of 0.3 is generated the answer for the question should be 666", async () => {
  // Arrange
  let a = 0.3;
  let b = 200;

  // Act
  const question = getDivisionQuestion(
    a,
    b,
    Skill.DIVISION_THREE_DIGIT_BY_TENTH
  );

  // Assert
  expect(question.text).toBe("200 / 0.3 =");
  expect(question.answer).toBe("666");

  expect(question.questionType).toBe(QuestionType.HORIZONTAL_EQUATION);
});

test("If a Division Question with the dividend value of 772 and the divisor of 0.6 is generated the answer for the question should be 1286", async () => {
  // Arrange
  let a = 0.6;
  let b = 772;

  // Act
  const question = getDivisionQuestion(
    a,
    b,
    Skill.DIVISION_THREE_DIGIT_BY_TENTH
  );

  // Assert
  expect(question.text).toBe("772 / 0.6 =");
  expect(question.answer).toBe("1286");
  expect(question.questionType).toBe(QuestionType.HORIZONTAL_EQUATION);
});

/* Skill.MULTIPLY_THREE_DIGIT_BY_TENTH */
test("If we genrate a multiplication triple digit by tenth question with a being the lowest possible value (100) and b being the lowest value (0.1) the output answer will be 10.0", async () => {
  // Arrange
  let a = 100;
  let b = 0.1;

  // Act
  const question = getBinaryQuestion(
    a,
    b,
    "x",
    QuestionType.VERTICAL_EQUATION,
    multiply,
    Skill.MULTIPLY_THREE_DIGIT_BY_TENTH
  );

  // Assert
  expect(question.text).toBe("100 x 0.1 =");
  expect(question.answer).toBe("10.0");
});
test("If we genrate a multiplication triple digit by tenth question with a being the highest possible value (999) and b being the lowest value (0.1) the output answer will be 99.9", async () => {
  // Arrange
  let a = 999;
  let b = 0.1;

  // Act
  const question = getBinaryQuestion(
    a,
    b,
    "x",
    QuestionType.VERTICAL_EQUATION,
    multiply,
    Skill.MULTIPLY_THREE_DIGIT_BY_TENTH
  );

  // Assert
  expect(question.text).toBe("999 x 0.1 =");
  expect(question.answer).toBe("99.9");
});
test("If we genrate a multiplication triple digit by tenth question with a being the highest possible value (999) and b being the highest value (0.9) the output answer will be 899.1", async () => {
  // Arrange
  let a = 999;
  let b = 0.9;

  // Act
  const question = getBinaryQuestion(
    a,
    b,
    "x",
    QuestionType.HORIZONTAL_EQUATION,
    multiply,
    Skill.MULTIPLY_THREE_DIGIT_BY_TENTH
  );

  // Assert
  expect(question.text).toBe("999 x 0.9 =");
  expect(question.answer).toBe("899.1");
});
test("If we genrate a multiplication triple digit by tenth question with a being the lowest possible value (100) and b being the hightest value (0.9) the output answer will be 90", async () => {
  // Arrange
  let a = 100;
  let b = 0.9;

  // Act
  const question = getBinaryQuestion(
    a,
    b,
    "x",
    QuestionType.HORIZONTAL_EQUATION,
    multiply,
    Skill.MULTIPLY_THREE_DIGIT_BY_TENTH
  );

  // Assert
  expect(question.text).toBe("100 x 0.9 =");
  expect(question.answer).toBe("90.0");
});
test("If we generate an multiplication question with the inputs of 982 and 0.7 that output question answer should be 687.4", async () => {
  // Arrange
  let a = 982;
  let b = 0.7;

  // Act
  const question = getBinaryQuestion(
    a,
    b,
    "x",
    QuestionType.HORIZONTAL_EQUATION,
    multiply,
    Skill.MULTIPLY_THREE_DIGIT_BY_TENTH
  );

  // Assert
  expect(question.text).toBe("982 x 0.7 =");
  expect(question.answer).toBe("687.4");
});
test("If we generate an multiplication question with the inputs of 216 and 0.8 that output question answer should be 75.8 ", async () => {
  // Arrange
  let a = 216;
  let b = 0.8;

  // Act
  const question = getBinaryQuestion(
    a,
    b,
    "x",
    QuestionType.HORIZONTAL_EQUATION,
    multiply,
    Skill.MULTIPLY_THREE_DIGIT_BY_TENTH
  );

  // Assert
  expect(question.text).toBe("216 x 0.8 =");
  expect(question.answer).toBe("172.8");
});
test("If we generate an multiplication question with the inputs of 379 and 0.2 that output question answer should be 75.8", async () => {
  // Arrange
  let a = 379;
  let b = 0.2;

  // Act
  const question = getBinaryQuestion(
    a,
    b,
    "x",
    QuestionType.HORIZONTAL_EQUATION,
    multiply,
    Skill.MULTIPLY_THREE_DIGIT_BY_TENTH
  );

  // Assert
  expect(question.text).toBe("379 x 0.2 =");
  expect(question.answer).toBe("75.8");
});
