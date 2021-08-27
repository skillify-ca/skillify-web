import React from "react";
import Script from "next/script";
import { GuessData } from "../../pages/api/guessData";
import { getGradeLevel } from "../../pages/quiz/[slug]";

type AssignmentGradeProps = {
  guesses: GuessData[];
  questions: any[];
};

const AssignmentGrade = ({ guesses, questions }: AssignmentGradeProps) => {
  const getTextColour = (answer, guess) => {
    if (answer === guess) {
      return "text-green-400";
    } else {
      return "text-red-400";
    }
  };

  const getCorrectGuesses = () => {
    return questions.filter((it, index) => guesses[index].guess === it.answer)
      .length;
  };

  const getPercent = () => {
    return Math.round((100 * getCorrectGuesses()) / questions.length);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2 bg-white p-4 text-center">
        <p className="font-bold text-xl">
          Level {getGradeLevel(getPercent())}
        </p>
        <p>
          Score: {getCorrectGuesses()}/{questions.length}{" "}
          <span className="text-base font-normal">({getPercent()}%)</span>
        </p>
      </div>
      <div className="bg-white grid grid-cols-3">
        <div className="p-4 col-span-3 grid grid-cols-3 border-b-2">
          <p className="font-bold">Question</p>
          <p className="font-bold">Guess</p>
          <p className="font-bold">Answer</p>
        </div>
        {questions.map((question, index) => (
          <div className="m-4 col-span-3 grid grid-cols-3">
            <p className="">{question.text}</p>
            <p className="text-blue-400">{guesses[index].guess}</p>
            <p className={getTextColour(question.answer, guesses[index].guess)}>
              {question.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssignmentGrade;
