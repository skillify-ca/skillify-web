import React, { useEffect, useState } from "react";
import { Story, Meta } from "@storybook/react";
import TenFrame from "./tenFrame";

export default {
  title: "Ten Frame",
  component: TenFrame,
  argTypes: {},
} as Meta;

const Template: Story = (args) => <TenFrame {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
