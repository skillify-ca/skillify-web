import React from "react";
import { Story, Meta } from "@storybook/react";

import TotalExpensesTable from "./TotalExpensesTable";

export default {

    title: "finance/TotalExpensesTable",
    component: TotalExpensesTable,
    argtypes: {}

} as Meta

const Template: Story = (args) => <TotalExpensesTable {...args} />

export const Primary = Template.bind({});
Primary.args = {};



