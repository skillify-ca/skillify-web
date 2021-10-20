import React from "react";
import { Story, Meta } from "@storybook/react";
import BudgetTable from "./BudgetTable";

export default {
  title: "Budget Table",
  component: BudgetTable,
} as Meta;

const Template: Story = (args) => <BudgetTable {...args} />;


export const Primary = Template.bind({});
Primary.args = {};

