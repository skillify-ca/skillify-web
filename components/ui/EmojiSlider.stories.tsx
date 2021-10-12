import React from "react";
import { Story, Meta } from "@storybook/react";
import EmojiSlider from "./EmojiSlider";

export default {
  title: "UI/Emoji Slider",
  component: EmojiSlider,
  argTypes: {},
} as Meta;

const Template: Story = (args) => (
  <EmojiSlider
    callback={() => {
      // empty
    }}
  />
);

export const Primary = Template.bind({});
Primary.args = {};
