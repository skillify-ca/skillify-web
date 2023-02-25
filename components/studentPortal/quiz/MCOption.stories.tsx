import React from "react";
import { Story, Meta } from "@storybook/react";
import MCOption, { MCOptionProps, OptionState } from "./MCOption";

export default {
  title: "coding/quiz/MCOption",
  component: MCOption,
  argTypes: {},
} as Meta;

const Template: Story<MCOptionProps> = (args) => <MCOption {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: "Level 1 - HTML",
  state: OptionState.DEFAULT,
};
