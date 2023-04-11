import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render } from "@testing-library/react";
import React from "react";
import SkillSelections from "./SkillSelections";

describe("SkillSelections component", () => {
  const selections = ["Option 1", "Option 2", "Option 3"];
  const onNextClick = jest.fn();
  const onBackClick = jest.fn();
  const progress = 1;
  const title = "Test title";
  const body = "Test body";
  const maxSelections = 2;
  const page = "skills";

  const options = selections.map((selection) => ({
    id: selection,
    name: selection,
    isSelected: false,
  }));

  const quizViewState = {
    title,
    body,
    currentQuestion: 0,
    questions: [
      {
        title,
        body,
        options,
        progress,
        maxSelections,
      },
    ],
  };

  it("should select and deselect options", () => {
    const { getByText } = render(
      <SkillSelections
        onNextClick={onNextClick}
        onBackClick={onBackClick}
        handleOptionClick={jest.fn()}
        quizViewState={quizViewState}
      />
    );

    const option1 = getByText("Option 1");
    const option2 = getByText("Option 2");
    const option3 = getByText("Option 3");

    // ACT
    fireEvent.click(option1);

    // ASSERT
    expect(option1).toHaveClass(
      "bg-violet-300 text-black-500 border-2 border-black-500 rounded-xl"
    );
    expect(option2).toHaveClass(
      "bg-white text-black-600 border-2 border-black-500 rounded-xl"
    );
    expect(option3).toHaveClass(
      "bg-white text-black-600 border-2 border-black-500 rounded-xl"
    );

    fireEvent.click(option2);

    // ASSERT
    expect(option1).toHaveClass(
      "bg-violet-300 text-black-500 border-2 border-black-500 rounded-xl"
    );
    expect(option2).toHaveClass(
      "bg-violet-300 text-black-500 border-2 border-black-500 rounded-xl"
    );
    expect(option3).toHaveClass(
      "bg-white text-black-600 border-2 border-black-500 rounded-xl"
    );

    fireEvent.click(option1);

    // ASSERT
    expect(option1).toHaveClass(
      "bg-white text-black-600 border-2 border-black-500 rounded-xl"
    );
    expect(option2).toHaveClass(
      "bg-violet-300 text-black-500 border-2 border-black-500 rounded-xl"
    );
    expect(option3).toHaveClass(
      "bg-white text-black-600 border-2 border-black-500 rounded-xl"
    );

    fireEvent.click(option3);
  });
});
