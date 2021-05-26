// __tests__/fetch.test.js
import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { getGradeLevelForTopic, getSummaryText } from "./diagnosticGrader";
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
    guessAns: ["Incorrect"],
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

test("test summary text for first grader earning a third grade level", async () => {
  // Arrange
  const inputGradeLevel = 1;
  const diagnosticGradeLevel = 3;

  // Act
  const summary = getSummaryText(diagnosticGradeLevel, inputGradeLevel);

  // Assert
  expect(summary).toBe(
    "Truly impressive! Not only has your child met Ontario grade 1 curriculum but they have in fact exceeded expectations. Keep at the good work and welcome challeneges with open arms!"
  );
});

test("test summary text for first grader earning a second grade level", async () => {
  // Arrange
  const inputGradeLevel = 1;
  const diagnosticGradeLevel = 2;

  // Act
  const summary = getSummaryText(diagnosticGradeLevel, inputGradeLevel);

  // Assert
  expect(summary).toBe(
    "Truly impressive! Not only has your child met Ontario grade 1 curriculum but they have in fact exceeded expectations. Keep at the good work and welcome challeneges with open arms!"
  );
});

test("test summary text for first grader earning a first grade level", async () => {
  // Arrange
  const inputGradeLevel = 1;
  const diagnosticGradeLevel = 1;

  // Act
  const summary = getSummaryText(diagnosticGradeLevel, inputGradeLevel);

  // Assert
  expect(summary).toBe(
    "Amazing work! Your child has met the expectations of the Ontario grade 1 curriculum. Encourage them to solve harder problems to keep them challenged."
  );
});
