// __tests__/fetch.test.js
import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { getGradeLevelForTopic, getSummaryText } from "./diagnosticGrader";
import { Skill, Topic } from "../skill";
import { DiagnosticState } from "../../../redux/diagnosticSlice";
import { AnswerType } from "../question";
import { QuestionType } from "../questionTypes";

const dummyDivision12Question = {
  text: "4/2=",
  answer: "2",
  answerType: AnswerType.NUMBER,
  skill: Skill.DIVIDE_12_EQUALLY,
  questionType: QuestionType.LONG_DIVISION_PROBLEM,
};
const dummyDivision100Question = {
  text: "4/2=",
  answer: "2",
  answerType: AnswerType.NUMBER,
  skill: Skill.DIVIDE_100,
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
    questions: [dummyDivision12Question],
    guessAns: ["Correct"],
    guesses: ["2"],
    email: "test@gmail.com",
    grade: "Grade 2",
  };

  // Act
  const grade = getGradeLevelForTopic(Topic.DIVISION, state);

  // Assert
  expect(grade).toBe("Grade 2");
});

test("grade correct division 2", async () => {
  // Arrange
  const state: DiagnosticState = {
    questions: [dummyDivision12Question],
    guessAns: ["Incorrect"],
    guesses: ["3"],
    email: "test@gmail.com",
    grade: "Grade 2",
  };

  // Act
  const grade = getGradeLevelForTopic(Topic.DIVISION, state);

  // Assert
  expect(grade).toBe("Grade 1");
});

test("when student can divide up to 100 grade should be grade 3", async () => {
  // Arrange
  const state: DiagnosticState = {
    questions: [
      dummyDivision100Question,
      dummyDivision100Question
    ],
    guessAns: ["Correct", "Correct"],
    guesses: ["2", "2"],
    email: "test@gmail.com",
    grade: "Grade 2",
  };

  // Act
  const grade = getGradeLevelForTopic(Topic.DIVISION, state);

  // Assert
  expect(grade).toBe("Grade 3");
});

test("when student can divide up to 12 but not 100 grade should be grade 2", async () => {
  // Arrange
  const state: DiagnosticState = {
    questions: [
      dummyDivision100Question,
      dummyDivision100Question,
      dummyDivision12Question,
      dummyDivision12Question
    ],
    guessAns: ["Incorrect", "Correct", "Correct", "Correct"],
    guesses: ["3", "2", "2", "2"],
    email: "test@gmail.com",
    grade: "Grade 2",
  };

  // Act
  const grade = getGradeLevelForTopic(Topic.DIVISION, state);

  // Assert
  expect(grade).toBe("Grade 2");
});


test("when student can't divide up to 12 grade should be grade 1", async () => {
  // Arrange
  const state: DiagnosticState = {
    questions: [
      dummyDivision12Question,
      dummyDivision12Question
    ],
    guessAns: ["Incorrect", "Correct"],
    guesses: ["3", "2"],
    email: "test@gmail.com",
    grade: "Grade 2",
  };

  // Act
  const grade = getGradeLevelForTopic(Topic.DIVISION, state);

  // Assert
  expect(grade).toBe("Grade 1");
});

test("test summary text for first grader earning a third grade level", async () => {
  // Arrange
  const inputGradeLevel = 1;
  const diagnosticGradeLevel = 3;

  // Act
  const summary = getSummaryText(diagnosticGradeLevel, inputGradeLevel);

  // Assert
  expect(summary).toBe(
    "Truly impressive! Your child has exceeded the expectations of the Ontario grade 1 curriculum. Keep up the good work and welcome challenges with open arms!"
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
    "Truly impressive! Your child has exceeded the expectations of the Ontario grade 1 curriculum. Keep up the good work and welcome challenges with open arms!"
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
