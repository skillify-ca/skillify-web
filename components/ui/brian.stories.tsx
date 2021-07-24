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
    },
  },
} as Meta;

const Template: Story<BrianProps> = (args) => <Brian size= {args.size}>hello</Brian>; //hello is the child

export const Primary = Template.bind({});
Primary.args = {
  size: "large",
  //label: "Button",
};
