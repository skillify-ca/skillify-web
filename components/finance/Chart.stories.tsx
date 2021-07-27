import React from "react";
import { Story, Meta } from "@storybook/react";

import  {Chart, ChartProps} from "../finance/Chart"

export default {
  title: "UI/Chart",
  component: Chart,
  
} as Meta;

const Template: Story<ChartProps> = (args) => <Chart {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  individualOccupation: "Construction Worker",
    individualSalary: "2578",
    maritalStatus: "Married",
    numberOfChildren: "0",
    spouseOccupation: "Car Salesman",
    spouseSalary: "2062",
};
