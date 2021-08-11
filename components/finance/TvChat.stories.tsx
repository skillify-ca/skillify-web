import React from "react";
import { Story, Meta } from "@storybook/react";

import { TvChart, TvChartProps } from "./TvChart";
export default {
  title: "Finance/TvChart",
  component: TvChart,
} as Meta;

const Template: Story<TvChartProps> = (args) => <TvChart {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
