import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export function useAccountability(userId) {
  const [accountabilityData, setAccountabilityData] = useState(null);
  const [accountabilityLoading, setAccountabilityLoading] = useState(true);
  const [accountabilityError, setAccountabilityError] = useState(null);

  useEffect(() => {
    const fetchAccountabilityTasks = async () => {
      if (!userId) {
        setAccountabilityLoading(false);
        return;
      }
      try {
        const { data, error } = await supabase
          .from("accountability")
          .select("*")
          .eq("user_id", userId);

        if (error) {
          throw error;
        }
        setAccountabilityData(data);
      } catch (error: any) {
        setAccountabilityError(error);
      } finally {
        setAccountabilityLoading(false);
      }
    };

    fetchAccountabilityTasks();
  }, [userId]);

  return {
    accountabilityData,
    accountabilityError, 
    accountabilityLoading
  }
}
