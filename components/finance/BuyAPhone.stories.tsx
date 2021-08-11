import React from "react";
import { Story, Meta } from "@storybook/react";

import { BuyAPhone, BuyAPhoneProps } from "./BuyAPhone";
export default {
  title: "Finance/BuyAPhone",
  component: BuyAPhone,
} as Meta;

const Template: Story<BuyAPhoneProps> = (args) => <BuyAPhone {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
