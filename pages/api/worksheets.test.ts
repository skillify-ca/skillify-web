import "@testing-library/jest-dom/extend-expect";
import { DiagnosticState } from "../../redux/diagnosticSlice";
import { AnswerType } from "./question";
import { QuestionType } from "./questionTypes";
import { Skill } from "./skill";
import { getWorkSheets } from "./worksheets";

test("If the student guesses the question wrong they should recieve a worksheet to re-enforce that skill", async () => {
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
  expect(worksheets.length).toBe(3);
});

test("If a student answers some questions correctly and some incorrectly they should only receive worksheets for the skills they answered incorrectly", async () => {
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
  expect(worksheets[0].title).toBe("Multiplication To 5 Worksheet");
});
test("When student incorrectly guess all questions then they should recieve 4 worksheets on the skills answered incorrectly", async () => {
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
  const dummyAdditionQuestion = {
    text: "100+100=",
    answer: "200",
    answerType: AnswerType.NUMBER,
    skill: Skill.ADDITION_TRIPLE,
    questionType: QuestionType.HORIZONTAL_EQUATION,
  };
  const dummySubtractionQuestion = {
    text: "4-2=",
    answer: "2",
    answerType: AnswerType.NUMBER,
    skill: Skill.SUBTRACTION_SINGLE,
    questionType: QuestionType.HORIZONTAL_EQUATION,
  };

  // Arrange
  const state: DiagnosticState = {
    questions: [dummyDivisionQuestion, dummyMultiplicationQuestion, dummyAdditionQuestion,dummySubtractionQuestion ],
    guessAns: ["Incorrect", "Incorrect", "Incorrect", "Incorrect"],
    guesses: ["1", "3","5", "7"],
    email: "test@gmail.com",
    grade: "Grade 2",
    name: "Vijaykumar"
  };

  // Act
  const worksheets = getWorkSheets(state);

  // Assert
  expect(worksheets.length).toBe(4);
  expect(worksheets[0].title).toBe("Division To 12 Worksheet");
  expect(worksheets[1].title).toBe("Multiplication To 5 Worksheet");
  expect(worksheets[2].title).toBe("Addition 3-digits Worksheet");
  expect(worksheets[3].title).toBe("Subtraction 1-digit Worksheet");
});
test("when student correctly guess all questions then they should still recieve 3 worksheets for grade 4 topics", async () => {
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
  const dummyAdditionQuestion = {
    text: "100+100=",
    answer: "200",
    answerType: AnswerType.NUMBER,
    skill: Skill.ADDITION_TRIPLE,
    questionType: QuestionType.HORIZONTAL_EQUATION,
  };
  const dummySubtractionQuestion = {
    text: "4-2=",
    answer: "2",
    answerType: AnswerType.NUMBER,
    skill: Skill.SUBTRACTION_SINGLE,
    questionType: QuestionType.HORIZONTAL_EQUATION,
  };

  // Arrange
  const state: DiagnosticState = {
    questions: [dummyDivisionQuestion, dummyMultiplicationQuestion, dummyAdditionQuestion,dummySubtractionQuestion ],
    guessAns: ["Correct", "Correct", "Correct", "Correct"],
    guesses: ["2", "8","200", "2"],
    email: "test@gmail.com",
    grade: "Grade 2",
    name: "Vijaykumar"
  };

  // Act
  const worksheets = getWorkSheets(state);

  // Assert
  expect(worksheets.length).toBe(3);
  expect(worksheets[1].title).toBe("Triple Digit Addition with 3 Addends");
  expect(worksheets[0].title).toBe("Quadruple Digit Subtraction");
  expect(worksheets[2].title).toBe("Large Number Division");
});
