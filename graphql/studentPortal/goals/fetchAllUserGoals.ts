import { supabase } from "../../../lib/supabase";

export async function fetchAllUserGoals() {
  const { data, error } = await supabase
    .from("user_goals")
    .select(`
      id,
      updatedAt,
      goalName,
      userId,
      users (
        name,
        profile_image,
        enrolled
      )
    `)
    .eq("isComplete", true)
    .order("updatedAt", { ascending: false });

  if (error) {
    throw error;
  }

  // Filter out any goals where user is not enrolled
  // Supabase doesn't support filtering on nested relationships directly
  const filteredData = (data || []).filter((goal: any) => {
    const user = Array.isArray(goal.users) ? goal.users[0] : goal.users;
    return user && user.enrolled === true;
  });

  return filteredData;
}

export type FetchAllUserGoalsDataResponse = {
  user_goals: Array<AllUserGoalsData>;
};

export type AllUserGoalsData = {
  id: string;
  goalName: string;
  userId: string;
  updatedAt: Date;
  usersTable: {
    name: string;
    profile_image: string;
  } | null;
};
