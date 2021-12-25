import { Story, Meta } from "@storybook/react";
import React from "react";
import { Provider } from "react-redux";
import {
  EvaluateExpressionState,
  Stage,
} from "../../redux/evaluateExpressionSlice";
import store from "../../redux/store";

import EvaluateExpression, {
  EvaluateExpressionProps,
} from "./EvaluateExpression";

export default {
  title: "coding/EvaluateExpression",
  component: EvaluateExpression,
  argTypes: {},
} as Meta;

const state: EvaluateExpressionState[] = [
  {
    currentIndex: 0,
    inputExpression: "2+4",
    valueStack: [],
    operatorStack: [],
    stage: Stage.POPULATING_STACK,
    message: "Step",
  },
];

const Template: Story<EvaluateExpressionProps> = (args) => (
  <Provider store={store}>
    <EvaluateExpression stateHistory={state} {...args} />
  </Provider>
);

export const Primary = Template.bind({});
Primary.args = {
  state,
};
