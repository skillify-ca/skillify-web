import React from "react";
import { Story, Meta } from "@storybook/react";

import BuyACar from "./BuyACar";

export default {
  title: "finance/BuyACar",
  component: BuyACar,
  argTypes: {},
} as Meta;

const Template: Story = (args) => <BuyACar {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
