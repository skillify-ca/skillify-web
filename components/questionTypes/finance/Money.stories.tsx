import React from "react";
import { Story, Meta } from "@storybook/react";
import { Money, MoneyProp } from "./Money";

export default {
  title: "Money",
  component: Money,
  argTypes: {},
} as Meta;

const Template: Story<MoneyProp> = (args) => <Money {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
