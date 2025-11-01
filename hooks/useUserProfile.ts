import { useEffect, useState } from "react";
import {
  fetchUserProfile,
  FetchUserProfileDataResponse,
} from "../graphql/studentPortal/profile/fetchUserProfile";

export function useUserProfile(userId: string) {
  const [data, setData] = useState<FetchUserProfileDataResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!userId) {
        setLoading(false);
        return;
      }
      try {
        const userData = await fetchUserProfile(userId);

        if (userData) {
          // Transform to match expected structure
          const transformedData: FetchUserProfileDataResponse = {
            users: [
              {
                __typename: "users",
                created_at: userData.created_at,
                email: userData.email,
                id: userData.id,
                last_seen: userData.last_seen,
                name: userData.name,
                profile_image: userData.profile_image,
                current_focus: userData.current_focus,
              },
            ],
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

