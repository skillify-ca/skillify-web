import React from "react";
import { Story, Meta } from "@storybook/react";

import { TrueorFalse, TrueorFalseProp } from "./TrueorFalse";

export default {
    title: "True or False",
    component: TrueorFalse,
    argTypes: {
    
    },
  } as Meta;

  const Template: Story<TrueorFalseProp> = (args) => <TrueorFalse {...args} />;


export const Primary = Template.bind({});
Primary.args = { 
    question: "3 + 3 = ",
};