import React from "react";
import { Story, Meta } from "@storybook/react";
import {
  NumbertoVerticalDigits,
  NumbertoVerticalDigitsProp,
} from "./NumbertoVerticalDigits";

export default {
  title: "Number to Vertical Digits",
  component: NumbertoVerticalDigits,
  argTypes: {},
} as Meta;

const Template: Story<NumbertoVerticalDigitsProp> = (args) => (
  <NumbertoVerticalDigits {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  num: 91665,
  answer: [9, 1, 6, 6, 5],
};
