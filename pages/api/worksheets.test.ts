import "@testing-library/jest-dom/extend-expect";
import { DiagnosticState } from "../../redux/diagnosticSlice";
import { AnswerType } from "./question";
import { QuestionType } from "./questionTypes";
import { Skill } from "./skill";
import { getWorkSheets } from "./worksheets";

test("test worksheets", async () => {
  const dummyDivisionQuestion = {
    text: "4/2=",
    answer: "2",
    answerType: AnswerType.NUMBER,
    skill: Skill.DIVIDE_12_EQUALLY,
    questionType: QuestionType.LONG_DIVISION_PROBLEM,
  };

  // Arrange
  const state: DiagnosticState = {
    questions: Array(10).fill(dummyDivisionQuestion),
    guessAns: Array(10).fill("Correct"),
    guesses: Array(10).fill("2"),
    email: "test@gmail.com",
    grade: "Grade 2",
    name: "Lavan",
  };

  // Act
  const worksheets = getWorkSheets(state);

  // Assert
  expect(worksheets.length).toBe(0);
});

test("test worksheets2", async () => {
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

  // Arrange
  const state: DiagnosticState = {
    questions: [dummyDivisionQuestion, dummyMultiplicationQuestion],
    guessAns: ["Correct", "Incorrect"],
    guesses: ["2", "3"],
    email: "test@gmail.com",
    grade: "Grade 2",
    name: "Vijaykumar"
  };

  // Act
  const worksheets = getWorkSheets(state);

  // Assert
  expect(worksheets.length).toBe(1);
  expect(worksheets[0].title).toBe("Equal Groups to 10 Worksheet");
});
