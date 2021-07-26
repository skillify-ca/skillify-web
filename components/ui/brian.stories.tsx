import React from "react";
import { Story, Meta } from "@storybook/react";

import { Button, ButtonProps } from "../ui/Button";
import Brian, { BrianProps } from "./brian";

export default {
  title: "UI/Brian",
  component: Brian,
  argTypes: {
    size: {
      control: {
        type: "radio",
        options: ["small", "large"],
      },  
    bgColour: {
        control:{
          type:"radio",
          options: ["Blue","Red"]
        },
      },
    },
  },
} as Meta;

const Template: Story<BrianProps> = (args) => <Brian {...args}/>;

export const Primary = Template.bind({});
Primary.args = {
  size: "large",
  bgColour: "Blue",
};
