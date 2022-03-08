import React from "react";
import { Story, Meta } from "@storybook/react";

import { Sidebar, SidebarProps } from "./Sidebar";

export default {
  title: "coding/Sidebar",
  component: Sidebar,
  argTypes: {},
} as Meta;

const Template: Story<SidebarProps> = (args) => <Sidebar {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
