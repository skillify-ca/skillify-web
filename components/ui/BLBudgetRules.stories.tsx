import React from "react";
import { Story, Meta } from "@storybook/react";

import BLBudgetRules, {RulesProps } from "./BLBudgetRules";

export default {
  title: "UI/BLBudgetRules",
  component: BLBudgetRules,
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

const Template: Story<RulesProps> = (args) => <BLBudgetRules {...args}/>;

export const Primary = Template.bind({});
Primary.args = {
  size: "large",
  bgColour: "Blue",
  image: "Protoss",
};
