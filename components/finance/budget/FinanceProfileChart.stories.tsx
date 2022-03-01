import React from "react";
import { Story, Meta } from "@storybook/react";

import {
  FinanceProfileChart,
  FinanceProfileChartProps,
} from "./FinanceProfileChart";

export default {
  title: "Finance/FinanceProfileChart",
  component: FinanceProfileChart,
} as Meta;

const Template: Story<FinanceProfileChartProps> = (args) => (
  <FinanceProfileChart {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  individualOccupation: "Construction Worker",
  individualSalary: "2578",
  maritalStatus: "Married",
  numberOfChildren: "0",
  spouseOccupation: "Car Salesman",
  spouseSalary: "2062",
};
