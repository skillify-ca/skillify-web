import React from "react";
import { GuessData } from "../../../pages/api/guessData";
import { Question } from "../../../pages/api/question";
import { QuestionType } from "../../../pages/api/questionTypes";
import { WordProblemAdd } from "../../questionTypes/wordProblems/WordProblemAdd";
import { WordProblemDiv } from "../../questionTypes/wordProblems/WordProblemDiv";
import { WordProblemMulti } from "../../questionTypes/wordProblems/WordProblemMulti";
import { WordProblemSub } from "../../questionTypes/wordProblems/WordProblemSub";

type WordProblemComponentProps = {
  questionData: Question;
  inputElement?: any;
  submitGuess: (guessData: GuessData) => void;
};
const WordProblemComponent = ({
  questionData,
  submitGuess,
}: WordProblemComponentProps) => {
  if (questionData.questionType !== QuestionType.BINARY_WORD_PROBLEM) {
    return null;
  }

  if (questionData.operator == "+") {
    return (
      <WordProblemAdd
        isReadOnly={false}
        question={questionData}
        submitGuess={submitGuess}
      />
    );
  } else if (questionData.operator == "-") {
    return (
      <WordProblemSub
        isReadOnly={false}
        question={questionData}
        submitGuess={submitGuess}
      />
    );
  } else if (questionData.operator == "x") {
    return (
      <WordProblemMulti
        isReadOnly={false}
        question={questionData}
        submitGuess={submitGuess}
      />
    );
  } else if (questionData.operator == "÷") {
    return (
      <WordProblemDiv
        isReadOnly={false}
        question={questionData}
        submitGuess={submitGuess}
      />
    );
  }
};

export default WordProblemComponent;
