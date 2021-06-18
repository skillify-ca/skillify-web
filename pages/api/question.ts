import { QuestionType } from "./questionTypes";
import { Skill } from "./skill";
import { WordProblemModel } from "./WordProblemModel";

export enum AnswerType {
  NUMBER,
  BOOLEAN,
  STRING,
}

export type Question = {
  text: string;
  answer: string;
  answerType: AnswerType;
  questionType: QuestionType;
  skill: Skill;
  operator?: string;
  wordProblem?: WordProblemModel;
  multipleChoice?: MCModel;
  fillInTheBlank?: fillBlankModel;
  placeholder?: string;
};

export type MCOption = {
  id: string;
  text: string;
};
export type MCModel = {
  options: Array<MCOption>;
};
export type fillBlankModel = {
  options: Array<FillOption>;
};

export type FillOption = {
  text: string;
};
