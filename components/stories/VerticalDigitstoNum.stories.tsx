import React from "react";
import { Story, Meta } from "@storybook/react";
import {
  VerticalDigitstoNum,
  VerticalDigitstoNumProp,
} from "./VerticalDigitstoNum";

export default {
  title: "Vertical Digits to Num",
  component: VerticalDigitstoNum,
  argTypes: {},
} as Meta;

const Template: Story<VerticalDigitstoNumProp> = (args) => (
  <VerticalDigitstoNum {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  numArr: [1, 2, 3],
  answer: 123,
};
