import { Data } from "../../../graphql/coding/userBadges/fetchUserBadges";

export const transformUserBadgeData = (data: Data) => {
  const transformedOutput = data?.intro_course_unit.map((unit) => {
    return {
      unitTitle: unit.title,
      codingBadges: unit.coding_badges.map((badge) => {
        return {
          id: badge.id,
          title: badge.title,
          userCodingBadge: badge.user_coding_badges.map((b) => b),
          isAwarded: badge.user_coding_badges.length > 0,
        };
      }),
    };
  });
  return transformedOutput;
};
