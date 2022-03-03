import React from "react";
import { Story, Meta } from "@storybook/react";

import { Button, ButtonProps } from "../ui/Button";

export default {
  title: "UI/Button",
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Button",
};
