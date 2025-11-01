import { supabase } from "../../../lib/supabase";

export async function fetchUserGoalsCount(
  userId: string,
  goalDateThreshold: string
) {
  // Convert MM/dd/yyyy to ISO string for Supabase
  // Parse the date and set to end of day to include the full day
  const [month, day, year] = goalDateThreshold.split("/");
  const thresholdDate = new Date(Date.UTC(
    parseInt(year),
    parseInt(month) - 1, // month is 0-indexed
    parseInt(day),
    23, 59, 59, 999
  )).toISOString();

  const { count, error } = await supabase
    .from("user_goals")
    .select("*", { count: "exact", head: true })
    .eq("userId", userId)
    .lte("targetDate", thresholdDate)
    .eq("isComplete", false)
    .or("isArchived.eq.false,isArchived.is.null");

  if (error) {
    throw error;
  }

  return count || 0;
}

export type FetchGoalCountResponse = {
  user_goals_aggregate: GoalAggregate;
};

export type GoalAggregate = {
  aggregate: GoalAggregateNested;
};

export type GoalAggregateNested = {
  count: number;
};


