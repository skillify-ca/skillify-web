import React from "react";
import { Story, Meta } from "@storybook/react";
import TipQuestion, { TipQuestionProps } from "./TipQuestion";

export default {
  title: "Tip Question",
  component: TipQuestion,
  argTypes: {},
} as Meta;

const Template: Story<TipQuestionProps> = (args) => <TipQuestion {...args} />;


export const Primary = Template.bind({});
Primary.args = {
  tip: 20,
};

