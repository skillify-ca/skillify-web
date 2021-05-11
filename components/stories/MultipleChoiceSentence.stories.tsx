import React from "react";
import { Story, Meta } from "@storybook/react";
import { MCType } from "./MultipleChoiceTypes";

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
  displayQuestion: "Which Equation Shows the Associative Property",
  option1: { question: "3 + 2 = 2 + 3", type: null },
  option2: { question: "(3 + 5) + 2 = 3 + (5 + 2)", type: null },
  option3: { question: "2 + 0 = 2", type: null },
  option4: { question: "2 + 1 = 1 + 2", type: null },
  answer: MCType.ASSOCIATIVE,
};
