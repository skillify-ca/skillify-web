import React from "react";
import { Story, Meta } from "@storybook/react";
import { Pill, PillProps } from "./Pill";

export default {
  title: "coding/Pill",
  component: Pill,
  argTypes: {},
} as Meta;

const Template: Story<PillProps> = (args) => <Pill {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: "Level 1 - HTML",
};
