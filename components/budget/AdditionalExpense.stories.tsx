import Reach from "react";
import { Story, Meta } from "@storybook/react";

import AdditionaExpense from "./AdditionalExpense";
import AdditionalTable from "./AdditionalExpense";

export default {
  title: "finance/AdditionalExpenseTable",
  component: AdditionaExpense,
  argTypes: {},
} as Meta;

const Template: Story = (args) => (
  <AdditionalTable {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
