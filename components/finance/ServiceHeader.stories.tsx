import React from "react";
import { Story, Meta } from "@storybook/react";

import { ServiceHeader, ServiceHeaderProps } from "./ServiceHeader";

export default {
  title: "Finance/ServiceHeader",
  component: ServiceHeader,
} as Meta;

const Template: Story<ServiceHeaderProps> = (args) => (
  <ServiceHeader {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  mainHeader: "Buy TV & Internet Service",
  imgHeader: "/images/gold__coins.jpeg",
  subHeader:
    "You can buy TV & Internet service; however you are not required to buy it. Your expenses go in section 5 of your recording sheet.",
};
