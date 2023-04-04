import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render } from "@testing-library/react";
import React from "react";
import SkillSelections from "./SkillSelections";

describe("SkillSelections component", () => {
  it("should select and deselect options", () => {
    const selections = ["Option 1", "Option 2", "Option 3"];
    const onNextClick = jest.fn();
    const onBackClick = jest.fn();
    const progress = 1;
    const title = "Test title";
    const body = "Test body";
    const maxSelections = 2;
    const setQuizObject = jest.fn();
    const quizObject = { industries: [], skills: [], tasks: [] };
    const page = "skills";

    const { getByText } = render(
      <SkillSelections
        selections={selections}
        onNextClick={onNextClick}
        onBackClick={onBackClick}
        progress={progress}
        title={title}
        body={body}
        maxSelections={maxSelections}
        setQuizObject={setQuizObject}
        quizObject={quizObject}
        page={page}
      />
    );

    const option1 = getByText("Option 1");
    const option2 = getByText("Option 2");
    const option3 = getByText("Option 3");

    fireEvent.click(option1);
    expect(option1).toHaveClass(
      "bg-violet-300 text-black-500 border-2 border-black-500 rounded-xl"
    );
    expect(setQuizObject).toHaveBeenCalledWith({
      industries: [],
      skills: ["Option 1"],
      tasks: [],
    });

    fireEvent.click(option2);
    expect(option2).toHaveClass(
      "bg-violet-300 text-black-500 border-2 border-black-500 rounded-xl"
    );
    expect(setQuizObject).toHaveBeenCalledWith({
      industries: [],
      skills: ["Option 1", "Option 2"],
      tasks: [],
    });

    fireEvent.click(option1);
    expect(option1).toHaveClass(
      "bg-white text-black-600 border-2 border-black-500 rounded-xl"
    );
    expect(setQuizObject).toHaveBeenCalledWith({
      industries: [],
      skills: ["Option 2"],
      tasks: [],
    });

    fireEvent.click(option3);
    expect(option3).toHaveClass(
      "bg-violet-300 text-black-500 border-2 border-black-500 rounded-xl"
    );
    expect(setQuizObject).toHaveBeenCalledWith({
      industries: [],
      skills: ["Option 2", "Option 3"],
      tasks: [],
    });
  });
});
