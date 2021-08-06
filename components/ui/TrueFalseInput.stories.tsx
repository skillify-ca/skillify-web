import React from "react";
import { Story, Meta } from "@storybook/react";

import { TrueFalse, TrueFalseProps } from "./TrueFalseInput";

export default {
  title: "UI/TrueFalse",
  component: TrueFalse,
} as Meta;

const Template: Story<TrueFalseProps> = (args) => <TrueFalse {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  question: "Are you married?",
  option1: "Yes",
  option2: "No",
};
