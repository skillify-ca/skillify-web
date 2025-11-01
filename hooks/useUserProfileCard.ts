import { useEffect, useState } from "react";
import { fetchUserProfileCard } from "../graphql/studentPortal/admin/fetchUserProfileCard";

export type FetchUserProfileCardResponse = {
  users: Array<Users>;
};

export type CodingBadge = {
  title: string;
  image: string;
};


export type Users = {
  id: string;
  name: string;
  link: string;
  created_at: string;
  current_badge: number;
  coding_badge: CodingBadge;
  user_coding_badges_aggregate: {
    aggregate: {
      count: number;
    };
  };
};

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

