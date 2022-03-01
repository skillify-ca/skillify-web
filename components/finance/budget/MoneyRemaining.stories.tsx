import React from "react";
import { Story, Meta } from "@storybook/react";

import MoneyRemainingTable, {
  MoneyRemainingTableProps,
} from "./MoneyRemaining";

export default {
  title: "finance/MoneyRemainingTable",
  component: MoneyRemainingTable,
  argTypes: {},
} as Meta;

const Template: Story<MoneyRemainingTableProps> = (args) => (
  <MoneyRemainingTable {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
