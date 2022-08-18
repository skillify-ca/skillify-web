import React from "react";
import { Story, Meta } from "@storybook/react";
import BalanceBudget, { BalanceBudgetProps } from "./BalanceBudgetTable";
import { Question } from "../../../pages/api/question";
import { QuestionType } from "../../../pages/api/questionTypes";

export default {
  title: "finance/Balance Budget Table",
  component: BalanceBudget,
  argTypes: {},
} as Meta;

const Template: Story<BalanceBudgetProps> = (args) => (
  <BalanceBudget {...args} />
);

export const Primary = Template.bind({});
const question: Question = {
  text: "Question",
  answer: "1.5",
  questionType: QuestionType.HORIZONTAL_EQUATION,
  personDataModel: {
    name: "name",
    month: "month",
    income: [],
    expenses: [],
    totalIncome: 100,
    totalExpenses: 99,
  },
};
Primary.args = {
  budget: 1.5,
  question,
};
