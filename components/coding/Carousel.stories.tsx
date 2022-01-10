import React from "react";
import { Story, Meta } from "@storybook/react";

import { Carousel, CarouselProp } from "../coding/Carousel";

export default {
  title: "coding/Carousel",
  component: Carousel,
  argTypes: {},
} as Meta;

const Template: Story<CarouselProp> = (args) => <Carousel {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
