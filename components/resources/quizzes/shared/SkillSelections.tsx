import React from "react";
import { QuizOption } from "../../../resources/quizzes/shared/types";
import { Button } from "../../../ui/Button";
import Progress from "./Progress";
import SkillifyNavbar from "./SkillifyNavbar";

export type QuizViewState = {
  title: string;
  body: string;
  questions: QuizQuestionViewState[];
  currentQuestion: number;
  progress: number;
};

export type QuizQuestionViewState = {
  lang: any;
  title: string;
  body: string;
  options: QuizOptionViewState[];
};

export type QuizOptionViewState = QuizOption & {
  isSelected: boolean;
};

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
  const { currentQuestion, questions, progress } = quizViewState;
  const titleForCurrentQuestion = questions[currentQuestion].title;
  const bodyForCurrentQuestion = questions[currentQuestion].body;
  const optionsForCurrentQuestions = questions[currentQuestion].options || [];
  const handleClick = (option: QuizOptionViewState) => {
    handleOptionClick(option);
  };

  return (
    <div>
      <SkillifyNavbar hidden={false} onBackClick={onBackClick} />
      <div className="flex flex-col items-center px-8">
        <Progress progress={progress} />
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
        <div className="mt-4">
          <Button
            label="Next"
            onClick={() => {
              onNextClick();
            }}
            backgroundColor="yellow"
          />
        </div>
      </div>
    </div>
  );
};
export default SkillSelections;
