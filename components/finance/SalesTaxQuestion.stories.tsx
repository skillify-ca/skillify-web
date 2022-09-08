import React from "react";
import { Story, Meta } from "@storybook/react";
import { QuestionType } from "../../pages/api/questionTypes";
import { Question } from "../../redux/quizSlice";
import SalesTaxQuestion, { SalesTaxQuestionProps } from "./SalesTaxQuestion";

export default {
  title: "finance/Sales Tax",
  component: SalesTaxQuestion,
  argTypes: {},
} as Meta;

const Template: Story<SalesTaxQuestionProps> = (args) => (
  <SalesTaxQuestion {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  price: 1.0,
  numberOfToys: 10,
  taxRate: 15,
  question: "text",
  personName: "Kari",
  multipleAnimals: "goat toys",
  image: "/images/goat.jpg",
};
