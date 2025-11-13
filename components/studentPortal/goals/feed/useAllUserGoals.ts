import { useEffect, useState } from "react";
import { supabase } from "../../../../lib/supabase";

export function useAllUserGoals() {
  const [data, setData] = useState<FetchAllUserGoalsDataResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const rawData = await fetchAllUserGoals();

        // Transform Supabase response to match expected structure
        const transformedData: FetchAllUserGoalsDataResponse = {
          user_goals: (rawData || []).map((item: any) => {
            const user = Array.isArray(item.users) ? item.users[0] : item.users;

            return {
              id: item.id,
              goalName: item.goalName,
              userId: item.userId,
              updatedAt: item.updatedAt,
              usersTable: user
                ? {
                    name: user.name,
                    profile_image: user.profile_image,
                  }
                : null,
            };
          }).filter((goal: any) => goal.usersTable !== null),
        };

        setData(transformedData);
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return {
    data,
    loading,
    error,
  };
}

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

export type UserGoalsData = {
  createdAt: Date;
  goalName: string;
  goalNotes?: string;
  id: string;
  updatedAt: Date;
  userId: string;
  isComplete: boolean;
  targetDate: Date;
  isArchived: boolean;
};
