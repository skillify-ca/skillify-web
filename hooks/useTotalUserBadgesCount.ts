import { useEffect, useState } from "react";
import {
  FetchTotalBadgesCountResponse,
  fetchTotalUserBadgesCount,
} from "../graphql/studentPortal/achievements/fetchTotalUserBadgesCount";

export function useTotalUserBadgesCount() {
  const [data, setData] = useState<FetchTotalBadgesCountResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const count = await fetchTotalUserBadgesCount();

        const transformedData: FetchTotalBadgesCountResponse = {
          coding_badges_aggregate: {
            aggregate: {
              count: count,
            },
          },
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

