import React from "react";
import { Story, Meta } from "@storybook/react";
import {
  WordtoHorizontalDigits,
  WordtoHorizontalDigitsProp,
} from "./WordtoHorizontalDigits";
import Card from "../../ui/Card";

export default {
  title: "math/Word to Horizontal Digits",
  component: WordtoHorizontalDigits,
  argTypes: {},
} as Meta;

const Template: Story<WordtoHorizontalDigitsProp> = (args) => (
  <Card size="large">
    <WordtoHorizontalDigits {...args} />
  </Card>
);

export const Primary = Template.bind({});
Primary.args = {
  numString: "three thousand seven hundred sixty nine",
  answer: [3, 7, 6, 9],
};
