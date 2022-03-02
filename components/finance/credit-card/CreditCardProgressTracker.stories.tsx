import React from "react";
import { Story, Meta } from "@storybook/react";

import CreditCardProgressTracker, {
  CreditCardProgressTrackerProps,
} from "./CreditCardProgressTracker";

export default {
  title: "finance/Credit Card Progress Tracker",
  component: CreditCardProgressTracker,
  argTypes: {},
} as Meta;

const Template: Story<CreditCardProgressTrackerProps> = (args) => (
  <CreditCardProgressTracker {...args} />
);

export const Primary = Template.bind({});
Primary.args = { score: 8, total: 12 };
