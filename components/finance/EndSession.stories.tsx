import React from "react";
import { Story, Meta } from "@storybook/react";

import { EndSession } from "./EndSession";

export default {
    title: "finance/EndSession",
    component: EndSession,
    argTypes: {},
} as Meta

const Template: Story = (args) => (
    <EndSession {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};