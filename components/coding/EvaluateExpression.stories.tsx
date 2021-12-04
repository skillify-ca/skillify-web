import { Story, Meta } from "@storybook/react";
import React from "react";
import { Provider } from "react-redux";
import { Stage } from "../../redux/evaluateExpressionSlice";
import store from "../../redux/store";

import EvaluateExpression, {
  EvaluateExpressionProps,
} from "./EvaluateExpression";

export default {
  title: "coding/EvaluateExpression",
  component: EvaluateExpression,
  argTypes: {},
} as Meta;

const state = {
  currentIndex: 0,
  inputExpression: "2+4",
  valueStack: [],
  operatorStack: [],
  stage: Stage.POPULATING_STACK,
};

const Template: Story<EvaluateExpressionProps> = (args) => (
  <Provider store={store}>
    <EvaluateExpression state={state} {...args} />
  </Provider>
);

export const Primary = Template.bind({});
Primary.args = {
  state,
};
