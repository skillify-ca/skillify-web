import React from "react";
import { Story, Meta } from "@storybook/react";

import {
  MultiplicationEqualGroups,
  MultiplicationEqualGroupsProp,
} from "./MultiplicationEqualGroups";
import Card from "./Card";

export default {
  title: "Multiplication Equal Groups",
  component: MultiplicationEqualGroups,
  argTypes: {},
} as Meta;

const Template: Story<MultiplicationEqualGroupsProp> = (args) => (
  <Card size="large">
    <MultiplicationEqualGroups {...args} />
  </Card>
);

export const Primary = Template.bind({});
Primary.args = {
  question: { text: "2 x 5" },
};
