import { AdditionProperty } from "../../components/stories/MultipleChoiceTypes";
import { QuestionType } from "./questionTypes";
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
    operator?: string;
    wordProblem?: WordProblemModel;
    multiplechoice? : MCModel;
};

// export type MCQuestion = {
//     text: string;
//     operator?: string;
//     questionType: QuestionType.MULTIPLE_CHOICE;
//     questionData: Array<string>;
// }

export type MCOption = {
    id: string;
    text: string;
}

export type MCModel = {
    options: Array<MCOption>;
}