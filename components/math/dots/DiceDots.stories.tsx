import React from "react";
import { Story, Meta } from "@storybook/react";
import DiceDots, { DiceDotsProps } from "./DiceDots";

export default {
  title: "Dots/Dice Dots",
  component: DiceDots,
  argTypes: {},
} as Meta;

const Template: Story<DiceDotsProps> = (args) => <DiceDots {...args} />;

export const Primary = Template.bind({});
Primary.args = { value: 8 };
