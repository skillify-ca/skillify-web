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
  step1: { text: "47 + 59 + 33 = 59 + 47 + 33", id: "47" },
  step2: { text: "= 59 + (47 + 33)", id: "47" },
  step3: { text: "= 59 + 80", id: "80" },
};