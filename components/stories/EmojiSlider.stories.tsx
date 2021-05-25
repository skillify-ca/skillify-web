import React, { useEffect, useState } from "react";
import { Story, Meta } from "@storybook/react";
import EmojiSlider from "./EmojiSlider";

export default {
  title: "Emoji Slider",
  component: EmojiSlider,
  argTypes: {},
} as Meta;

const Template: Story = (args) => <EmojiSlider {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
