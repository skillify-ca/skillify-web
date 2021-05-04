import React from "react";
import { Story, Meta } from "@storybook/react";

import { Button, ButtonProps } from "./Button";
import { HarriButton } from "./harributton";

export default {
  title: "Example/HButton",
  component: HarriButton,
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

const Template: Story<ButtonProps> = (args) => <HarriButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  backgroundColor: "blue",
  label: "Button",
  textColor: "Text",
};