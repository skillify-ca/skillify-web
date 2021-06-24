import { QuestionType } from "./questionTypes";
import { Skill } from "./skill";
import { WordProblemModel } from "./WordProblemModel";

export enum AnswerType {
  NUMBER,
  BOOLEAN,
  STRING,
  ARRAY,
}

export type Question = {
  text: string;
  answer: string; // only accepts strings so Array<Num> doesn't work
  answerType: AnswerType;
  questionType: QuestionType;
  skill: Skill;
  operator?: string;
  wordProblem?: WordProblemModel;
  multipleChoice?: MCModel;
  fillInTheBlank?: fillBlankModel;
  placeholder?: string;
  arrayAns?: Array<number>;
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
