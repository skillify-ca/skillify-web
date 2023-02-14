import React from "react";
import { Story, Meta } from "@storybook/react";
import { ProgressBar, ProgressBarProps } from "./ProgressBar";

export default {
  title: "coding/ProgressBar",
  component: ProgressBar,
  argTypes: {},
} as Meta;

const Template: Story<ProgressBarProps> = (args) => <ProgressBar {...args} />;

export const Primary = Template.bind({});
