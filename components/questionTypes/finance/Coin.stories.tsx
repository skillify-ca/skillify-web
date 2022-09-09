import React from "react";
import { Story, Meta } from "@storybook/react";
import { Coin, CoinProp, CoinType } from "./Coin";

export default {
  title: "finance/Coin",
  component: Coin,
  argTypes: {
    coinType: {
      options: [0, 1, 2, 3, 4, 5], // iterator
      mapping: [
        CoinType.PENNY,
        CoinType.NICKEL,
        CoinType.DIME,
        CoinType.QUARTER,
        CoinType.LOONIE,
        CoinType.TOONIE,
      ], // values
      control: {
        type: "select",
        labels: ["Penny", "Nickel", "Dime", "Quarter", "Loonie", "Toonie"],
      },
    },
  },
} as Meta;

const Template: Story<CoinProp> = (args) => <Coin {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  coinType: CoinType.PENNY,
};
