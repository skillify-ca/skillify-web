import React from "react";
import { Story, Meta } from "@storybook/react";

import BuyACar, { BuyACarProps } from "./BuyACar";

export default {
  title: "finance/BuyACar",
  component: BuyACar,
  argTypes: {},
} as Meta;

const Template: Story<BuyACarProps> = (args) => <BuyACar {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
