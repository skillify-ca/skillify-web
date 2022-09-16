import React from "react";
import { GuessData } from "../../../pages/api/guessData";
import { Question } from "../../../pages/api/question";
import { QuestionType } from "../../../pages/api/questionTypes";
import { Skill } from "../../../pages/api/skill";
import BalanceBudget from "../../finance/money/BalanceBudgetTable";
import BudgetTable from "../../finance/money/BudgetTable";
import TipQuestion from "../../finance/money/TipQuestion";
import SalesTaxQuestion from "../../finance/SalesTaxQuestion";
import CommissionQuestion from "../../finance/CommissionQuestion";
import UnitPriceQuestion from "../../finance/UnitPriceQuestion";
import algebrasolvevariable from "../../math/algebra/algebrasolvevariable"
import { HorizontalEquation } from "../../questionTypes/HorizontalEquation";
import { LongDivision } from "../../questionTypes/LongDivision";
import { MultipleChoice } from "../../questionTypes/MultipleChoice";
import { MultipleChoiceSentence } from "../../questionTypes/MultipleChoiceSentence";
import { MultipleChoiceWord } from "../../questionTypes/MultipleChoiceWord";
import { MultiplicationArray } from "../../questionTypes/MultiplicationArray";
import { MultiplicationEqualGroups } from "../../questionTypes/MultiplicationEqualGroups";
import { TrueorFalse } from "../../questionTypes/TrueorFalse";
import { VerticalEquation } from "../../questionTypes/VerticalEquation";

import { VisualAddition } from "../../questionTypes/VisualAddition";
import WordProblemComponent from "./WordProblemComponent";
import AlgebraSolveVariable from "../../math/algebra/algebrasolvevariable";

type QuestionProps = {
  questionData: Question;
  submitGuess: (guessData: GuessData) => void;
};
const QuestionComponent = ({ questionData, submitGuess }: QuestionProps) => {
  return questionData.questionType === QuestionType.VERTICAL_EQUATION ? (
    <VerticalEquation
      submitGuess={submitGuess}
      text={questionData.text}
      answer={questionData.answer}
      operator={questionData.operator}
    />
  ) : questionData.questionType == QuestionType.MULTIPLE_CHOICE_SENTENCE ? (
    <MultipleChoiceSentence
      displayQuestion={questionData.text}
      option1={questionData.multipleChoice.options[0]}
      option2={questionData.multipleChoice.options[1]}
      option3={questionData.multipleChoice.options[2]}
      option4={questionData.multipleChoice.options[3]}
      answer={questionData.answer}
      submitGuess={submitGuess}
    />
  ) : questionData.questionType == QuestionType.MULTIPLE_CHOICE_WORD ? (
    <MultipleChoiceWord
      options={questionData.multipleChoice.options}
      answer={questionData.answer}
      submitGuess={submitGuess}
    >
      <h1 className="font-bold underline text-4l">
        {" "}
        {questionData.multipleChoice.title}{" "}
      </h1>
      <p className="text-2xl">{questionData.text}</p>
    </MultipleChoiceWord>
  ) : questionData.questionType == QuestionType.MULTIPLE_CHOICE ? (
    <MultipleChoice
      displayQuestion={questionData.text}
      option1={questionData.multipleChoice.options[0]}
      option2={questionData.multipleChoice.options[1]}
      option3={questionData.multipleChoice.options[2]}
      submitGuess={submitGuess}
      answer={questionData.answer}
    />
  ) : questionData.questionType == QuestionType.BINARY_WORD_PROBLEM ? (
    <WordProblemComponent
      questionData={questionData}
      submitGuess={submitGuess}
    />
  ) : questionData.questionType == QuestionType.VISUAL_TYPE_PROBLEM ? (
    <VisualAddition
      question={questionData}
      submitGuess={submitGuess}
      visualDisplay={questionData.displayNum}
    />
  ) : questionData.questionType === QuestionType.TRUE_OR_FALSE_PROBLEM ? (
    <TrueorFalse
      text={questionData.text}
      submitGuess={submitGuess}
      answer={questionData.answer}
    />
  ) : questionData.questionType === QuestionType.LONG_DIVISION_PROBLEM ? (
    <LongDivision
      submitGuess={submitGuess}
      text={questionData.text}
      answer={questionData.answer}
    />
  ) : questionData.questionType === QuestionType.ARRAY_QUESTION ? (
    <MultiplicationArray
      submitGuess={submitGuess}
      colour={questionData.colour}
      text={questionData.text}
      answer={questionData.answer}
    />
  ) : questionData.questionType === QuestionType.MULTIPLICATION_EQUAL_GROUPS ? (
    <MultiplicationEqualGroups
      submitGuess={submitGuess}
      colour={questionData.colour}
      text={questionData.text}
      answer={questionData.answer}
    />
  ) : questionData.questionType ===
    QuestionType.FINANCE_BUDGET_TABLE_PROBLEM ? (
    <BudgetTable
      question={questionData}
      answer={questionData.answer}
      submitGuess={submitGuess}
    />
  ) : questionData.questionType === QuestionType.FINANCE_TIP_PROBLEM ? (
    <TipQuestion
      question={questionData}
      answer={questionData.answer}
      submitGuess={submitGuess}
    />
  ) : questionData.questionType ===
    QuestionType.FINANCE_BALANCE_BUDGET_PROBLEM ? (
    <BalanceBudget
      question={questionData}
      answer={questionData.answer}
      submitGuess={submitGuess}
    />
  ) : questionData.questionType === QuestionType.FINANCE_UNIT_PRICE_PROBLEM ? (
    <UnitPriceQuestion
      total={questionData.unitPriceModel.total}
      numberOfObjects={questionData.unitPriceModel.numberOfObjects}
      answer={questionData.answer}
      submitGuess={submitGuess}
      name={questionData.unitPriceModel.name}
      singularFruit={questionData.unitPriceModel.singularFruit}
      pluralFruit={questionData.unitPriceModel.pluralFruit}
      image={questionData.unitPriceModel.image}
    />
  ) : questionData.questionType === QuestionType.ALGEBRA_SOLVE_VARIABLE ? (
    <AlgebraSolveVariable
    variableLetter={questionData.algebrasolveModel.variableLetter}
    variableproblem={questionData.algebrasolveModel.variableproblem}
    submitGuess={submitGuess}
    text={""}
    answer={questionData.answer}
    personname={questionData.algebrasolveModel.personname}
    />
  ) : questionData.questionType === QuestionType.FINANCE_SALES_TAX_PROBLEM ? (
    <SalesTaxQuestion
      numberOfToys={questionData.salesTaxModel.numberOfToys}
      price={questionData.salesTaxModel.price}
      taxRate={questionData.salesTaxModel.taxRate}
      answer={questionData.answer}
      submitGuess={submitGuess}
      personName={questionData.salesTaxModel.personName}
      multipleAnimals={questionData.salesTaxModel.multipleAnimals}
      image1={questionData.salesTaxModel.image1}
      text={""}
    />
  ) : questionData.questionType === QuestionType.FINANCE_COMMISSION_PROBLEM ? (
    <CommissionQuestion
      personName={questionData.commisionModel.personName}
      commission={questionData.commisionModel.commission}
      price={questionData.commisionModel.price}
      numberOfSales={questionData.commisionModel.numberOfSales}
      submitGuess={submitGuess}
      image1={questionData.commisionModel.image1}
      answer={questionData.answer}
      text={""}
    />
  ) : (
    <HorizontalEquation
      isReadOnly={false}
      question={questionData}
      submitGuess={submitGuess}
    />
  );
};

export default QuestionComponent;
