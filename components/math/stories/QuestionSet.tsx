import React from "react";
import { GuessData } from "../../../pages/api/guessData";
import { Question } from "../../../pages/api/question";

import Card from "../../ui/Card";
import QuestionComponent from "./QuestionComponent";

type QuestionSetProps = {
  questionData: Question[];
  index: number;
  submitGuess?: (guessData: GuessData) => void;
  diagnostic?: { isDiagnostic: boolean; opacityVal: number };
};
const QuestionSet = ({
  questionData,
  index,
  submitGuess,
  diagnostic,
}: QuestionSetProps) => {
  return (
    <div className="flex items-center justify-center w-full gap-4">
      <Card size="large">
        <div
          className={`transition-opacity duration-150 ease-in-out opacity-${
            diagnostic?.isDiagnostic && diagnostic.opacityVal
          }`}
        >
          {questionData[index] && (
            <QuestionComponent
              questionData={questionData[index]}
              submitGuess={submitGuess}
            />
          )}
        </div>
      </Card>
    </div>
  );
};

export default QuestionSet;
