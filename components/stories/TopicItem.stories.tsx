import React from "react";
import { Story, Meta } from "@storybook/react";

import { TopicItem, TopicItemProps } from "./TopicItem";

export default {
  title: "UI/TopicItem",
  component: TopicItem,
  argTypes: {
    disabled: {
      control: {
        type: "radio",
        options: [true, false],
      },
    },
  },
} as Meta;

const Template: Story<TopicItemProps> = (args) => <TopicItem {...args} />;

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
