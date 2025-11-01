import { useEffect, useState } from "react";
import { UserCodingBadge } from "../../graphql/studentPortal/achievements/fetchUserBadges";
import { supabase } from "../../lib/supabase";

export function useUserCodingBadges(userId: string) {
  const [data, setData] = useState<UserCodingBadge[]>([]);
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
          .select(`
            created_at,
            coding_badges (
              id,
              title,
              description,
              image
            )
          `)
          .eq("userId", userId);

        if (error) {
          throw error;
        }

        // Transform Supabase response to match expected structure
        const transformedData: UserCodingBadge[] = (user_coding_badges || [])
          .map((item: any) => {
            const badge = Array.isArray(item.coding_badges)
              ? item.coding_badges[0]
              : item.coding_badges;

            if (!badge) return null;

            return {
              coding_badge: {
                id: badge.id,
                title: badge.title,
                description: badge.description,
                image: badge.image,
              },
              created_at: item.created_at,
            };
          })
          .filter((item): item is UserCodingBadge => item !== null);

        setData(transformedData);
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

