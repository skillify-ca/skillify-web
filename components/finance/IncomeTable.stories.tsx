import React from "react";
import { Story, Meta } from "@storybook/react";

import BudgetRules, { incomeTableProps } from "./IncomeTable";
import ExpenseTable from "./IncomeTable";
import IncomeTable from "./IncomeTable";
import { values } from "lodash";

export default {
  title: "finance/IncomeTable",
  component: IncomeTable,
  argTypes: {},
} as Meta;

const Template: Story<incomeTableProps> = (args) => <IncomeTable {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
