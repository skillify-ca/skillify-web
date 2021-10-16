import React from "react";
import { Story, Meta } from "@storybook/react";

import { TvChart } from "./TvChart";
export default {
  title: "Finance/TvChart",
  component: TvChart,
} as Meta;

const Template: Story = (args) => <TvChart {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
