import React from "react";
import { Story, Meta } from "@storybook/react";

import { VerticalEquation, VerticalEquationProp } from "./VerticalEquation";

export default {
  title: "Vertical Equation",
  component: VerticalEquation,
  argTypes: {},
} as Meta;

const Template: Story<VerticalEquationProp> = (args) => (
  <VerticalEquation {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  question: "2 + 2",
  operator: "+",
};
