import React from "react";
import { Story, Meta } from "@storybook/react";

import { Button, ButtonProps } from "./Button";

export default {
  title: "UI/Button",
  component: Button,
  argTypes: {
    backgroundColor: {
      control: {
        type: "radio",
        options: ["blue", "green", "yellow", "purple", "red", "pink"],
      },
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  backgroundColor: "blue",
  label: "Button",
};
