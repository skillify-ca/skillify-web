import Lottie from "lottie-react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import quizCompleteAnimation from "../../../public/anims/quiz-complete.json";
import {
  continueRequested,
  quizSelector,
  selectOptionRequested,
  setQuizQuestions,
} from "../../../redux/quizSlice";
import { Button } from "../../ui/Button";
import { QuizData } from "../lessons/LessonComponent";
import GradingRibbon from "./GradingRibbon";
import MCOption, { OptionState } from "./MCOption";

type QuizProps = {
  quizData: QuizData;
};
export default function Quiz({ quizData }: QuizProps) {
  const {
    questions,
    currentQuestion,
    selectedOption,
    isGraded,
    shouldShowIncorrectGrade,
    shouldShowCorrectGrade,
    showSessionEnd,
  } = useSelector(quizSelector);

  useEffect(() => {
    dispatch(setQuizQuestions(quizData.questions));
  }, []);
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
    <>
      {showSessionEnd ? (
        <div className="flex flex-col items-center justify-center w-full gap-4 ">
          <img src={"/images/coding/quiz/finish.svg"} className="w-52" />
          <p>You have unlocked a new achievment</p>
          <p>Quiz complete</p>
          <div className="flex -mt-16 w-52">
            <Lottie
              animationData={quizCompleteAnimation}
              loop={false}
              autoplay={true}
            />
          </div>
        </div>
      ) : questions.length > 0 ? (
        <div>
          <div className="px-4 mb-10 sm:px-32">
            <p>Question {currentQuestion + 1} of 5</p>
            <p className="text-2xl">{questions[currentQuestion].text}</p>
          </div>
          {questions[currentQuestion].image ? (
            <div className="flex justify-around w-full px-8 pb-8 flew-row">
              <img
                src={questions[currentQuestion].image}
                className="justify-around max-h-72"
              />
            </div>
          ) : (
            ""
          )}
          <div className="grid grid-cols-1 gap-6 px-4 sm:grid-cols-2 ">
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
            <Button
              label="Continue"
              disabled={false}
              onClick={(e) => dispatch(continueRequested(null))}
            />
          </div>

          {/* TODO: Create grading ribbons on mobile */}
          <div className="hidden overflow-hidden lg:flex lg:h-36 lg:mt-8">
            <div
              className={`${
                isGraded ? "mt-0" : "mt-36"
              } overflow-hidden transition-all transform w-full`}
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
      ) : null}
    </>
  );
}
