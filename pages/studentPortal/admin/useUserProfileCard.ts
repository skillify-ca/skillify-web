import { useEffect, useState } from "react";
import {
    fetchUserProfileCard,
    FetchUserProfileCardResponse,
} from "../../../graphql/studentPortal/admin/fetchUserProfileCard";

export function useUserProfileCard() {
  const [data, setData] = useState<FetchUserProfileCardResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersData = await fetchUserProfileCard();

        const transformedData: FetchUserProfileCardResponse = {
          users: usersData || [],
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

