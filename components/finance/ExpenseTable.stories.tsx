import React from "react";
import { Story, Meta } from "@storybook/react";

import BudgetRules from "./ExpenseTable";
import ExpenseTable from "./ExpenseTable";

export default {
  title: "finance/ExpenseTable",
  component: ExpenseTable,
  argTypes: {},
} as Meta;

const Template: Story = (args) => <ExpenseTable {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
