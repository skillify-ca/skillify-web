import React from "react";
import { Story, Meta } from "@storybook/react";
import DialogComponent, { DialogComponentProps } from "./DialogComponent";

export default {
  title: "UI/Dialog",
  component: DialogComponent,
} as Meta;

const Template: Story<DialogComponentProps> = (args) => (
  <DialogComponent {...args}>
    <div className="w-40 cursor-pointer">
      <p className="text-center">This is the Content.</p>
    </div>
  </DialogComponent>
);

export const Primary = Template.bind({});
Primary.args = {
  trigger: true,
  message: "Her's an extra message",
  link: "string/studentPortal",
  buttonLabel: "Click Me",
  header: "Here is the Header",
  triggerTitle: "This is the Trigger",
  size: "w-[90vw] h-[45vh]",
};
