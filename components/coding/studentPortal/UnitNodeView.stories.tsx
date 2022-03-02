import React from "react";
import { Story, Meta } from "@storybook/react";
import UnitNodeView, { UnitNodeViewProps } from "./UnitNodeView";

export default {
  title: "coding/Unit Node View",
  component: UnitNodeView,
  argTypes: {},
} as Meta;

const Template: Story<UnitNodeViewProps> = (args) => <UnitNodeView {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: "Lesson",
  description: "What is HTML?",
  locked: false,
  completed: true,
};
