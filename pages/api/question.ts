import { AdditionProperty } from "../../components/stories/MultipleChoiceTypes";
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

export type MCQuestion = {
    text: string;
    answerType: AdditionProperty;
    questionType: QuestionType;
}