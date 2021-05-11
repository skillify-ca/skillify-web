import React from "react";
import { Question } from "../../pages/api/questionGenerator";
import { QuestionType } from "../../pages/api/questionTypes";
import Card from "./Card";
import { HorizontalEquation } from "./HorizontalEquation";
import { LongDivision } from "./LongDivision";
import { TrueorFalse } from "./TrueorFalse";
import { VerticalEquation } from "./VerticalEquation";
import { WordProblemAdd } from "./WordProblemAdd";
import { WordProblemSub } from "./WordProblemSub";
import { WordProblemMulti } from "./WordProblemMulti";
import { GuessData } from "../../pages/api/guessData";

type QuestionSetProps = {
  title: string;
  questionData: Question[];
  index: number;
  inputElement: any;
  submitGuess: (guessData: GuessData) => void;
};

const QuestionSet = ({
  title,
  questionData,
  index,
  submitGuess,
}: QuestionSetProps) => {
  const questionComponent = () => {
    if (questionData[index].questionType === QuestionType.VERTICAL_EQUATION) {
      return (
        <VerticalEquation
          question={questionData[index]}
          submitGuess={submitGuess}
        />
      );
    } else if (
      questionData[index].questionType == QuestionType.BINARY_WORD_PROBLEM
    ) {
      if (questionData[index].operator == "+") {
        return (
          <WordProblemAdd
            question={questionData[index]}
            submitGuess={submitGuess}
          />
        );
      } else if (questionData[index].operator == "-") {
        return (
          <WordProblemSub
            question={questionData[index]}
            submitGuess={submitGuess}
          />
        );
      } else if (questionData[index].operator == "x") {
        return (
          <WordProblemMulti
            question={questionData[index]}
            submitGuess={submitGuess}
          />
        );
      }
    } else if (
      questionData[index].questionType === QuestionType.TRUE_OR_FALSE_PROBLEM
    ) {
      return (
        <TrueorFalse question={questionData[index]} submitGuess={submitGuess} />
      );
    } else if (
      questionData[index].questionType === QuestionType.LONG_DIVISION_PROBLEM
    ) {
      return (
        <LongDivision
          question={questionData[index]}
          submitGuess={submitGuess}
        />
      );
    }

    return (
      <HorizontalEquation
        question={questionData[index]}
        submitGuess={submitGuess}
      />
    );
  };

  return (
    <div className="flex flex-col justify-center items-center bg-gray-200 gap-8 pb-24">
      <div className="flex justify-between w-full p-4">
        <p className="text-xl font-bold">{title}</p>
        <p className="font-bold text-gray-400">
          Question: {index + 1} / {questionData.length}
        </p>
      </div>
      <Card size="large">{questionData[index] && questionComponent()}</Card>
    </div>
  );
};

export default QuestionSet;
