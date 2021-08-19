import React, { useState } from "react";
import { GuessData } from "../../pages/api/guessData";
import { Question } from "../../pages/api/question";
import { QuestionType } from "../../pages/api/questionTypes";
import { HorizontalEquation } from "../questionTypes/HorizontalEquation";
import { VerticalEquation } from "../questionTypes/VerticalEquation";
import { WordProblemAdd } from "../questionTypes/wordProblems/WordProblemAdd";
import { WordProblemDiv } from "../questionTypes/wordProblems/WordProblemDiv";
import { WordProblemMulti } from "../questionTypes/wordProblems/WordProblemMulti";
import { WordProblemSub } from "../questionTypes/wordProblems/WordProblemSub";
import Card from "../ui/Card";

type AssignmentQuestionSetProps = {
  questionData: Question[];
  index: number;
  submitGuess?: (guessData: GuessData) => void;
};
const AssignmentQuestionSet = ({
  questionData,
  index,
  submitGuess,
}: AssignmentQuestionSetProps) => {
  console.log(questionData);
  if (
    questionData[index] &&
    questionData[index].questionType ===
      QuestionType.VERTICAL_EQUATION.toString()
  ) {
    return (
      <Card size="large">
        <VerticalEquation
          question={questionData[index]}
          submitGuess={submitGuess}
        />
      </Card>
    );
  } else if (
    questionData[index].questionType == QuestionType.BINARY_WORD_PROBLEM
  ) {
    if (questionData[index].operator == "+") {
      return (
        <Card size="large">
          <WordProblemAdd
            question={questionData[index]}
            submitGuess={submitGuess}
          />
        </Card>
      );
    } else if (questionData[index].operator == "-") {
      return (
        <Card size="large">
          <WordProblemSub
            question={questionData[index]}
            submitGuess={submitGuess}
          />
        </Card>
      );
    } else if (questionData[index].operator == "x") {
      return (
        <Card size="large">
          <WordProblemMulti
            question={questionData[index]}
            submitGuess={submitGuess}
          />
        </Card>
      );
    } else if (questionData[index].operator == "÷") {
      return (
        <Card size="large">
          <WordProblemDiv
            question={questionData[index]}
            submitGuess={submitGuess}
          />
        </Card>
      );
    }
  } else {
    return (
      <Card size="large">
        <HorizontalEquation
          question={questionData[index]}
          submitGuess={submitGuess}
        />
      </Card>
    );
  }

  return <div> </div>;
};

export default AssignmentQuestionSet;
