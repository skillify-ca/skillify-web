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
  skill: Skill.ADDITION_DOUBLE,
};

test("When student answers single digit addition correctly, then next question should be double digit addition", async () => {
  // Act
  const question = getNextQuestion(Grade.GRADE_THREE, A1, true, 3);

  // Assert
  expect(question.skill).toBe(Skill.ADDITION_DOUBLE);
});

test("When student answers double digit addition correctly, then next question should be triple digit addition", async () => {
  // Act
  const question = getNextQuestion(Grade.GRADE_THREE, A2, true, 3);

  // Assert
  expect(question.skill).toBe(Skill.ADDITION_TRIPLE);
});

test("When student answers triple digit addition correctly, then next question should be triple digit addition", async () => {
  // Act
  const question = getNextQuestion(Grade.GRADE_THREE, A3, true, 3);

  // Assert
  expect(question.skill).toBe(Skill.ADDITION_TRIPLE);
});

test("When student answers single digit addition incorrectly, then next question should be single digit addition", async () => {
  // Act
  const question = getNextQuestion(Grade.GRADE_THREE, A1, false, 3);

  // Assert
  expect(question.skill).toBe(Skill.ADDITION_SINGLE);
});

test("When student answers double digit addition incorrectly, then next question should be single digit addition", async () => {
  // Act
  const question = getNextQuestion(Grade.GRADE_THREE, A2, false, 3);

  // Assert
  expect(question.skill).toBe(Skill.ADDITION_SINGLE);
});

test("When student answers triple digit addition incorrectly, then next question should be double digit addition", async () => {
  // Act
  const question = getNextQuestion(Grade.GRADE_THREE, A3, true, 3);

  // Assert
  expect(question.skill).toBe(Skill.ADDITION_DOUBLE);
});

test("When grade 1 student answers last addition question, then next question should be single digit subtraction", async () => {
  // Act
  const question = getNextQuestion(Grade.GRADE_ONE, A3, true, 0);

  // Assert
  expect(question.skill).toBe(Skill.SUBTRACTION_SINGLE);
});

test("When grade 2 student answers last addition question, then next question should be double digit subtraction", async () => {
  // Act
  const question = getNextQuestion(Grade.GRADE_TWO, A3, true, 0);

  // Assert
  expect(question.skill).toBe(Skill.SUBTRACTION_DOUBLE);
});
