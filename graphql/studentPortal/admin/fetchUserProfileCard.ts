
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

export type CodingBadge = {
  title: string;
  image: string;
};

import { supabase } from "../../../lib/supabase";

export type FetchUserProfileCardResponse = {
  users: Array<Users>;
};

export async function fetchUserProfileCard() {
  // First fetch users with their current badge relationship
  const { data: users, error: usersError } = await supabase
    .from("users")
    .select(`
      id,
      name,
      link,
      profile_image,
      created_at,
      current_badge,
      coding_badges (
        title,
        image
      )
    `)
    .eq("enrolled", true)
    .order("id", { ascending: true });

  if (usersError) {
    throw usersError;
  }

  // Get badge counts for each user
  const userIds = (users || []).map((user: any) => user.id);
  
  if (userIds.length === 0) {
    return [];
  }

  const { data: badgeCounts, error: badgesError } = await supabase
    .from("user_coding_badges")
    .select("userId")
    .in("userId", userIds);

  if (badgesError) {
    throw badgesError;
  }

  // Count badges per user
  const badgeCountMap = (badgeCounts || []).reduce((acc: any, badge: any) => {
    acc[badge.userId] = (acc[badge.userId] || 0) + 1;
    return acc;
  }, {});

  // Transform and combine data
  const transformedUsers = (users || []).map((user: any) => {
    const coding_badge = Array.isArray(user.coding_badges)
      ? user.coding_badges[0]
      : user.coding_badges;

    return {
      id: user.id,
      name: user.name,
      link: user.link,
      profile_image: user.profile_image,
      created_at: user.created_at,
      current_badge: user.current_badge,
      coding_badge: coding_badge || null,
      user_coding_badges_aggregate: {
        aggregate: {
          count: badgeCountMap[user.id] || 0,
        },
      },
    };
  });

  return transformedUsers;
}
