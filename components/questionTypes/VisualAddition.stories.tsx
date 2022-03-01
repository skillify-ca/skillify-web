import React from "react";
import { Story, Meta } from "@storybook/react";

import Card from "../ui/Card";
import { VisualAddition, VisualAdditionProp } from "./VisualAddition";

export default {
  title: "math/Visual Addition",
  component: VisualAddition,
  argTypes: {},
} as Meta;

const Template: Story<VisualAdditionProp> = (args) => (
  <Card size="large">
    <VisualAddition {...args} />
  </Card>
);

export const Primary = Template.bind({});
Primary.args = {
  question: { text: "2 + 2" },
};
