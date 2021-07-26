import React from "react";
import { Story, Meta } from "@storybook/react";

import Brian, { BrianProps } from "./brian";

export default {
  title: "UI/Brian",
  component: Brian,
  argTypes: {
    bgColour: {
      control: {
        type: "radio",
        options: ["small", "large"],
      },  
    bgColour: {
      control:{
        type:"radio",
        options: ["Blue","Red"],
      },
    },
    image: {
      control:{
        type:"radio",
        options: ["Protoss","Zerg", "Terran"],
      },
    },
  },
},
} as Meta;

const Template: Story<BrianProps> = (args) => <Brian {...args}/>;

export const Primary = Template.bind({});
Primary.args = {
  size: "large",
  bgColour: "Blue",
  image: "Protoss",
};
