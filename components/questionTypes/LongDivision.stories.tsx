import React from "react";
import { Story, Meta } from "@storybook/react";

import { VerticalEquation, VerticalEquationProp } from "./VerticalEquation";
import { LongDivision, LongDivisionProp } from "./LongDivision";

export default {
  title: "math/Long Division",
  component: LongDivision,
  argTypes: {},
} as Meta;

const Template: Story<LongDivisionProp> = (args) => <LongDivision {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  question: { text: "1000 / 20" },
};
