import React from "react";
import { Story, Meta } from "@storybook/react";
import CreditDebitInfo, { CreditDebitInfoProps } from "./CreditDebitInfo";

export default {
  title: "Credit Card Debit Card Info",
  component: CreditDebitInfo,
  argTypes: {},
} as Meta;

const Template: Story<CreditDebitInfoProps> = (args) => (
  <CreditDebitInfo {...args} />
);

export const Primary = Template.bind({});
Primary.args = { value: 8 };
