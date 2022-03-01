import React from "react";
import { Story, Meta } from "@storybook/react";

import { TrueorFalse, TrueorFalseProp } from "./TrueorFalse";

export default {
  title: "questions/True or False",
  component: TrueorFalse,
  argTypes: {},
} as Meta;

const Template: Story<TrueorFalseProp> = (args) => <TrueorFalse {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  question: { text: "3 + 3 = 6" },
  answer: true,
};
