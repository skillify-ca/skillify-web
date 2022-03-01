import React from "react";
import { Story, Meta } from "@storybook/react";

import {
  MultiplicationEqualGroups,
  MultiplicationEqualGroupsProp,
} from "./MultiplicationEqualGroups";
import Card from "../ui/Card";

export default {
  title: "math/Multiplication Equal Groups",
  component: MultiplicationEqualGroups,
  argTypes: {
    color: {
      control: {
        type: "number",
      },
    },
  },
} as Meta;

const Template: Story<MultiplicationEqualGroupsProp> = (args) => (
  <Card size="large">
    <MultiplicationEqualGroups {...args} />
  </Card>
);

export const Primary = Template.bind({});
Primary.args = {
  question: { text: "2 x 5" },
  color: 3,
};
