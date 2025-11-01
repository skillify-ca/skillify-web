import { useEffect, useState } from "react";
import { FetchAllJobs, fetchAllJobs } from "../graphql/studentPortal/jobs/fetchAllJobs";


export function useAllJobs() {
  const [data, setData] = useState<FetchAllJobs | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const jobsData = await fetchAllJobs();

        const transformedData: FetchAllJobs = {
          jobs: jobsData || [],
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

