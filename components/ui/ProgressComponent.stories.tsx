import { Meta, Story } from "@storybook/react";
import ProgressComponent, { ProgressComponentProps } from "./ProgressComponent";

export default {
  title: "UI/Progress",
  component: ProgressComponent,
} as Meta;

const Template: Story<ProgressComponentProps> = (args) => (
  <ProgressComponent {...args}></ProgressComponent>
);

export const Primary = Template.bind({});
Primary.args = {
  elapsedDays: 15,
  totalTrialDays: 30,
};
