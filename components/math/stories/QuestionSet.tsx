import { sub } from "date-fns";
import React from "react";
import { SKILLS } from "../../../graphql/utils/constants";
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
    <div className="flex items-center justify-center gap-4">
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
