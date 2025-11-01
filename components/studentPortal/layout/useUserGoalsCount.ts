import { useEffect, useState } from "react";
import { fetchUserGoalsCount } from "../../../graphql/studentPortal/goals/fetchUserGoalsCount";

export function useUserGoalsCount(userId: string | undefined, goalDateThreshold: string) {
  const [count, setCount] = useState<number>(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchCount = async () => {
      if (!userId) {
        setLoading(false);
        return;
      }
      try {
        const goalCount = await fetchUserGoalsCount(userId, goalDateThreshold);
        setCount(goalCount);
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCount();
  }, [userId, goalDateThreshold]);

  return {
    count,
    loading,
    error,
  };
}

