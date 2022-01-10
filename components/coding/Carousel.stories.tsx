import React from "react";
import { Story, Meta } from "@storybook/react";

import { Carousel, CarouselProp } from "../coding/Carousel";

export default {
  title: "coding/Carousel",
  component: Carousel,
  argTypes: {
    backgroundColor: {
      control: {
        type: "radio",
        options: ["blue", "green", "yellow", "purple", "red", "pink"],
      },
    },
  },
} as Meta;

const Template: Story<CarouselProp> = (args) => <Carousel {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  backgroundColor: "blue",
  label: "Carousel",
};
