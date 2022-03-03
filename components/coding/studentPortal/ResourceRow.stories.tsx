import React from "react";
import { Story, Meta } from "@storybook/react";
import ResourceRow, { ResourceRowProps } from "./ResourceRow";

export default {
  title: "coding/Resource Row",
  component: ResourceRow,
  argTypes: {},
} as Meta;

const Template: Story<ResourceRowProps> = (args) => <ResourceRow {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: "W3Schools HTML tutorial",
  description:
    "A good starting tutorial is the W3Schools website. Start at the beginning and stop after you complete the Lists section.",
  disabled: false,
};
export const Disabled = Template.bind({});
Disabled.args = {
  title: "W3Schools HTML tutorial",
  description:
    "A good starting tutorial is the W3Schools website. Start at the beginning and stop after you complete the Lists section.",
  disabled: true,
};
