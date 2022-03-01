import React from "react";
import { Story, Meta } from "@storybook/react";

import {
  MultiplicationArray,
  MultiplicationArrayProp,
} from "./MultiplicationArray";

export default {
  title: "math/Multiplication Array",
  component: MultiplicationArray,
  argTypes: {},
} as Meta;

const Template: Story<MultiplicationArrayProp> = (args) => (
  <MultiplicationArray {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  question: { text: "10 x 10" },
  color: 0,
};
