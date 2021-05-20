import React from "react";
import { Story, Meta } from "@storybook/react";

import {
  MultiplicationEqualGroups,
  MultiplicationEqualGroupsProp,
} from "./MultiplicationEqualGroups";

export default {
  title: "Multiplication Equal Groups",
  component: MultiplicationEqualGroups,
  argTypes: {},
} as Meta;

const Template: Story<MultiplicationEqualGroupsProp> = (args) => (
  <MultiplicationEqualGroups {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  question: { text: "2 x 5", image: "/ArrayQ/2X3.png" },
};
