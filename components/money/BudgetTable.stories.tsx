import React from "react";
import { Story, Meta } from "@storybook/react";
import BudgetTable, { ItemProps } from "./BudgetTable";

export default {
  title: "Budget Table",
  component: BudgetTable,
  argTypes: {},
} as Meta;

const Template: Story<ItemProps> = (args) => <BudgetTable {...args} />;


export const Primary = Template.bind({});
Primary.args = {};

