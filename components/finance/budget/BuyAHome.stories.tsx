import React from "react";
import { Story, Meta } from "@storybook/react";

import BuyAHome from "./BuyAHome";

export default {

    title: "finance/BuyAHome",
    component: BuyAHome,
    argtypes: {}

} as Meta

const Template: Story = (args) => <BuyAHome {...args} />;

export const Primary = Template.bind({});
Primary.args = {};




