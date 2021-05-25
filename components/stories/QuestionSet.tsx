import React from "react";
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
import { WordProblemDiv } from "./WordProblemDiv";
import { MCModel, MCOption, Question } from "../../pages/api/question";
import { MultipleChoiceSentence } from "./MultipleChoiceSentence";
import { AdditionProperty } from "./MultipleChoiceTypes";
import { MultipleChoiceWord } from "./MultipleChoiceWord";
import { FillBlank } from "./FillBlank";
import { MultiplicationArray } from "./MultiplicationArray";
import { MultiplicationEqualGroups } from "./MultiplicationEqualGroups";
import { Skill } from "../../pages/api/skill";

type QuestionSetProps = {
  title: string;
  questionData: Question[];
  index: number;
  inputElement: any;
  submitGuess: (guessData: GuessData) => void;
  score: number;
  practice?: boolean;
};
const QuestionSet = ({
  title,
  questionData,
  index,
  submitGuess,
  score,
  practice,
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
      questionData[index].questionType == QuestionType.MULTIPLE_CHOICE_SENTENCE
    ) {
      return (
        <MultipleChoiceSentence
          displayQuestion={questionData[index].text}
          option1={questionData[index].multipleChoice.options[0]}
          option2={questionData[index].multipleChoice.options[1]}
          option3={questionData[index].multipleChoice.options[2]}
          option4={questionData[index].multipleChoice.options[3]}
          submitGuess={submitGuess}
        />
      );
    } else if (
      questionData[index].questionType == QuestionType.FILL_IN_THE_BLANK_PROBLEM
    ) {
      return (
        <FillBlank
          displayQuestion={questionData[index].text}
          step1={questionData[index].fillInTheBlank.options[0].text}
          step2={questionData[index].fillInTheBlank.options[1].text}
          step3={questionData[index].fillInTheBlank.options[2].text}
          answer={questionData[index].answer}
          submitGuess={submitGuess}
        />
      );
    } else if (
      questionData[index].questionType == QuestionType.MULTIPLE_CHOICE_WORD
    ) {
      return (
        <MultipleChoiceWord
          displayQuestion="Which Property of Addition is shown?"
          question={questionData[index].multipleChoice.options[0]}
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
      } else if (questionData[index].operator == "÷") {
        return (
          <WordProblemDiv
            question={questionData[index]}
            submitGuess={submitGuess}
          />
        );
      }
    } else if (
      questionData[index].questionType === QuestionType.TRUE_OR_FALSE_PROBLEM
    ) {
      return (
        <TrueorFalse
          question={questionData[index]}
          submitGuess={submitGuess}
          answer={questionData[index].answer}
        />
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
    } else if (
      questionData[index].questionType === QuestionType.ARRAY_QUESTION
    ) {
      {
        return (
          <MultiplicationArray
            question={questionData[index]}
            submitGuess={submitGuess}
          />
        );
      }
    } else if (
      questionData[index].questionType ===
      QuestionType.MULTIPLICATION_EQUAL_GROUPS
    ) {
      {
        return (
          <MultiplicationEqualGroups
            question={questionData[index]}
            submitGuess={submitGuess}
          />
        );
      }
    }

    return (
      <HorizontalEquation
        question={questionData[index]}
        submitGuess={submitGuess}
      />
    );
  };

  const progressText = (
    <p className="font-bold text-gray-400 ">
      {" "}
      Question: {index + 1} / {questionData.length}{" "}
    </p>
  );

  const scoreText = (
    <div>
      Score: {score} / {index + 1}
    </div>
  );
  return (
    <div className="flex flex-col justify-center items-center gap-8">
      <div className="flex flex-row justify-between w-full p-4 bg-yellow-400">
        <p className="text-xl font-bold">{title}</p>
        {progressText}
        {!practice && scoreText}
      </div>
      <Card size="large">{questionData[index] && questionComponent()}</Card>
    </div>
  );
};

export default QuestionSet;
