// __tests__/fetch.test.js
import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { getNextQuestion, Grade } from "./diagnosticQuestionGenerator";
import { AnswerType, Question } from "../question";
import { QuestionType } from "../questionTypes";
import { Skill } from "../skill";

const A1: Question = {
  text: "1 + 2 =",
  answer: "3",
  answerType: AnswerType.NUMBER,
  questionType: QuestionType.VERTICAL_EQUATION,
  skill: Skill.ADDITION_SINGLE,
};
const A2: Question = {
  text: "11 + 22 =",
  answer: "33",
  answerType: AnswerType.NUMBER,
  questionType: QuestionType.VERTICAL_EQUATION,
  skill: Skill.ADDITION_DOUBLE,
};
const A3: Question = {
  text: "111 + 222 =",
  answer: "333",
  answerType: AnswerType.NUMBER,
  questionType: QuestionType.VERTICAL_EQUATION,
  skill: Skill.ADDITION_TRIPLE,
};
const S1: Question = {
  text: "2 - 1 =",
  answer: "1",
  answerType: AnswerType.NUMBER,
  questionType: QuestionType.VERTICAL_EQUATION,
  skill: Skill.SUBTRACTION_SINGLE,
};
const S2: Question = {
  text: "21 - 10 =",
  answer: "11",
  answerType: AnswerType.NUMBER,
  questionType: QuestionType.VERTICAL_EQUATION,
  skill: Skill.SUBTRACTION_DOUBLE,
};
const S3: Question = {
  text: "568 - 168 =",
  answer: "400",
  answerType: AnswerType.NUMBER,
  questionType: QuestionType.VERTICAL_EQUATION,
  skill: Skill.SUBTRACTION_TRIPLE,
};

const M1: Question = {
  text: "2 * 1 =",
  answer: "2",
  answerType: AnswerType.NUMBER,
  questionType: QuestionType.VERTICAL_EQUATION,
  skill: Skill.EQUAL_GROUP_10_ITEMS,
};
const D1: Question = {
  text: "2 / 1 =",
  answer: "2",
  answerType: AnswerType.NUMBER,
  questionType: QuestionType.VERTICAL_EQUATION,
  skill: Skill.EQUAL_SHARING_8_ITEMS,
};

test("When student answers single digit addition correctly, then next question should be double digit addition", async () => {
  // Act
  const question = getNextQuestion(A1, true, 3);

  // Assert
  expect(question.skill).toBe(Skill.ADDITION_DOUBLE);
});

test("When student answers double digit addition correctly, then next question should be triple digit addition", async () => {
  // Act
  const question = getNextQuestion(A2, true, 3);

  // Assert
  expect(question.skill).toBe(Skill.ADDITION_TRIPLE);
});

test("When student answers triple digit addition correctly, then next question should be triple digit addition", async () => {
  // Act
  const question = getNextQuestion(A3, true, 3);

  // Assert
  expect(question.skill).toBe(Skill.ADDITION_TRIPLE);
});

test("When student answers single digit addition incorrectly, then next question should be single digit addition", async () => {
  // Act
  const question = getNextQuestion(A1, false, 3);

  // Assert
  expect(question.skill).toBe(Skill.ADDITION_SINGLE);
});

test("When student answers double digit addition incorrectly, then next question should be single digit addition", async () => {
  // Act
  const question = getNextQuestion(A2, false, 3);

  // Assert
  expect(question.skill).toBe(Skill.ADDITION_SINGLE);
});

test("When student answers triple digit addition incorrectly, then next question should be double digit addition", async () => {
  // Act
  const question = getNextQuestion(A3, false, 3);

  // Assert
  expect(question.skill).toBe(Skill.ADDITION_DOUBLE);
});

test("When student answers last addition question, then next question should be single digit subtraction", async () => {
  // Act
  const question = getNextQuestion(A3, true, 0);

  // Assert
  expect(question.skill).toBe(Skill.SUBTRACTION_SINGLE);
});

test("When student answers double digit subtraction question incorrectly, then next question should be single digit subtraction", async () => {
  // Act
  const question = getNextQuestion(S2, false, 1);

  // Assert
  expect(question.skill).toBe(Skill.SUBTRACTION_SINGLE);
});

test("When student answers last subtraction question, then next question should be equal groups", async () => {
  // Act
  const question = getNextQuestion(S1, true, 0);

  // Assert
  expect(question.skill).toBe(Skill.EQUAL_GROUP_10_ITEMS);
});

test("When student answers single-digit subtraction question incorrectly, then next question should be single-digit subtraction ", async () => {
  // Act
  const question = getNextQuestion(S1, false, 3);

  // Assert
  expect(question.skill).toBe(Skill.SUBTRACTION_SINGLE);
});

test("When student answers triple digit subtraction question incorrectly, then next question should be double digit subtraction", async () => {
  // Act
  const question = getNextQuestion(S3, false, 2);

  // Assert
  expect(question.skill).toBe(Skill.SUBTRACTION_DOUBLE);
});

test("When student answers last multiplication question, then next question should be equal sharing", async () => {
  // Act
  const question = getNextQuestion(M1, true, 0);

  // Assert
  expect(question.skill).toBe(Skill.EQUAL_SHARING_8_ITEMS);
});

test("When student answers equal groups question incorrectly, then next question should be equal groups", async () => {
  // Act
  const question = getNextQuestion(M1, false, 3);

  // Assert
  expect(question.skill).toBe(Skill.EQUAL_GROUP_10_ITEMS);
});
test("When student answers equal groups question correctly, then next question should be Multiplication to 5 ", async () => {
  // Act
  const question = getNextQuestion(M1, true, 3);

  // Assert
  expect(question.skill).toBe(Skill.MULTIPLICATION_5);
});

test("When student answers equal sharing question correctly, then next question should be Divison to 12", async () => {
  // Act
  const question = getNextQuestion(D1, true, 3);

  // Assert
  expect(question.skill).toBe(Skill.DIVIDE_12_EQUALLY);
});

test("When student answers last division question (Equal sharing), then next question should be Equal sharing", async () => {
  // Act
  const question = getNextQuestion(D1, true, 0);

  // Assert
  expect(question).toBe(null);
});
