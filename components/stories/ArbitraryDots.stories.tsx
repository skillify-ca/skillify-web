import React, { useEffect, useState } from "react";
import { Story, Meta } from "@storybook/react";
import ArbitraryDots, { ArbitraryDotsProps } from "./ArbitraryDots";

export default {
  title: "Arbitrary Dots",
  component: ArbitraryDots,
  argTypes: {},
} as Meta;

const Template: Story<ArbitraryDotsProps> = (args) => (
  <ArbitraryDots {...args} />
);

export const Primary = Template.bind({});
Primary.args = { value: 8 };
