import React from "react";
import { Story, Meta } from "@storybook/react";

import BudgetRules from "./IncomeTable";
import ExpenseTable from "./IncomeTable";
import IncomeTable from "./IncomeTable";

export default {
  title: "finance/ExpenseTable",
  component: IncomeTable,
  argTypes: {},
} as Meta;

const Template: Story = (args) => <IncomeTable {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
