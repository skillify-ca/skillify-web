import React from "react";
import { Story, Meta } from "@storybook/react";
import { PatternBlank, PatternBlankProp } from "./patternBlanks";

export default {
  title: "Pattern Blanks",
  component: PatternBlank,
  argTypes: {},
} as Meta;

const Template: Story<PatternBlankProp> = (args) => <PatternBlank {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  displayQuestion: "Count backwards by 5 from47",
  startNumber: "47",
  answer: "47,47,80,139",
};
