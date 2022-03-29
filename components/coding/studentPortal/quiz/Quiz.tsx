import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  quizSelector,
  selectOptionRequested,
} from "../../../../redux/quizSlice";
import GradingRibbon from "./GradingRibbon";
import MCOption, { OptionState } from "./MCOption";

export type QuizProps = {};

export default function Quiz({}: QuizProps) {
  const {
    questions,
    currentQuestion,
    selectedOption,
    isGraded,
    shouldShowIncorrectGrade,
    shouldShowCorrectGrade,
  } = useSelector(quizSelector);
  const dispatch = useDispatch();

  const getOptionState = (option: string) => {
    if (selectedOption === option) {
      if (isGraded) {
        if (selectedOption === option) {
          if (shouldShowCorrectGrade) {
            return OptionState.CORRECT;
          } else if (shouldShowIncorrectGrade) {
            return OptionState.INCORRECT;
          }
        }
      } else {
        if (selectedOption === option) {
          return OptionState.SELECTED;
        }
      }
    }

    return OptionState.DEFAULT;
  };

  return (
    <div>
      <div className="px-4 mb-10 sm:px-32">
        <p>Question {currentQuestion + 1} of 10</p>
        <p className="text-2xl">{questions[currentQuestion].text}</p>
      </div>
      <div className="grid grid-cols-1 gap-6 px-4 sm:grid-cols-2 sm:px-32">
        <div
          onClick={(e) => dispatch(selectOptionRequested("A"))}
          className="cursor-pointer"
        >
          <MCOption
            text={questions[currentQuestion].A}
            state={getOptionState("A")}
          />
        </div>
        <div
          onClick={(e) => dispatch(selectOptionRequested("B"))}
          className="cursor-pointer"
        >
          <MCOption
            text={questions[currentQuestion].B}
            state={getOptionState("B")}
          />
        </div>
        <div
          onClick={(e) => dispatch(selectOptionRequested("C"))}
          className="cursor-pointer"
        >
          <MCOption
            text={questions[currentQuestion].C}
            state={getOptionState("C")}
          />
        </div>
        <div
          onClick={(e) => dispatch(selectOptionRequested("D"))}
          className="cursor-pointer"
        >
          <MCOption
            text={questions[currentQuestion].D}
            state={getOptionState("D")}
          />
        </div>
      </div>

      <div className="mt-16 overflow-hidden h-36">
        <div
          className={`${
            isGraded ? "mt-0" : "mt-36"
          } overflow-hidden transition-all transform`}
        >
          <GradingRibbon
            correct={shouldShowCorrectGrade}
            answer={
              questions[currentQuestion][questions[currentQuestion].answer]
            }
          />
        </div>
      </div>
    </div>
  );
}
