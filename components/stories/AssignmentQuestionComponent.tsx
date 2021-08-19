import React, { useState } from "react";
import { GuessData } from "../../pages/api/guessData";
import { Question } from "../../pages/api/question";
import { QuestionType } from "../../pages/api/questionTypes";
import { getRndColour, getRndInteger } from "../../pages/api/random";
import { Skill } from "../../pages/api/skill";
import { FillBlank } from "../questionTypes/FillBlank";
import { HorizontalEquation } from "../questionTypes/HorizontalEquation";
import { LongDivision } from "../questionTypes/LongDivision";
import { MultipleChoice } from "../questionTypes/MultipleChoice";
import { MultipleChoiceSentence } from "../questionTypes/MultipleChoiceSentence";
import { MultipleChoiceWord } from "../questionTypes/MultipleChoiceWord";
import { MultiplicationArray } from "../questionTypes/MultiplicationArray";
import { MultiplicationEqualGroups } from "../questionTypes/MultiplicationEqualGroups";
import { NumbertoVerticalDigits } from "../questionTypes/NumbertoVerticalDigits";
import { PatternBlank } from "../questionTypes/PatternBlank";
import { TrueorFalse } from "../questionTypes/TrueorFalse";
import { VerticalDigitstoNum } from "../questionTypes/VerticalDigitstoNum";
import { VerticalEquation } from "../questionTypes/VerticalEquation";
import { VisualAddition } from "../questionTypes/VisualAddition";
import { WordProblemAdd } from "../questionTypes/wordProblems/WordProblemAdd";
import { WordProblemDiv } from "../questionTypes/wordProblems/WordProblemDiv";
import { WordProblemMulti } from "../questionTypes/wordProblems/WordProblemMulti";
import { WordProblemSub } from "../questionTypes/wordProblems/WordProblemSub";
import { WordtoHorizontalDigits } from "../questionTypes/WordtoHorizontalDigits";
import Card from "../ui/Card";

type AssignmentQuestionSetProps = {
  questionData: Question[];
  index: number;
  submitGuess: (guessData: GuessData) => void;
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
  }

  return <div> </div>;
};

export default AssignmentQuestionSet;
