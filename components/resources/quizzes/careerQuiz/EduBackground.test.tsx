import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import EduBackground, { EducationLevel } from "./EduBackground";

describe("EducationBackground component", () => {
  test("renders select element with EducationLevel options", () => {
    const onNextClick = jest.fn();
    const onBackClick = jest.fn();
    const educationState = {
      degree: "",
      institution: "",
      education: "",
      experience: "",
    };
    const setEducationState = () => "";
    render(
      <EduBackground
        onNextClick={onNextClick}
        onBackClick={onBackClick}
        setEducationState={setEducationState}
        educationState={educationState}
      />
    );
    const selectElement = screen.getByLabelText("Education");
    expect(selectElement).toBeInTheDocument();
    expect(selectElement).toHaveValue("");
    expect(screen.getByText("N/A")).toBeInTheDocument();
    expect(screen.getByText("High School Diploma")).toBeInTheDocument();
    expect(screen.getByText("GED")).toBeInTheDocument();
    expect(screen.getByText("Undergraduate Degree")).toBeInTheDocument();
    expect(screen.getByText("Postgraduate Degree")).toBeInTheDocument();
    expect(screen.getByText("PHD")).toBeInTheDocument();
  });
  const setDegree = () => "";
  const setInstitution = () => "";
  const setEducation = () => "";
  const setExperience = () => "";

  const testCases = [
    { label: "N/A", value: EducationLevel.NA, shouldShow: true },
    {
      label: "High School Diploma",
      value: EducationLevel.HighSchoolDiploma,
      shouldShow: true,
    },
    { label: "GED", value: EducationLevel.GED, shouldShow: true },
    {
      label: "Undergraduate Degree",
      value: EducationLevel.UndergraduateDegree,
      shouldShow: false,
    },
    {
      label: "Postgraduate Degree",
      value: EducationLevel.PostgraduateDegree,
      shouldShow: false,
    },
    { label: "PHD", value: EducationLevel.PHD, shouldShow: false },
  ];
  test("next button does not change the page", () => {
    const onNextClick = jest.fn();
    const onBackClick = jest.fn();
    const educationState = {
      degree: "",
      institution: "",
      education: "",
      experience: "",
    };
    const setEducationState = () => "";
    render(
      <EduBackground
        onNextClick={onNextClick}
        onBackClick={onBackClick}
        setEducationState={setEducationState}
        educationState={educationState}
      />
    );
    const nextButton = screen.getByText("Next");
    fireEvent.click(nextButton);
    expect(onNextClick).toHaveBeenCalledTimes(0);
  });
  test("next button changes the page", () => {
    const onNextClick = jest.fn();
    const onBackClick = jest.fn();
    const educationState = {
      degree: "",
      institution: "",
      education: "N/A",
      experience: "",
    };
    const setEducationState = () => "";
    render(
      <EduBackground
        onNextClick={onNextClick}
        onBackClick={onBackClick}
        setEducationState={setEducationState}
        educationState={educationState}
      />
    );
    const selectElement = screen.getByLabelText("Education");
    fireEvent.change(selectElement, { target: { value: "N/A" } });
    const nextButton = screen.getByText("Next");
    fireEvent.click(nextButton);
    expect(onNextClick).toHaveBeenCalledTimes(1);
  });

  testCases.forEach((testCase) => {
    test(`selecting ${testCase.value} ${
      testCase.shouldShow ? "shows" : "does not show"
    } experience dialog`, () => {
      const onNextClick = jest.fn();
      const onBackClick = jest.fn();

      const educationState = {
        degree: "",
        institution: "",
        education: testCase.label,
        experience: "",
      };
      const setEducationState = () => "";
      render(
        <EduBackground
          onNextClick={onNextClick}
          onBackClick={onBackClick}
          setEducationState={setEducationState}
          educationState={educationState}
        />
      );
      const selectElement = screen.getByLabelText("Education");
      fireEvent.change(selectElement, { target: { value: testCase.label } });
      if (testCase.shouldShow) {
        expect(
          screen.getByText("Do you have experience coding?")
        ).toBeInTheDocument();
      } else {
        expect(screen.getByText("Institution")).toBeInTheDocument();
        expect(screen.getByText("Field of study")).toBeInTheDocument();
      }
    });
  });
});
