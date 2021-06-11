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

const dummyAdditionQuestion1 = {
  text: "4+2=",
  answer: "6",
  answerType: AnswerType.NUMBER,
  skill: Skill.ADDITION_SINGLE,
  questionType: QuestionType.HORIZONTAL_EQUATION,
};
const dummyAdditionQuestion2 = {
  text: "6+2=",
  answer: "8",
  answerType: AnswerType.NUMBER,
  skill: Skill.ADDITION_SINGLE,
  questionType: QuestionType.HORIZONTAL_EQUATION,
};
const dummyAdditionQuestion3 = {
  text: "5+4=",
  answer: "9",
  answerType: AnswerType.NUMBER,
  skill: Skill.ADDITION_SINGLE,
  questionType: QuestionType.HORIZONTAL_EQUATION,
};
const dummyA2 = {
  text: "16+2=",
  answer: "18",
  answerType: AnswerType.NUMBER,
  skill: Skill.ADDITION_DOUBLE,
  questionType: QuestionType.HORIZONTAL_EQUATION,
};

test("if students gets all the addition questions wrong, expect JK/SK for additiona grade level", async () => {
  // Arrange
  const state: DiagnosticState = {
    questions: [
      dummyAdditionQuestion1,
      dummyAdditionQuestion2,
      dummyAdditionQuestion3,
    ],
    guessAns: ["Incorrect", "Incorrect", "Incorrect"],
    guesses: ["0", "0", "0"],
    email: "test@gmail.com",
    grade: "Grade 2",
    name: "Lavan",
  };

  // Act
  const grade = getGradeLevelForTopic(Topic.ADDITION, state);

  // Assert
  expect(grade).toBe("JK/SK");
});

test("if students gets A1 right but A2 wrong, expect Grade 1 for third question", async () => {
  // Arrange
  const state: DiagnosticState = {
    questions: [dummyAdditionQuestion1, dummyA2, dummyAdditionQuestion3],
    guessAns: ["Correct", "Incorrect", "Correct"],
    guesses: ["6", "0", "9"],
    email: "test@gmail.com",
    grade: "Grade 2",
    name: "Lavan",
  };

  // Act
  const grade = getGradeLevelForTopic(Topic.ADDITION, state);

  // Assert
  expect(grade).toBe("Grade 1");
});
