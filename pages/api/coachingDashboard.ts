

  export function transformBadgesEarned(userList, aggregatedBadgeCount) {
    return userList.map((row) => {
      let badges_earned = 0;
      if (row.id in aggregatedBadgeCount) {
        badges_earned = aggregatedBadgeCount[row.id];
      }
      return {
        id: row.id,
        badges_earned,
        name: row.name,
        link: row.link,
        profile_image: row.profile_image,
        created_at: row.created_at,
        current_badge: row.current_badge,
        coding_badge: row.coding_badge,
      };
    });
  }