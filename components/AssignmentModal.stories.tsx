import React from "react";
import { Story, Meta } from "@storybook/react";

import { ErrorModal, ErrorModalProps } from "./ErrorModal";
export default {
  title: "UI/ErrorModal",
  component: ErrorModal,
  argTypes: {},
} as Meta;

const Template: Story<ErrorModalProps> = (args) => <ErrorModal {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
