import React from "react";
import { Story, Meta } from "@storybook/react";
import { Input, InputProps } from "./Input";

export default {
  title: "UI/Input",
  component: Input,
  argTypes: {
    backgroundColor: {
      control: {
        type: "radio",
        options: ["blue", "green", "yellow", "purple", "red", "pink"],
      },
    },
  },
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
