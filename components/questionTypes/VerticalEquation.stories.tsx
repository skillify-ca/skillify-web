import React from "react";
import { Story, Meta } from "@storybook/react";

import { VerticalEquation, VerticalEquationProp } from "./VerticalEquation";
import Card from "../ui/Card";

export default {
  title: "Vertical Equation",
  component: VerticalEquation,
  argTypes: {},
} as Meta;

const Template: Story<VerticalEquationProp> = (args) => (
  <Card size="large">
    <VerticalEquation {...args} />
  </Card>
);

export const Primary = Template.bind({});
Primary.args = {
  question: { text: "2 + 2" },
  operator: "+",
};
