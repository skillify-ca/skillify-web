import React from "react";
import { Story, Meta } from "@storybook/react";

import Daniel, { DanielProps } from "./Daniel";

export default {
  title: "UI/Daniel",
  component: Daniel,
  argTypes: {
  },
} as Meta;

const Template: Story<DanielProps> = (args) => <Daniel {...args} />;

export const Primary = Template.bind({});

