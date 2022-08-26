import React from "react";
import { Story, Meta } from "@storybook/react";
import SalesTaxQuestion, { SalesTaxQuestionProps } from "./TipQuestion";
import { Question } from "../../../pages/api/question";
import { QuestionType } from "../../../pages/api/questionTypes";
import { generateKeyPair } from "crypto";
import { monthsToYears } from "date-fns";

export default {
  title: "finance/Sales Tax",
  component: SalesTaxQuestion,
  argTypes: {},
} as Meta;

const Template: Story<SalesTaxQuestionProps> = (args) => (
  <SalesTaxQuestion {...args} />
);

export const Primary = Template.bind({});
const question: Question = {
  text: "Question",
  answer: "1.50",
  questionType: QuestionType.FINANCE_TIP_PROBLEM,
};
Primary.args = {
  price: 1.0,
  numberOfToys: 10,
  taxRate: 15,
  question: text,
  personName: "Kari",
  multipleAnimals: "goat toys",
  image: "/images/goat.jpg",
};