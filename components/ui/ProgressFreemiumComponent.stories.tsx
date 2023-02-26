import { Meta, Story } from "@storybook/react";
import ProgressFreemiumComponent, {
  ProgressFreemiumComponentProps,
} from "./ProgressFreemiumComponent";
import React from "react";

export default {
  title: "UI/Progress",
  component: ProgressFreemiumComponent,
} as Meta;

const Template: Story<ProgressFreemiumComponentProps> = (args) => (
  <ProgressFreemiumComponent {...args}></ProgressFreemiumComponent>
);

export const Primary = Template.bind({});
Primary.args = {
  elapsedDays: 15,
  totalTrialDays: 30,
};
