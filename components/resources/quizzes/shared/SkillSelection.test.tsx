// import "@testing-library/jest-dom/extend-expect";
// import { fireEvent, render } from "@testing-library/react";
// import React from "react";
// import quizData from "../../../../pages/api/studentPortal/quizzes/careerQuiz";
// import SkillSelections from "./SkillSelections";
// it("should enforce maxSelections prop", () => {
//   const selections = ["Option 1", "Option 2", "Option 3"];
//   const onNextClick = jest.fn();
//   const onBackClick = jest.fn();
//   const progress = 1;
//   const title = "Test title";
//   const body = "Test body";
//   const maxSelections = 2;
//   const page = "skills";
//   const quizViewState = {
//     title: quizData.title,
//     body: quizData.body,
//     questions: [],
//     currentQuestion: 0,
//     progress: 0,
//   };
//   const { getByText } = render(
//     <SkillSelections
//       onNextClick={onNextClick}
//       onBackClick={onBackClick}
//       handleOptionClick={jest.fn()}
//       quizViewState={quizViewState}
//     />
//   );

//   const option1 = getByText("Option 1");
//   const option2 = getByText("Option 2");
//   const option3 = getByText("Option 3");

//   // Select all options
//   fireEvent.click(option1);
//   fireEvent.click(option2);
//   fireEvent.click(option3);

//   // Check that only the first two options are selected
//   expect(option1).toHaveClass(
//     "bg-violet-300 text-black-500 border-2 border-black-500 rounded-xl"
//   );
//   expect(option2).toHaveClass(
//     "bg-violet-300 text-black-500 border-2 border-black-500 rounded-xl"
//   );
//   expect(option3).not.toHaveClass(
//     "bg-violet-300 text-black-500 border-2 border-black-500 rounded-xl"
//   );
// });
