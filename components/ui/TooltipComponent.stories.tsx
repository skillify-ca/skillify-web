import React from "react";
import { Story, Meta } from "@storybook/react";

import TooltipComponent, { TooltipComponentProps } from "./TooltipComponent";

export default {
  title: "UI/Tooltip",
  component: TooltipComponent,
} as Meta;

const Template: Story<TooltipComponentProps> = (args) => (
  <TooltipComponent {...args}>
    <div className="w-40 cursor-pointer">
      <p className="text-center border-2 border-charmander">Hover Me</p>
    </div>
  </TooltipComponent>
);

export const Primary = Template.bind({});
Primary.args = {
  message: "Hello World",
};
