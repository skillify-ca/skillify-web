import React from "react";
import { Story, Meta } from "@storybook/react";

import { SurpriseComponent, SurpriseComponentProps } from "./SurpriseComponent";
export default {
  title: "Finance/SurpriseComponent",
  component: SurpriseComponent,
} as Meta;

const Template: Story<SurpriseComponentProps> = (args) => (
  <SurpriseComponent {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
