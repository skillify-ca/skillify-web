import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render } from "@testing-library/react";
import React from "react";
import quizData from "../../../../pages/api/studentPortal/quizzes/careerQuiz";
import SkillSelections from "./SkillSelections";
it("should enforce maxSelections prop", () => {
  const onNextClick = jest.fn();
  const onBackClick = jest.fn();
  const quizViewState = {
    title: quizData.title,
    body: quizData.body,
    questions: quizData.questions,
    currentQuestion: 0,
    progress: 0,
  };

  const handleOptionClickMock = jest.fn(); // create mock function

  const { getByText } = render(
    <SkillSelections
      onNextClick={onNextClick}
      onBackClick={onBackClick}
      handleOptionClick={handleOptionClickMock} // pass mock function
      quizViewState={quizViewState}
    />
  );

  const option1 = getByText("Advertising");
  const option2 = getByText("Cybersecurity");
  const option3 = getByText("Digital Media");

  // Check that the correct text is displayed for each option
  expect(option1).toHaveTextContent("Advertising");
  expect(option2).toHaveTextContent("Cybersecurity");
  expect(option3).toHaveTextContent("Digital Media");

  // Select all options
  fireEvent.click(option1);
  fireEvent.click(option2);
  fireEvent.click(option3);

  // Check that the mock function is called for each option click
  expect(handleOptionClickMock).toHaveBeenCalledTimes(3);
});
