import React from "react";
import { Story, Meta } from "@storybook/react";

import { MultipleChoice, MultipleChoiceProp } from "./MultipleChoice";

export default {
  title: "Multiple Choice",
  component: MultipleChoice,
  argTypes: {},
} as Meta;

const Template: Story<MultipleChoiceProp> = (args) => (
  <MultipleChoice {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  question: "3 + 2 = 2 + 3 ",
};
