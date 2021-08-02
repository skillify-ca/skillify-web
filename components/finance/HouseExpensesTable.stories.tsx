import React from "react";
import { Story, Meta } from "@storybook/react";

import HouseExpensesTable from "./HouseExpensesTable";

export default {

    title: "finance/HouseExpensesTable",
    component: HouseExpensesTable,
    argtypes: {}

} as Meta

const Template: Story = (args) => <HouseExpensesTable {...args}/>

export const Primary = Template.bind({});
Primary.args = {};
