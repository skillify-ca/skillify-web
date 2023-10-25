import React, { useEffect, useState } from "react";
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
  const [numberSelected, setNumberSelected] = useState(0);
  const maxSelections = questions[currentQuestion].maxSelections;
  const titleForCurrentQuestion = questions[currentQuestion].title;
  const bodyForCurrentQuestion = questions[currentQuestion].body;
  const optionsForCurrentQuestions = questions[currentQuestion].options || [];
  const [progressVal, setProgressVal] = useState(0);
  const handleClick = (option: QuizOptionViewState) => {
    if (option.isSelected) {
      setNumberSelected((prev) => prev - 1);
    } else if (numberSelected < maxSelections) {
      setNumberSelected((prev) => prev + 1);
    }
    if (numberSelected < maxSelections || option.isSelected || !maxSelections) {
      handleOptionClick(option);
    }
  };

  //Sets progress bar as question changes
  useEffect(() => {
    const progressCalculation = (currentQuestion * 100) / questions.length;
    if (progressCalculation === 0) {
      setProgressVal(5);
    } else setProgressVal(progressCalculation);
  }, [currentQuestion]);

  //To monitor selected options on each page
  useEffect(
    () =>
      setNumberSelected(
        questions[currentQuestion].options.filter((option) => option.isSelected)
          .length
      ),
    [currentQuestion]
  );

  return (
    <div>
      <SkillifyNavbar hidden={false} onBackClick={onBackClick} />
      <div className="flex flex-col items-center max-w-4xl px-8 md:w-full md:mx-auto">
        <Progress progress={progressVal} />
        <div className="mt-4 text-2xl font-bold text-center text-black-600">
          <p className="w-[28rem]">{titleForCurrentQuestion}</p>
        </div>
        <div className="px-3 text-lg font-semibolds">
          {bodyForCurrentQuestion}
        </div>
        <div className="flex flex-col w-full max-w-4xl mx-auto">
          {optionsForCurrentQuestions.map((option, index) => {
            return (
              <div
                key={index}
                className={`flex items-start justify-start w-full px-4 py-2 my-2 cursor-pointer text-black-600 border-2 border-black-500 rounded-xl ${
                  option.isSelected ? "bg-violet-300" : "bg-white"
                }`}
                onClick={() => handleClick(option)}
              >
                {option.name}
              </div>
            );
          })}
        </div>
        <div className="mt-4">
          <Button
            label="Next"
            onClick={() => {
              onNextClick();
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default SkillSelections;
