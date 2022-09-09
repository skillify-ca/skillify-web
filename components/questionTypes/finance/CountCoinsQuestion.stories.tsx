import React from "react";
import { Story, Meta } from "@storybook/react";
import { CoinType } from "./Coin";
import { CountCoinsProps, CountCoinsQuestion } from "./CountCoinsQuestion";

export default {
  title: "finance/Count Coins Question",
  component: CountCoinsQuestion,
  argTypes: {},
} as Meta;

const Template: Story<CountCoinsProps> = (args) => (
  <CountCoinsQuestion {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  coins: [CoinType.PENNY, CoinType.PENNY, CoinType.PENNY],
};
