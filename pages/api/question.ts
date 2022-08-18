import { QuestionType } from "./questionTypes";
import { HorizontalEquationQuestion } from "./labs/questionGenerators/horizontalEquationQuestion";
import { TrueOrFalseQuestion } from "./labs/questionGenerators/trueOrFalseQuestion";
import { VerticalEquationQuestion } from "./labs/questionGenerators/verticalEquationQuestion";
import { VisualDotsQuestion } from "./labs/questionGenerators/visualDotsQuestion";
import { WordProblemQuestion } from "./labs/questionGenerators/wordProblemQuestion";
import { LongDivisionQuestion } from "./labs/questionGenerators/longDivisionQuestion";
import { ItemCostModel } from "./labs/finance/money/itemCostModel";
import { PersonData } from "./labs/finance/money/personData";

export type Question =
  | VerticalEquationQuestion
  | HorizontalEquationQuestion
  | {
      questionType: QuestionType.MULTIPLE_CHOICE_SENTENCE;
      multipleChoice: MCModel;
      answer: string;
      text: string;
    }
  | {
      questionType: QuestionType.MULTIPLE_CHOICE_WORD;
      answer: string;
      multipleChoice: MCModel;
      text: string;
    }
  | {
      questionType: QuestionType.MULTIPLE_CHOICE;
      answer: string;
      multipleChoice: MCModel;
      text: string;
    }
  | WordProblemQuestion
  | VisualDotsQuestion
  | TrueOrFalseQuestion
  | LongDivisionQuestion
  | {
      questionType: QuestionType.ARRAY_QUESTION;
      text: string;
      answer: string;
      colour: "red" | "purple" | "blue" | "green" | "yellow";
    }
  | {
      questionType: QuestionType.MULTIPLICATION_EQUAL_GROUPS;
      text: string;
      answer: string;
      colour: 0 | 1 | 2 | 3;
    }
  | {
      questionType: QuestionType.FINANCE_TIP_PROBLEM;
      displayNum: number;
      answer: string;
      text: string;
    }
  | {
      questionType: QuestionType.FINANCE_BALANCE_BUDGET_PROBLEM;
      personDataModel: PersonData;
      answer: string;
    }
  | {
      questionType: QuestionType.FINANCE_BUDGET_TABLE_PROBLEM;
      budgetCostModel: Array<ItemCostModel>;
      answer: string;
      text: string;
    }
  | {
      questionType: QuestionType.FINANCE_UNIT_PRICE_PROBLEM;
      unitPriceModel: UnitPriceModel;
      answer: string;
      text: string;
    };

export type MCOption = {
  id: string;
  text: string;
};
export type MCModel = {
  title?: string;
  options: Array<MCOption>;
};

export type UnitPriceModel = {
  total: number;
  numberOfObjects: number;
};
