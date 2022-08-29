import React from "react";
import { Story, Meta } from "@storybook/react";
import BudgetTable, { BudgetItemProps } from "./BudgetTable";
import { Question } from "../../../pages/api/question";
import { QuestionType } from "../../../pages/api/questionTypes";

export default {
  title: "finance/Budget Table",
  component: BudgetTable,
  argTypes: {},
} as Meta;

const Template: Story<BudgetItemProps> = (args) => <BudgetTable {...args} />;

export const Primary = Template.bind({});
const question: Question = {
  text: "Question",
  answer: "1.5",
  questionType: QuestionType.HORIZONTAL_EQUATION,
  budgetCostModel: [],
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
