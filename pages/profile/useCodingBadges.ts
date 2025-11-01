import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

export function useCodingBadges() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchCodingBadges = async () => {
      try {
        const { data: coding_badges, error } = await supabase
          .from("coding_badges")
          .select("*");

        if (error) {
          throw error;
        }
        setData(coding_badges || []);
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCodingBadges();
  }, []);

  return {
    data,
    loading,
    error,
  };
}

