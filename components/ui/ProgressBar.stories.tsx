import { Meta, Story } from "@storybook/react";
import React from "react";
import ProgressBar, { ProgressBarProps } from "./ProgressBar";

export default {
  title: "coding/ProgressBar",
  component: ProgressBar,
  argTypes: {},
} as Meta;

const Template: Story<ProgressBarProps> = (args) => <ProgressBar {...args} />;

export const Primary = Template.bind({});
