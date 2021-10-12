import React from "react";
import { Story, Meta } from "@storybook/react";

import { BuyGroceries } from "./BuyGroceries";
export default {
  title: "Finance/BuyGroceries",
  component: BuyGroceries,
} as Meta;

const Template: Story = (args) => <BuyGroceries {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
