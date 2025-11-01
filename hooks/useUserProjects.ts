import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export function useUserProjects(userId) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {    
    const fetchUserProjects = async () => {
      if (!userId) {
        setLoading(false);
        return;
      }
      try {
        
        const { data, error } = await supabase
          .from("user_projects")
          .select("*")
          .eq("userId", userId);

        if (error) {
          throw error;
        }
        setData(data);
      } catch (error: any) {
        setError(error);
      } finally {
        setError(false);
      }
    }

    fetchUserProjects();
  }, [userId]);

  return {
    data,
    loading, 
    error
  }
}
