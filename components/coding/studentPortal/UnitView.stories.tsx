import React from "react";
import { Story, Meta } from "@storybook/react";
import UnitNodeView, { UnitNodeViewProps } from "./UnitNodeView";
import UnitView, { UnitViewProps } from "./UnitView";

export default {
  title: "coding/Unit View",
  component: UnitView,
  argTypes: {},
} as Meta;

const Template: Story<UnitViewProps> = (args) => <UnitView {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  data: {
    title: "Level 1 - HTML",
    nodes: [
      {
        title: "Lesson",
        description: "What is HTML?",
        locked: false,
        completed: true,
      },
      {
        title: "Quiz",
        description: "What is HTML?",
        locked: false,
        completed: true,
      },
      {
        title: "Assignment",
        description: "What is HTML?",
        locked: false,
        completed: true,
      },
    ],
  },
};
