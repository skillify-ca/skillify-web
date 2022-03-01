import React from "react";
import { Story, Meta } from "@storybook/react";
import { MissingNumSeq, MissingNumSeqProp } from "./MissingNumSeq";

export default {
  title: "math/Missing Number Sequence",
  component: MissingNumSeq,
  argTypes: {},
} as Meta;

const Template: Story<MissingNumSeqProp> = (args) => (
  <MissingNumSeq {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  numSeq: [1, 2, 3, 4, 5],
  answer: 3,
};
