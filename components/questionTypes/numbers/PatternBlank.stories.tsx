import React from "react";
import { Story, Meta } from "@storybook/react";
import { PatternBlank, PatternBlankProp } from "./PatternBlank";
import Card from "../../ui/Card";

export default {
  title: "Pattern Blanks",
  component: PatternBlank,
  argTypes: {},
} as Meta;

const Template: Story<PatternBlankProp> = (args) => (
  <Card size="large">
    <PatternBlank {...args} />
  </Card>
);

export const Primary = Template.bind({});
Primary.args = {
  displayQuestion: "Count backwards by 5 from 47",
  startNumber: "47",
  answer: "47,47,80,139",
};
