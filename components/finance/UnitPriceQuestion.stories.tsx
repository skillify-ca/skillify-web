import React from "react";
import { Story, Meta } from "@storybook/react";

import { UnitPriceModel } from "../../pages/api/question";
import { UnitPriceQuestion };
import { UnitPriceQuestionProps } from "./UnitPriceQuestion";
import { Question } from "../../../pages/api/question";
import { QuestionType } from "../../../pages/api/questionTypes";

import { LongDivision } from "../questionTypes/LongDivision";

export default {
  title: "math/Unit Price",
  component: <UnitPriceQuestion>,
  argTypes: {},
} as Meta;

const Template: Story<UnitPriceQuestion> = (args) => <UnitPriceQuestion {...args} />;

export const Primary = Template.bind({});
const question: Question = {
  text: "Question",
  answer: "1000/10",
  questionType: QuestionType.FINANCE_UNIT_PRICE_PROBLEM,
};
Primary.args = {
  unitPriceModel: {
    total: 1000,
    numberOfObjects: 10,
    name: "George",
    singularFruit: "banana",
    pluralFruit: "bananas",
    image: picture of banana
  
  tip: 20,
  question,
};;