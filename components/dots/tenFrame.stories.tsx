import React, { useEffect, useState } from "react";
import { Story, Meta } from "@storybook/react";
import TenFrame, { TenFrameProp } from "./tenFrame";

export default {
  title: "Dots/Ten Frame",
  component: TenFrame,
  argTypes: {},
} as Meta;

const Template: Story<TenFrameProp> = (args) => <TenFrame {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  num: 6,
};
