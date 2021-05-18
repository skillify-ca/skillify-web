// __tests__/fetch.test.js
import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { getGradeLevelForTopic } from "./diagnosticGrader";
import { Skill, Topic } from "../skill";
import { DiagnosticState } from "../../../redux/diagnosticSlice";
import { AnswerType } from "../question";
import { QuestionType } from "../questionTypes";

const dummyDivisionQuestion = {
  text: "4/2=",
  answer: "2",
  answerType: AnswerType.NUMBER,
  skill: Skill.DIVIDE_12_EQUALLY,
  questionType: QuestionType.LONG_DIVISION_PROBLEM,
};

const dummyMultiplicationQuestion = {
  text: "4*2=",
  answer: "8",
  answerType: AnswerType.NUMBER,
  skill: Skill.MULTIPLICATION_5,
  questionType: QuestionType.HORIZONTAL_EQUATION,
};

test("grade correct division", async () => {
  // Arrange
  const state: DiagnosticState = {
    questions: [dummyDivisionQuestion],
    guessAns: ["Correct"],
  };

  // Act
  const grade = getGradeLevelForTopic(Topic.DIVISION, state);

  // Assert
  expect(grade).toBe("Grade 2");
});

test("grade correct division 2", async () => {
  // Arrange
  const state: DiagnosticState = {
    questions: [dummyDivisionQuestion],
    guessAns: ["Inorrect"],
  };

  // Act
  const grade = getGradeLevelForTopic(Topic.DIVISION, state);

  // Assert
  expect(grade).toBe("Grade 1");
});

test("grade correct division 2", async () => {
  // Arrange
  const state: DiagnosticState = {
    questions: [
      dummyDivisionQuestion,
      dummyDivisionQuestion,
      dummyDivisionQuestion,
      dummyDivisionQuestion,
      dummyDivisionQuestion,
    ],
    guessAns: ["Correct", "Correct", "Correct", "Correct", "Incorrect"],
  };

  // Act
  const grade = getGradeLevelForTopic(Topic.DIVISION, state);

  // Assert
  expect(grade).toBe("Grade 2");
});
