import React from "react";
import { Story, Meta } from "@storybook/react";
import DualColourDots, { DualColourProps } from "./DualColourDots";

export default {
  title: "Dual Colour Dots",
  component: DualColourDots,
  argTypes: {},
} as Meta;

const Template: Story<DualColourProps> = (args) => <DualColourDots {...args} />;

export const Primary = Template.bind({});
Primary.args = { value: 10 };
