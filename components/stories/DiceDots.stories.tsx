import React, { useEffect, useState } from "react";
import { Story, Meta } from "@storybook/react";
import TenFrame from "./tenFrame";
import DiceDots, { DiceDotsProps } from "./DiceDots";

export default {
  title: "Dice Dots",
  component: DiceDots,
  argTypes: {},
} as Meta;

const Template: Story<DiceDotsProps> = (args) => <DiceDots {...args} />;

export const Primary = Template.bind({});
Primary.args = { value: 1 };
