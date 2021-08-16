import React from "react";
import { Story, Meta } from "@storybook/react";

import { NumberComparison, NumberComparisonProp } from "./numberComparison";

export default {
  title: "Number Comparison",
  component: NumberComparison,
  argTypes: {},
} as Meta;

const Template: Story<NumberComparisonProp> = (args) => (
  <NumberComparison {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  val1: 1,
  val2: 8,
  answer: "8",
};
