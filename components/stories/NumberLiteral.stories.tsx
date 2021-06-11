import React, { useEffect, useState } from "react";
import { Story, Meta } from "@storybook/react";
import NumberLiteral from "./NumberLiteral";

export default {
  title: "Number Literal",
  component: NumberLiteral,
  argTypes: {},
} as Meta;

const Template: Story = (args) => <NumberLiteral {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
