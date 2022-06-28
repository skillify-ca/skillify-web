import { CheckCircleIcon } from "@heroicons/react/solid";
import { Meta, Story } from "@storybook/react";
import { format } from "date-fns";
import React, { useState } from "react";
import { UserGoalsData } from "../../../graphql/fetchUserGoals";
import { GoalsSectionHeader } from "../../../pages/api/goals/goalsHelpers";
import GoalsSectionComponent, {
  GoalsSectionProps,
} from "./GoalsSectionComponent";

export default {
  title: "coding/goals/GoalsSectionComponent",
  component: GoalsSectionComponent,
  argTypes: {},
} as Meta;

const Template: Story<GoalsSectionProps> = (args) => (
  <GoalsSectionComponent {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  header: {
    sectionName: "Current Goals",
    manageIcons: [
      <CheckCircleIcon
        className={"w-5 h-5 hover:text-bulbasaur-500 cursor-pointer"}
      />,
    ],
  },
  userGoals: [
    {
      goalName: "Learn React Fundamentals",
      createdAt: "2022-06-01",
      targetDate: "2022-06-14",
    },
    {
      goalName: "First 5 problems of LeetCode 75",
      createdAt: "2022-06-01",
      targetDate: "2022-06-07",
    },
    {
      goalName: "Lorem Ipsum Dolor Sit Amet",
      createdAt: "2022-06-07",
      targetDate: "2022-07-01",
    },
  ],
};
