import { useEffect, useState } from "react";
import {
  fetchUserRole,
  UserData
} from "../../../graphql/studentPortal/users/fetchUserRole";

export function useUserRole(userId: string | undefined) {
  const [data, setData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!userId) {
        setLoading(false);
        return;
      }
      try {
        const userData = await fetchUserRole(userId);

        if (userData) {
          // Transform to match expected structure
          const transformedData: UserData = {
            created_at: userData.created_at,
            email: userData.email,
            userRole: userData.userRole,
          };

          setData(transformedData);
        }
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userId]);

  return {
    data,
    loading,
    error,
  };
}

