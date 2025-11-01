import { supabase } from "../../../lib/supabase";

export async function fetchTotalUserBadgesCount() {
  const { count, error } = await supabase
    .from("coding_badges")
    .select("*", { count: "exact", head: true });

  if (error) {
    throw error;
  }

  return count || 0;
}

export type FetchTotalBadgesCountResponse = {
  coding_badges_aggregate: {
    aggregate: {
      count: number;
    };
  }
}
