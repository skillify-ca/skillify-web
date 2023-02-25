import React from "react";
import { Story, Meta } from "@storybook/react";
import UnitNodeView, { UnitNodeViewProps } from "./UnitNodeView";

export default {
  title: "coding/Unit Node View",
  component: UnitNodeView,
  argTypes: {},
} as Meta;

const Template: Story<UnitNodeViewProps> = (args) => <UnitNodeView {...args} />;

export const Complete = Template.bind({});
Complete.args = {
  title: "Lesson",
  description: "What is HTML?",
  locked: false,
  completed: true,
};
export const ActiveLesson = Template.bind({});
ActiveLesson.args = {
  title: "HTML Lesson",
  description: "What is HTML?",
  locked: false,
  completed: false,
  type: "lesson",
};
export const ActiveQuiz = Template.bind({});
ActiveQuiz.args = {
  title: "HTML Quiz",
  description: "What is HTML?",
  locked: false,
  completed: false,
  type: "quiz",
};
export const ActiveAssignment = Template.bind({});
ActiveAssignment.args = {
  title: "HTML Assignment",
  description: "Create an HTML Blog",
  locked: false,
  completed: false,
  type: "assignment",
};

export const LockedLesson = Template.bind({});
LockedLesson.args = {
  title: "HTML Lesson",
  description: "What is HTML?",
  locked: true,
  completed: false,
  type: "lesson",
};
export const LockedQuiz = Template.bind({});
LockedQuiz.args = {
  title: "HTML Quiz",
  description: "What is HTML?",
  locked: true,
  completed: false,
  type: "quiz",
};
export const LockedAssignment = Template.bind({});
LockedAssignment.args = {
  title: "HTML Assignment",
  description: "Create an HTML Blog",
  locked: true,
  completed: false,
  type: "assignment",
};
