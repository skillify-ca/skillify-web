import React from "react";
import { Story, Meta } from "@storybook/react";
import {
  WordtoHorizontalDigits,
  WordtoHorizontalDigitsProp,
} from "./WordtoHorizontalDigits";

export default {
  title: "Word to Horizontal Digits",
  component: WordtoHorizontalDigits,
  argTypes: {},
} as Meta;

const Template: Story<WordtoHorizontalDigitsProp> = (args) => (
  <WordtoHorizontalDigits {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  numString: "three thousand seven hundred sixty nine",
  answer: [3, 7, 6, 9],
};
