import { PersonData } from "./money/personData";
import { ItemCostModel } from "./money/itemCostModel";
import { QuestionType } from "./questionTypes";
import { WordProblemModel } from "./WordProblemModel";
import { Skill } from "./skill";

export enum AnswerType {
  NUMBER,
  BOOLEAN,
  STRING,
  ARRAY,
}

export type Question =
  | {
      questionType: QuestionType.VERTICAL_EQUATION;
      text: string;
      answer: string;
      operator: string;
    }
  | {
      questionType: QuestionType.MULTIPLE_CHOICE_SENTENCE;
      multipleChoice: MCModel;
      answer: string;
      text: string;
    }
  | {
      questionType: QuestionType.FILL_IN_THE_BLANK_PROBLEM;
      fillInTheBlank: fillBlankModel;
      answer: string;
      text: string;
    }
  | {
      questionType: QuestionType.PATTERN_COUNT_BLANKS_PROBLEM;
      answer: string;
      text: string;
      placeholder: string;
    }
  | {
      questionType: QuestionType.COMPARISON_NUMBER_PROBLEM;
      answer: string;
      text: string;
    }
  | {
      questionType: QuestionType.VERTICAL_DIGITS_TO_NUM;
      arrayAns: number[];
      text: string;
    }
  | {
      questionType: QuestionType.WORD_TO_HORIZONTAL_DIGITS;
      arrayAns: number[];
      text: string;
    }
  | {
      questionType: QuestionType.NUM_TO_VERITCAL_DIGITS;
      arrayAns: number[];
      skill: Skill;
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
  | {
      questionType: QuestionType.BINARY_WORD_PROBLEM;
      answer: string;
      operator: string;
      text: string;
    }
  | {
      questionType: QuestionType.VISUAL_TYPE_PROBLEM;
      displayNum: number; //randomizes visualnumber type
      answer: string;
      operator: string;
    }
  | {
      questionType: QuestionType.TRUE_OR_FALSE_PROBLEM;
      text: string;
      answer: string;
      operator: string;
    }
  | {
      questionType: QuestionType.LONG_DIVISION_PROBLEM;
      text: string;
      skill: Skill;
      answer: string;
      operator: string;
    }
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
