import React from "react";
import { Story, Meta } from "@storybook/react";
import BalanceBudget, { BalanceBudgetProps } from "./BalanceBudgetTable";

export default {
  title: "Balance Budget Table",
  component: BalanceBudget,
  argTypes: {},
} as Meta;

const Template: Story<BalanceBudgetProps> = (args) => <BalanceBudget {...args} />;


export const Primary = Template.bind({});
Primary.args = {
  name: "",
};

