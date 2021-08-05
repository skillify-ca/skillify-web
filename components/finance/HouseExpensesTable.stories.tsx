import React from "react";
import { Story, Meta } from "@storybook/react";

import HouseExpensesTable, { HouseExpensesProps } from "./HouseExpensesTable";

export default {

    title: "finance/HouseExpensesTable",
    component: HouseExpensesTable,
    argtypes: {}

} as Meta

const Template: Story<HouseExpensesProps> = (args) => <HouseExpensesTable{...args}/>

export const Primary = Template.bind({});
Primary.args = {};
