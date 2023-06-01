import React, { useEffect, useState } from "react";
import { quizDataBE } from "../../../../pages/api/studentPortal/quizzes/hireabilityQuiz/hireabilityQuizBE";
import { quizDataFE } from "../../../../pages/api/studentPortal/quizzes/hireabilityQuiz/hireabilityQuizFE";
import { quizDataGE } from "../../../../pages/api/studentPortal/quizzes/hireabilityQuiz/hireabilityQuizGE";
import { quizDataME } from "../../../../pages/api/studentPortal/quizzes/hireabilityQuiz/hireabilityQuizME";
import {
  QuizOptionViewState,
  QuizViewState,
} from "../../../resources/quizzes/shared/types";
import Progress from "../shared/Progress";
import SkillifyNavbar from "../shared/SkillifyNavbar";

type EngineerSelectionProps = {
  quizViewState: QuizViewState;
  handleOptionClick: (option: QuizOptionViewState) => void;
  onNextClick: () => void;
  onBackClick: () => void;
  setSelectedQuizData: React.Dispatch<React.SetStateAction<QuizViewState>>;
};

const EngineerSelection: React.FC<EngineerSelectionProps> = ({
  handleOptionClick,
  onNextClick,
  onBackClick,
  quizViewState,
  setSelectedQuizData,
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
      if (option.name === "Backend Engineer") {
        setSelectedQuizData(quizDataBE);
        handleOptionClick(option);
      } else if (option.name === "Game Engineer") {
        setSelectedQuizData(quizDataGE);
        handleOptionClick(option);
      } else if (option.name === "Mobile Engineer") {
        setSelectedQuizData(quizDataME);
        handleOptionClick(option);
      } else if (option.name === "Frontend Engineer") {
        setSelectedQuizData(quizDataFE);
        handleOptionClick(option);
      } else {
        handleOptionClick(option);
      }
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
      <div className="flex flex-col items-center px-8 md:w-full max-w-4xl md:mx-auto">
        <Progress progress={progressVal} />
        <div className="mt-4 text-2xl font-bold text-center text-black-600">
          {titleForCurrentQuestion}
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
      </div>
    </div>
  );
};
export default EngineerSelection;
