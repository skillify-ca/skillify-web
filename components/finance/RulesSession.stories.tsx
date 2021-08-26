import React from "react";
import { Story, Meta } from "@storybook/react";

import { RulesSession } from "./RulesSession";

export default {
  title: "finance/RulesSession",
  component: RulesSession,
  argTypes: {},
} as Meta

const Template: Story = (args) => (
  <RulesSession {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};