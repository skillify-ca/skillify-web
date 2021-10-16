import React from "react";
import { Story, Meta } from "@storybook/react";

import {
  MultipleChoiceWord,
  MultipleChoiceWordProp,
} from "./MultipleChoiceWord";

export default {
  title: "Multiple Choice Word",
  component: MultipleChoiceWord,
  argTypes: {},
} as Meta;

const Template: Story<MultipleChoiceWordProp> = (args) => (
  <MultipleChoiceWord
    answer={args.answer}
    options={args.options}
    submitGuess={() => {
      // empty function
    }} 
  >
    <h1>Which Property of Addition is Shown?</h1>
    <p>3 + 2 = 2 + 3</p>
  </MultipleChoiceWord>
);

export const Primary = Template.bind({});
Primary.args = {
  answer: "3",
  options: [
    { id: "Associative", text: "Associative" },
    { id: "Commutative", text: "Commutative" },
    { id: "Identity", text: "Identity" },
  ],
};
