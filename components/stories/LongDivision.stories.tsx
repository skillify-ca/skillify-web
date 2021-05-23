import React from "react";
import { Story, Meta } from "@storybook/react";

import { VerticalEquation, VerticalEquationProp } from "./VerticalEquation";
import { LongDivision, LongDivisionProp } from "./LongDivision";
import Card from "./Card";

export default {
  title: "Long Division",
  component: LongDivision,
  argTypes: {},
} as Meta;

const Template: Story<LongDivisionProp> = (args) => (
  <Card size="large">
    <LongDivision {...args} />
  </Card>
);

export const Primary = Template.bind({});

Primary.args = {
  question: { text: "1000 / 20" },
};
