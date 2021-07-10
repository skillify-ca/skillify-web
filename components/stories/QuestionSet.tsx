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
import { Question } from "../../pages/api/question";
import { MultipleChoiceSentence } from "./MultipleChoiceSentence";
import { MultipleChoiceWord } from "./MultipleChoiceWord";
import { FillBlank } from "./FillBlank";
import { MultiplicationArray } from "./MultiplicationArray";
import { MultiplicationEqualGroups } from "./MultiplicationEqualGroups";
import { getRndColour } from "../../pages/api/random";
import { MultipleChoice } from "./MultipleChoice";
import { PatternBlank } from "./patternBlanks";
import { WordtoHorizontalDigits } from "./WordtoHorizontalDigits";
import { NumbertoVerticalDigits } from "./NumbertoVerticalDigits";
import { VerticalDigitstoNum } from "./VerticalDigitstoNum";

type QuestionSetProps = {
  title: string;
  HUDEnabled?: boolean;
  questionData: Question[];
  index: number;
  inputElement: any;
  submitGuess: (guessData: GuessData) => void;
  score: number;
  diagnostic?: { isDiagnostic: boolean; opacityVal: number };
};
const QuestionSet = ({
  title,
  HUDEnabled = true,
  questionData,
  index,
  submitGuess,
  score,
  diagnostic,
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
          answer={questionData[index].answer}
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
      questionData[index].questionType ==
      QuestionType.PATTERN_COUNT_BLANKS_PROBLEM
    ) {
      return (
        <PatternBlank
          displayQuestion={questionData[index].text}
          startNumber={questionData[index].placeholder}
          answer={questionData[index].answer}
          submitGuess={submitGuess}
        />
      );
    } else if (
      questionData[index].questionType == QuestionType.VERTICAL_DIGITS_TO_NUM
    ) {
      return (
        <VerticalDigitstoNum
          numArr={questionData[index].arrayAns}
          answer={questionData[index].text}
          submitGuess={submitGuess}
        />
      );
    } else if (
      questionData[index].questionType == QuestionType.WORD_TO_HORIZONTAL_DIGITS
    ) {
      return (
        <WordtoHorizontalDigits
          numString={questionData[index].text}
          answer={questionData[index].arrayAns}
          submitGuess={submitGuess}
        />
      );
    } else if (
      questionData[index].questionType == QuestionType.NUM_TO_VERITCAL_DIGITS
    ) {
      return (
        <NumbertoVerticalDigits
          num={questionData[index].text}
          skill={questionData[index].skill}
          answer={questionData[index].arrayAns}
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
      questionData[index].questionType == QuestionType.MULTIPLE_CHOICE
    ) {
      return (
        <MultipleChoice
          displayQuestion={questionData[index].text}
          option1={questionData[index].multipleChoice.options[0]}
          option2={questionData[index].multipleChoice.options[1]}
          option3={questionData[index].multipleChoice.options[2]}
          submitGuess={submitGuess}
          answer={questionData[index].answer}
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
            colour={getRndColour()}
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
    <p className="font-semibold text-gray-500 ">
      {" "}
      Question: {index + 1} / {questionData.length}{" "}
    </p>
  );

  const scoreText = (
    <p className="font-semibold">
      {" "}
      Score: {score} / {index + 1}{" "}
    </p>
  );
  return (
    <div className="flex flex-col justify-center items-center gap-4 m-8">
      {HUDEnabled && (
        <div className="flex flex-row justify-between w-full p-4 bg-blue-300 shadow-lg rounded-lg ">
          {progressText}
          {scoreText}
        </div>
      )}

      <Card size="large">
        <div
          className={`transition-opacity duration-150 ease-in-out opacity-${
            diagnostic?.isDiagnostic && diagnostic.opacityVal
          }`}
        >
          {questionData[index] && questionComponent()}
        </div>
      </Card>
    </div>
  );
};

export default QuestionSet;
