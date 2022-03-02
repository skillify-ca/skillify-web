import React from "react";
import { Story, Meta } from "@storybook/react";
import TipQuestion, { TipQuestionProps } from "./TipQuestion";
import { AnswerType, Question } from "../../../pages/api/question";
import { QuestionType } from "../../../pages/api/questionTypes";

export default {
  title: "finance/Tip Question",
  component: TipQuestion,
  argTypes: {},
} as Meta;

const Template: Story<TipQuestionProps> = (args) => <TipQuestion {...args} />;

export const Primary = Template.bind({});
const question: Question = {
  text: "Question",
  answer: "1.5",
  answerType: AnswerType.NUMBER,
  questionType: QuestionType.FINANCE_TIP_PROBLEM,
};
Primary.args = {
  tip: 20,
  question,
};
