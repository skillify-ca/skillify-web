import React from "react";
import { Story, Meta } from "@storybook/react";

import {
  SingleQuestionInput,
  SingleQuestionInputProps,
} from "./SingleQuestionInput";

export default {
  title: "UI/SingleQuestionInput",
  component: SingleQuestionInput,
} as Meta;

const Template: Story<SingleQuestionInputProps> = (args) => (
  <SingleQuestionInput {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  question: "Are you married?",
};
