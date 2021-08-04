import React from "react";
import { Story, Meta } from "@storybook/react";

import BudgetRules from "./BudgetRules";

export default {
  title: "finance/BudgetRules",
  component: BudgetRules,
  argTypes: {},
} as Meta;

const Template: Story = (args) => <BudgetRules {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
