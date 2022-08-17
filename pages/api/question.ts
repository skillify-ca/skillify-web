import { PersonData } from "./money/personData";
import { ItemCostModel } from "./money/itemCostModel";
import { QuestionType } from "./questionTypes";
import { WordProblemModel } from "./WordProblemModel";

export enum AnswerType {
  NUMBER,
  BOOLEAN,
  STRING,
  ARRAY,
}

export type Question =
  | {
      text: string;
      answer: string; // only accepts strings so Array<Num> doesn't work
      answerType: AnswerType;
      questionType: QuestionType;
      skill?: number;
      operator?: string; //Numbers unit does not have a operator
      wordProblem?: WordProblemModel; //value is only stored if QuestionType is wordProblem
      multipleChoice?: MCModel;
      fillInTheBlank?: fillBlankModel;
      arrayAns?: Array<number>;
      placeholder?: string; // placeholder value for fill in the blanks
    }
  | {
      questionType: QuestionType.VISUAL_TYPE_PROBLEM;
      displayNum: number; //randomizes visualnumber type
      answer: string;
    }
  | {
      questionType: QuestionType.FINANCE_TIP_PROBLEM;
      displayNum: number;
      answer: string;
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
    };

export type MCOption = {
  id: string;
  text: string;
};
export type MCModel = {
  title?: string;
  options: Array<MCOption>;
};
export type fillBlankModel = {
  options: Array<FillOption>;
};

export type FillOption = {
  text: string;
};
