import { ReactElement } from "react";
import { UserGoalsData } from "../../../graphql/fetchUserGoals";

export type GoalsSection = {
  header: GoalsSectionHeader;
  rows: UserGoalsData[];
};

export type GoalsSectionHeader = {
  sectionName: string;
  manageIcons: Array<ReactElement>;
};
