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
  image?: string;
};

export type MCOption = {
  id: string;
  text: string;
};
export type MCModel = {
  options: Array<MCOption>;
};
