import React from "react";
import { Story, Meta } from "@storybook/react";

import { WordProblem, WordProblemProp } from "./WordProblem";

export default {
  title: "Word Problem Simple",
  component: WordProblem,
  argTypes: {
  
  },
} as Meta;

const Template: Story<WordProblemProp> = (args) => <WordProblem {...args} />;


export const Primary = Template.bind({});
Primary.args = {
  question: "2 + 2",
  operator: "+"
};