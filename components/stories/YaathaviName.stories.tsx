import React from "react";
import { Story, Meta } from "@storybook/react";
import YaathaviName, { YaathaviNameProps } from "./YaathaviName";

export default {
  title: "Ybutton",
  component: YaathaviName
} as Meta;

const Template: Story<YaathaviNameProps> = (args) => <YaathaviName {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  backgroundColor: "bg-blue-500",
  textColor: "purple",
};
