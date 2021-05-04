import React from "react";
import { Story, Meta } from "@storybook/react";

import { Button, ButtonProps } from "./Button";
import { LavanButton } from "./LavanButton";

export default {
  title: "Example/LButton",
  component: LavanButton,
  argTypes: {
    backgroundColor: {
      control: {
        type: "radio",
        options: ["blue", "green", "yellow", "purple", "red", "pink", "white"],
      },
      textColor: {
        type:"text",
      }
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <LavanButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  backgroundColor: "blue",
  label: "Button",
  textColor: "Text",
};
