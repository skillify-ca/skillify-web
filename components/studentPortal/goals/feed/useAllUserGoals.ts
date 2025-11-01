import { useEffect, useState } from "react";
import {
    fetchAllUserGoals,
    FetchAllUserGoalsDataResponse,
} from "../../../../graphql/studentPortal/goals/fetchAllUserGoals";

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

