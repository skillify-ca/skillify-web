import React from "react";
import { Story, Meta } from "@storybook/react";

import {
  MultipleChoiceWord,
  MultipleChoiceWordProp,
} from "./MultipleChoiceWord";

export default {
  title: "Multiple Choice Word",
  component: MultipleChoiceWord,
  argTypes: {},
} as Meta;

const Template: Story<MultipleChoiceWordProp> = (args) => (
  <MultipleChoiceWord {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  displayQuestion: "Which Property of Addition is Shown?",
  question: { text: "3 + 2 = 2 + 3", id: "a" },
};
