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
  option1: "3 + 2 = 2 + 3",
  option2: "(3 + 5) + 2 = 3 + (5 + 2)",
  option3: "2 + 0 = 2",
  option4: "2 + 1 = 1 + 2",
  answer: MCType.ASSOCIATIVE,
};
