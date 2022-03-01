import React from "react";
import { Story, Meta } from "@storybook/react";
import { MultipleChoice, MultipleChoiceProp } from "./MultipleChoice";

export default {
  title: "questions/Multiple Choice",
  component: MultipleChoice,
  argTypes: {},
} as Meta;

const Template: Story<MultipleChoiceProp> = (args) => (
  <MultipleChoice {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  displayQuestion: "1+1",
  option1: { text: "2", id: "a" },
  option2: { text: "3", type: "b" },
  option3: { text: "4", type: "b" },
  answer: "2",
};
