import React from "react";
import { Story, Meta } from "@storybook/react";

import { BuyAPhone } from "./BuyAPhone";
export default {
  title: "Finance/BuyAPhone",
  component: BuyAPhone,
} as Meta;

const Template: Story = (args) => <BuyAPhone {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
