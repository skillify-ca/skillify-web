import React from "react";
import { Story, Meta } from "@storybook/react";

import CarExpenseTable from "./CarExpenseTable";

export default {
  title: "finance/CarExpenseTable",
  component: CarExpenseTable,
  argTypes: {},
} as Meta;

const Template: Story = (args) => (
  <CarExpenseTable {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
