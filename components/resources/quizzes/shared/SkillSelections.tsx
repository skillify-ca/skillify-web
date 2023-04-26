import React, { useState } from "react";
import {
  QuizOptionViewState,
  QuizViewState,
} from "../../../resources/quizzes/shared/types";
import { Button } from "../../../ui/Button";
import Progress from "./Progress";
import SkillifyNavbar from "./SkillifyNavbar";

type SkillSelectionsProps = {
  quizViewState: QuizViewState;
  handleOptionClick: (option: QuizOptionViewState) => void;
  onNextClick: () => void;
  onBackClick: () => void;
};

const SkillSelections: React.FC<SkillSelectionsProps> = ({
  handleOptionClick,
  onNextClick,
  onBackClick,
  quizViewState,
}) => {
  const { currentQuestion, questions } = quizViewState;
  // const maxSelections = questions[currentQuestion].maxSelections;
  const [numberSelected, setNumberSelected] = useState(0);
  const maxSelections = 4;
  const titleForCurrentQuestion = questions[currentQuestion].title;
  const bodyForCurrentQuestion = questions[currentQuestion].body;
  const optionsForCurrentQuestions = questions[currentQuestion].options || [];
  // alert(maxSelections == undefined ? 1 : maxSelections);
  const handleClick = (option: QuizOptionViewState) => {
    if (option.isSelected) {
      setNumberSelected((prev) => prev - 1);
    } else if (numberSelected < maxSelections) {
      setNumberSelected((prev) => prev + 1);
    }
    if (numberSelected < maxSelections || option.isSelected)
      handleOptionClick(option);
  };

  return (
    <div>
      <SkillifyNavbar hidden={false} onBackClick={onBackClick} />
      <div className="flex flex-col items-center px-8">
        <Progress progress={0} />
        <div className="mt-4 text-2xl font-bold text-center text-black-600">
          {titleForCurrentQuestion}
        </div>
        <div className="px-3 text-lg font-semibolds">
          {bodyForCurrentQuestion}
        </div>
        <div className="flex flex-col w-full max-w-4xl mx-auto">
          {optionsForCurrentQuestions.map((option, index) => {
            return (
              <button
                key={index}
                className={`flex items-start justify-start w-full px-4 py-2 my-2 cursor-pointer text-black-600 border-2 border-black-500 rounded-xl ${
                  option.isSelected ? "bg-violet-300" : "bg-white"
                }`}
                onClick={() => handleClick(option)}
              >
                {option.name}
                {option.isSelected ? 1 : 0}
                {numberSelected}
              </button>
            );
          })}
        </div>
        <div className="mt-4">
          <Button
            label="Next"
            onClick={() => {
              onNextClick();
              setNumberSelected(0);
            }}
            backgroundColor="yellow"
          />
        </div>
      </div>
    </div>
  );
};
export default SkillSelections;
