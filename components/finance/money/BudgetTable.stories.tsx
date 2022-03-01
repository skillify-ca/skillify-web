import React from "react";
import { Story, Meta } from "@storybook/react";
import BudgetTable, { BudgetItemProps } from "./BudgetTable";

export default {
  title: "finance/Budget Table",
  component: BudgetTable,
  argTypes: {},
} as Meta;

const Template: Story<BudgetItemProps> = (args) => <BudgetTable {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  budget: 1.5,
};
