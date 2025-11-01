import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

export function useUserCodingBadges(userId: string) {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchUserCodingBadges = async () => {
      if (!userId) {
        setLoading(false);
        return;
      }
      try {
        const { data: user_coding_badges, error } = await supabase
          .from("user_coding_badges")
          .select("*")
          .eq("userId", userId);

        if (error) {
          throw error;
        }
        setData(user_coding_badges || []);
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserCodingBadges();
  }, [userId]);

  return {
    data,
    loading,
    error,
  };
}

