import React from "react";
import { Story, Meta } from "@storybook/react";
import { Coin, CoinProp } from "./Coin";

export default {
  title: "finance/Coin",
  component: Coin,
  argTypes: {},
} as Meta;

const Template: Story<CoinProp> = (args) => <Coin {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
