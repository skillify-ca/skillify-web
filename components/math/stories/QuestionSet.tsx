import React from "react";
import { GuessData } from "../../../pages/api/guessData";
import { Question } from "../../../pages/api/question";
import { QuestionType } from "../../../pages/api/questionTypes";
import {
  getRandomItemFromArray,
  getRndColour,
} from "../../../pages/api/random";
import { Skill } from "../../../pages/api/skill";
import BalanceBudget from "../../finance/money/BalanceBudgetTable";
import BudgetTable from "../../finance/money/BudgetTable";
import TipQuestion from "../../finance/money/TipQuestion";
import UnitPriceQuestion from "../../finance/UnitPriceQuestion";
import { FillBlank } from "../../questionTypes/FillBlank";
import { HorizontalEquation } from "../../questionTypes/HorizontalEquation";
import { LongDivision } from "../../questionTypes/LongDivision";
import { MultipleChoice } from "../../questionTypes/MultipleChoice";
import { MultipleChoiceSentence } from "../../questionTypes/MultipleChoiceSentence";
import { MultipleChoiceWord } from "../../questionTypes/MultipleChoiceWord";
import { MultiplicationArray } from "../../questionTypes/MultiplicationArray";
import { MultiplicationEqualGroups } from "../../questionTypes/MultiplicationEqualGroups";
import { NumberComparison } from "../../questionTypes/numberComparison";
import { NumbertoVerticalDigits } from "../../questionTypes/numbers/NumbertoVerticalDigits";
import { PatternBlank } from "../../questionTypes/numbers/PatternBlank";
import { VerticalDigitstoNum } from "../../questionTypes/numbers/VerticalDigitstoNum";
import { WordtoHorizontalDigits } from "../../questionTypes/numbers/WordtoHorizontalDigits";
import { TrueorFalse } from "../../questionTypes/TrueorFalse";
import { VerticalEquation } from "../../questionTypes/VerticalEquation";

import { VisualAddition } from "../../questionTypes/VisualAddition";
import { WordProblemAdd } from "../../questionTypes/wordProblems/WordProblemAdd";
import { WordProblemDiv } from "../../questionTypes/wordProblems/WordProblemDiv";
import { WordProblemMulti } from "../../questionTypes/wordProblems/WordProblemMulti";
import { WordProblemSub } from "../../questionTypes/wordProblems/WordProblemSub";
import Card from "../../ui/Card";

type QuestionSetProps = {
  title?: string;
  HUDEnabled?: boolean;
  isReadOnly?: boolean;
  questionData: Question[];
  index: number;
  inputElement?: any;
  submitGuess?: (guessData: GuessData) => void;
  score?: number;
  diagnostic?: { isDiagnostic: boolean; opacityVal: number };
};
const QuestionSet = ({
  title,
  HUDEnabled = true,
  isReadOnly = false,
  questionData,
  index,
  submitGuess,
  score,
  diagnostic,
}: QuestionSetProps) => {
  const arrayQuestionColour = getRndColour();
  const questionComponent = () => {
    if (questionData[index].questionType === QuestionType.VERTICAL_EQUATION) {
      return (
        <VerticalEquation
          isReadOnly={isReadOnly}
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
      questionData[index].questionType == QuestionType.COMPARISON_NUMBER_PROBLEM
    ) {
      return (
        <NumberComparison
          valueText={questionData[index].text}
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
          options={questionData[index].multipleChoice.options}
          answer={questionData[index].answer}
          submitGuess={submitGuess}
        >
          <h1 className="font-bold underline text-4l">
            {" "}
            {questionData[index].multipleChoice.title}{" "}
          </h1>
          <p className="text-2xl">{questionData[index].text}</p>
        </MultipleChoiceWord>
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
            isReadOnly={isReadOnly}
            question={questionData[index]}
            submitGuess={submitGuess}
          />
        );
      } else if (questionData[index].operator == "-") {
        return (
          <WordProblemSub
            isReadOnly={isReadOnly}
            question={questionData[index]}
            submitGuess={submitGuess}
          />
        );
      } else if (questionData[index].operator == "x") {
        return (
          <WordProblemMulti
            isReadOnly={isReadOnly}
            question={questionData[index]}
            submitGuess={submitGuess}
          />
        );
      } else if (questionData[index].operator == "÷") {
        return (
          <WordProblemDiv
            isReadOnly={isReadOnly}
            question={questionData[index]}
            submitGuess={submitGuess}
          />
        );
      }
    } else if (
      questionData[index].questionType == QuestionType.VISUAL_TYPE_PROBLEM
    ) {
      if (questionData[index].operator == "+") {
        return (
          <VisualAddition
            question={questionData[index]}
            submitGuess={submitGuess}
            visualDisplay={questionData[index].displayNum}
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
      const skill = questionData[index].skill;

      return (
        <LongDivision
          question={questionData[index]}
          submitGuess={submitGuess}
          isRemainder={
            skill === Skill.DIVISION_TWO_DIGIT_BY_ONE_DIGIT ||
            skill === Skill.DIVISION_THREE_DIGIT_BY_ONE_DIGIT ||
            skill === Skill.DIVISION_THREE_DIGIT_BY_TWO_DIGIT ||
            skill === Skill.DIVISION_THREE_DIGIT_BY_TENTH
          }
          isReadOnly={isReadOnly}
        />
      );
    } else if (
      questionData[index].questionType === QuestionType.ARRAY_QUESTION
    ) {
      {
        return (
          <MultiplicationArray
            isReadOnly={isReadOnly}
            question={questionData[index]}
            submitGuess={submitGuess}
            colour={arrayQuestionColour}
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
            isReadOnly={isReadOnly}
            question={questionData[index]}
            submitGuess={submitGuess}
            color={getRandomItemFromArray([0, 1, 2, 3])}
          />
        );
      }
    } else if (
      questionData[index].questionType ===
      QuestionType.FINANCE_BUDGET_TABLE_PROBLEM
    ) {
      {
        return (
          <BudgetTable
            question={questionData[index]}
            answer={questionData[index].answer}
            submitGuess={submitGuess}
          />
        );
      }
    } else if (
      questionData[index].questionType === QuestionType.FINANCE_TIP_PROBLEM
    ) {
      {
        return (
          <TipQuestion
            question={questionData[index]}
            answer={questionData[index].answer}
            submitGuess={submitGuess}
          />
        );
      }
    } else if (
      questionData[index].questionType ===
      QuestionType.FINANCE_BALANCE_BUDGET_PROBLEM
    ) {
      {
        return (
          <BalanceBudget
            question={questionData[index]}
            answer={questionData[index].answer}
            submitGuess={submitGuess}
          />
        );
      }
    } else if (
      questionData[index].questionType ===
      QuestionType.FINANCE_UNIT_PRICE_PROBLEM
    ) {
      return (
        <UnitPriceQuestion
          total={questionData[index].unitPriceModel.total}
          numberOfObjects={questionData[index].unitPriceModel.numberOfObjects}
          submitGuess={submitGuess}
        />
      );
    }
    return (
      <HorizontalEquation
        isReadOnly={isReadOnly}
        question={questionData[index]}
        submitGuess={submitGuess}
      />
    );
  };

  return (
    <div className="flex items-center justify-center gap-4">
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
