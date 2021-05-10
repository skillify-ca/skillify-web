import React from "react";
import { Story, Meta } from "@storybook/react";

import { WordProblemAdd, WordProblemAddProp } from "./WordProblemAdd";

export default {
  title: "Word Problem Simple",
  component: WordProblemAdd,
  argTypes: {
  
  },
} as Meta;

const Template: Story<WordProblemAddProp> = (args) => <WordProblemAdd {...args} />;


export const Primary = Template.bind({});
Primary.args = {
  question: "2 + 2",
  operator: "+"
};