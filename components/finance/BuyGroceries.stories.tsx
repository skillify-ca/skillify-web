import React from "react";
import { Story, Meta } from "@storybook/react";

import { BuyGroceries, BuyGroceriesProps } from "./BuyGroceries";
export default {
  title: "Finance/BuyGroceries",
  component: BuyGroceries,
} as Meta;

const Template: Story<BuyGroceriesProps> = (args) => <BuyGroceries {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
