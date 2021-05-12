import { QuestionType } from "./questionTypes";
import { WordProblemModel } from "./WordProblemModel";

export enum AnswerType {
    NUMBER,
    BOOLEAN
}

export type Question = {
    text: string;
    answer: string;
    answerType: AnswerType;
    questionType: QuestionType;
    operator?: string;
    wordProblem?: WordProblemModel;
};
