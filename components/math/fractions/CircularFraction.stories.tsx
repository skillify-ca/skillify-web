import React from "react";
import { Story, Meta } from "@storybook/react";

import CircularFraction, { CircularFractionProps } from "./CircularFraction";
import Card from "../../ui/Card";

export default {
  title: "math/fractions/CircularFraction",
  component: CircularFraction,
  argTypes: {},
} as Meta;

const Template: Story<CircularFractionProps> = (args) => (
  <div>
    <Card size={"large"}>
      <CircularFraction {...args} />
    </Card>
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  values: [1, 2, 3],
};
