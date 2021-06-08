import React from "react";
import { Story, Meta } from "@storybook/react";
import { FillBlank, FillBlankProp } from "./FillBlank";

export default {
  title: "Fill in the Blanks",
  component: FillBlank,
  argTypes: {},
} as Meta;

const Template: Story<FillBlankProp> = (args) => <FillBlank {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  displayQuestion: "Fill in the blanks",
  step1: "47 + 59 + 33 = 59 + 47 + 33",
  step2: "= 59 + (47 + 33)",
  step3: "= 59 + 80",
  answer: "47,47,80,139",
};
