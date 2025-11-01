import { useEffect, useState } from "react";
import { Coach } from "../../../components/studentPortal/coaches/CoachCard";
import { supabase } from "../../../lib/supabase";


export function useCoaches() {
  const [coaches, setCoaches] = useState<Coach[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchCoaches = async () => {
      try {
        let { data, error } = await supabase
          .from("coaches")
          .select("*, user:user_id(*)");

        if (error) throw error;

        const coachesWithImages = await Promise.all(
          data.map(async (coach: any) => {
            return {
              ...coach,
              user: {
                ...coach.user,
              },
            };
          })
        );
        setCoaches(coachesWithImages.reverse());
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchCoaches();
  }, []);

  return {
    coaches,
    loading,
    error,
  };
}
