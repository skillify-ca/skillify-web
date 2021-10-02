import React from "react";
import { Story, Meta } from "@storybook/react";

import { AssignmentModal, AssignmentModalProps } from "./AssignmentModal";
export default {
  title: "UI/AssignmentModal",
  component: AssignmentModal,
  argTypes: {},
} as Meta;

const Template: Story<AssignmentModalProps> = (args) => (
  <AssignmentModal {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
