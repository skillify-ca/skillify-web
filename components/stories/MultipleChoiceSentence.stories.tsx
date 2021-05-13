import React from "react";
import { Story, Meta } from "@storybook/react";
import { AdditionProperty } from "./MultipleChoiceTypes";

import {
  MultipleChoiceSentence,
  MultipleChoiceSentenceProp,
} from "./MultipleChoiceSentence";

export default {
  title: "Multiple Choice Sentence",
  component: MultipleChoiceSentence,
  argTypes: {},
} as Meta;

const Template: Story<MultipleChoiceSentenceProp> = (args) => (
  <MultipleChoiceSentence {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  displayQuestion: "Which Equation Shows the Associative Property of Addition?",
  option1: { text: "3 + 2 = 2 + 3", id: "a" },
  option2: { text: "(3 + 5) + 2 = 3 + (5 + 2)", type: "b" },
  option3: { text: "2 + 0 = 2", type: "c" },
  option4: { text: "2 + 1 = 1 + 2", type: "d" },
  answer: AdditionProperty.ASSOCIATIVE,
};
