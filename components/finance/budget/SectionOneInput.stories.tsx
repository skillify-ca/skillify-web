import React from "react";
import { Story, Meta } from "@storybook/react";

import { SectionOneInput, SectionOneInputProps } from "./SectionOneInput";

export default {
  title: "Finance/SectionOneInput",
  component: SectionOneInput,
} as Meta;

const Template: Story<SectionOneInputProps> = (args) => (
  <SectionOneInput {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
