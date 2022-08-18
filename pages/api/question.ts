import { PersonData } from "./money/personData";
import { ItemCostModel } from "./money/itemCostModel";
import { QuestionType } from "./questionTypes";
import { Skill } from "./skill";
import { VerticalEquationQuestion } from "./questionGenerators/verticalEquationQuestion";
import { TrueOrFalseQuestion } from "./questionGenerators/trueOrFalseQuestion";
import { WordProblemQuestion } from "./questionGenerators/wordProblemQuestion";

export type Question =
  | VerticalEquationQuestion
  | {
      questionType: QuestionType.HORIZONTAL_EQUATION;
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
  | {
      questionType: QuestionType.VISUAL_TYPE_PROBLEM;
      displayNum: number; //randomizes visualnumber type
      answer: string;
      operator: string;
      text: string;
    }
  | TrueOrFalseQuestion
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
    };

export type MCOption = {
  id: string;
  text: string;
};
export type MCModel = {
  title?: string;
  options: Array<MCOption>;
};
