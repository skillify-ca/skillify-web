import React from "react";
import Script from "next/script";
import { GuessData } from "../../pages/api/guessData";

type AssignmentGradeProps = {
  guesses: GuessData[];
  questions: any[];
};

const AssignmentGrade = ({ guesses, questions }: AssignmentGradeProps) => {
  return (
    <div className="grid grid-cols-3 overflow-auto bg-scroll heropattern-piefactory-blue-100 bg-gray-100">
      <p className="font-bold">Question</p>
      <p className="font-bold">Guess</p>
      <p className="font-bold">Answer</p>

      {questions.map((question, index) => (
        <div className="m-4 col-span-3 grid grid-cols-3">
          <p className="text-red-400">{question.text}</p>
          <p className="text-blue-400">{guesses[index].guess}</p>
          <p className="text-green-400">{question.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default AssignmentGrade;
