import React from "react";
import { Story, Meta } from "@storybook/react";

import { UnitItem, UnitItemProps } from "./UnitItem";

export default {
  title: "UI/UnitItem",
  component: UnitItem,
  argTypes: {
    disabled: {
      control: {
        type: "radio",
        options: [true, false],
      },
    },
  },
} as Meta;

const Template: Story<UnitItemProps> = (args) => <UnitItem {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: "Addition",
};

export const Disabled = Template.bind({});
Disabled.args = {
  title: "Addition",
  disabled: true
};

export const WithRating = Template.bind({});
WithRating.args = {
  title: "Addition",
  rating: 3
};
